import { IListPositionsRequestDto } from '../dtos/position/list.request.dto';
import { IListPositionsResponseDto } from '../dtos/position/list.response.dto';
import { IListPositionsService } from '../services/position/list/list.interface';
export declare class PositionController {
    private readonly listPositionsService;
    constructor(listPositionsService: IListPositionsService);
    findAll(query: IListPositionsRequestDto): Promise<IListPositionsResponseDto>;
}
