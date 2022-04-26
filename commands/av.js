const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'avatar',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        const member = message.mentions.members.first() || message.member;
        const embed = new MessageEmbed()
            .setColor('BLURPLE')
            .setTitle(`${member.user.tag}'s Avatar`)
            .setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.avatarURL()}`})
            .setImage(member.user.displayAvatarURL({dynamic: true, size: 512}))
            .setFooter({text: `Requested by ${message.author.tag}`})
            .setTimestamp()
        
        message.channel.send({embeds: [embed]});
    }
}