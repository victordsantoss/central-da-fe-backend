import { IGetUserByCpfService } from './get-by-cpf.interface';
import { IUserRepository } from '../../../repositories/user/user.repository.interface';
import { IUserResponseDto } from '../../../dtos/user/user.response.dto';
export declare class GetUserByCpfService implements IGetUserByCpfService {
    private readonly userRepository;
    private readonly logger;
    constructor(userRepository: IUserRepository);
    perform(cpf: string): Promise<IUserResponseDto>;
}
