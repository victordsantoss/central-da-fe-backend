import { ChurchRepository } from '../repositories/church/church.repository';
import { ChurchService } from '../services/church/list/list.service';
export declare const churchProviders: ({
    provide: string;
    useClass: typeof ChurchService;
} | {
    provide: string;
    useClass: typeof ChurchRepository;
})[];
