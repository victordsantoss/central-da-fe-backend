"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const prisma = new client_1.PrismaClient();
async function seedChurches() {
    console.log('🔧 Configurações do banco:');
    console.log(`DATABASE_URL: ${process.env.DATABASE_URL}`);
    const churchData = {
        name: 'Assembléia de Deus CDMAD-MOR',
        address: {
            street: 'Quadra 320 Samambaia Sul',
            number: '03',
            complement: '',
            neighborhood: 'Samambaia Sul',
            city: 'Samambaia',
            state: 'DF',
            zipCode: '72302-707',
        },
    };
    console.log('🚀 Iniciando seed da igreja...');
    try {
        const existingChurch = await prisma.church.findFirst({
            where: { name: churchData.name },
        });
        if (existingChurch) {
            console.log(`⚠️  Igreja '${churchData.name}' já existe no banco de dados`);
            return;
        }
        const existingAddress = await prisma.address.findFirst({
            where: {
                street: churchData.address.street,
                number: churchData.address.number,
                neighborhood: churchData.address.neighborhood,
                city: churchData.address.city,
                state: churchData.address.state,
                zipCode: churchData.address.zipCode,
            },
        });
        let addressId;
        if (existingAddress) {
            console.log(`⚠️  Endereço já existe no banco de dados, reutilizando`);
            addressId = existingAddress.id;
        }
        else {
            const createdAddress = await prisma.address.create({
                data: churchData.address,
            });
            console.log(`✅ Endereço criado com sucesso`);
            addressId = createdAddress.id;
        }
        const createdChurch = await prisma.church.create({
            data: {
                name: churchData.name,
            },
        });
        console.log(`✅ Igreja '${churchData.name}' criada com sucesso`);
        await prisma.churchAddress.create({
            data: {
                churchId: createdChurch.id,
                addressId: addressId,
            },
        });
        console.log(`✅ Relacionamento igreja-endereço criado com sucesso`);
        console.log('\n📊 Relatório do seed:');
        console.log(`   • Igreja: ${churchData.name}`);
        console.log(`   • Endereço: ${churchData.address.street}, ${churchData.address.number}`);
        console.log(`   • Cidade: ${churchData.address.city} - ${churchData.address.state}`);
        console.log(`   • CEP: ${churchData.address.zipCode}`);
        console.log('🎉 Seed da igreja concluído com sucesso!');
    }
    catch (error) {
        console.error('❌ Erro ao executar seed da igreja:', error);
        process.exit(1);
    }
    finally {
        await prisma.$disconnect();
    }
}
seedChurches().catch((error) => {
    console.error('❌ Erro fatal ao executar seed:', error);
    process.exit(1);
});
//# sourceMappingURL=seed-churches.js.map