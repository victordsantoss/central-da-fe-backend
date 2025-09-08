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
exports.BasePaginationResponseDto = exports.PaginationMeta = exports.BasePaginationRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class BasePaginationRequestDto {
}
exports.BasePaginationRequestDto = BasePaginationRequestDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Número da página para paginação',
        example: 1,
        default: 1,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], BasePaginationRequestDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Limite de registros por página',
        example: 10,
        default: 10,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], BasePaginationRequestDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Parâmetro de Ordenação',
        example: 'name',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BasePaginationRequestDto.prototype, "orderBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Parâmetro que define a direção da ordenação',
        example: 'ASC',
        enum: ['ASC', 'DESC'],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['ASC', 'DESC'], {
        message: 'A direção da ordenação deve ser ASC ou DESC',
    }),
    __metadata("design:type", String)
], BasePaginationRequestDto.prototype, "sortBy", void 0);
class PaginationMeta {
}
exports.PaginationMeta = PaginationMeta;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Limite de registros por página',
        example: 100,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PaginationMeta.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Número da página atual',
        example: 10,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PaginationMeta.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Número total de registros',
        example: 1,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PaginationMeta.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Número total de páginas',
        example: 10,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PaginationMeta.prototype, "totalPages", void 0);
class BasePaginationResponseDto {
}
exports.BasePaginationResponseDto = BasePaginationResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lista de itens da página atual',
        isArray: true,
        type: 'array',
        items: {
            type: 'object',
            additionalProperties: true,
        },
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Object),
    __metadata("design:type", Array)
], BasePaginationResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Metadados da paginação',
        type: PaginationMeta,
    }),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PaginationMeta),
    __metadata("design:type", PaginationMeta)
], BasePaginationResponseDto.prototype, "meta", void 0);
//# sourceMappingURL=base-pagination.dto.js.map