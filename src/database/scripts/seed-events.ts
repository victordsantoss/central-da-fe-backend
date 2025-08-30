import { PrismaClient } from '@prisma/client';
import { config } from 'dotenv';
import { EventStatus } from '../../common/enums/event.enum';

config();

const prisma = new PrismaClient();

async function seedEvents() {
  console.log('🔧 Configurações do banco:');
  console.log(`DATABASE_URL: ${process.env.DATABASE_URL}`);

  const eventsToCreate = [
    {
      name: 'Culto de Domingo',
      description:
        'Culto dominical com louvor, pregação e comunhão. Venha adorar ao Senhor conosco!',
      category: 'Culto',
      isPaid: false,
      price: null,
      startDate: new Date('2024-12-15T18:00:00Z'),
      endDate: new Date('2024-12-15T20:00:00Z'),
      status: EventStatus.ACTIVE,
      address: {
        street: 'Quadra 320 Samambaia Sul',
        number: '03',
        complement: '',
        neighborhood: 'Samambaia Sul',
        city: 'Samambaia',
        state: 'DF',
        zipCode: '72302-707',
      },
    },
    {
      name: 'Conferência de Jovens',
      description:
        'Conferência especial para jovens com pregações, workshops e momentos de adoração. Tema: "Jovem, levante-se!"',
      category: 'Conferência',
      isPaid: true,
      price: 50.0,
      startDate: new Date('2024-12-20T19:00:00Z'),
      endDate: new Date('2024-12-22T22:00:00Z'),
      status: EventStatus.ACTIVE,
      address: {
        street: 'Quadra 320 Samambaia Sul',
        number: '03',
        complement: 'Auditório Principal',
        neighborhood: 'Samambaia Sul',
        city: 'Samambaia',
        state: 'DF',
        zipCode: '72302-707',
      },
    },
    {
      name: 'Escola Bíblica Dominical',
      description:
        'Aulas da Escola Bíblica Dominical para todas as idades. Estudo bíblico sistemático e aprofundado.',
      category: 'Educação',
      isPaid: false,
      price: null,
      startDate: new Date('2024-12-15T09:00:00Z'),
      endDate: new Date('2024-12-15T10:30:00Z'),
      status: EventStatus.ACTIVE,
      address: {
        street: 'Quadra 320 Samambaia Sul',
        number: '03',
        complement: 'Salas de aula',
        neighborhood: 'Samambaia Sul',
        city: 'Samambaia',
        state: 'DF',
        zipCode: '72302-707',
      },
    },
    {
      name: 'Ensaio do Coral',
      description:
        'Ensaio do coral da igreja. Venha fazer parte do ministério de música!',
      category: 'Música',
      isPaid: false,
      price: null,
      startDate: new Date('2024-12-14T19:30:00Z'),
      endDate: new Date('2024-12-14T21:00:00Z'),
      status: EventStatus.ACTIVE,
      address: {
        street: 'Quadra 320 Samambaia Sul',
        number: '03',
        complement: 'Sala de música',
        neighborhood: 'Samambaia Sul',
        city: 'Samambaia',
        state: 'DF',
        zipCode: '72302-707',
      },
    },
    {
      name: 'Culto de Oração',
      description:
        'Culto especial de oração e intercessão. Momento de buscar a presença de Deus.',
      category: 'Oração',
      isPaid: false,
      price: null,
      startDate: new Date('2024-12-17T19:00:00Z'),
      endDate: new Date('2024-12-17T20:30:00Z'),
      status: EventStatus.ACTIVE,
      address: {
        street: 'Quadra 320 Samambaia Sul',
        number: '03',
        complement: '',
        neighborhood: 'Samambaia Sul',
        city: 'Samambaia',
        state: 'DF',
        zipCode: '72302-707',
      },
    },
  ];

  console.log('🚀 Iniciando seed dos eventos...');

  try {
    // Buscar a igreja existente
    const existingChurch = await prisma.church.findFirst({
      where: { name: 'Assembléia de Deus CDMAD-MOR' },
    });

    if (!existingChurch) {
      console.log(
        '❌ Igreja não encontrada. Execute primeiro o seed de igrejas.',
      );
      return;
    }

    let createdCount = 0;
    let existingCount = 0;

    for (const eventData of eventsToCreate) {
      // Verificar se o evento já existe
      const existingEvent = await prisma.event.findFirst({
        where: {
          name: eventData.name,
          churchId: existingChurch.id,
          startDate: eventData.startDate,
        },
      });

      if (existingEvent) {
        console.log(
          `⚠️  Evento '${eventData.name}' já existe no banco de dados`,
        );
        existingCount++;
        continue;
      }

      // Verificar se o endereço já existe
      const existingAddress = await prisma.address.findFirst({
        where: {
          street: eventData.address.street,
          number: eventData.address.number,
          neighborhood: eventData.address.neighborhood,
          city: eventData.address.city,
          state: eventData.address.state,
          zipCode: eventData.address.zipCode,
        },
      });

      let addressId: string;

      if (existingAddress) {
        console.log(`⚠️  Endereço já existe no banco de dados, reutilizando`);
        addressId = existingAddress.id;
      } else {
        // Criar o endereço
        const createdAddress = await prisma.address.create({
          data: eventData.address,
        });
        console.log(`✅ Endereço criado com sucesso`);
        addressId = createdAddress.id;
      }

      await prisma.event.create({
        data: {
          name: eventData.name,
          description: eventData.description,
          category: eventData.category,
          isPaid: eventData.isPaid,
          price: eventData.price,
          startDate: eventData.startDate,
          endDate: eventData.endDate,
          churchId: existingChurch.id,
          addressId: addressId,
          status: eventData.status,
        },
      });

      console.log(`✅ Evento '${eventData.name}' criado com sucesso`);
      createdCount++;
    }

    console.log(`\n📊 Relatório do seed:`);
    console.log(`   • ${createdCount} eventos criados`);
    console.log(`   • ${existingCount} eventos já existiam`);
    console.log(`   • ${eventsToCreate.length} eventos total`);
    console.log('🎉 Seed dos eventos concluído com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao executar seed dos eventos:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// Executar o seed
seedEvents().catch((error) => {
  console.error('❌ Erro fatal ao executar seed:', error);
  process.exit(1);
});
