import { Module } from '@nestjs/common';
import { LandsController } from './lands.controller.js';
import { DatabaseModule } from '../../database/database.module.js';
import { LandsService } from './lands.service.js';

@Module({
  imports: [
    DatabaseModule,
  ],
  controllers: [LandsController],
  providers: [LandsService],
  exports: [LandsService],
})
export class LandsModule {}
