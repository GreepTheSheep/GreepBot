const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('apprendre le JS');
});


client.on('message', msg => {

    if (msg.content === 'ping') {
        msg.channel.send('Pong ! ');
    }
    if (msg.content === 'react') {
        msg.react('👍')
            .catch(console.error);
    }
    if (msg.content === 'spoil') {
        msg.channel.send('||Quand j apprends le JS, je peux hacker la NASA||');
    }
});

client.login('NTQxMzkwMjg1MDk2MjIyNzMw.DzewqQ.vL7ymjpKPkiNFtvpUp09wMq4m24');