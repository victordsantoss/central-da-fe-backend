import { EventCategory, EventStatus } from '../../../../common/enums/event.enum';
export declare class IEventResponseDto {
    id: string;
    name: string;
    description: string;
    category: EventCategory;
    status: EventStatus;
    price: number;
    customLink?: string;
    instagramLink?: string;
    facebookLink?: string;
    youtubeLink?: string;
    content: string;
    startDate: Date;
    endDate: Date;
    createdAt: Date;
    updatedAt: Date;
    churchName: string;
    addressName: string;
}
