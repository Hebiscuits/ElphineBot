const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        const pingEmbed = new MessageEmbed()
            .setColor('BLURPLE')
            .setTitle('Ping Pong! 🏓')
            .setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.avatarURL()}`})
            .setDescription(`💻 Current Ping is **${Math.round(client.ws.ping)}ms**`)
            .setTimestamp()
            .setThumbnail(`${message.author.avatarURL()}`)
            .setFooter({ text: `Requested By ${message.author.tag}`})
        message.channel.send({ embeds: [pingEmbed] });
    }
}


