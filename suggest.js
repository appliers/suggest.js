const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "suggest",
  category: "main",
  usage: "<message>",
    description: "suggest anything you wanted to",
    run: async (message, args) => {
    // reasoning definition
    let suggestion = args.slice(" ");
    if (!suggestion)
      return message.channel.send(`Please provide a suggestion!`)

    // grab reports channel
    let sChannel = message.guild.channels.cache.find(x => x.name === "suggestions");
      if(!sChannel) return message.channel.send("You dont have channel with name `suggestions`")
    // send to reports channel and add tick or cross
    message.channel 
      .send("Your suggestion has been filled to the staff team. Thank you!")
    let suggestembed = new MessageEmbed()
      .setTimestamp()
      .addField(`Suggestion:`, `${suggestion}`)
      .setColor('#ff2052')
      .addFooter(`New suggestion from ${message.author.tag}`)
      .setTimestamp();
    sChannel.send(suggestembed).then(async msg => {
      await msg.react("✅");
      await msg.react("❌");
    });
  }
};

//WORK ON IT IN .JS
