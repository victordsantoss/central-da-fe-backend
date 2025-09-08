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
exports.EventController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const list_request_dto_1 = require("../dtos/event/list.request.dto");
const list_response_dto_1 = require("../dtos/event/list.response.dto");
const event_response_dto_1 = require("../dtos/event/event.response.dto");
const register_request_dto_1 = require("../dtos/event/register.request.dto");
let EventController = class EventController {
    constructor(listEventsService, getEventService, registerEventService) {
        this.listEventsService = listEventsService;
        this.getEventService = getEventService;
        this.registerEventService = registerEventService;
    }
    async findAll(query) {
        return this.listEventsService.perform(query);
    }
    async findOne(id) {
        return this.getEventService.perform(id);
    }
    async create(event) {
        return this.registerEventService.perform(event);
    }
};
exports.EventController = EventController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Listar eventos com paginação',
        description: 'Retorna uma lista paginada de eventos com filtro opcional por nome',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de eventos retornada com sucesso',
        type: list_response_dto_1.IListEventsResponseDto,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_request_dto_1.IListEventsRequestDto]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Buscar evento por ID',
        description: 'Retorna um evento específico pelo seu ID',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Evento encontrado com sucesso',
        type: event_response_dto_1.IEventResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Evento não encontrado',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Criar evento',
        description: 'Cria um novo evento',
    }),
    (0, swagger_1.ApiBody)({
        type: register_request_dto_1.IRegisterEventRequestDto,
        description: 'Dados do evento',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Evento criado com sucesso',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Evento criado com sucesso',
        type: Event,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_request_dto_1.IRegisterEventRequestDto]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "create", null);
exports.EventController = EventController = __decorate([
    (0, swagger_1.ApiTags)('Event'),
    (0, common_1.Controller)('event'),
    __param(0, (0, common_1.Inject)('IListEventsService')),
    __param(1, (0, common_1.Inject)('IGetEventService')),
    __param(2, (0, common_1.Inject)('IRegisterEventService')),
    __metadata("design:paramtypes", [Object, Object, Object])
], EventController);
//# sourceMappingURL=event.controller.js.map