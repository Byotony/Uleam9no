import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsPositive } from 'class-validator';

@InputType()
export class CreateEstudianteInput {

  @Field(()=>String )
  @IsNotEmpty()
  paciente_id:string;

  @Field(()=>String )
  @IsNotEmpty()
  medico_id:string;

  @Field(()=>String )
  @IsNotEmpty()
  fechayhora_cita:string;

  @Field(()=>Boolean )
  @IsOptional()
  estado:boolean;

  
}
