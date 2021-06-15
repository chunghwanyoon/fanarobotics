import { Client } from 'discord.js';

export class DiscordClient {
  private static instance: Client;

  private DISCORD_CLIENT_OPTIONS = {};

  private constructor() {}

  static getInstance() {
    if (!DiscordClient.instance) {
      DiscordClient.instance = new Client();
    }
    return DiscordClient.instance;
  }
}
