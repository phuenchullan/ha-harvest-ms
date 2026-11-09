import { Controller } from '@nestjs/common';
import { CreateBlockDto } from './dto/create-block.dto.js';
import { BlocksService } from './blocks.service.js';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UpdateBlockDto } from './dto/update-block.dto.js';
import { BlockPaginationDto } from './dto/block-pagination.dto.js';
import { LocalStoreQueryDto } from './dto/local-store-query.dto.js';

@Controller('blocks')
export class BlocksController {
  constructor(private readonly blocksService: BlocksService) {}

  @MessagePattern('blocks.findById')
  findById(@Payload() id: string) {
    return this.blocksService.findById(id);
  }

  @MessagePattern('blocks.findAll')
  findAll(@Payload() paginationDto: BlockPaginationDto) {
    return this.blocksService.findAll(paginationDto);
  }

  @MessagePattern('get-data-by-local-store')
  getDataByActiveLand(@Payload() query: LocalStoreQueryDto) {
    return this.blocksService.getDataByActiveLand(query.activeLand);
  }

  @MessagePattern('blocks.create')
  create(@Payload() createBlockDto: CreateBlockDto) {
    return this.blocksService.create(createBlockDto);
  }

  @MessagePattern('blocks.update')
  update(@Payload() updateBlockDto: UpdateBlockDto) {
    const { id, ...rest } = updateBlockDto;
    return this.blocksService.update(id!, rest);
  }
}
