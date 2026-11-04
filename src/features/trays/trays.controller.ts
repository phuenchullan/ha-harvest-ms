import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { PaginationDto } from "../../common/dto/pagination.dto.js";
import { CreateTrayDto } from "./dto/create-tray.dto.js";
import { UpdateTrayDto } from "./dto/update-tray.dto.js";
import { TraysService } from "./trays.service.js";

@Controller("trays")
export class TraysController {

    constructor(
        private readonly traysService: TraysService,
    ) {}

    @MessagePattern("trays.create")
    create(@Payload() createTrayDto: CreateTrayDto) {
        return this.traysService.create(createTrayDto);
    }

    @MessagePattern("trays.findAll")
    findAll(@Payload() paginationDto: PaginationDto) {
        return this.traysService.findAll(paginationDto);
    }

    @MessagePattern("trays.findById")
    findById(@Payload() id: string) {
        return this.traysService.findById(id);
    }

    @MessagePattern("trays.update")
    update(@Payload() updateTrayDto: UpdateTrayDto) {
        const { id, ...rest } = updateTrayDto;
        return this.traysService.update(id!, rest);
    }
}
