import { Module } from '@nestjs/common';
import { Bottle } from '../user/bottle.model';
import { BottleCellar } from '../user/bottle-cellar.model';
import { Cellar } from '../user/cellar.model';

@Module({
  providers: [Bottle, BottleCellar, Cellar],
  exports: [Bottle, BottleCellar, Cellar], // Exporte les types pour qu'ils soient accessibles ailleurs
})
export class ModelsModule {}
