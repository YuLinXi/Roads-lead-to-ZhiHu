import { model, Schema } from 'mongoose';

const UserBlob = model('user', new Schema({
  phone: {
    type: String,
    required: true,
  },
  areaCode: String,
  token: String,
  add_time: Number,
  up_time: Number,
  password: String,
}));

export default UserBlob;
