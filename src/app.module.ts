import { Module } from '@nestjs/common';
import { GenresModule } from './genres/genres.module';
import { AnimesModule } from './animes/animes.module';

@Module({
  imports: [GenresModule, AnimesModule],
})
export class AppModule {}