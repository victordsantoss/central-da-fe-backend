"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_controller_1 = require("./controllers/user/user.controller");
const register_service_1 = require("./services/user/register/register.service");
const user_repository_1 = require("./repositories/user/user.repository");
const common_module_1 = require("../../common/common.module");
const auth_module_1 = require("../auth/auth.module");
const get_authenticated_user_service_1 = require("./services/user/get-authenticated-user/get-authenticated-user.service");
const get_by_cpf_service_1 = require("./services/user/get-by-cpf/get-by-cpf.service");
const access_control_module_1 = require("../access-control/access-control.module");
const database_module_1 = require("../../database/database.module");
const church_module_1 = require("../church/church.module");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.PrismaModule,
            common_module_1.CommonModule,
            auth_module_1.AuthModule,
            access_control_module_1.AccessControlModule,
            church_module_1.ChurchModule,
        ],
        controllers: [user_controller_1.UserController],
        providers: [
            {
                provide: 'IRegisterUserService',
                useClass: register_service_1.RegisterUserService,
            },
            {
                provide: 'IUserRepository',
                useClass: user_repository_1.UserRepository,
            },
            {
                provide: 'IGetAuthenticatedUserService',
                useClass: get_authenticated_user_service_1.GetAuthenticatedUserService,
            },
            {
                provide: 'IGetUserByCpfService',
                useClass: get_by_cpf_service_1.GetUserByCpfService,
            },
        ],
        exports: [
            'IRegisterUserService',
            'IUserRepository',
            'IGetAuthenticatedUserService',
            'IGetUserByCpfService',
        ],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map