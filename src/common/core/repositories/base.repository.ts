import { PrismaClient } from '@prisma/client';

export abstract class BaseRepository<
  Entity,
  CreateInput = any,
  UpdateInput = any,
> {
  constructor(
    protected readonly prisma: PrismaClient,
    private readonly model: keyof PrismaClient & string,
  ) {}

  protected getModel() {
    return this.prisma[this.model] as any;
  }

  public async findAll(): Promise<Entity[]> {
    return this.getModel().findMany();
  }

  public async findById(id: string): Promise<Entity | null> {
    return this.getModel().findUnique({
      where: { id },
    });
  }

  public async create(data: CreateInput): Promise<Entity> {
    return this.getModel().create({ data });
  }

  public async update(id: string, data: UpdateInput): Promise<Entity> {
    return this.getModel().update({
      where: { id },
      data,
    });
  }

  public async delete(id: string): Promise<void> {
    await this.getModel().delete({
      where: { id },
    });
  }

  public async findOneBy<K extends keyof Entity>(
    field: K,
    value: Entity[K],
  ): Promise<Entity | null> {
    return this.getModel().findFirst({
      where: { [field]: value },
    });
  }

  public async findManyBy<K extends keyof Entity>(
    field: K,
    value: Entity[K],
  ): Promise<Entity[]> {
    return this.getModel().findMany({
      where: { [field]: value },
    });
  }

  public async findOneByAndIncludes<K extends keyof Entity>(
    field: K,
    value: Entity[K],
    relations: string[],
  ): Promise<Entity | null> {
    return this.getModel().findFirst({
      where: { [field]: value } as any,
      include: relations,
    });
  }

  public async findManyByAndIncludes<K extends keyof Entity>(
    field: K,
    value: Entity[K],
    relations: string[],
  ): Promise<Entity[]> {
    return this.getModel().findMany({
      where: { [field]: value } as any,
      include: relations,
    });
  }
}
