import { Module } from '@nestjs/common';
import { AnimesService } from './animes.service';
import { AnimesController } from './animes.controller';
import { GenresModule } from '../genres/genres.module';

@Module({
  imports: [GenresModule],  
  providers: [AnimesService],
  controllers: [AnimesController],
})
export class AnimesModule {}