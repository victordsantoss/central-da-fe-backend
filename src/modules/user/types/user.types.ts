import { User, UserPosition } from '@prisma/client';

export type UserWithUserPositions = User & {
  userPositions: UserPosition[];
};
