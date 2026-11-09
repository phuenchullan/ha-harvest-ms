import { TakePaginationDto } from '../../../features/takes/dto/take-pagination.dto.js';
import { ResponseDto } from '../../../common/dto/response.dto.js';
import { CreateTakeDto } from '../../../features/takes/dto/create-take.dto.js';
import { UpdateTakeDto } from '../../../features/takes/dto/update-take.dto.js';
import { Take } from '../entities/take.js';

export abstract class TakesRepository {
  abstract create(createTakeDto: CreateTakeDto): Promise<Partial<Take>>;
  abstract findAll(
    paginationDto: TakePaginationDto,
  ): Promise<ResponseDto<Partial<Take>>>;
  abstract findById(id: string): Promise<Partial<Take>>;
  abstract updateById(
    id: string,
    updateTakeDto: UpdateTakeDto,
  ): Promise<Partial<Take>>;
}
