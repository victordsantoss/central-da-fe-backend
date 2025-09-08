"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_controller_1 = require("./controllers/auth.controller");
const user_module_1 = require("../user/user.module");
const jwt_1 = require("@nestjs/jwt");
const cache_manager_1 = require("@nestjs/cache-manager");
const session_repository_1 = require("./repositories/session.repository");
const auth_service_1 = require("./services/auth/auth.service");
const password_service_1 = require("./services/password/password.service");
const access_control_module_1 = require("../access-control/access-control.module");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cache_manager_1.CacheModule.register({
                isGlobal: true,
            }),
            jwt_1.JwtModule.register({
                secret: (() => {
                    const secret = process.env.JWT_SECRET || 'centraldafe';
                    return secret;
                })(),
                signOptions: { expiresIn: '1h' },
            }),
            (0, common_1.forwardRef)(() => user_module_1.UserModule),
            (0, common_1.forwardRef)(() => access_control_module_1.AccessControlModule),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [
            {
                provide: 'IAuthService',
                useClass: auth_service_1.AuthService,
            },
            {
                provide: 'ISessionRepository',
                useClass: session_repository_1.SessionRepository,
            },
            {
                provide: 'IPasswordService',
                useClass: password_service_1.PasswordService,
            },
        ],
        exports: ['ISessionRepository', 'IPasswordService'],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map