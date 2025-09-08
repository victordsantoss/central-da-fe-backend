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
var RegisterEventService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterEventService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../../../database/core/prisma.service");
const event_enum_1 = require("../../../../../common/enums/event.enum");
const library_1 = require("@prisma/client/runtime/library");
let RegisterEventService = RegisterEventService_1 = class RegisterEventService {
    constructor(eventRepository, prisma) {
        this.eventRepository = eventRepository;
        this.prisma = prisma;
        this.logger = new common_1.Logger(RegisterEventService_1.name);
    }
    async perform(payload) {
        this.logger.log('Iniciando o processo de criação de evento');
        const { address, ...eventData } = payload;
        const addressData = {
            ...address,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        const { churchId, ...restEventData } = eventData;
        const formattedEventData = {
            ...restEventData,
            status: event_enum_1.EventStatus.ACTIVE,
            startDate: new Date(restEventData.startDate),
            endDate: new Date(restEventData.endDate),
            price: restEventData.price ? new library_1.Decimal(restEventData.price) : 0,
            church: {
                connect: {
                    id: churchId,
                },
            },
        };
        try {
            const createdEvent = await this.eventRepository.createWithAddress(formattedEventData, addressData);
            this.logger.log(`Evento ${createdEvent.id} criado com sucesso`);
            return createdEvent;
        }
        catch (error) {
            this.logger.error(`Erro ao criar evento: ${error}`);
            throw error;
        }
    }
};
exports.RegisterEventService = RegisterEventService;
exports.RegisterEventService = RegisterEventService = RegisterEventService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('IEventRepository')),
    __metadata("design:paramtypes", [Object, prisma_service_1.PrismaService])
], RegisterEventService);
//# sourceMappingURL=register.service.js.map