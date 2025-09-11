import { IBaseRepository } from '../../../../common/core/repositories/base.repository.interface';
import { User } from '@prisma/client';
import { IRegisterUserRequestDto } from '../../dtos/user/register.request.dto';
import { UserWithUserPositions } from '../../types/user.types';
export interface IUserRepository extends IBaseRepository<User, IRegisterUserRequestDto> {
    createUserPositions(userId: string, positionIds: string[]): Promise<void>;
    findOneBy(field: keyof User, value: User[keyof User]): Promise<UserWithUserPositions | null>;
}
