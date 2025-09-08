import { IListPositionsRequestDto } from '../../../dtos/position/list.request.dto';
import { IListPositionsResponseDto } from '../../../dtos/position/list.response.dto';
export interface IListPositionsService {
    perform(query: IListPositionsRequestDto): Promise<IListPositionsResponseDto>;
}
