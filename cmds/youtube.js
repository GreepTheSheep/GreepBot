const Discord = require("discord.js");

function youtube(message, client, prefix, args) {

    if (message.content.startsWith(prefix + 'yt') || message.content.startsWith(prefix + 'youtube')) {
        if (args.length < 1) return message.channel.send('Vous devez entrer quelque chose à rechercher !');

        let embed = new Discord.RichEmbed()
        embed.setColor("#00ff00")
            .setTimestamp()
            .addField("Voila votre recherche", `Recheche [Youtube]: \n [${args.join(" ")}](https://www.youtube.com/results?search_query=${args.join("%20")})`)
            .setThumbnail("https://media.giphy.com/media/2LA53y7maD8is/giphy.gif")
            .setFooter("Recherche YT ", "https://media.giphy.com/media/2LA53y7maD8is/giphy.gif")
            .setFooter("GreepBot : Restez toujours un 🐑! | ", `${client.user.avatarURL}`)
        message.channel.sendMessage({ embed: embed });
    }
}

module.exports = youtube;