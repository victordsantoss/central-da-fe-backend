import { IAuthService } from './auth.interface';
import { IUserRepository } from '../../../user/repositories/user/user.repository.interface';
import { IPasswordService } from '../password/password.interface';
import { JwtService } from '@nestjs/jwt';
import { Cache } from 'cache-manager';
import { ISessionRepository } from '../../repositories/session.repository.interface';
import { IAuthenticatedUserRequestDto } from '../../../../common/core/dtos/auth.request.dto';
import { IRoleRepository } from '../../../access-control/repositories/role/role.repository.interface';
export declare class AuthService implements IAuthService {
    private readonly cacheManager;
    private readonly userRepository;
    private readonly sessionRepository;
    private readonly passwordService;
    private readonly roleRepository;
    private readonly jwtService;
    private readonly logger;
    constructor(cacheManager: Cache, userRepository: IUserRepository, sessionRepository: ISessionRepository, passwordService: IPasswordService, roleRepository: IRoleRepository, jwtService: JwtService);
    login(email: string, password: string): Promise<string>;
    private validateUser;
    logout(authenticatedUserData: IAuthenticatedUserRequestDto): Promise<boolean>;
}
