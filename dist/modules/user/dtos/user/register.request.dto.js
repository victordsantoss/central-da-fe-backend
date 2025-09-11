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
exports.IRegisterUserRequestDtoWithRandomPassword = exports.IRegisterUserRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class IRegisterUserRequestDto {
}
exports.IRegisterUserRequestDto = IRegisterUserRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nome do usuário',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(3, 255),
    __metadata("design:type", String)
], IRegisterUserRequestDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Email do usuário',
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], IRegisterUserRequestDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID do perfil do usuário',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], IRegisterUserRequestDto.prototype, "roleId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'CPF do usuário',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IRegisterUserRequestDto.prototype, "cpf", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Senha do usuário',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(8, 255),
    __metadata("design:type", String)
], IRegisterUserRequestDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID da igreja do usuário',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IRegisterUserRequestDto.prototype, "churchId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'IDs das posições do usuário',
        type: [String],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], IRegisterUserRequestDto.prototype, "positionIds", void 0);
class IRegisterUserRequestDtoWithRandomPassword {
}
exports.IRegisterUserRequestDtoWithRandomPassword = IRegisterUserRequestDtoWithRandomPassword;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nome do usuário',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(3, 255),
    __metadata("design:type", String)
], IRegisterUserRequestDtoWithRandomPassword.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Email do usuário',
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], IRegisterUserRequestDtoWithRandomPassword.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID do perfil do usuário',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], IRegisterUserRequestDtoWithRandomPassword.prototype, "roleId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'CPF do usuário',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IRegisterUserRequestDtoWithRandomPassword.prototype, "cpf", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'IDs das posições do usuário',
        type: [String],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], IRegisterUserRequestDtoWithRandomPassword.prototype, "positionIds", void 0);
//# sourceMappingURL=register.request.dto.js.map