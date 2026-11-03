import { Injectable } from '@nestjs/common';
import { CreateLandDto } from './dto/create-land.dto.js';
import { LandsRepository } from '../../database/domain/repositories/lands.repository.js';
import { Land } from '../../database/domain/entities/land.js';
import { RpcException } from '@nestjs/microservices';
import { UpdateLandDto } from './dto/update-land.dto.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';

@Injectable()
export class LandsService {

    constructor(
        private readonly repository: LandsRepository
    ){}

    async findById(id: string): Promise<Partial<Land>> {
      try {
        return await this.repository.findById(id);
      } catch {
        throw new RpcException('Error al obtener el fundo.');
      }
    }

    async findAll(paginationDto: PaginationDto) {
      try {
        return await this.repository.findAll(paginationDto);
      } catch {
        throw new RpcException('Error al obtener la lista de fundos.');
      }
    }

    async create(createLandDto: CreateLandDto): Promise<Partial<Land>>{
        try {
            return await this.repository.create(createLandDto);
            
        } catch {
          throw new RpcException('Error al ingresar fundo.');
        }
    }

    async update(id: string, updateLandDto: UpdateLandDto): Promise<Partial<Land>>{
      try {
        return await this.repository.update(id, updateLandDto);
      } catch {
        throw new RpcException('Error al actualizar fundo.');
      }
    }

}
