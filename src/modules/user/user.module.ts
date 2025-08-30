import { Module } from '@nestjs/common';
import { UserController } from './controllers/user/user.controller';
import { RegisterUserService } from './services/user/register/register.service';
import { UserRepository } from './repositories/user/user.repository';
import { CommonModule } from '../../common/common.module';
import { AuthModule } from '../auth/auth.module';
import { GetAuthenticatedUserService } from './services/user/get-authenticated-user/get-authenticated-user.service';
import { GetUserByCpfService } from './services/user/get-by-cpf/get-by-cpf.service';
import { AccessControlModule } from '../access-control/access-control.module';
import { PrismaModule } from '../../database/database.module';
import { ChurchModule } from '../church/church.module';
@Module({
  imports: [
    PrismaModule,
    CommonModule,
    AuthModule,
    AccessControlModule,
    ChurchModule,
  ],
  controllers: [UserController],
  providers: [
    {
      provide: 'IRegisterUserService',
      useClass: RegisterUserService,
    },
    {
      provide: 'IUserRepository',
      useClass: UserRepository,
    },
    {
      provide: 'IGetAuthenticatedUserService',
      useClass: GetAuthenticatedUserService,
    },
    {
      provide: 'IGetUserByCpfService',
      useClass: GetUserByCpfService,
    },
  ],
  exports: [
    'IRegisterUserService',
    'IUserRepository',
    'IGetAuthenticatedUserService',
    'IGetUserByCpfService',
  ],
})
export class UserModule { }
