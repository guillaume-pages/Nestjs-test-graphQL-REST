import { Field, ObjectType, ID } from '@nestjs/graphql';
import { User } from './user.model';
import { Cellar } from './cellar.model';

@ObjectType()
export class UserCellar {
  @Field(() => ID)
  user_cellar_id: string;

  @Field(() => User)
  users: User;

  @Field(() => Cellar)
  cellars: Cellar;
}
