import { Field, ObjectType, ID } from '@nestjs/graphql';
import { UserCellar } from './user-cellar.model';
import { BottleCellar } from './bottle-cellar.model';

@ObjectType()
export class Cellar {
  @Field(() => ID)
  cellar_id: string;

  @Field({ nullable: true })
  cellar_name?: string;

  @Field({ nullable: true })
  created_at?: Date;

  @Field({ nullable: true })
  updated_at?: Date;

  @Field(() => [UserCellar], { nullable: true })
  users_cellars?: UserCellar[];

  @Field(() => [BottleCellar], { nullable: true })
  bottles_cellars?: BottleCellar[];
}
