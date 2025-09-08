import { Church } from '@prisma/client';
import { IChurchRepository } from './church.repository.interface';
import { BaseRepository } from '../../../../common/core/repositories/base.repository';
import { PrismaService } from '../../../../database/core/prisma.service';
import { IListChurchesRequestDto } from '../../dtos/church/list.request.dto';
export declare class ChurchRepository extends BaseRepository<Church> implements IChurchRepository {
    constructor(prisma: PrismaService);
    findByFilters(filters: IListChurchesRequestDto): Promise<[Church[], number]>;
}
