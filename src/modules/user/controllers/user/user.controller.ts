import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { CpfGuard } from '../../../../common/guards/cpf.guard';
import { IRegisterUserRequestDto } from '../../dtos/user/register.request.dto';
import { IUserResponseDto } from '../../dtos/user/user.response.dto';
import { IGetUserByCpfRequestDto } from '../../dtos/user/get-by-cpf.request.dto';
import { IRegisterUserService } from '../../services/user/register/register.interface';
import { JwtAuthGuard } from '../../../../common/guards/auth.guard';
import { IAuthenticatedUserRequestDto } from '../../../../common/core/dtos/auth.request.dto';
import { IGetAuthenticatedUserService } from '../../services/user/get-authenticated-user/get-authenticated-user.interface';
import { IGetUserByCpfService } from '../../services/user/get-by-cpf/get-by-cpf.interface';

@Controller('user')
export class UserController {
  constructor(
    @Inject('IRegisterUserService')
    private readonly registerUserService: IRegisterUserService,
    @Inject('IGetAuthenticatedUserService')
    private readonly getAuthenticatedUserService: IGetAuthenticatedUserService,
    @Inject('IGetUserByCpfService')
    private readonly getUserByCpfService: IGetUserByCpfService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Registrar um novo usuário' })
  @ApiResponse({ status: 201, description: 'Usuário registrado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Erro de validação.' })
  @ApiBody({
    type: IRegisterUserRequestDto,
    description: 'Dados de registro do usuário',
  })
  @UseGuards(CpfGuard)
  async create(
    @Body() userData: IRegisterUserRequestDto,
  ): Promise<IUserResponseDto> {
    return await this.registerUserService.perform(userData);
  }

  @Get('')
  @ApiOperation({ summary: 'Obter dados do usuário autenticado' })
  @ApiResponse({
    status: 201,
    description: 'Dados do usuário autenticado retornados com sucesso.',
  })
  @ApiResponse({ status: 400, description: 'Erro de busca.' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  async getAuthenticatedUser(
    @Request() req: { user: IAuthenticatedUserRequestDto },
  ): Promise<IUserResponseDto> {
    return this.getAuthenticatedUserService.perform(req.user.token);
  }

  @Get('cpf/:cpf')
  @ApiOperation({ summary: 'Buscar usuário por CPF' })
  @ApiResponse({
    status: 200,
    description: 'Usuário encontrado com sucesso',
    type: IUserResponseDto,
  })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
  async getByCpf(
    @Param() params: IGetUserByCpfRequestDto,
  ): Promise<IUserResponseDto> {
    return this.getUserByCpfService.perform(params.cpf);
  }
}
