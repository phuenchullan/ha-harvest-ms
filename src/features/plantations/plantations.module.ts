import { Module } from '@nestjs/common';
import { PlantationsController } from './plantations.controller.js';
import { PlantationsService } from './plantations.service.js';
import { DatabaseModule } from '../../database/database.module.js';

@Module({
  imports: [DatabaseModule],
  controllers: [PlantationsController],
  providers: [PlantationsService]
})
export class PlantationsModule {}
