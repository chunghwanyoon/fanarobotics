import { HttpException } from '@nestjs/common';

export class FanaException extends HttpException {
  constructor(message: string, code: number) {
    super(message, code);
    this.message = message;
  }

  to_s() {
    return this.message;
  }
}
