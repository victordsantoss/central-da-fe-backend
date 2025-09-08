import { Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { IGetUserByCpfService } from './get-by-cpf.interface';
import { IUserRepository } from '../../../repositories/user/user.repository.interface';
import { IUserResponseDto } from '../../../dtos/user/user.response.dto';

@Injectable()
export class GetUserByCpfService implements IGetUserByCpfService {
  private readonly logger = new Logger(GetUserByCpfService.name);

  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  async perform(cpf: string): Promise<IUserResponseDto> {
    this.logger.log(`Buscando usuário por CPF: ${cpf}`);

    const user = await this.userRepository.findOneBy('cpf', cpf);

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      cpf: user.cpf,
      isActive: user.isActive,
      provider: user.provider,
      birthDate: user.birthDate,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      roleId: user.roleId,
    };
  }
}
