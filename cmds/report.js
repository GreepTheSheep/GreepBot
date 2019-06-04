const Discord = require('discord.js');

function report(message,client,prefix, args){
    if (message.content.startsWith(prefix+'report')){
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Cet utilisateur n'existe pas !");
    let reason = args.join(" ").slice(22);

    let reportembed = new Discord.RichEmbed()
    .setColor("ff0000")
    .setTitle("signaler")
    .addField("utilisateur signale", `${rUser} | ***ID***: ${rUser.id}`)
    .addField("signaler par", `${message.author} | ***ID***: ${message.author.id}`)
    .addField("salon", message.channel)
    .addField("heur et date du signalement", message.createdAt)
    .addField("raison", reason)
    .setFooter(client.user.username)
    .setTimestamp();

    message.channel.send(reportembed);

    }   
}

    module.exports = report;