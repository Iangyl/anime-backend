import { models, model, Schema } from 'mongoose';
import IAnime from './interfaces';

const animeSchema = new Schema<IAnime>({
  title: { type: String, required: true },
  img: { type: String },
  type: { type: String, required: true },
  status: { type: String, required: true },
  date: Date,
  genre: { type: [String], required: true },
  subgenre: [String],
  age_rating: { type: String, required: true },
  duration: String,
  rate: Number,
  episodesAmount: Number,
  announcedEpisodesAmount: { type: Number, default: 0 },
  description: String,
});

const AnimeModel = models.Anime || model('Anime', animeSchema);
export default AnimeModel;
