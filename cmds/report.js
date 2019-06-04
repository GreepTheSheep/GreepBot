const Discord = require('discord.js');

function report(message,client,prefix, args){
    if (message.content.startsWith(prefix+'report')){
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Cet utilisateur n'existe pas !");
    let reason = args.join(" ").slice(22);
    if (!reason) reason = 'Aucune raison';

    let reportembed = new Discord.RichEmbed()
    .setColor("ff0000")
    .setTitle("Signalement")
    .addField("Utilisateur signalé", `${rUser} | ***ID***: ${rUser.id}`)
    .addField("Signalé par", `${message.author} | ***ID***: ${message.author.id}`)
    .addField("Salon", message.channel)
    .addField("Heure et date du signalement", message.createdAt)
    .addField("Raison", reason)
    .setFooter(client.user.username)
    .setTimestamp();

    message.channel.send(':+1:');

    client.guilds.get('330047758813888517').channels.get('381227221358084109').send(reportembed)

    }   
}

    module.exports = report;