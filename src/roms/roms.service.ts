import { Injectable } from '@nestjs/common';
import CreateRomDto from './dto/createRom.dto';

@Injectable()
export class RomsService {

    async createRom(input: CreateRomDto): Promise<string> {
        return "Rom criada com sucesso!";
    };

}
