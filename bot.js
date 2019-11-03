const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const http = require("http");
const express = require("express");
const app = express();

const discord_token = process.env.TOKEN;
const prefix = process.env.PREFIX;

client.on("ready", () => {
  console.log("Successfully connected to Discord API! To avoid any service interrputions, check your cloud service's documentation about their technical limitations");
});

app.get("/", (request, response) => {
  console.log("We received response/webhook request from the API. Replying...");
  console.log("Successfully sent response to Discord API!")
  response.sendStatus(200);
});

// This keeps the bot running 24/7
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); // Change this into what your app domain you use.
}, 280000);

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;

  // This is the best way to define args. Trust me.
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  // The list of if/else is replaced with those simple 2 lines:
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});

client.on('check bot status', message => {
  const channel = (ch => ch.name === 'botstatus-updates');
    if (!channel) {
      const botstatus_embed = new RichEmbed()
        // Set the title of the field
        .setTitle('Bot now online')
        // Set the color of the embed
        .setColor(0x49FC00)
        // Set the main content of the embed
        .setDescription('Congratulations! The bot is now up and running.');
      message.channel.send(botstatus_embed);
    } else {
        const error_botstatus_embed = new RichEmbed()
          .setTitle('No channel found')
          .setDescription('The bot tried to look for `#botstatus-updates` channel, but nothing we found.')
    }
  }
});


client.login(discord_token);
