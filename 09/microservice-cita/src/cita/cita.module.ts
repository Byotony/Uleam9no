import { Module } from '@nestjs/common';
import { CitaService } from './cita.service';
import { CitaSchema } from './schema/cita.schema';
import { CITA } from 'src/common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { CitaController } from './cita.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: CITA.name,
        useFactory: () => CitaSchema,
      },
    ]),
  ],
  controllers: [CitaController],
  providers: [CitaService],
})
export class CitaModule {}
