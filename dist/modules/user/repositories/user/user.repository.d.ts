import { User } from '@prisma/client';
import { IUserRepository } from './user.repository.interface';
import { BaseRepository } from '../../../../common/core/repositories/base.repository';
import { PrismaService } from '../../../../database/core/prisma.service';
export declare class UserRepository extends BaseRepository<User> implements IUserRepository {
    constructor(prisma: PrismaService);
    createUserPositions(userId: string, positionIds: string[]): Promise<void>;
}
