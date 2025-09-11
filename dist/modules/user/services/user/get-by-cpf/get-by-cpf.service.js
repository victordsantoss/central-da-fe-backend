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
var GetUserByCpfService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserByCpfService = void 0;
const common_1 = require("@nestjs/common");
let GetUserByCpfService = GetUserByCpfService_1 = class GetUserByCpfService {
    constructor(userRepository) {
        this.userRepository = userRepository;
        this.logger = new common_1.Logger(GetUserByCpfService_1.name);
    }
    async perform(cpf) {
        this.logger.log(`Buscando usuário por CPF: ${cpf}`);
        const user = await this.userRepository.findOneBy('cpf', cpf);
        if (!user) {
            throw new common_1.NotFoundException('Usuário não encontrado');
        }
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            cpf: user.cpf,
            isActive: user.isActive,
            provider: user.provider,
            birthDate: user.birthDate,
            positionIds: user.userPositions.map((position) => position.positionId),
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
            roleId: user.roleId,
        };
    }
};
exports.GetUserByCpfService = GetUserByCpfService;
exports.GetUserByCpfService = GetUserByCpfService = GetUserByCpfService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('IUserRepository')),
    __metadata("design:paramtypes", [Object])
], GetUserByCpfService);
//# sourceMappingURL=get-by-cpf.service.js.map