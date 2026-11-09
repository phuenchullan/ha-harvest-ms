import { Injectable } from '@nestjs/common';
import { TakePaginationDto } from '../../../features/takes/dto/take-pagination.dto.js';
import { ResponseDto } from '../../../common/dto/response.dto.js';
import { CreateTakeDto } from '../../../features/takes/dto/create-take.dto.js';
import { UpdateTakeDto } from '../../../features/takes/dto/update-take.dto.js';
import { TakesDatasource } from '../../domain/datasource/takes.datasource.js';
import { Take } from '../../domain/entities/take.js';
import { TakesRepository } from '../../domain/repositories/takes.repository.js';

@Injectable()
export class TakesRepositoryImpl extends TakesRepository {
  constructor(private readonly takesDatasource: TakesDatasource) {
    super();
  }

  create(createTakeDto: CreateTakeDto): Promise<Partial<Take>> {
    return this.takesDatasource.create(createTakeDto);
  }

  findAll(
    paginationDto: TakePaginationDto,
  ): Promise<ResponseDto<Partial<Take>>> {
    return this.takesDatasource.findAll(paginationDto);
  }

  findById(id: string): Promise<Partial<Take>> {
    return this.takesDatasource.findById(id);
  }

  updateById(id: string, updateTakeDto: UpdateTakeDto): Promise<Partial<Take>> {
    return this.takesDatasource.updateById(id, updateTakeDto);
  }
}
