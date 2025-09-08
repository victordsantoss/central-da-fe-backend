import { IGetAuthenticatedUserService } from './get-authenticated-user.interface';
import { ISessionRepository } from '../../../../auth/repositories/session.repository.interface';
export declare class GetAuthenticatedUserService implements IGetAuthenticatedUserService {
    private readonly sessionRepository;
    constructor(sessionRepository: ISessionRepository);
    perform(token: string): Promise<any>;
    private findActiveUserByToken;
}
