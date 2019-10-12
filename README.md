# Discord.js Bot

A Discord bot which uses the Discord.js Library, with this bot we're using a Command Handler

## Prerequisites

You'll need:

- A [Discord account](https://discordapp.com/register)
- Permission to add accounts to a server, or your own server
- Git, Node.js (atleast latest 8.x release) and NPM or PNPM if using this on your machine

## How to deploy

### On Glitch
1. [Remix the app](https://glitch.com/edit/#!/remix/soapy-option) on Glitch
2. Create an App here: [https://discordapp.com/developers/applications/me](https://discordapp.com/developers/applications/me)
3. Create an App Bot User for your App by clicking "Create a Bot User"
4. Add the App Bot User to your Discord server using this link: `https://discordapp.com/oauth2/authorize?&client_id=<CLIENT ID>&scope=bot&permissions=2146958591` replacing `<CLIENT_ID>` with the Client ID found on the page of your App
5. Set the `TOKEN` value in `.env` using the Bot User token ("click to reveal" in the App page under the bot username)

### Local Deployment
1. Fork this app from [mirrored GitLab](https://gitlab.com/MadeByThePinsTeam-DevLabs/DiscordBot-Official) or [GitHub one](https://gitlab.com/MadeByThePinsHub/DiscordBot-Official) then clone to your machine.

When any of these deployment methods are accomplished, we'll run the code first in `bootup.sh` before the bot boots up, which may cause downtimes and CPU spikes (mostly happens on Glitch).

## The code

Unlike bots which store commands in bot.js, this bot stores commands in the commands folder.

For now the prefix is `!`, You can change it in the `.env` file.

We're using the [Discord.js](https://discord.js.org/#/) library to interact with the Discord API.

To check if the bot is working, check the logs to find "Connected to Discord API!"
