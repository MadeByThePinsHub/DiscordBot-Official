# Discord.js Bot

A Discord bot which uses the Discord.js Library, with this bot we're using a Command Handler

**Notice:** If you want to make your Glitch private, click on the down arrow next to your project name then press the lock button.

**Notice:** If you would like your bot to run 24/7, Use [UptimeRobot](https://uptimerobot.com/), A service which allows you to monitor your bot and ping it for a duration of time.

## Prerequisites

You'll need:
 - A [Discord account](https://discordapp.com/register)
 - Permission to add accounts to a server, or your own server

## Steps to set up:

1. Create an App here: [https://discordapp.com/developers/applications/me](https://discordapp.com/developers/applications/me)
2. Create an App Bot User for your App by clicking "Create a Bot User"
3. Add the App Bot User to your Discord server using this link: `https://discordapp.com/oauth2/authorize?&client_id=<CLIENT ID>&scope=bot&permissions=2146958591` replacing `<CLIENT_ID>` with the Client ID found on the page of your App
4. Set the `TOKEN` value in `.env` using the Bot User token ("click to reveal" in the App page under the bot username)

When these are accomplished, we'll run the code first in `update-dependencies.sh` before the bot boots up, which may cause downtimes.

## The code

Unlike bots which store commands in bot.js, this bot stores commands in the commands folder.

For now the prefix is `!`, You can change it in the `.env` file.

We're using the [Discord.js](https://discord.js.org/#/) library to interact with the Discord API.

To check if the bot is working, check the logs to find "Connected to Discord API!"