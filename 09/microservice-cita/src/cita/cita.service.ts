import { CitaDTO } from './dto/cita.dto';
import { HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CITA } from 'src/common/models/models';
import { ICita } from 'src/common/interfaces/cita.interface';

@Injectable()
export class CitaService {
  constructor(@InjectModel(CITA.name) private readonly model: Model<ICita>) {}

  
  async create(citaDTO: CitaDTO): Promise<ICita> {
    const newCita = new this.model(citaDTO);
    return await newCita.save();
  }

  async findAll(): Promise<ICita[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<ICita> {
    return await this.model.findById(id);
  }

  async update(id: string, citaDTO: CitaDTO): Promise<ICita> {
    return await this.model.findByIdAndUpdate(id, citaDTO , { new: true });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}
