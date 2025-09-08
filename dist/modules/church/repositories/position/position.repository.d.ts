import { Position } from '@prisma/client';
import { BaseRepository } from '../../../../common/core/repositories/base.repository';
import { PrismaService } from '../../../../database/core/prisma.service';
import { IListPositionsRequestDto } from '../../dtos/position/list.request.dto';
import { IPositionRepository } from './position.repository.interface';
export declare class PositionRepository extends BaseRepository<Position> implements IPositionRepository {
    constructor(prisma: PrismaService);
    findByFilters(filters: IListPositionsRequestDto): Promise<[Position[], number]>;
}
