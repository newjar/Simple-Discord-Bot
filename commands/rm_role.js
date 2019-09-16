module.exports = {
    name: 'rmrole',
    description: 'rmrole!',
    args: true,

    execute(message, args) {
        if (!message.mentions.members.size) {
            return message.reply('tag dulu!');
        }
        const namarole = 'role2';
        const role = message.guild.roles.find(role => role.name === namarole);

        const member = message.mentions.members.first();

        if (member.roles.some(role => role.name === namarole)) {
            member.removeRole(role);
            message.reply(`Sukses menghapus user dari role: ${role}`);
        } else {
            message.reply(`User tidak menjadi role ${role}`);
        }

    },
};