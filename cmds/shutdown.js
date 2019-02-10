const Discord = require("discord.js");

function shutdown(message, client, prefix) {
    if (message.content.startsWith(prefix + 'shutdown')) {
        if (message.author.id == "330030648456642562") {
            message.channel.send('Au revoir ! :wave:')
                .then(client.destroy())

        } else {
            message.channel.send('Vous ne pouvez pas lancer cette commande')
        }
    }
}

module.exports = shutdown;