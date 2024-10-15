import { Controller, Get, Param } from '@nestjs/common';
import { GenresService } from './genres.service';
import { Genres } from './genres.entity';

@Controller('genres')
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  @Get()
  findAll(): Genres[] {
    return this.genresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Genres {
    return this.genresService.findOne(Number(id));
  }
}