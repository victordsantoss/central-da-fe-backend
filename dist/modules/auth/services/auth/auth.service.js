"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const client_1 = require("@prisma/client");
let AuthService = AuthService_1 = class AuthService {
    constructor(cacheManager, userRepository, sessionRepository, passwordService, roleRepository, jwtService) {
        this.cacheManager = cacheManager;
        this.userRepository = userRepository;
        this.sessionRepository = sessionRepository;
        this.passwordService = passwordService;
        this.roleRepository = roleRepository;
        this.jwtService = jwtService;
        this.logger = new common_1.Logger(AuthService_1.name);
    }
    async login(email, password) {
        const user = await this.validateUser(email);
        const isPasswordValid = await this.passwordService.validatePassword(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Email ou senha inválidos');
        }
        const existingSessions = await this.sessionRepository.findActiveSessionsByUserId(user.id);
        if (existingSessions.length > 0) {
            for (const session of existingSessions) {
                session.endDate = new Date();
                session.isActive = false;
                const payload = {
                    token: session.token,
                    endDate: new Date(),
                    isActive: false,
                };
                await this.sessionRepository.update(session.id, payload);
            }
        }
        const payload = { sub: user.id, email: user.email };
        const token = this.jwtService.sign(payload);
        await this.sessionRepository.create({
            userId: user.id,
            token: token,
            startDate: new Date(),
            endDate: null,
            isActive: true,
        });
        return token;
    }
    async validateUser(email) {
        this.logger.log(`Validando usuário por email: ${email}`);
        const user = await this.userRepository.findOneBy('email', email);
        if (!user) {
            throw new common_1.NotFoundException('Usuário não encontrado');
        }
        const role = await this.roleRepository.findById(user.roleId);
        if (role.name !== client_1.RoleTypes.ADMIN) {
            throw new common_1.NotFoundException('Usuário não tem permissão para acessar o sistema. Contate o administrador.');
        }
        return user;
    }
    async logout(authenticatedUserData) {
        const tokenExpiration = this.jwtService.decode(authenticatedUserData.token)['exp'];
        await this.cacheManager.set(`blacklist:${authenticatedUserData.token}`, true, tokenExpiration - Math.floor(Date.now() / 1000));
        const currSession = await this.sessionRepository.findOneBy('token', authenticatedUserData.token);
        currSession.endDate = new Date();
        currSession.isActive = false;
        await this.sessionRepository.update(currSession.id, currSession);
        return true;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('CACHE_MANAGER')),
    __param(1, (0, common_1.Inject)('IUserRepository')),
    __param(2, (0, common_1.Inject)('ISessionRepository')),
    __param(3, (0, common_1.Inject)('IPasswordService')),
    __param(4, (0, common_1.Inject)('IRoleRepository')),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map