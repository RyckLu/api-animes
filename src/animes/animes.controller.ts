import { Controller, Get, Param } from '@nestjs/common';
import { AnimesService } from './animes.service';
import { Anime } from './anime.entity';

@Controller('animes')
export class AnimesController {
  constructor(private readonly AnimesService: AnimesService) {}

  @Get()
  findAll(): Anime[] {
    return this.AnimesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Anime {
    return this.AnimesService.findOne(Number(id));
  }
}