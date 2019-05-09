const Discord = require("discord.js");

module.exports.run = async (blaki, message, args) => {

    let helpEmbed = new Discord.RichEmbed()
    .setDescription("DOSTĘPNE KOMENDY")
    .setColor("#ff0000")
    .addField("b!report @użytkownik powód")
    .setTimestamp(message.createdAt)
    .setFooter('POMOC', 'https://i.imgur.com/g10ycEV.png');

    message.channel.send(helpEmbed);

}
 
module.exports.help = {
  name: "help"
}