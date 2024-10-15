import { Injectable } from '@nestjs/common';
import { Anime } from './anime.entity';
import { GenresService } from '../genres/genres.service';

@Injectable()
export class AnimesService {
  private animes: Anime[] = [
    { id: 1, title: 'Demon Lord 2099', studios: 'J.C.Staff', genres: this.genresService.findOne(1) },
    { id: 2, title: 'Blue Box', studios: 'Telecom Animation Film', genres: this.genresService.findOne(2) },
  ];

  constructor(private readonly genresService: GenresService) {}

  findAll(): Anime[] {
    return this.animes;
  }

  findOne(id: number): Anime {
    return this.animes.find(anime => anime.id === id);
  }
}