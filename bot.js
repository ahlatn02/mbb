const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
client.config = config;

console.log("OK!");

client.on("ready", () => { // When the bot is ready
    console.log("Ready!"); // Log "Ready!"
});

client.on("messageCreate", (msg) => { // When a message is created
    if(msg.content === "ping") { // If the message content is "!ping"
        client.createMessage(msg.channel.id, "Pong!");
        // Send a message in the same channel with "Pong!"
    } else if(msg.content === "pong") { // Otherwise, if the message is "!pong"
        client.createMessage(msg.channel.id, "Ping!");
        // Respond with "Ping!"
    }
});
  
  
});

client.login(process.env.botToken);
