import { AnimeStatus, AnimeTypes, Genre, Subgenre } from './enums';

export type AgeRating = 'G' | 'PG' | 'PG-13' | 'R' | 'XR';

export default interface IAnime {
  title: string;
  img?: string;
  type: AnimeTypes;
  status: AnimeStatus;
  date?: Date;
  genre: Genre[];
  subgenre?: Subgenre[];
  age_rating: AgeRating;
  duration?: string;
  rate?: number;
  episodesAmount: number;
  announcedEpisodesAmount?: number;
  description?: string;
}
