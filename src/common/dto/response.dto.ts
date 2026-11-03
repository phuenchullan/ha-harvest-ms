

export class ResponseDto<T> {
    meta: {
        totalRecords: number;
        page?: number;
        limit?: number;
    };
    data: Array<T>
}