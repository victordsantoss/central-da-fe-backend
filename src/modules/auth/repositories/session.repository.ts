import { Injectable, Logger } from '@nestjs/common';
import { BaseRepository } from '../../../common/core/repositories/base.repository';
import { ISessionRepository } from './session.repository.interface';
import { Session } from '@prisma/client';
import { IGetAuthenticatedUserResponseDto } from '../../user/dtos/user/get-authenticated-user.response.dto';
import { PrismaService } from '../../../database/core/prisma.service';

@Injectable()
export class SessionRepository
  extends BaseRepository<Session>
  implements ISessionRepository {
  private readonly logger = new Logger(SessionRepository.name);
  constructor(prisma: PrismaService) {
    super(prisma, 'session');
  }

  async findActiveSessionsByUserId(userId: string): Promise<Session[]> {
    this.logger.log(`Buscando sessões ativas do usuário: ${userId}`);
    return this.prisma.session.findMany({
      where: {
        user: { id: userId },
        endDate: null,
        isActive: true,
      },
      include: {
        user: true,
      },
    });
  }

  async findActiveUserByToken(
    token: string,
  ): Promise<IGetAuthenticatedUserResponseDto> {
    this.logger.log(`Buscando usuário ativo por token: ${token}`);
    return this.prisma.session.findFirst({
      where: {
        token: token,
        endDate: null,
        isActive: true,
      },
      select: {
        id: true,
        token: true,
        isActive: true,
        startDate: true,
        endDate: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            cpf: true,
            provider: true,
            birthDate: true,
            createdAt: true,
            updatedAt: true,
            roleId: true,
            isActive: true,
          },
        },
      },
    });
  }
}
