import * as mongoose from 'mongoose';

const devSchema = new mongoose.Schema({
  name: String,
  weight: Number,
  age: Number,
});

const devModel = mongoose.model('dev', devSchema);

export default devModel;
