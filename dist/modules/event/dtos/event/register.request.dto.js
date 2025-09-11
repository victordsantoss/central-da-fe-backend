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
exports.IRegisterEventRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class AddressDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Rua do endereço',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AddressDto.prototype, "street", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Número do endereço',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AddressDto.prototype, "number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Complemento do endereço',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddressDto.prototype, "complement", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Bairro',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AddressDto.prototype, "neighborhood", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Cidade',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AddressDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Estado (UF)',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 2),
    __metadata("design:type", String)
], AddressDto.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'CEP',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(8, 9),
    __metadata("design:type", String)
], AddressDto.prototype, "zipCode", void 0);
class IRegisterEventRequestDto {
}
exports.IRegisterEventRequestDto = IRegisterEventRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nome do evento',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(3, 255),
    __metadata("design:type", String)
], IRegisterEventRequestDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Descrição do evento',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IRegisterEventRequestDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Categoria do evento',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IRegisterEventRequestDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Se o evento é pago',
    }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], IRegisterEventRequestDto.prototype, "isPaid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tipo de evento',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IRegisterEventRequestDto.prototype, "mode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Quantidade de tickets disponíveis',
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], IRegisterEventRequestDto.prototype, "availableTickets", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Preço do evento',
        required: false,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], IRegisterEventRequestDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Data de início do evento',
    }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], IRegisterEventRequestDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Data de término do evento',
    }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], IRegisterEventRequestDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID da igreja',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], IRegisterEventRequestDto.prototype, "churchId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Endereço do evento',
        type: AddressDto,
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => AddressDto),
    __metadata("design:type", AddressDto)
], IRegisterEventRequestDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Link personalizado do evento',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], IRegisterEventRequestDto.prototype, "customLink", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Link do Instagram do evento',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], IRegisterEventRequestDto.prototype, "instagramLink", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Link do Facebook do evento',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], IRegisterEventRequestDto.prototype, "facebookLink", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Link do YouTube do evento',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], IRegisterEventRequestDto.prototype, "youtubeLink", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Conteúdo do evento',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], IRegisterEventRequestDto.prototype, "content", void 0);
//# sourceMappingURL=register.request.dto.js.map