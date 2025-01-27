import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver'; // Ton resolver
import { UserService } from './user.service';
import { ModelsModule } from '../common/models.module';

@Module({
  imports: [ModelsModule],
  providers: [UserResolver, UserService], // Inclure ton resolver ici
})
export class UserModule {}
