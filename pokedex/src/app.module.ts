import { Module } from '@nestjs/common';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),
    PokemonModule,
    SeedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
