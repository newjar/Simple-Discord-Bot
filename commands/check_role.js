module.exports = {
    name: 'checkrole',
    description: 'checkrole!',
    args: true,

    execute(message, args) {
        if (!message.mentions.users.size) {
            return message.reply('tag dulu!');
        }
        // grab the "first" mentioned user from the message
        // this will return a `User` object, just like `message.author`
        const taggedUser = message.mentions.users.first();

        if (taggedUser.roles.has('622790519369498664')) {
            message.reply('Yay, the author of the message has the role!');
        } else {
            message.reply('Nope, noppers, nadda.');
        }

        // message.channel.send(`Avatar: ${taggedUser.displayAvatarURL}`);
    },
};