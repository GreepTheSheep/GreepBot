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
    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);

    const ping = require('./cmds/ping.js');
    ping(message, client, prefix);

    const google = require('./cmds/google.js');
    google(message, client, prefix, args);

    const report = require('./cmds/report.js');
    report(message, client, prefix, args);

    const youtube = require('./cmds/youtube.js');
    youtube(message, client, prefix, args);

    const wikipedia = require('./cmds/wikipedia.js');
    wikipedia(message, client, prefix, args);

    const bug = require('./cmds/bug.js');
    bug(message, client, prefix);

    const reload = require('./cmds/reload.js');
    reload(message, client, prefix);

    const shutdown = require('./cmds/shutdown.js');
    shutdown(message, client, prefix);
});

client.login(config.token);