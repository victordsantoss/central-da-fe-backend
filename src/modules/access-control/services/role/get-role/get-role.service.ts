import { Inject, Injectable } from '@nestjs/common';
import { IGetRoleService } from './get-role.service.interface';
import { RoleTypes, Role } from '@prisma/client';
import { IRoleRepository } from '../../../repositories/role/role.repository.interface';

@Injectable()
export class GetRoleService implements IGetRoleService {
  constructor(
    @Inject('IRoleRepository')
    private readonly roleRepository: IRoleRepository,
  ) {}

  perform(name: RoleTypes): Promise<Role> {
    return this.roleRepository.findRoleByName(name);
  }
}
