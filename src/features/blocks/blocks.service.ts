import { Injectable } from '@nestjs/common';
import { CreateBlockDto } from './dto/create-block.dto.js';
import { UpdateBlockDto } from './dto/update-block.dto.js';
import { BlocksRepository } from '../../database/domain/repositories/blocks.repository.js';
import { BlockPaginationDto } from './dto/block-pagination.dto.js';

@Injectable()
export class BlocksService {

    constructor(
        private readonly blocksRepository: BlocksRepository
    ){}

    findById(id: string) {
        return this.blocksRepository.findById(id);
    }

    findAll(paginationDto: BlockPaginationDto) {
        return this.blocksRepository.findAll(paginationDto);
    }

    create(createBlockDto: CreateBlockDto) {
        return this.blocksRepository.create(createBlockDto);
    }

    update(id: string, updateBlockDto: UpdateBlockDto) {
        return this.blocksRepository.updateById(id, updateBlockDto);
    }
    
}
