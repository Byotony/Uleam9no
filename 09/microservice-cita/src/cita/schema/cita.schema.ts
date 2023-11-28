import * as mongoose from 'mongoose';

export const CitaSchema = new mongoose.Schema(
  {
    paciente: { type: String, required: true },
    medico: { type: String, required: true },
    fecha: { type: String, required: true },
    hora: { type: String, required: true },
  },
  { timestamps: true },
);

CitaSchema.index({ medico: 1 }, { unique: true });
CitaSchema.index({ paciente: 1 }, { unique: true });
