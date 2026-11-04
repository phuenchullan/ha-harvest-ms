import { Module } from '@nestjs/common';
import { HarvestersController } from './harvesters.controller.js';
import { HarvestersService } from './harvesters.service.js';
import { DatabaseModule } from '../../database/database.module.js';

@Module({
  imports: [DatabaseModule],
  controllers: [HarvestersController],
  providers: [HarvestersService]
})
export class HarvestersModule {}
