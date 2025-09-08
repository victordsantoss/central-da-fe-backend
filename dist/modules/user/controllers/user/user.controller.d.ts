import { IRegisterUserRequestDto } from '../../dtos/user/register.request.dto';
import { IUserResponseDto } from '../../dtos/user/user.response.dto';
import { IGetUserByCpfRequestDto } from '../../dtos/user/get-by-cpf.request.dto';
import { IRegisterUserService } from '../../services/user/register/register.interface';
import { IAuthenticatedUserRequestDto } from '../../../../common/core/dtos/auth.request.dto';
import { IGetAuthenticatedUserService } from '../../services/user/get-authenticated-user/get-authenticated-user.interface';
import { IGetUserByCpfService } from '../../services/user/get-by-cpf/get-by-cpf.interface';
export declare class UserController {
    private readonly registerUserService;
    private readonly getAuthenticatedUserService;
    private readonly getUserByCpfService;
    constructor(registerUserService: IRegisterUserService, getAuthenticatedUserService: IGetAuthenticatedUserService, getUserByCpfService: IGetUserByCpfService);
    create(userData: IRegisterUserRequestDto): Promise<IUserResponseDto>;
    getAuthenticatedUser(req: {
        user: IAuthenticatedUserRequestDto;
    }): Promise<IUserResponseDto>;
    getByCpf(params: IGetUserByCpfRequestDto): Promise<IUserResponseDto>;
}
