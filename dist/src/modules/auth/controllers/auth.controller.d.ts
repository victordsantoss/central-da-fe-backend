import { LoginRequestDto } from '../dtos/auth/login.request.dto';
import { IAuthService } from '../services/auth/auth.interface';
import { IAuthenticatedUserRequestDto } from '../../../common/core/dtos/auth.request.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: IAuthService);
    login(loginData: LoginRequestDto): Promise<string>;
    logout(req: {
        user: IAuthenticatedUserRequestDto;
    }): Promise<boolean>;
}
