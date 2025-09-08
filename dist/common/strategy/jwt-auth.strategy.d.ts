import { Strategy } from 'passport-strategy';
import { Request } from 'express';
import { PrismaService } from '../../database/core/prisma.service';
declare const JwtAuthStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtAuthStrategy extends JwtAuthStrategy_base {
    private readonly prisma;
    constructor(prisma: PrismaService);
    authenticate(req: Request): void;
}
export {};
