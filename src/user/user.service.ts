// src/user/user.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Importation du PrismaService

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {} // Injection de PrismaService

  // Ici tu peux utiliser `this.prisma` pour faire des requêtes sur la base de données
  async getUsers() {
    return this.prisma.users.findMany(); // Utilisation de Prisma pour récupérer les utilisateurs
  }
}
