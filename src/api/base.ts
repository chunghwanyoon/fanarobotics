import { DocumentBuilder } from '@nestjs/swagger';

export class RoboticsAPIBase {
  constructor(private builder: DocumentBuilder = new DocumentBuilder()) {}

  public initialize() {
    return this.builder
      .setTitle('FANAROBITICS')
      .setDescription('')
      .setVersion('1.0')
      .setContact('fana', 'https://github.com/chunghwanyoon', 'ycfana@gmail.com')
      .build();
  }
}
