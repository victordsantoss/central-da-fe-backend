import {
  BadRequestException,
  Inject,
  Injectable,
  Logger,
} from '@nestjs/common';
import { IRegisterUserRequestDto } from '../../../dtos/user/register.request.dto';
import { IUserRepository } from '../../../repositories/user/user.repository.interface';
import { IUserResponseDto } from '../../../dtos/user/user.response.dto';
import { User, RoleTypes } from '@prisma/client';
import { IRegisterUserService } from './register.interface';
import { IPasswordService } from '../../../../auth/services/password/password.interface';
import { IGetRoleService } from '../../../../access-control/services/role/get-role/get-role.service.interface';
import { IChurchRepository } from '../../../../church/repositories/church/church.repository.interface';
import { IPositionRepository } from '../../../../church/repositories/position/position.repository.interface';

type CreateUserPayload = {
  name: string;
  email: string;
  cpf: string;
  password: string;
  roleId: string;
};

@Injectable()
export class RegisterUserService implements IRegisterUserService {
  private readonly logger = new Logger(RegisterUserService.name);
  private readonly _emailField: keyof User = 'email';
  private readonly _cpfField: keyof User = 'cpf';

  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
    @Inject('IPasswordService')
    private readonly passwordService: IPasswordService,
    @Inject('IGetRoleService')
    private readonly getRoleService: IGetRoleService,
    @Inject('IChurchRepository')
    private readonly churchRepository: IChurchRepository,
    @Inject('IPositionRepository')
    private readonly positionRepository: IPositionRepository,
  ) { }

  async perform(userData: IRegisterUserRequestDto): Promise<IUserResponseDto> {
    await this.findUserByEmail(userData.email);
    await this.findUserByCpf(userData.cpf);

    await this.validateChurchExists(userData.churchId);

    await this.validatePositionsExist(userData.positionIds);

    const hashedPassword = await this.passwordService.createHash(
      userData.password,
    );

    const role = await this.getRoleService.perform(RoleTypes.USER);

    const userPayload: CreateUserPayload = {
      name: userData.name,
      email: userData.email,
      cpf: userData.cpf,
      password: hashedPassword,
      roleId: role.id,
    };

    const createdUser = await this.userRepository.create(userPayload as any);

    await this.userRepository.createUserPositions(
      createdUser.id,
      userData.positionIds,
    );

    return this.normalizeResponse(createdUser);
  }

  private async findUserByEmail(email: string) {
    this.logger.log(`Buscando usuário por email: ${email}`);
    const existingUserByEmail = await this.userRepository.findOneBy(
      this.emailField,
      email,
    );
    if (existingUserByEmail) {
      throw new BadRequestException('Usuário com este Email já existe');
    }
  }

  private async findUserByCpf(cpf: string) {
    this.logger.log(`Buscando usuário por CPF: ${cpf}`);
    const existingUserByCpf = await this.userRepository.findOneBy(
      this._cpfField,
      cpf,
    );
    if (existingUserByCpf) {
      throw new BadRequestException('Usuário com este CPF já existe');
    }
  }

  private normalizeResponse(user: User): IUserResponseDto {
    this.logger.log(`Normalizando resposta do usuário: ${user.name}`);
    return {
      isActive: user.isActive,
      name: user.name,
      email: user.email,
      cpf: user.cpf,
      roleId: user.roleId,
      provider: user.provider,
      birthDate: user.birthDate,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  get emailField(): keyof User {
    return this._emailField;
  }

  private async validateChurchExists(churchId: string): Promise<void> {
    this.logger.log(`Validando se a igreja existe: ${churchId}`);
    const church = await this.churchRepository.findOneBy('id', churchId);

    if (!church) {
      throw new BadRequestException('Igreja não encontrada');
    }
  }

  private async validatePositionsExist(positionIds: string[]): Promise<void> {
    this.logger.log(
      `Validando se as posições existem: ${positionIds.join(', ')}`,
    );

    for (const positionId of positionIds) {
      const position = await this.positionRepository.findOneBy(
        'id',
        positionId,
      );

      if (!position) {
        throw new BadRequestException(`Posição não encontrada: ${positionId}`);
      }
    }
  }
}
