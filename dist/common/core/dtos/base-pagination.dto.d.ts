export declare class BasePaginationRequestDto {
    page?: number;
    limit?: number;
    orderBy?: string;
    sortBy?: 'ASC' | 'DESC';
}
export declare class PaginationMeta {
    limit: number;
    page: number;
    total: number;
    totalPages: number;
}
export declare class BasePaginationResponseDto<T> {
    data: T[];
    meta: PaginationMeta;
}
