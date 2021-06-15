import { DiscordClient } from '@libs/discord/client';

export abstract class Robotics {
  name: string;
  token: string;
  client = DiscordClient.getInstance();

  constructor(name: string, token: string) {
    this.name = name;
    this.token = token;
  }

  to_s() {
    return this.name;
  }

  ready() {
    this.client.on('ready', () => {
      console.log(`안녕하세요? ${this.name} 준비됐습니다.`);
    });
  }

  async activate() {
    /* initialize client per bot */
    this.client.login(this.token).then(() => {
      this.ready();
    });
  }

  async deactivate() {
    this.client.destroy();
  }
}
