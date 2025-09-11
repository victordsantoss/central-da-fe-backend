export declare class IUserResponseDto {
    id?: string;
    name: string;
    email: string;
    cpf: string;
    isActive: boolean;
    provider: string;
    birthDate?: Date;
    createdAt: Date;
    updatedAt: Date;
    roleId?: string;
    positionIds?: string[];
}
