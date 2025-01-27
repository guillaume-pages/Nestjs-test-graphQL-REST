import { Field, ObjectType, ID } from '@nestjs/graphql';
import { UserCellar } from './user-cellar.model';

@ObjectType()
export class User {
  @Field(() => ID)
  user_id: string;

  @Field()
  email: string;

  @Field()
  email_verified: boolean;

  @Field({ nullable: true })
  image?: string;

  @Field()
  created_at: Date;

  @Field({ nullable: true })
  updated_at?: Date;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  status?: string;

  @Field()
  firstname: string;

  @Field({ nullable: true })
  lastname?: string;

  @Field(() => [UserCellar], { nullable: true })
  users_cellars?: UserCellar[];
}
