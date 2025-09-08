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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAuthenticatedUserService = void 0;
const common_1 = require("@nestjs/common");
let GetAuthenticatedUserService = class GetAuthenticatedUserService {
    constructor(sessionRepository) {
        this.sessionRepository = sessionRepository;
    }
    async perform(token) {
        return this.findActiveUserByToken(token);
    }
    async findActiveUserByToken(token) {
        const user = await this.sessionRepository.findActiveUserByToken(token);
        if (!user) {
            throw new common_1.UnauthorizedException(`Token inválido ou sessão inativa. Verifique se o token fornecido é válido e tente novamente.`);
        }
        return user;
    }
};
exports.GetAuthenticatedUserService = GetAuthenticatedUserService;
exports.GetAuthenticatedUserService = GetAuthenticatedUserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ISessionRepository')),
    __metadata("design:paramtypes", [Object])
], GetAuthenticatedUserService);
//# sourceMappingURL=get-authenticated-user.service.js.map