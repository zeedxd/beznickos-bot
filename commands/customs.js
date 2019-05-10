const Discord = require("discord.js");

module.exports.run = async (blaki, message, args) => {

    let Szefuncio = message.guild.roles.find("name", "SZEFUNCIO 🎓");

    let pass = (args[0]);
    let mode = args.join(" ").slice(7);

    if(!message.member.roles.has(Szefuncio.id)) return message.reply("oops");
    if(!args[0]) return message.channel.send("❌ _Wprowadź prawidłowe wartości, **b!ct hasło tryb**_ ❌").then(() =>
    {
        message.channel.send("❌ _**Hasło musi posiadać dokładnie 7 znaków!**_ ❌");
    })
    message.delete();
    let customEmbed = new Discord.RichEmbed()
    .setColor("#FF0000")
    .setTitle("__**POWIADOMIENIE O NOWEJ GRZE**__")
    .addField("HASŁO", `**${pass}**`)
    .addField("TRYB GRY", `**${mode}**`)
    .addField("ZASADY LATE GAME", "**» Więcej niż 50 osób, bijemy się od 3 strefy**", "**» Mniej niż 50 osób, bijemy się od 4 strefy**", "**» Nie bijemy pojazdów innych osób przed 3 lub 4 strefą**")
    .setTimestamp(message.createdAt)
    .setFooter("Kliknij reakcje jeśli grasz", "https://i.imgur.com/g10ycEV.png");
    
    message.channel.send(customEmbed).then(function (message) {
        message.react("✅")
    })
}

module.exports.help = {
    name: "ct"
}
