import { Module } from '@nestjs/common';
import { GymService } from './gym.service';
import { GymController } from './gym.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Gym, GymSchema } from 'src/schemas/gym.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://gustavoemilio:admin123@cluster0.fvrbdh3.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: Gym.name, schema: GymSchema }])
  ],
  controllers: [GymController],
  providers: [GymService],
})
export class GymModule {}
