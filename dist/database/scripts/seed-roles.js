"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const prisma = new client_1.PrismaClient();
async function seedRoles() {
    console.log('🔧 Configurações do banco:');
    console.log(`DATABASE_URL: ${process.env.DATABASE_URL}`);
    const rolesToCreate = [
        { name: client_1.RoleTypes.SADMIN, isActive: true },
        { name: client_1.RoleTypes.ADMIN, isActive: true },
        { name: client_1.RoleTypes.MANAGER, isActive: true },
        { name: client_1.RoleTypes.USER, isActive: true },
        { name: client_1.RoleTypes.GUEST, isActive: true },
    ];
    console.log('🚀 Iniciando seed das roles...');
    try {
        for (const roleData of rolesToCreate) {
            const existingRole = await prisma.role.findFirst({
                where: { name: roleData.name },
            });
            if (!existingRole) {
                await prisma.role.create({
                    data: roleData,
                });
                console.log(`✅ Role '${roleData.name}' criada com sucesso`);
            }
            else {
                console.log(`⚠️  Role '${roleData.name}' já existe no banco de dados`);
            }
        }
        console.log('🎉 Seed das roles concluído com sucesso!');
    }
    catch (error) {
        console.error('❌ Erro ao executar seed das roles:', error);
        process.exit(1);
    }
    finally {
        await prisma.$disconnect();
    }
}
seedRoles().catch((error) => {
    console.error('❌ Erro fatal ao executar seed:', error);
    process.exit(1);
});
//# sourceMappingURL=seed-roles.js.map