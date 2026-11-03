import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module.js';
import { TakesController } from './takes.controller.js';
import { TakesService } from './takes.service.js';

@Module({
  imports: [DatabaseModule],
  controllers: [TakesController],
  providers: [TakesService],
})
export class TakesModule {}
