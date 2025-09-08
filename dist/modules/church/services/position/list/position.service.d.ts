import { IListPositionsService } from './list.interface';
import { IListPositionsRequestDto } from '../../../dtos/position/list.request.dto';
import { IListPositionsResponseDto } from '../../../dtos/position/list.response.dto';
import { IPositionRepository } from '../../../repositories/position/position.repository.interface';
export declare class PositionService implements IListPositionsService {
    private readonly positionRepository;
    private readonly logger;
    constructor(positionRepository: IPositionRepository);
    perform(query: IListPositionsRequestDto): Promise<IListPositionsResponseDto>;
    private mapPositionToResponse;
}
