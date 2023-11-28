import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CitaMSG } from './../common/constants';
import { Observable } from 'rxjs';
import { CitaDTO } from './dto/cita.dto';
import { ClientProxySuperFlights } from './../common/proxy/client-proxy';
import { ICita } from 'src/common/interfaces/cita.interface';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('citas')
// @UseGuards(JwtAuthGuard)
@Controller('api/v2/cita')
export class CitaController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxyCita = this.clientProxy.clientProxyCitas();

  @Post()
  create(@Body() citaDTO: CitaDTO): Observable<ICita> {
    return this._clientProxyCita.send(CitaMSG.CREATE, citaDTO);
  }

  @Get()
  findAll(): Observable<ICita[]> {
    return this._clientProxyCita.send(CitaMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<ICita> {
    return this._clientProxyCita.send(CitaMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() citaDTO: CitaDTO): Observable<ICita> {
    return this._clientProxyCita.send(CitaMSG.UPDATE, { id, citaDTO });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyCita.send(CitaMSG.DELETE, id);
  }
}
