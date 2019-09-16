module.exports = {
    name: 'avatar',
    description: 'Avatar!',
    args: true,
    execute(message, args) {
        if (!message.mentions.users.size) {
            return message.reply('you need to tag a user in order to view Avatar!');
        }
        // grab the "first" mentioned user from the message
        // this will return a `User` object, just like `message.author`
        const taggedUser = message.mentions.users.first();

        message.channel.send(`Avatar: ${taggedUser.displayAvatarURL}`);
    },
};