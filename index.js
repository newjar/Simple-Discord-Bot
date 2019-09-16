// require the discord.js module
const fs = require('fs');
const Discord = require('discord.js');
const {
    prefix,
    token,
} = require('./config.json');

// create a new Discord client
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Ready!');
});

// simple command
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        // message.reply('there was an error trying to execute that command!');
    }

    // if (command.args && !args.length) {
    //     return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    // }

});

// login to Discord with your app's token
client.login(token);