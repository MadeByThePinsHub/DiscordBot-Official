const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
    await message.channel.send(``);
}

module.exports.help = {
    name: "about",
    description: "Shows information about this bot",
    usage: "about"
}