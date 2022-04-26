const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'about',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {Stright[]} string
     */
    run: async(client, message) => {
        const embed = new MessageEmbed()
            .setAuthor({name: `${client.user.tag}`, iconURL: `${client.user.avatarURL()}`})
            .setColor('BLURPLE')
            .addField('Version ', '0.0.1', true)
            .addField('Library ', 'discord.js', true)
            .addField('Creator ', 'Hebsi#3789', true)
            .addField('Servers ', `${client.guilds.cache.size}`, true)
            .addField('Users ', `${client.users.cache.size}`, true)
            .addField('Server Users', `${message.guild.memberCount}`, true)
            .setThumbnail(`${client.user.avatarURL()}`)
            .setFooter({ text: `Requested By ${message.author.tag}`})
            .setTimestamp()

        message.channel.send({embeds: [embed]})
    }
}