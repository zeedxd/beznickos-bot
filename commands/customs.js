const Discord = require("discord.js");

module.exports.run = async (blaki, message, args) => {

    let Szefuncio = message.guild.roles.find("name", "SZEFUNCIO 🎓");
    let pass = args[1];
    let mode = args[0];

    if(!message.member.roles.has(Szefuncio.id)) return message.reply("oops");
    if(!args[0]) return message.channel.send("❌ Wprowadź prawidłowe wartości, b!custom tryb hasło ❌");
    else {
        message.delete();
        let customEmbed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setTitle("__**POWIADOMIENIE O NOWEJ GRZE**__")
        .addField("HASŁO", `**${pass}**`, true)
        .addField("TRYB GRY", `**${mode}**`, true)
        .setTimestamp()
        .setFooter("Kliknij reakcje jeśli grasz", "https://i.imgur.com/g10ycEV.png");
        
        message.channel.send(customEmbed).then(function (message) {
            message.react("✅")
        })
    }
}

module.exports.help = {
    name: "custom",
    name: "c"
}
