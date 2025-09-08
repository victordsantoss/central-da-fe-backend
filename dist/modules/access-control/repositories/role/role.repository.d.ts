import { BaseRepository } from '../../../../common/core/repositories/base.repository';
import { Role, RoleTypes } from '@prisma/client';
import { PrismaService } from '../../../../database/core/prisma.service';
import { IRoleRepository } from './role.repository.interface';
export declare class RoleRepository extends BaseRepository<Role> implements IRoleRepository {
    constructor(prisma: PrismaService);
    findRoleByName(name: RoleTypes): Promise<Role>;
}
