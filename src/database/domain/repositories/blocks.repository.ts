import { ResponseDto } from "../../../common/dto/response.dto.js";
import { CreateBlockDto } from "../../../features/blocks/dto/create-block.dto.js";
import { UpdateBlockDto } from "../../../features/blocks/dto/update-block.dto.js";
import { BlockPaginationDto } from "../../../features/blocks/dto/block-pagination.dto.js";
import { Block } from "../entities/block.js";



export abstract class BlocksRepository {

    abstract create(createBlockDto: CreateBlockDto): Promise<Partial<Block>>;
    abstract findById(id: string): Promise<Partial<Block>>;
    abstract findAll(paginationDto: BlockPaginationDto): Promise<ResponseDto<Partial<Block>>>;
    abstract updateById(id: string, updateBlockDto: UpdateBlockDto): Promise<Partial<Block>>;
    
}