import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../../../common/core/repositories/base.repository';
import { Role, RoleTypes } from '@prisma/client';
import { PrismaService } from '../../../../database/core/prisma.service';
import { IRoleRepository } from './role.repository.interface';

@Injectable()
export class RoleRepository
  extends BaseRepository<Role>
  implements IRoleRepository
{
  constructor(prisma: PrismaService) {
    super(prisma, 'role');
  }

  public async findRoleByName(name: RoleTypes): Promise<Role> {
    return this.prisma.role.findFirst({
      where: {
        name: name,
        isActive: true,
      },
    });
  }
}
