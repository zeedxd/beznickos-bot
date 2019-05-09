const Discord = require("discord.js");

module.exports.run = async (blaki, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGE")) return message.reply("oops");
    if(!args[0]) return message.channel.send("oops");
    
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Wyczyszczono ${args[0]} wiadomości.`).then(msg => msg.delete(2000));
    });
}

module.exports.help = {
    name: "clear"
}