

export class Tray {
    id: string;
    tag: string;
    description: string;
    weight: number;
    weightPerTray: number;
    isLoaded?: boolean | null;
    createdAt: string | Date;
    updatedAt: string | Date;
}