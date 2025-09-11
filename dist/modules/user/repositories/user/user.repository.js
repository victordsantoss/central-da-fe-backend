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
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const base_repository_1 = require("../../../../common/core/repositories/base.repository");
const prisma_service_1 = require("../../../../database/core/prisma.service");
let UserRepository = class UserRepository extends base_repository_1.BaseRepository {
    constructor(prisma) {
        super(prisma, 'user');
    }
    async findOneBy(field, value) {
        return await this.prisma.user.findFirst({
            where: { [field]: value },
            include: { userPositions: true },
        });
    }
    async createUserPositions(userId, positionIds) {
        const userPositions = positionIds.map((positionId) => ({
            userId,
            positionId,
        }));
        await this.prisma.userPosition.createMany({
            data: userPositions,
        });
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserRepository);
//# sourceMappingURL=user.repository.js.map