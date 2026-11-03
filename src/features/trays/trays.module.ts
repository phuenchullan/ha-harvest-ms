import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module.js';
import { TraysController } from './trays.controller.js';
import { TraysService } from './trays.service.js';

@Module({
  imports: [DatabaseModule],
  controllers: [TraysController],
  providers: [TraysService],
})
export class TraysModule {}
