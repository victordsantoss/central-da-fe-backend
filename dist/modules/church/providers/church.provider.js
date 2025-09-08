"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.churchProviders = void 0;
const church_repository_1 = require("../repositories/church/church.repository");
const list_service_1 = require("../services/church/list/list.service");
exports.churchProviders = [
    {
        provide: 'IListChurchesService',
        useClass: list_service_1.ChurchService,
    },
    {
        provide: 'IChurchRepository',
        useClass: church_repository_1.ChurchRepository,
    },
];
//# sourceMappingURL=church.provider.js.map