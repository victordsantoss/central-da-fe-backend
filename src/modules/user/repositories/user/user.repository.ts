import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { IUserRepository } from './user.repository.interface';
import { BaseRepository } from '../../../../common/core/repositories/base.repository';
import { PrismaService } from '../../../../database/core/prisma.service';

@Injectable()
export class UserRepository
  extends BaseRepository<User>
  implements IUserRepository
{
  constructor(prisma: PrismaService) {
    super(prisma, 'user');
  }

  async createUserPositions(
    userId: string,
    positionIds: string[],
  ): Promise<void> {
    const userPositions = positionIds.map((positionId) => ({
      userId,
      positionId,
    }));

    await this.prisma.userPosition.createMany({
      data: userPositions,
    });
  }
}
