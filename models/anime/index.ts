import { model, Schema } from 'mongoose';
import IAnime from './interfaces';

const animeSchema = new Schema<IAnime>({
  title: String,
  type: String,
  status: String,
  date: Date,
  genre: String,
  subgenre: String,
  age_rating: String,
  duration: String,
  rate: Number,
  episodesAmount: Number,
  description: String,
});

const AnimeModel = model('Anime', animeSchema);
export default AnimeModel;
