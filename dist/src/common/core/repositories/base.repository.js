"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
class BaseRepository {
    constructor(prisma, model) {
        this.prisma = prisma;
        this.model = model;
    }
    getModel() {
        return this.prisma[this.model];
    }
    async findAll() {
        return this.getModel().findMany();
    }
    async findById(id) {
        return this.getModel().findUnique({
            where: { id },
        });
    }
    async create(data) {
        return this.getModel().create({ data });
    }
    async update(id, data) {
        return this.getModel().update({
            where: { id },
            data,
        });
    }
    async delete(id) {
        await this.getModel().delete({
            where: { id },
        });
    }
    async findOneBy(field, value) {
        return this.getModel().findFirst({
            where: { [field]: value },
        });
    }
    async findManyBy(field, value) {
        return this.getModel().findMany({
            where: { [field]: value },
        });
    }
    async findOneByAndIncludes(field, value, relations) {
        return this.getModel().findFirst({
            where: { [field]: value },
            include: relations,
        });
    }
    async findManyByAndIncludes(field, value, relations) {
        return this.getModel().findMany({
            where: { [field]: value },
            include: relations,
        });
    }
    async executeTransaction(operation) {
        return this.prisma.$transaction(operation);
    }
    async executeTransactionWithOptions(operation, options) {
        const { timeout = 5000, maxWait = 2000, isolationLevel } = options || {};
        return this.prisma.$transaction(operation, {
            timeout,
            maxWait,
            isolationLevel,
        });
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base.repository.js.map