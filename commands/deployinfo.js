const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
    const deploymentinfo_embed = new RichEmbed()
        // Set the title of the field
        .setTitle('Deployment information')
        // Set the color of the embed
        .setColor(0x49FC00)
        // Set the main content of the embed
        .setDescription('Deployment ID: $(process.env.DEPLOYMENT_KEY)\nHosted on:');
    await message.channel.send(deploymentinfo_embed);
}

module.exports.help = {
    name: "deployinfo",
    description: "Gets deployment information",
    usage: "deployinfo"
}