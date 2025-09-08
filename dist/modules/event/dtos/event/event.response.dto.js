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
exports.IEventResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const event_enum_1 = require("../../../../common/enums/event.enum");
class IEventResponseDto {
}
exports.IEventResponseDto = IEventResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID único do evento',
        example: '123e4567-e89b-12d3-a456-426614174000',
    }),
    __metadata("design:type", String)
], IEventResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nome do evento',
        example: 'Evento de teste',
    }),
    __metadata("design:type", String)
], IEventResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Descrição do evento',
        example: 'Descrição do evento de teste',
    }),
    __metadata("design:type", String)
], IEventResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Categoria do evento',
        example: event_enum_1.EventCategory.EVENT,
    }),
    __metadata("design:type", String)
], IEventResponseDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Status do evento',
        example: event_enum_1.EventStatus.ACTIVE,
    }),
    __metadata("design:type", String)
], IEventResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Preço do evento',
        example: 100,
    }),
    __metadata("design:type", Number)
], IEventResponseDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Link personalizado do evento',
        example: 'https://www.example.com',
    }),
    __metadata("design:type", String)
], IEventResponseDto.prototype, "customLink", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Link do Instagram do evento',
        example: 'https://www.instagram.com',
    }),
    __metadata("design:type", String)
], IEventResponseDto.prototype, "instagramLink", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Link do Facebook do evento',
        example: 'https://www.facebook.com',
    }),
    __metadata("design:type", String)
], IEventResponseDto.prototype, "facebookLink", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Link do YouTube do evento',
        example: 'https://www.youtube.com',
    }),
    __metadata("design:type", String)
], IEventResponseDto.prototype, "youtubeLink", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Conteúdo do evento',
        example: 'Conteúdo do evento de teste',
    }),
    __metadata("design:type", String)
], IEventResponseDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Data de início do evento',
        example: '2021-01-01',
    }),
    __metadata("design:type", Date)
], IEventResponseDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Data de fim do evento',
        example: '2021-01-01',
    }),
    __metadata("design:type", Date)
], IEventResponseDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Data de criação do evento',
    }),
    __metadata("design:type", Date)
], IEventResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Data de atualização do evento',
    }),
    __metadata("design:type", Date)
], IEventResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID da igreja',
        example: '123e4567-e89b-12d3-a456-426614174000',
    }),
    __metadata("design:type", String)
], IEventResponseDto.prototype, "churchName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID do endereço',
        example: '123e4567-e89b-12d3-a456-426614174000',
    }),
    __metadata("design:type", String)
], IEventResponseDto.prototype, "addressName", void 0);
//# sourceMappingURL=event.response.dto.js.map