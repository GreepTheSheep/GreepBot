const Discord = require("discord.js");

function google(message, client, prefix, args) {

    if (message.content.startsWith(prefix + 'google')) {
        if (args.length < 1) return message.channel.send('Vous devez entrer quelque chose à rechercher !');
            let embed = new Discord.RichEmbed()
            embed.setColor("#00ff00")
                .setTimestamp()
                .addField("Voila votre recherche", `Recheche [Google]: \n [${args.join(" ")}](https://www.google.fr/#q=${args.join("%20")})`)
                .setThumbnail("http://www.slate.com/content/dam/slate/blogs/future_tense/2015/09/01/google_s_new_animated_logo_is_the_future_of_mobile_branding/google_logo.gif.CROP.original-original.gif")
                .setFooter("Recherche Google ", "http://www.slate.com/content/dam/slate/blogs/future_tense/2015/09/01/google_s_new_animated_logo_is_the_future_of_mobile_branding/google_logo.gif.CROP.original-original.gif")
                .setFooter("GreepBot : Restez toujours un 🐑! | ", `${client.user.avatarURL}`)
            message.channel.send({ embed: embed });
        }
    }

module.exports = google;