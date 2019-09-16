module.exports = {
    name: 'cd',
    description: 'cd!',
    cooldown: 3,
    args: true,

    execute(message, args) {
        if (!message.mentions.members.size) {
            return message.reply('tag dulu!');
        }
        //   status false;
        const namarole = 'role2';
        const role = message.guild.roles.find(role => role.name === namarole);

        const member = message.mentions.members.first();

        if (member.roles.some(role => role.name === namarole)) {
            message.reply(`User sudah menjadi role ${role}`);
        } else {
            member.addRole(role);
            message.reply(`Sukses menjadi Role ${role}`);
            //  status => true;
            //  message.reply(`Status:${status}`);
        }
    },
};