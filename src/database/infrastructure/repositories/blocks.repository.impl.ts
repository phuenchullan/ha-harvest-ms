import { Injectable } from "@nestjs/common";
import { BlocksRepository } from "../../domain/repositories/blocks.repository.js";
import { CreateBlockDto } from "../../../features/blocks/dto/create-block.dto.js";
import { UpdateBlockDto } from "../../../features/blocks/dto/update-block.dto.js";
import { Block } from "../../domain/entities/block.js";
import { BlocksDatasource } from "../../domain/datasource/blocks.datasource.js";
import { PaginationDto } from "../../../common/dto/pagination.dto.js";
import { ResponseDto } from "../../../common/dto/response.dto.js";

@Injectable()
export class BlocksRepositoryImpl extends BlocksRepository {
    
    constructor(
        private readonly blocksDatasource: BlocksDatasource,
    ){
        super();
    }

    async findById(id: string): Promise<Partial<Block>> {
        return await this.blocksDatasource.findById(id);
    }

    async findAll(paginationDto: PaginationDto): Promise<ResponseDto<Partial<Block>>> {
        return await this.blocksDatasource.findAll(paginationDto);
    }
    
    async create(createBlockDto: CreateBlockDto): Promise<Partial<Block>> {
        return await this.blocksDatasource.create(createBlockDto);
    }
    
    async updateById(id: string, updateBlockDto: UpdateBlockDto): Promise<Partial<Block>> {
        return await this.blocksDatasource.updateById(id, updateBlockDto);
    }


    
}