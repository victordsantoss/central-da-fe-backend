import { User } from '@prisma/client';
import { IUserRepository } from './user.repository.interface';
import { BaseRepository } from '../../../../common/core/repositories/base.repository';
import { PrismaService } from '../../../../database/core/prisma.service';
import { UserWithUserPositions } from '../../types/user.types';
export declare class UserRepository extends BaseRepository<User> implements IUserRepository {
    constructor(prisma: PrismaService);
    findOneBy(field: keyof User, value: User[keyof User]): Promise<UserWithUserPositions | null>;
    createUserPositions(userId: string, positionIds: string[]): Promise<void>;
}
