const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
    await message.channel.send(`The server can respond to API requests at ${Date.now() - message.createdTimestamp}ms. If higher than **200ms**, please [contact support immediately](https://support.devhubcentral.ml/contact) about this issue.`);
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}