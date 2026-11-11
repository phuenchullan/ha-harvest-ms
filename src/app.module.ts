import { Module } from '@nestjs/common';
import { LandsModule } from './features/lands/lands.module.js';
import { BlocksModule } from './features/blocks/blocks.module.js';
import { PlantationsModule } from './features/plantations/plantations.module.js';
import { TraysModule } from './features/trays/trays.module.js';
import { TakesModule } from './features/takes/takes.module.js';
import { HarvestersModule } from './features/harvesters/harvesters.module.js';

@Module({
  imports: [
    LandsModule, 
    BlocksModule, 
    PlantationsModule, 
    TraysModule, 
    // TakesModule, 
    HarvestersModule
  ],
})
export class AppModule {}
