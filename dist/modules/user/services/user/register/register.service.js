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
var RegisterUserService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUserService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let RegisterUserService = RegisterUserService_1 = class RegisterUserService {
    constructor(userRepository, passwordService, getRoleService, churchRepository, positionRepository) {
        this.userRepository = userRepository;
        this.passwordService = passwordService;
        this.getRoleService = getRoleService;
        this.churchRepository = churchRepository;
        this.positionRepository = positionRepository;
        this.logger = new common_1.Logger(RegisterUserService_1.name);
        this._emailField = 'email';
        this._cpfField = 'cpf';
    }
    async perform(userData) {
        await this.findUserByEmail(userData.email);
        await this.findUserByCpf(userData.cpf);
        await this.validateChurchExists(userData.churchId);
        await this.validatePositionsExist(userData.positionIds);
        const hashedPassword = await this.passwordService.createHash(userData.password);
        const role = await this.getRoleService.perform(client_1.RoleTypes.USER);
        const userPayload = {
            name: userData.name,
            email: userData.email,
            cpf: userData.cpf,
            password: hashedPassword,
            roleId: role.id,
        };
        const createdUser = await this.userRepository.create(userPayload);
        await this.userRepository.createUserPositions(createdUser.id, userData.positionIds);
        return this.normalizeResponse(createdUser);
    }
    async performWithRandomPassword(userData) {
        const password = userData.cpf;
        return this.perform({ ...userData, password });
    }
    async findUserByEmail(email) {
        this.logger.log(`Buscando usuário por email: ${email}`);
        const existingUserByEmail = await this.userRepository.findOneBy(this.emailField, email);
        if (existingUserByEmail) {
            throw new common_1.BadRequestException('Usuário com este Email já existe');
        }
    }
    async findUserByCpf(cpf) {
        this.logger.log(`Buscando usuário por CPF: ${cpf}`);
        const existingUserByCpf = await this.userRepository.findOneBy(this._cpfField, cpf);
        if (existingUserByCpf) {
            throw new common_1.BadRequestException('Usuário com este CPF já existe');
        }
    }
    normalizeResponse(user) {
        this.logger.log(`Normalizando resposta do usuário: ${user.name}`);
        return {
            isActive: user.isActive,
            name: user.name,
            email: user.email,
            cpf: user.cpf,
            roleId: user.roleId,
            provider: user.provider,
            birthDate: user.birthDate,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        };
    }
    get emailField() {
        return this._emailField;
    }
    async validateChurchExists(churchId) {
        this.logger.log(`Validando se a igreja existe: ${churchId}`);
        const church = await this.churchRepository.findOneBy('id', churchId);
        if (!church) {
            throw new common_1.BadRequestException('Igreja não encontrada');
        }
    }
    async validatePositionsExist(positionIds) {
        this.logger.log(`Validando se as posições existem: ${positionIds.join(', ')}`);
        for (const positionId of positionIds) {
            const position = await this.positionRepository.findOneBy('id', positionId);
            if (!position) {
                throw new common_1.BadRequestException(`Posição não encontrada: ${positionId}`);
            }
        }
    }
};
exports.RegisterUserService = RegisterUserService;
exports.RegisterUserService = RegisterUserService = RegisterUserService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('IUserRepository')),
    __param(1, (0, common_1.Inject)('IPasswordService')),
    __param(2, (0, common_1.Inject)('IGetRoleService')),
    __param(3, (0, common_1.Inject)('IChurchRepository')),
    __param(4, (0, common_1.Inject)('IPositionRepository')),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object])
], RegisterUserService);
//# sourceMappingURL=register.service.js.map