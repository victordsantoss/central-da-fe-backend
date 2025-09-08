import { IListChurchesRequestDto } from '../dtos/church/list.request.dto';
import { IListChurchesResponseDto } from '../dtos/church/list.response.dto';
import { IListChurchesService } from '../services/church/list/list.interface';
export declare class ChurchController {
    private readonly listChurchesService;
    constructor(listChurchesService: IListChurchesService);
    findAll(query: IListChurchesRequestDto): Promise<IListChurchesResponseDto>;
}
