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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_strategy_1 = require("passport-strategy");
const prisma_service_1 = require("../../database/core/prisma.service");
let JwtAuthStrategy = class JwtAuthStrategy extends (0, passport_1.PassportStrategy)(passport_strategy_1.Strategy, 'jwt-auth') {
    constructor(prisma) {
        super();
        this.prisma = prisma;
    }
    authenticate(req) {
        const authHeader = req.headers.authorization || req.headers.cookie;
        if (!authHeader) {
            return this.error(new common_1.UnauthorizedException('Token não fornecido'));
        }
        const token = authHeader.split(' ')[1];
        if (!token) {
            return this.error(new common_1.UnauthorizedException('Token inválido'));
        }
        this.prisma.session
            .findFirst({
            where: {
                token,
                isActive: true,
            },
            include: {
                user: true,
            },
        })
            .then((session) => {
            if (!session) {
                return this.error(new common_1.UnauthorizedException('Sessão expirada. Autentique-se novamente'));
            }
            return this.success({ id: session.user.id, token });
        })
            .catch(() => {
            return this.error(new common_1.NotFoundException('Usuário não encontrado'));
        });
    }
};
exports.JwtAuthStrategy = JwtAuthStrategy;
exports.JwtAuthStrategy = JwtAuthStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], JwtAuthStrategy);
//# sourceMappingURL=jwt-auth.strategy.js.map