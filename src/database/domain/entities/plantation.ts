

export class Plantation {
    id: string;
    fruit: string;
    surface: number;
    unit: string;
    variety: string;
    blockId: string;
    phonePlantationId?: number | null;
    phoneId?: string | null;
    isLoaded?: boolean | null;
    createdAt: string | Date;
    updatedAt: string | Date;
}