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
exports.IUserResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class IUserResponseDto {
}
exports.IUserResponseDto = IUserResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID do usuário',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], IUserResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nome do usuário',
    }),
    __metadata("design:type", String)
], IUserResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Email do usuário',
    }),
    __metadata("design:type", String)
], IUserResponseDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'CPF do usuário',
        example: '123.456.789-00',
    }),
    __metadata("design:type", String)
], IUserResponseDto.prototype, "cpf", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Se o usuário está ativo',
    }),
    __metadata("design:type", Boolean)
], IUserResponseDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Provedor de autenticação',
    }),
    __metadata("design:type", String)
], IUserResponseDto.prototype, "provider", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Data de nascimento',
        required: false,
    }),
    __metadata("design:type", Date)
], IUserResponseDto.prototype, "birthDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Data de criação',
    }),
    __metadata("design:type", Date)
], IUserResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Data de atualização',
    }),
    __metadata("design:type", Date)
], IUserResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID do perfil do usuário',
        required: false,
    }),
    __metadata("design:type", String)
], IUserResponseDto.prototype, "roleId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'IDs das posições do usuário',
        required: false,
    }),
    __metadata("design:type", Array)
], IUserResponseDto.prototype, "positionIds", void 0);
//# sourceMappingURL=user.response.dto.js.map