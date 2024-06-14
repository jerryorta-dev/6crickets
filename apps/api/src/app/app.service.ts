import { Injectable } from '@nestjs/common';
import { ApiResponse } from '@sixcrickets/shared';

@Injectable()
export class AppService {
  getData(): ApiResponse {
    return { message: 'Hello API' };
  }
}
