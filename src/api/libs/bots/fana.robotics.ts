import { Robotics } from '../fana/robotics';

export class FanaRobotics extends Robotics {
  constructor(name: string, token: string) {
    super(name, token);
    this.activate();
  }

  async on_message() {
    this.client.on('message', (message) => {
      if (message.content.includes('벽력')) {
        message.channel.send('잇센');
      }
    });
  }
}
