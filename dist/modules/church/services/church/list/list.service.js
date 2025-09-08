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
var ChurchService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChurchService = void 0;
const common_1 = require("@nestjs/common");
let ChurchService = ChurchService_1 = class ChurchService {
    constructor(churchRepository) {
        this.churchRepository = churchRepository;
        this.logger = new common_1.Logger(ChurchService_1.name);
    }
    async perform(query) {
        const { page, limit, search } = query;
        this.logger.log(`Listando igrejas com paginação: ${page} e ${limit}`);
        const [churches, total] = await this.churchRepository.findByFilters({
            page,
            limit,
            search,
        });
        return {
            data: churches.map(this.mapChurchToResponse),
            meta: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    mapChurchToResponse(church) {
        return {
            id: church.id,
            name: church.name,
        };
    }
};
exports.ChurchService = ChurchService;
exports.ChurchService = ChurchService = ChurchService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('IChurchRepository')),
    __metadata("design:paramtypes", [Object])
], ChurchService);
//# sourceMappingURL=list.service.js.map