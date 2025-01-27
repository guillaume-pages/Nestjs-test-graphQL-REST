import { Controller, Get } from '@nestjs/common';

@Controller('users') // Définit la route '/users'
export class UserController {
  @Get()
  findAll() {
    return [{ status: 'particulier' }];
  }
}
