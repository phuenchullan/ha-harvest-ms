export class Take {
  id: string;
  trayId: string;
  plantationId?: string | null;
  harvesterId: string;
  userId: string;
  numberOfTray: number;
  brute: number;
  neto: number;
  price: number;
  phoneId?: string | null;
  phoneTakeId?: number | null;
  isLoaded?: boolean | null;
  createdAt: string | Date;
  updatedAt: string | Date;
}
