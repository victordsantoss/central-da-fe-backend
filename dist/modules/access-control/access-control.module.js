"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessControlModule = void 0;
const common_1 = require("@nestjs/common");
const get_role_service_1 = require("./services/role/get-role/get-role.service");
const role_repository_1 = require("./repositories/role/role.repository");
let AccessControlModule = class AccessControlModule {
};
exports.AccessControlModule = AccessControlModule;
exports.AccessControlModule = AccessControlModule = __decorate([
    (0, common_1.Module)({
        providers: [
            {
                provide: 'IGetRoleService',
                useClass: get_role_service_1.GetRoleService,
            },
            {
                provide: 'IRoleRepository',
                useClass: role_repository_1.RoleRepository,
            },
        ],
        exports: ['IGetRoleService', 'IRoleRepository'],
    })
], AccessControlModule);
//# sourceMappingURL=access-control.module.js.map