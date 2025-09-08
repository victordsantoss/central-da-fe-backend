"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const prisma = new client_1.PrismaClient();
async function seedPositions() {
    console.log('🔧 Configurações do banco:');
    console.log(`DATABASE_URL: ${process.env.DATABASE_URL}`);
    const positionsToCreate = [
        { name: 'Pastor(a)' },
        { name: 'Presbítero(a)' },
        { name: 'Evangelista' },
        { name: 'Missionário(a)' },
        { name: 'Diácono(a)' },
        { name: 'Apóstolo(a)' },
        { name: 'Ministro(a) de Louvor' },
        { name: 'Membro da Igreja' },
        { name: 'Secretário(a)' },
        { name: 'Tesoureiro(a)' },
        { name: 'Administrador(a)' },
        { name: 'Coordenador(a) de Ministérios' },
        { name: 'Dirigente de Congregação' },
        { name: 'Líder de Célula / Pequenos Grupos' },
        { name: 'Líder de Ministério Infantil' },
        { name: 'Líder de Ministério de Jovens' },
        { name: 'Líder de Ministério de Mulheres' },
        { name: 'Líder de Ministério de Homens' },
        { name: 'Líder de Intercessão' },
        { name: 'Líder de Ação Social' },
        { name: 'Líder de Discipulado' },
        { name: 'Líder de Ensino / Escola Bíblica' },
        { name: 'Líder de Casais / Família' },
        { name: 'Líder de Comunicação / Mídia' },
        { name: 'Músico / Instrumentista' },
        { name: 'Cantor(a) / Back Vocal' },
        { name: 'Recepcionista / Acolhedor' },
        { name: 'Segurança / Zelador do templo' },
        { name: 'Equipe de Limpeza' },
        { name: 'Técnico de Som / Multimídia' },
        { name: 'Operador de Projeção / Transmissão ao vivo' },
    ];
    console.log('🚀 Iniciando seed das positions...');
    try {
        let createdCount = 0;
        let existingCount = 0;
        for (const positionData of positionsToCreate) {
            const existingPosition = await prisma.position.findFirst({
                where: { name: positionData.name },
            });
            if (!existingPosition) {
                await prisma.position.create({
                    data: positionData,
                });
                console.log(`✅ Position '${positionData.name}' criada com sucesso`);
                createdCount++;
            }
            else {
                console.log(`⚠️  Position '${positionData.name}' já existe no banco de dados`);
                existingCount++;
            }
        }
        console.log(`\n📊 Relatório do seed:`);
        console.log(`   • ${createdCount} positions criadas`);
        console.log(`   • ${existingCount} positions já existiam`);
        console.log(`   • ${positionsToCreate.length} positions total`);
        console.log('🎉 Seed das positions concluído com sucesso!');
    }
    catch (error) {
        console.error('❌ Erro ao executar seed das positions:', error);
        process.exit(1);
    }
    finally {
        await prisma.$disconnect();
    }
}
seedPositions().catch((error) => {
    console.error('❌ Erro fatal ao executar seed:', error);
    process.exit(1);
});
//# sourceMappingURL=seed-positions.js.map