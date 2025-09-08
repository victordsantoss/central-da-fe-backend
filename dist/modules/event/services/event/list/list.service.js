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
var EventService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventService = void 0;
const common_1 = require("@nestjs/common");
let EventService = EventService_1 = class EventService {
    constructor(eventRepository) {
        this.eventRepository = eventRepository;
        this.logger = new common_1.Logger(EventService_1.name);
    }
    async perform(query) {
        const { page, limit, search } = query;
        this.logger.log(`Listando eventos com paginação: ${page} e ${limit}`);
        const [events, total] = await this.eventRepository.findByFilters({
            page,
            limit,
            search,
        });
        return {
            data: events.map((event) => this.mapEventToResponse(event)),
            meta: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    mapEventToResponse(event) {
        this.logger.log(`Mapeando resposta do evento: ${event.name}`);
        const address = `${event.address.street}, ${event.address.number} - ${event.address.neighborhood}, ${event.address.city}`;
        return {
            id: event.id,
            name: event.name,
            description: event.description,
            content: event.content,
            customLink: event.customLink,
            instagramLink: event.instagramLink,
            facebookLink: event.facebookLink,
            youtubeLink: event.youtubeLink,
            status: event.status,
            category: event.category,
            price: event.price?.toNumber() || 0,
            startDate: event.startDate,
            endDate: event.endDate,
            createdAt: event.createdAt,
            updatedAt: event.updatedAt,
            churchName: event.church.name,
            addressName: address,
        };
    }
};
exports.EventService = EventService;
exports.EventService = EventService = EventService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('IEventRepository')),
    __metadata("design:paramtypes", [Object])
], EventService);
//# sourceMappingURL=list.service.js.map