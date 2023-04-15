import { Document } from 'mongoose';

export interface IProject extends Document {
  name: string;
  createdAt: Date;
  updateAt: Date;
}
