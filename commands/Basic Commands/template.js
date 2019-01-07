const { Command } = require('discord.js-commando');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "basic",
            memberName: "basic",
            aliases: [],
            examples: [`${client.commandPrefix}basic`],
            description: "Template command",
            group: "basic",
        })
    }
    async run(message) {
     
    }
}
