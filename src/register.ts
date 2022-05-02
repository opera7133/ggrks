import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import { SlashCommandBuilder } from '@discordjs/builders'
import dotenv from 'dotenv'

dotenv.config()

const commands = [
    new SlashCommandBuilder().setName('ggrks').setDescription('Search with Google').setDescriptionLocalization("ja", "Googleで検索")
        .addStringOption(option => option.setName('input').setDescription('Search words')),
    new SlashCommandBuilder().setName('ddrks').setDescription('Search with DuckDuckGo').setDescriptionLocalization("ja", "DuckDuckGoで検索")
        .addStringOption(option => option.setName('input').setDescription('Search words')),
    new SlashCommandBuilder().setName('yfrks').setDescription('Search with Yahoo').setDescriptionLocalization("ja", "Yahooで検索")
        .addStringOption(option => option.setName('input').setDescription('Search words')),
    new SlashCommandBuilder().setName('bgrks').setDescription('Search with Bing').setDescriptionLocalization("ja", "Bingで検索")
        .addStringOption(option => option.setName('input').setDescription('Search words')),
    new SlashCommandBuilder().setName('bdrks').setDescription('Search with Baidu').setDescriptionLocalization("ja", "Baiduで検索")
        .addStringOption(option => option.setName('input').setDescription('Search words')),
    new SlashCommandBuilder().setName('ydrks').setDescription('Search with Yandex').setDescriptionLocalization("ja", "Yandexで検索")
        .addStringOption(option => option.setName('input').setDescription('Search words')),
].map(command => command.toJSON());;

const token: string = process.env.TOKEN ?? 'a'
const appid: string = process.env.APP_ID ?? "a"

const rest = new REST({version: '9'}).setToken(token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(appid), {
        body: commands,
    });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();