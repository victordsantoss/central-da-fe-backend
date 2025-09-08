import { PositionRepository } from '../repositories/position/position.repository';
import { PositionService } from '../services/position/list/position.service';
export declare const positionProviders: ({
    provide: string;
    useClass: typeof PositionService;
} | {
    provide: string;
    useClass: typeof PositionRepository;
})[];
