import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
  populeteDB() {
    return 'Seed executed'
  }
}
