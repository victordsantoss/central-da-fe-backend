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
var SubscriptionService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionService = void 0;
const common_1 = require("@nestjs/common");
const code_utils_1 = require("../../../../../common/core/utils/code.utils");
let SubscriptionService = SubscriptionService_1 = class SubscriptionService {
    constructor(eventRepository, codeGenerator) {
        this.eventRepository = eventRepository;
        this.codeGenerator = codeGenerator;
        this.logger = new common_1.Logger(SubscriptionService_1.name);
        this.CODE_LENGTH = 10;
    }
    async perform(payload) {
        this.logger.log(`Iniciando processo de inscrição no evento: ${payload.eventId} para usuário: ${payload.userId}`);
        await this.validateSubscription(payload.userId, payload.eventId);
        const event = await this.validateEvent(payload.eventId);
        this.validateAvailableTickets(event);
        if (event.isPaid) {
            throw new common_1.BadRequestException('Este serviço só processa eventos gratuitos no momento');
        }
        const ticketCode = this.codeGenerator.generateRandomCode(this.CODE_LENGTH);
        const order = await this.eventRepository.createOrder(payload.userId, payload.eventId);
        const ticket = await this.eventRepository.createTicket(order.id, ticketCode);
        this.logger.log(`Inscrição realizada com sucesso. Order ID: ${order.id}, Ticket: ${ticket.code}`);
        return {
            orderId: order.id,
            ticketCode: ticket.code,
            eventName: event.name,
            message: 'Inscrição realizada com sucesso!',
        };
    }
    async validateEvent(eventId) {
        const event = await this.eventRepository.findById(eventId);
        if (!event) {
            throw new common_1.BadRequestException('Evento não encontrado');
        }
        return event;
    }
    async validateSubscription(userId, eventId) {
        const isAlreadySubscribed = await this.eventRepository.checkUserSubscription(userId, eventId);
        if (isAlreadySubscribed) {
            throw new common_1.BadRequestException('Usuário já está inscrito neste evento');
        }
    }
    validateAvailableTickets(event) {
        if (event.availableTickets <= 0) {
            throw new common_1.BadRequestException('Evento atingiu a lotação máxima');
        }
    }
};
exports.SubscriptionService = SubscriptionService;
exports.SubscriptionService = SubscriptionService = SubscriptionService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('IEventRepository')),
    __metadata("design:paramtypes", [Object, code_utils_1.CodeGenerator])
], SubscriptionService);
//# sourceMappingURL=subscription.service.js.map