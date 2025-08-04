import { IBaseRepository } from '../../../../common/core/repositories/base.repository.interface';
import { Position } from '@prisma/client';
import { IListPositionsRequestDto } from '../../dtos/position/list.request.dto';

export interface IPositionRepository extends IBaseRepository<Position> {
  findByFilters(
    filters: IListPositionsRequestDto,
  ): Promise<[Position[], number]>;
}
