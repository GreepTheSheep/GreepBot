const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const package = require('./package.json');

const actmsgs = [
    `Created by ${package.author}`,
    `Version ${package.version}`,
    `apprendre le JS`,
    `greep-team.epizy.com`,
    `vous faire amuser avec un mouton !`
];

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.guilds.get('330047758813888517').channels.get('458290375174651935').send(`**__<@${client.user.id}> version ${package.version} by ${package.author}__** : :white_check_mark:`)
    client.user.setActivity(`demarrer tranquilement...`)

    const actfunction = new Promise(function(resolve, reject) {
        setInterval(function() {
            let actmsg = randomItem(actmsgs);
            client.user.setActivity(`${actmsg}`)
        }, 60000);
    });
    actfunction
});

var prefix = config.prefix
client.on('message', message => {

    const ping = require('./cmds/ping.js');
    ping(message, client, prefix);

    const google = require('./cmds/google.js');
    google(message, client, prefix);

    const youtube = require('./cmds/youtube.js');
    youtube(message, client, prefix);

    const bug = require('./cmds/bug.js');
    bug(message, client, prefix);

    const reload = require('./cmds/reload.js');
    reload(message, client, prefix);

    const shutdown = require('./cmds/shutdown.js');
    shutdown(message, client, prefix);
});

client.login(config.token);