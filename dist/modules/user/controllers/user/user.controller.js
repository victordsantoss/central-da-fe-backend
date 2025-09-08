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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cpf_guard_1 = require("../../../../common/guards/cpf.guard");
const register_request_dto_1 = require("../../dtos/user/register.request.dto");
const user_response_dto_1 = require("../../dtos/user/user.response.dto");
const get_by_cpf_request_dto_1 = require("../../dtos/user/get-by-cpf.request.dto");
const auth_guard_1 = require("../../../../common/guards/auth.guard");
let UserController = class UserController {
    constructor(registerUserService, getAuthenticatedUserService, getUserByCpfService) {
        this.registerUserService = registerUserService;
        this.getAuthenticatedUserService = getAuthenticatedUserService;
        this.getUserByCpfService = getUserByCpfService;
    }
    async create(userData) {
        return await this.registerUserService.perform(userData);
    }
    async getAuthenticatedUser(req) {
        return this.getAuthenticatedUserService.perform(req.user.token);
    }
    async getByCpf(params) {
        return this.getUserByCpfService.perform(params.cpf);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Registrar um novo usuário' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Usuário registrado com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Erro de validação.' }),
    (0, swagger_1.ApiBody)({
        type: register_request_dto_1.IRegisterUserRequestDto,
        description: 'Dados de registro do usuário',
    }),
    (0, common_1.UseGuards)(cpf_guard_1.CpfGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_request_dto_1.IRegisterUserRequestDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(''),
    (0, swagger_1.ApiOperation)({ summary: 'Obter dados do usuário autenticado' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Dados do usuário autenticado retornados com sucesso.',
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Erro de busca.' }),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAuthenticatedUser", null);
__decorate([
    (0, common_1.Get)('cpf/:cpf'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar usuário por CPF' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Usuário encontrado com sucesso',
        type: user_response_dto_1.IUserResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Usuário não encontrado' }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_by_cpf_request_dto_1.IGetUserByCpfRequestDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getByCpf", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __param(0, (0, common_1.Inject)('IRegisterUserService')),
    __param(1, (0, common_1.Inject)('IGetAuthenticatedUserService')),
    __param(2, (0, common_1.Inject)('IGetUserByCpfService')),
    __metadata("design:paramtypes", [Object, Object, Object])
], UserController);
//# sourceMappingURL=user.controller.js.map