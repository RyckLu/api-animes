import { Genres } from 'src/genres/genres.entity';

export class Anime {
  id: number;
  title: string;
  studios: string;
  genres: Genres;
}