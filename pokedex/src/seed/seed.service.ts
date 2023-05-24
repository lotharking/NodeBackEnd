import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
  executeSEED() {
    return 'execute seed'
  }
}
