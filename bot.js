const Discord = require('discord.js');
const Commado = require('discord.js-commando');
const path = require('path');
const client = new Commado.CommandoClient({
    owner: "Bot Owner ID here",
    commandPrefix: "!",
    fetchAllMembers: true,
    commandEditableDuration: 10000,
    unknownCommandResponse: false,
    invite: "Support Server Invite here",
    selfbot: false
});
client.login("--TOKEN--")
client.registry
.registerDefaultGroups()
.registerGroups([
    ["basic", "Basic Commands"],
])
.registerDefaultCommands({
    ping: true,
    prefix: true,
    help: true,
    commandState: true,
    eval_: true
})
.registerDefaultTypes()
.registerCommandsIn(path.join(__dirname, 'commands'))