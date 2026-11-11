

export class Plantation {
    id: string;
    fruit: string;
    surface: number;
    unit: string;
    variety: string;
    blockId: string;
    isLoaded?: boolean | null;
    startDate: string | Date;
    endDate?: string | Date | null;
    createdAt: string | Date;
    updatedAt: string | Date;
}