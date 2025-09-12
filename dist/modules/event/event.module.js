"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../../database/database.module");
const event_controller_1 = require("./controllers/event.controller");
const event_provider_1 = require("./providers/event.provider");
const common_module_1 = require("../../common/common.module");
const code_utils_1 = require("../../common/core/utils/code.utils");
let EventModule = class EventModule {
};
exports.EventModule = EventModule;
exports.EventModule = EventModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.PrismaModule, common_module_1.CommonModule],
        controllers: [event_controller_1.EventController],
        providers: [...event_provider_1.eventProviders, code_utils_1.CodeGenerator],
        exports: [...event_provider_1.eventProviders],
    })
], EventModule);
//# sourceMappingURL=event.module.js.map