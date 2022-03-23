import { Controller, Post } from '@nestjs/common';

@Controller('roms')
export class RomsController {

    @Post()
    create(): string {
        return "ROM criada com sucesso!";
    };

}
