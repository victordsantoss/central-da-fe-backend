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
exports.CpfValidator = void 0;
const common_1 = require("@nestjs/common");
let CpfValidator = class CpfValidator {
    constructor() { }
    validateCpf(cpf) {
        cpf = cpf.replace(/\D/g, '');
        if (cpf.length !== 11) {
            return false;
        }
        if (/^(\d)\1+$/.test(cpf)) {
            return false;
        }
        for (let i = 9; i < 11; i++) {
            let sum = 0;
            for (let j = 0; j < i; j++) {
                sum += parseInt(cpf[j]) * (i + 1 - j);
            }
            const digit = ((sum * 10) % 11) % 10;
            if (digit !== parseInt(cpf[i])) {
                return false;
            }
        }
        return true;
    }
};
exports.CpfValidator = CpfValidator;
exports.CpfValidator = CpfValidator = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], CpfValidator);
//# sourceMappingURL=cpf.utils.js.map