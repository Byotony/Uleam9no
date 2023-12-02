import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CitaDTO {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    paciente:string;

    @IsString()
    @IsNotEmpty()
    medico:string;

    @IsString()
    @IsNotEmpty()
    fecha:string;
    

    @IsString()
    @IsNotEmpty()
    hora:string;
}
