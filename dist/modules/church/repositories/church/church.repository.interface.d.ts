import { IBaseRepository } from '../../../../common/core/repositories/base.repository.interface';
import { Church } from '@prisma/client';
import { IListChurchesRequestDto } from '../../dtos/church/list.request.dto';
export interface IChurchRepository extends IBaseRepository<Church> {
    findByFilters(filters: IListChurchesRequestDto): Promise<[Church[], number]>;
}
