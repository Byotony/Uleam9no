import { CitaService } from './cita.service';
import { CitaDTO } from './dto/cita.dto';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CitaMsg } from 'src/common/constants';

@Controller()
export class CitaController {
  constructor(private readonly citaService: CitaService) {}

  @MessagePattern(CitaMsg.CREATE)
  create(@Payload() citaDTO: CitaDTO) {
    return this.citaService.create(citaDTO);
  }

  @MessagePattern(CitaMsg.FIND_ALL)
  findAll() {
    return this.citaService.findAll();
  }

  @MessagePattern(CitaMsg.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.citaService.findOne(id);
  }
  @MessagePattern(CitaMsg.UPDATE)
  update(@Payload() payload: any) {
    return this.citaService.update(payload.id, payload.citaDTO);
  }

  @MessagePattern(CitaMsg.DELETE)
  delete(@Payload() id: string) {
    return this.citaService.delete(id);
  }
}
