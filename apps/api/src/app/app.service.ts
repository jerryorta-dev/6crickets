import { Injectable } from '@nestjs/common';
import { ApiResponse } from '@sixcrickets/shared';



@Injectable()
export class AppService {

  /**
   * Deadline to new year.
   * @private
   */
  private readonly deadline = new Date('2026-01-01T00:00:00Z');

  getData(): ApiResponse {

    const now = new Date();
    // Calculate the seconds left until the deadlineApi.
    const secondsLeft = Math.max(0, Math.floor((this.deadline.getTime() - now.getTime()) / 1000));

    return { secondsLeft };
  }
}
