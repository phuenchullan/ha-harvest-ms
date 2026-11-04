

export class Block {
    id: string;
    name: string;
    surface: number;
    unit: string;
    landId: string;
    phoneBlockId?: number | null;
    phoneId?: string | null;
    isLoaded?: boolean | null;
    createdAt: string | Date;
    updatedAt: string | Date;
}