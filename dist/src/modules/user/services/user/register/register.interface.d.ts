import { User } from '@prisma/client';
import { IUserResponseDto } from '../../../dtos/user/user.response.dto';
export interface IRegisterUserService {
    perform(user: Partial<User>): Promise<IUserResponseDto>;
}
