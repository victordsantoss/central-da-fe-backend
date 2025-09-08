import { PrismaClient, Prisma } from '@prisma/client';
export declare abstract class BaseRepository<Entity, CreateInput = any, UpdateInput = any> {
    protected readonly prisma: PrismaClient;
    private readonly model;
    constructor(prisma: PrismaClient, model: keyof PrismaClient & string);
    protected getModel(): any;
    findAll(): Promise<Entity[]>;
    findById(id: string): Promise<Entity | null>;
    create(data: CreateInput): Promise<Entity>;
    update(id: string, data: UpdateInput): Promise<Entity>;
    delete(id: string): Promise<void>;
    findOneBy<K extends keyof Entity>(field: K, value: Entity[K]): Promise<Entity | null>;
    findManyBy<K extends keyof Entity>(field: K, value: Entity[K]): Promise<Entity[]>;
    findOneByAndIncludes<K extends keyof Entity>(field: K, value: Entity[K], relations: string[]): Promise<Entity | null>;
    findManyByAndIncludes<K extends keyof Entity>(field: K, value: Entity[K], relations: string[]): Promise<Entity[]>;
    protected executeTransaction<T>(operation: (transaction: Omit<PrismaClient, '$transaction'>) => Promise<T>): Promise<T>;
    protected executeTransactionWithOptions<T>(operation: (transaction: Omit<PrismaClient, '$transaction'>) => Promise<T>, options?: {
        timeout?: number;
        maxWait?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): Promise<T>;
}
