const Eris = require("eris");
const config = require("./config.json");

const bot = new Eris(config.token)

bot.on("ready", () => {
    console.log("Ready!");
});
bot.on("messageCreate", (msg) => {
    if(msg.content === "!ping") {
      bot.createMessage(msg.channel.id, "Pong!");
    }
  });
  bot.connect();