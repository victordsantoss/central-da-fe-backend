import { IUserResponseDto } from '../../../dtos/user/user.response.dto';
export interface IGetUserByCpfService {
    perform(cpf: string): Promise<IUserResponseDto>;
}
