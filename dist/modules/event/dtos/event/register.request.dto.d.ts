declare class AddressDto {
    street: string;
    number: string;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
}
export declare class IRegisterEventRequestDto {
    name: string;
    description: string;
    category: string;
    isPaid: boolean;
    mode: string;
    availableTickets: number;
    price?: number;
    startDate: Date | string;
    endDate: Date | string;
    churchId: string;
    address: AddressDto;
    customLink?: string;
    instagramLink?: string;
    facebookLink?: string;
    youtubeLink?: string;
    content?: string;
}
export {};
