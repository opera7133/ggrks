import { Client, Intents } from 'discord.js'
import dotenv from 'dotenv'

dotenv.config()

const client = new Client({intents: [Intents.FLAGS.GUILDS]});

client.once('ready', async () => {
    console.log('Ready!')
    console.log(client.user?.tag)
})

client.on("interactionCreate", async (interaction: any) => {
    if (!interaction.isCommand()) {
        return;
    }

    const { commandName } = interaction;

    if (commandName === 'ggrks') {
        if (interaction.options.getString('input')) {
            await interaction.reply('ググれカス\nhttps://www.google.co.jp/search?q=' + encodeURIComponent(interaction.options.getString('input')));
        } else {
            await interaction.reply('ググれカス\nhttps://www.google.co.jp/');
        }
    } else if (commandName === "ddrks") {
        if (interaction.options.getString('input')) {
            await interaction.reply('ダクダクれカス\nhttps://duckduckgo.com/?q=' + encodeURIComponent(interaction.options.getString('input')));
        } else {
            await interaction.reply('ダクダクれカス\nhttps://duckduckgo.com/');
        }
    } else if (commandName === "yfrks") {
        if (interaction.options.getString('input')) {
            await interaction.reply('ヤフれカス\nhttps://search.yahoo.co.jp/search?p=' + encodeURIComponent(interaction.options.getString('input')));
        } else {
            await interaction.reply('ヤフれカス\nhttps://www.yahoo.co.jp/');
        }
    } else if (commandName === "bgrks") {
        if (interaction.options.getString('input')) {
            await interaction.reply('ビグれカス\nhttps://www.bing.com/search?q=' + encodeURIComponent(interaction.options.getString('input')));
        } else {
            await interaction.reply('ビグれカス\nhttps://www.bing.com/');
        }
    } else if (commandName === "bdrks") {
        if (interaction.options.getString('input')) {
            await interaction.reply('バドれカス\nhttps://www.baidu.com/s?wd=test' + encodeURIComponent(interaction.options.getString('input')));
        } else {
            await interaction.reply('バドれカス\nhttps://www.baidu.com/');
        }
    } else if (commandName === "ydrks") {
        if (interaction.options.getString('input')) {
            await interaction.reply('ヤデれカス\nhttps://yandex.com/search/?text=' + encodeURIComponent(interaction.options.getString('input')));
        } else {
            await interaction.reply('ヤデれカス\nhttps://yandex.com/');
        }
    }
});

client.login(process.env.TOKEN)
