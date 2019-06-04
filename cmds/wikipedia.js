const Discord = require("discord.js");

function wikipedia(message, client, prefix, args) {

    if (message.content.startsWith(prefix + 'wikipedia') || message.content.startsWith(prefix + 'wiki')) {
        if (args.length < 1) return message.channel.send('Vous devez entrer quelque chose à rechercher !');
        
        let embed = new Discord.RichEmbed()
        embed.setColor("#00ff00")
            .setTimestamp()
            .addField("Voila votre recherche", `Recheche [Wikipédia]: \n [${args.join(" ")}](https://fr.wikipedia.org/w/index.php?search=${args.join("+")})`)
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/9/98/New-Bouncywikilogo.gif")
            .setFooter("GreepBot : Restez toujours un 🐑! | ", `${client.user.avatarURL}`)
        message.channel.send({ embed: embed });
    }
}

module.exports = wikipedia;