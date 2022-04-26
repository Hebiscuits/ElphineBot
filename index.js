const { Client, Intents, Interaction, MessageEmbed } = require('discord.js');
const { token, prefix } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] }); // < rip

client.once('ready', () => {
    console.log(`Ready! Logged in as ${client.user.tag}`);
    client.user.setActivity('Elph Studio 🎶', { type: "LISTENING" });
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
	const { commandName } = interaction;

    if (commandName === 'ping') {
        const pingEmbed = new MessageEmbed()
        .setColor('BLURPLE')
        .setTitle('Ping Pong! 🏓')
        .setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.avatarURL()}`})
        .setDescription(`💻 Current Ping is **${Math.round(client.ws.ping)}ms**`)
        .setTimestamp()
        .setThumbnail()
        .setFooter({ text: `Sent by ${client.user.tag}`})
        
        await interaction.reply({ embeds: [pingEmbed] });
    }
});

client.login(token);