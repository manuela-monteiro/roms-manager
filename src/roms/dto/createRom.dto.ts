import { IsNotEmpty, IsString } from "class-validator";

export default class CreateRomDto {
    

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()    
    platform: string;
    
    file: string;
    image: string;
};