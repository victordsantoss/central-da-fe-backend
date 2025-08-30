import {
  Inject,
  Injectable,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { IAuthService } from './auth.interface';
import { IUserRepository } from '../../../user/repositories/user/user.repository.interface';
import { IPasswordService } from '../password/password.interface';
import { JwtService } from '@nestjs/jwt';
import { Cache } from 'cache-manager';
import { ISessionRepository } from '../../repositories/session.repository.interface';
import { IAuthenticatedUserRequestDto } from '../../../../common/core/dtos/auth.request.dto';
import { RoleTypes, User } from '@prisma/client';
import { IRoleRepository } from '../../../access-control/repositories/role/role.repository.interface';

@Injectable()
export class AuthService implements IAuthService {
  private readonly logger = new Logger(AuthService.name);
  constructor(
    @Inject('CACHE_MANAGER') private readonly cacheManager: Cache,
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
    @Inject('ISessionRepository')
    private readonly sessionRepository: ISessionRepository,
    @Inject('IPasswordService')
    private readonly passwordService: IPasswordService,
    @Inject('IRoleRepository')
    private readonly roleRepository: IRoleRepository,
    private readonly jwtService: JwtService,
  ) {}

  public async login(email: string, password: string): Promise<string> {
    const user = await this.validateUser(email);

    const isPasswordValid = await this.passwordService.validatePassword(
      password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Email ou senha inválidos');
    }

    const existingSessions =
      await this.sessionRepository.findActiveSessionsByUserId(user.id);

    if (existingSessions.length > 0) {
      for (const session of existingSessions) {
        session.endDate = new Date();
        session.isActive = false;
        const payload = {
          token: session.token,
          endDate: new Date(),
          isActive: false,
        };
        await this.sessionRepository.update(session.id, payload);
      }
    }
    const payload = { sub: user.id, email: user.email };
    const token = this.jwtService.sign(payload);

    await this.sessionRepository.create({
      userId: user.id,
      token: token,
      startDate: new Date(),
      endDate: null,
      isActive: true,
    });
    return token;
  }

  private async validateUser(email: string): Promise<User> {
    this.logger.log(`Validando usuário por email: ${email}`);
    const user = await this.userRepository.findOneBy('email', email);
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    // TODO: Remover após criação de área logada para outros tipos de usuários
    const role = await this.roleRepository.findById(user.roleId);
    if (role.name !== RoleTypes.ADMIN) {
      throw new NotFoundException(
        'Usuário não tem permissão para acessar o sistema. Contate o administrador.',
      );
    }

    return user;
  }

  public async logout(
    authenticatedUserData: IAuthenticatedUserRequestDto,
  ): Promise<boolean> {
    const tokenExpiration = this.jwtService.decode(authenticatedUserData.token)[
      'exp'
    ];
    await this.cacheManager.set(
      `blacklist:${authenticatedUserData.token}`,
      true,
      tokenExpiration - Math.floor(Date.now() / 1000),
    );

    const currSession = await this.sessionRepository.findOneBy(
      'token',
      authenticatedUserData.token,
    );

    currSession.endDate = new Date();
    currSession.isActive = false;

    await this.sessionRepository.update(currSession.id, currSession);
    return true;
  }
}
