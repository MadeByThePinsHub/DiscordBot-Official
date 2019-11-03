const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
    await message.channel.send(``);
}

module.exports.help = {
    name: "deployinfo",
    description: "Gets deployment information",
    usage: "deployinfo"
}