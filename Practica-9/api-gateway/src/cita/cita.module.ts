import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { CitaController } from './cita.controller';

@Module({
  imports: [ProxyModule],
  controllers: [CitaController],
})
export class CitaModule {}
