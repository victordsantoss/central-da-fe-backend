import { IRegisterUserRequestDto } from '../../../dtos/user/register.request.dto';
import { IUserRepository } from '../../../repositories/user/user.repository.interface';
import { IUserResponseDto } from '../../../dtos/user/user.response.dto';
import { User } from '@prisma/client';
import { IRegisterUserService } from './register.interface';
import { IPasswordService } from '../../../../auth/services/password/password.interface';
import { IGetRoleService } from '../../../../access-control/services/role/get-role/get-role.service.interface';
import { IChurchRepository } from '../../../../church/repositories/church/church.repository.interface';
import { IPositionRepository } from '../../../../church/repositories/position/position.repository.interface';
export declare class RegisterUserService implements IRegisterUserService {
    private readonly userRepository;
    private readonly passwordService;
    private readonly getRoleService;
    private readonly churchRepository;
    private readonly positionRepository;
    private readonly logger;
    private readonly _emailField;
    private readonly _cpfField;
    constructor(userRepository: IUserRepository, passwordService: IPasswordService, getRoleService: IGetRoleService, churchRepository: IChurchRepository, positionRepository: IPositionRepository);
    perform(userData: IRegisterUserRequestDto): Promise<IUserResponseDto>;
    private findUserByEmail;
    private findUserByCpf;
    private normalizeResponse;
    get emailField(): keyof User;
    private validateChurchExists;
    private validatePositionsExist;
}
