const Discord = require("discord.js");
const config = require('../config.json');

function reload(message, client, prefix) {
    if (message.content.startsWith(prefix + 'reload')) {
        if (message.author.id == "330030648456642562") {
            message.channel.send('Redmérrage en cours, veuillez patienter...'),
                (console.log(`Reload demandé par ${message.author.tag}`)),
                client.destroy()
                .then(client.login(config.token))
        } else {
            message.channel.send('Vous ne pouvez pas lancer cette commande')
        }
    }
}

module.exports = reload;