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
exports.PositionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const list_request_dto_1 = require("../dtos/position/list.request.dto");
const list_response_dto_1 = require("../dtos/position/list.response.dto");
let PositionController = class PositionController {
    constructor(listPositionsService) {
        this.listPositionsService = listPositionsService;
    }
    async findAll(query) {
        return this.listPositionsService.perform(query);
    }
};
exports.PositionController = PositionController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Listar cargos com paginação',
        description: 'Retorna uma lista paginada de cargos com filtro opcional por nome',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de cargos retornada com sucesso',
        type: list_response_dto_1.IListPositionsResponseDto,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_request_dto_1.IListPositionsRequestDto]),
    __metadata("design:returntype", Promise)
], PositionController.prototype, "findAll", null);
exports.PositionController = PositionController = __decorate([
    (0, swagger_1.ApiTags)('Position'),
    (0, common_1.Controller)('position'),
    __param(0, (0, common_1.Inject)('IListPositionsService')),
    __metadata("design:paramtypes", [Object])
], PositionController);
//# sourceMappingURL=position.controller.js.map