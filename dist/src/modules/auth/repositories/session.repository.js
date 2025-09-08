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
var SessionRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionRepository = void 0;
const common_1 = require("@nestjs/common");
const base_repository_1 = require("../../../common/core/repositories/base.repository");
const prisma_service_1 = require("../../../database/core/prisma.service");
let SessionRepository = SessionRepository_1 = class SessionRepository extends base_repository_1.BaseRepository {
    constructor(prisma) {
        super(prisma, 'session');
        this.logger = new common_1.Logger(SessionRepository_1.name);
    }
    async findActiveSessionsByUserId(userId) {
        this.logger.log(`Buscando sessões ativas do usuário: ${userId}`);
        return this.prisma.session.findMany({
            where: {
                user: { id: userId },
                endDate: null,
                isActive: true,
            },
            include: {
                user: true,
            },
        });
    }
    async findActiveUserByToken(token) {
        this.logger.log(`Buscando usuário ativo por token: ${token}`);
        return this.prisma.session.findFirst({
            where: {
                token: token,
                endDate: null,
                isActive: true,
            },
            select: {
                id: true,
                token: true,
                isActive: true,
                startDate: true,
                endDate: true,
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        cpf: true,
                        provider: true,
                        birthDate: true,
                        createdAt: true,
                        updatedAt: true,
                        roleId: true,
                        isActive: true,
                    },
                },
            },
        });
    }
};
exports.SessionRepository = SessionRepository;
exports.SessionRepository = SessionRepository = SessionRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SessionRepository);
//# sourceMappingURL=session.repository.js.map