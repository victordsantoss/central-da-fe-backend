import { IListChurchesService } from './list.interface';
import { IListChurchesRequestDto } from '../../../dtos/church/list.request.dto';
import { IListChurchesResponseDto } from '../../../dtos/church/list.response.dto';
import { IChurchRepository } from '../../../repositories/church/church.repository.interface';
export declare class ChurchService implements IListChurchesService {
    private readonly churchRepository;
    private readonly logger;
    constructor(churchRepository: IChurchRepository);
    perform(query: IListChurchesRequestDto): Promise<IListChurchesResponseDto>;
    private mapChurchToResponse;
}
