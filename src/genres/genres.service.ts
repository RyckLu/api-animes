import { Injectable } from '@nestjs/common';
import { Genres } from './genres.entity';

@Injectable()
export class GenresService {
  private genres: Genres[] = [
    { id: 1, name: 'Action, Fantasy, Sci-Fi' },
    { id: 2, name: 'Romance, School, Shounen, Sports, Team Sports' },
  ];

  findAll(): Genres[] {
    return this.genres;
  }

  findOne(id: number): Genres {
    return this.genres.find(genre => genre.id === id);
  }
}