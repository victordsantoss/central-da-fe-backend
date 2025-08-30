import { Event, Church, Address } from '@prisma/client';

export type EventsWithChurchAndAddress = Event & {
  church: Church;
  address: Address;
};
