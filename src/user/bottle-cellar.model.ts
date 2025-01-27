import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Bottle } from './bottle.model';
import { Cellar } from './cellar.model';

@ObjectType()
export class BottleCellar {
  @Field(() => ID)
  bottle_cellar_id: string;

  @Field(() => Bottle)
  bottles: Bottle;

  @Field(() => Cellar)
  cellars: Cellar;
}
