const { Client, Intents, Collection } = require('discord.js');
const fs = require('node:fs');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }); // < rip
const config = require("./config.json");

client.config = config;
client.commands = new Collection();

client.once('ready', () => {
    console.log(`Ready! Logged in as ${client.user.tag}`);
    client.user.setActivity('Elph Studio 🎶', { type: "LISTENING" });
});

//client stuff
const events = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
for (const file of events) {
    const eventName = file.split(".")[0];
    const event = require(`./events/${file}`);
    client.on(eventName, event.bind(null, client));
}

const commands = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const file of commands) {
    const commandName = file.split(".")[0];
    const command = require(`./commands/${file}`);

    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, command);
}


client.login(config.token);