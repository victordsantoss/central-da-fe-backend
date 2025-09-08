import { Role, RoleTypes } from '@prisma/client';
export interface IGetRoleService {
    perform(name: RoleTypes): Promise<Role>;
}
