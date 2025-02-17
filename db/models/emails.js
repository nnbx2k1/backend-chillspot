import mongoose, { Schema } from 'mongoose';
const emailSchema = new Schema(
  {
    email : { type: String , required: true}
  },
  { timestamps: true }
);

export const Email = mongoose.model('email', emailSchema);
