const { Client, Message, MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = {
    name: 'whois',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!member) return message.channel.send('Send a valid user!');

        const createdAt = moment(member.user.createdAt)
        const joinedAt = moment(member.guild.joinedAt)
        const memberRoles = member.roles.cache
            .filter((roles) => roles.id !== message.guild.id)
            .map((role) => role.toString());

        const embed = new MessageEmbed()
            .setColor('BLURPLE')
            .setAuthor({ name: `${member.user.tag}`, iconURL: `${member.user.avatarURL()}`})
            .setTimestamp()
            .setThumbnail(`${member.user.displayAvatarURL({ dynamic: true, size: 512 })}`)
            .addFields(
                {name: 'Created', value: `${createdAt.format("ddd, MM, YYYY LT")}`, inline: true},
                {name: 'Joined', value: `${joinedAt.format("ddd, MM, YYYY LT")}`, inline: true},
                {name: `Roles [${member.roles.cache.size}]`, value: `${memberRoles}`, inline: false}
            )
            .setFooter({ text: `ID: ${member.user.id}`})

        message.channel.send({ embeds: [embed] });
    },
};