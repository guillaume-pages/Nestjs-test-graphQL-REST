import { Field, ObjectType, ID } from '@nestjs/graphql';
import { BottleCellar } from './bottle-cellar.model';

@ObjectType()
export class Bottle {
  @Field(() => ID)
  bottle_id: string;

  @Field()
  bottle_name: string;

  @Field()
  millesime: number;

  @Field()
  type_of_wine: string;

  @Field()
  size: string;

  @Field({ nullable: true })
  grape_varieties?: string; // JSON peut être représenté sous forme de chaîne dans GraphQL

  @Field()
  region: string;

  @Field({ nullable: true })
  eye_description?: string;

  @Field({ nullable: true })
  nose_description?: string;

  @Field({ nullable: true })
  mouth_description?: string;

  @Field({ nullable: true })
  carafage?: number;

  @Field({ nullable: true })
  temperature?: number;

  @Field()
  degree: number;

  @Field({ nullable: true })
  accompaniment?: string;

  @Field({ nullable: true })
  media?: string;

  @Field()
  price: number;

  @Field()
  price_visibility: number;

  @Field({ nullable: true })
  global_description?: string;

  @Field()
  entry_date: Date;

  @Field({ nullable: true })
  potential_date?: Date;

  @Field()
  quantity: number;

  @Field()
  global_visibility: number;

  @Field(() => [BottleCellar], { nullable: true })
  bottles_cellars?: BottleCellar[];
}
