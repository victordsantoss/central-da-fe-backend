"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.positionProviders = void 0;
const position_repository_1 = require("../repositories/position/position.repository");
const position_service_1 = require("../services/position/list/position.service");
exports.positionProviders = [
    {
        provide: 'IListPositionsService',
        useClass: position_service_1.PositionService,
    },
    {
        provide: 'IPositionRepository',
        useClass: position_repository_1.PositionRepository,
    },
];
//# sourceMappingURL=position.provider.js.map