import { IListChurchesRequestDto } from '../../../dtos/church/list.request.dto';
import { IListChurchesResponseDto } from '../../../dtos/church/list.response.dto';
export interface IListChurchesService {
    perform(query: IListChurchesRequestDto): Promise<IListChurchesResponseDto>;
}
