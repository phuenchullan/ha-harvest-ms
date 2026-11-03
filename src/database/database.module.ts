import { Module } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { DrizzleModule } from '@nestjs/drizzle';
import { envs } from '../config/envs.js';
import { LandsDatasource } from './domain/datasource/lands.datasource.js';
import { LandsDatasourceImpl } from './infrastructure/datasources/lands.datasource.impl.js';
import { LandsRepository } from './domain/repositories/lands.repository.js';
import { LandsRepositoryImpl } from './infrastructure/repositories/lands.repository.impl.js';
import { BlocksDatasource } from './domain/datasource/blocks.datasource.js';
import { BlocksDatasourceImpl } from './infrastructure/datasources/blocks.datasource.impl.js';
import { BlocksRepository } from './domain/repositories/blocks.repository.js';
import { BlocksRepositoryImpl } from './infrastructure/repositories/blocks.repository.impl.js';
import { PlantationsDatasourceImpl } from './infrastructure/datasources/plantations.datasource.impl.js';
import { PlantationsDatasource } from './domain/datasource/plantations.datasource.js';
import { PlantationsRepositoryImpl } from './infrastructure/repositories/plantations.repository.impl.js';
import { PlantationsRepository } from './domain/repositories/plantations.repository.js';
import { HarvestersDatasource } from './domain/datasource/harvesters.datasource.js';
import { HarvestersDatasourceImpl } from './infrastructure/datasources/harvesters.datasource.impl.js';
import { HarvestersRepository } from './domain/repositories/harvesters.repository.js';
import { HarvestersRepositoryImpl } from './infrastructure/repositories/harvesters.repository.impl.js';
import { TraysDatasource } from './domain/datasource/trays.datasource.js';
import { TraysDatasourceImpl } from './infrastructure/datasources/trays.datasource.impl.js';
import { TraysRepository } from './domain/repositories/trays.repository.js';
import { TraysRepositoryImpl } from './infrastructure/repositories/trays.repository.impl.js';
import { TakesDatasource } from './domain/datasource/takes.datasource.js';
import { TakesDatasourceImpl } from './infrastructure/datasources/takes.datasource.impl.js';
import { TakesRepository } from './domain/repositories/takes.repository.js';
import { TakesRepositoryImpl } from './infrastructure/repositories/takes.repository.impl.js';

@Module({
    imports: [
        DrizzleModule.forRoot({
            drizzle,
            connection: envs.databaseUrl,
        })
    ],
    providers: [
        {
            provide: LandsDatasource,
            useClass: LandsDatasourceImpl
        },
        {
            provide: LandsRepository,
            useClass: LandsRepositoryImpl
        },
        {
            provide: BlocksDatasource,
            useClass: BlocksDatasourceImpl
        },
        {
            provide: BlocksRepository,
            useClass: BlocksRepositoryImpl
        },
        {
            provide: PlantationsDatasource,
            useClass: PlantationsDatasourceImpl
        },
        {
            provide: PlantationsRepository,
            useClass: PlantationsRepositoryImpl
        },
        {
            provide: HarvestersDatasource,
            useClass: HarvestersDatasourceImpl
        },
        {
            provide: HarvestersRepository,
            useClass: HarvestersRepositoryImpl
        },
        {
            provide: TraysDatasource,
            useClass: TraysDatasourceImpl
        },
        {
            provide: TraysRepository,
            useClass: TraysRepositoryImpl
        },
        {
            provide: TakesDatasource,
            useClass: TakesDatasourceImpl
        },
        {
            provide: TakesRepository,
            useClass: TakesRepositoryImpl
        },
    ],
    exports: [LandsRepository, BlocksRepository, PlantationsRepository, HarvestersRepository, TraysRepository, TakesRepository]
})
export class DatabaseModule {}
