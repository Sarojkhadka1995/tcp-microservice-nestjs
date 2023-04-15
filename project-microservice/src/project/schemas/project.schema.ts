import mongoose from 'mongoose';

export const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
  updateAt: { type: Date },
});
