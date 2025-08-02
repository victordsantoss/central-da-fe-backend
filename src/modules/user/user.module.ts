import { forwardRef, Module } from '@nestjs/common';
import { UserController } from './controllers/user/user.controller';
import { RegisterUserService } from './services/user/register/register.service';
import { UserRepository } from './repositories/user/user.repository';
import { CommonModule } from '../../common/common.module';
import { AuthModule } from '../auth/auth.module';
import { GetAuthenticatedUserService } from './services/user/get-authenticated-user/get-authenticated-user.service';
import { AccessControlModule } from '../access-control/access-control.module';
import { PrismaModule } from '../../database/database.module';

@Module({
  imports: [
    PrismaModule,
    CommonModule,
    AuthModule,
    AccessControlModule,
    forwardRef(() => AuthModule),
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
  ],
  exports: [
    'IRegisterUserService',
    'IUserRepository',
    'IGetAuthenticatedUserService',
  ],
})
export class UserModule {}
