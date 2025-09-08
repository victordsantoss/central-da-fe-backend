import { IGetRoleService } from './get-role.service.interface';
import { RoleTypes, Role } from '@prisma/client';
import { IRoleRepository } from '../../../repositories/role/role.repository.interface';
export declare class GetRoleService implements IGetRoleService {
    private readonly roleRepository;
    constructor(roleRepository: IRoleRepository);
    perform(name: RoleTypes): Promise<Role>;
}
