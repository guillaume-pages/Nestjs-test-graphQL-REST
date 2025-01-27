// src/user/user.resolver.ts

import { Resolver, Query } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.model'; // Assure-toi que tu importes bien le modèle User

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User]) // Définition de la requête GraphQL
  async users() {
    return this.userService.getUsers(); // Appel de la méthode getUsers du service
  }
}
