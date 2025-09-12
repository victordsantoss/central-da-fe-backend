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
exports.ISubscriptionResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class ISubscriptionResponseDto {
}
exports.ISubscriptionResponseDto = ISubscriptionResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID do pedido criado',
        example: 'clxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
    }),
    __metadata("design:type", String)
], ISubscriptionResponseDto.prototype, "orderId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Código do ingresso gerado',
        example: 'ABC123XYZ0',
    }),
    __metadata("design:type", String)
], ISubscriptionResponseDto.prototype, "ticketCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nome do evento',
        example: 'Conferência de Jovens 2025',
    }),
    __metadata("design:type", String)
], ISubscriptionResponseDto.prototype, "eventName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Mensagem de confirmação',
        example: 'Inscrição realizada com sucesso!',
    }),
    __metadata("design:type", String)
], ISubscriptionResponseDto.prototype, "message", void 0);
//# sourceMappingURL=subscription.response.dto.js.map