import * as mongoose from 'mongoose';

const devSchema = new mongoose.Schema({
  name: String,
  pays: String,
  team: String,
  skills: String,
  imgPerso: String,
  imgTeam: String,
  descT: String,
  descPerso: String,
  age: Number,
});

const devModel = mongoose.model('dev', devSchema);

export default devModel;
