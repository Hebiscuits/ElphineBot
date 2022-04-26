const { MessageAttachment } = require("discord.js");

module.exports = {
    name: "rickroll",
    description: "sends rickroll",
    run: async (client, interaction) => {
        const attachment = new MessageAttachment("video1.mp4");

        interaction.followUp({ files: [attachment] });
    }
}