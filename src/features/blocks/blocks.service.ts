import { Injectable } from '@nestjs/common';
import { CreateBlockDto } from './dto/create-block.dto.js';
import { UpdateBlockDto } from './dto/update-block.dto.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';
import { BlocksRepository } from '../../database/domain/repositories/blocks.repository.js';

@Injectable()
export class BlocksService {

    constructor(
        private readonly blocksRepository: BlocksRepository
    ){}

    findById(id: string) {
        return this.blocksRepository.findById(id);
    }

    findAll(paginationDto: PaginationDto) {
        return this.blocksRepository.findAll(paginationDto);
    }

    create(createBlockDto: CreateBlockDto) {
        return this.blocksRepository.create(createBlockDto);
    }

    update(id: string, updateBlockDto: UpdateBlockDto) {
        return this.blocksRepository.updateById(id, updateBlockDto);
    }
    
}
