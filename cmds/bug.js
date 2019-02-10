const Discord = require("discord.js");

function bug(message, client, prefix) {

    if (message.content.startsWith(prefix + 'bug' || 'issue')) {
        message.channel.send('Tu as un problème avec le bot ? Explique le ici : https://github.com/GreepTheSheep/GreepBot/issues');
    }
}

module.exports = bug;