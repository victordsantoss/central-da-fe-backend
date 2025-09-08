import { BaseRepository } from '../../../common/core/repositories/base.repository';
import { ISessionRepository } from './session.repository.interface';
import { Session } from '@prisma/client';
import { IGetAuthenticatedUserResponseDto } from '../../user/dtos/user/get-authenticated-user.response.dto';
import { PrismaService } from '../../../database/core/prisma.service';
export declare class SessionRepository extends BaseRepository<Session> implements ISessionRepository {
    private readonly logger;
    constructor(prisma: PrismaService);
    findActiveSessionsByUserId(userId: string): Promise<Session[]>;
    findActiveUserByToken(token: string): Promise<IGetAuthenticatedUserResponseDto>;
}
