import { Body, Controller, Inject, Post } from '@nestjs/common';
import { RomsService } from './roms.service';
import CreateRomDto from './dto/createRom.dto';


@Controller('roms')
export class RomsController {
    @Inject()
    private readonly _romsService: RomsService;

    @Post()
   async create(@Body() input: CreateRomDto): Promise<string> {
        return this._romsService.createRom(input);
    };

}
