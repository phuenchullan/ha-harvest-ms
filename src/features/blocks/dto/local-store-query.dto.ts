import { IsUUID } from 'class-validator';

export class LocalStoreQueryDto {
  @IsUUID()
  activeLand: string;
}
