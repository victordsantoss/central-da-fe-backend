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
exports.EventRepository = void 0;
const common_1 = require("@nestjs/common");
const base_repository_1 = require("../../../common/core/repositories/base.repository");
const prisma_service_1 = require("../../../database/core/prisma.service");
let EventRepository = class EventRepository extends base_repository_1.BaseRepository {
    constructor(prisma) {
        super(prisma, 'event');
    }
    async createWithAddress(eventData, addressData) {
        return this.executeTransactionWithOptions(async (tx) => {
            const createdAddress = await tx.address.create({
                data: addressData,
            });
            const createdEvent = await tx.event.create({
                data: {
                    ...eventData,
                    address: {
                        connect: {
                            id: createdAddress.id,
                        },
                    },
                },
            });
            return createdEvent;
        });
    }
    async findByFilters(filters) {
        const { page = 1, limit = 10, orderBy = 'createdAt', sortBy = 'desc', search, } = filters;
        const where = search
            ? {
                OR: [
                    {
                        name: {
                            contains: search,
                            mode: 'insensitive',
                        },
                    },
                ],
            }
            : {};
        const orderByClause = {
            [orderBy]: sortBy.toLowerCase() === 'asc' ? 'asc' : 'desc',
        };
        const [events, total] = await this.prisma.$transaction([
            this.prisma.event.findMany({
                where,
                orderBy: orderByClause,
                skip: (page - 1) * limit,
                take: limit,
                include: {
                    church: true,
                    address: true,
                },
            }),
            this.prisma.event.count({ where }),
        ]);
        return [events, total];
    }
    async findByIdWithIncludes(id) {
        return this.prisma.event.findUnique({
            where: { id },
            include: {
                church: true,
                address: true,
            },
        });
    }
};
exports.EventRepository = EventRepository;
exports.EventRepository = EventRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EventRepository);
//# sourceMappingURL=event.repository.js.map