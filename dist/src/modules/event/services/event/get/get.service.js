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
var GetEventService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEventService = void 0;
const common_1 = require("@nestjs/common");
let GetEventService = GetEventService_1 = class GetEventService {
    constructor(eventRepository) {
        this.eventRepository = eventRepository;
        this.logger = new common_1.Logger(GetEventService_1.name);
    }
    async perform(id) {
        this.logger.log(`Buscando evento por ID: ${id}`);
        const event = await this.eventRepository.findByIdWithIncludes(id);
        if (!event) {
            this.logger.warn(`Evento não encontrado com ID: ${id}`);
            throw new common_1.NotFoundException('Evento não encontrado');
        }
        return this.mapEventToResponse(event);
    }
    mapEventToResponse(event) {
        this.logger.log(`Mapeando resposta do evento: ${event.name}`);
        const address = `${event.address.street}, ${event.address.number} - ${event.address.neighborhood}, ${event.address.city}`;
        return {
            id: event.id,
            name: event.name,
            description: event.description,
            content: event.content,
            status: event.status,
            category: event.category,
            price: event.price?.toNumber() || 0,
            startDate: event.startDate,
            customLink: event.customLink,
            instagramLink: event.instagramLink,
            facebookLink: event.facebookLink,
            youtubeLink: event.youtubeLink,
            endDate: event.endDate,
            createdAt: event.createdAt,
            updatedAt: event.updatedAt,
            churchName: event.church.name,
            addressName: address,
        };
    }
};
exports.GetEventService = GetEventService;
exports.GetEventService = GetEventService = GetEventService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('IEventRepository')),
    __metadata("design:paramtypes", [Object])
], GetEventService);
//# sourceMappingURL=get.service.js.map