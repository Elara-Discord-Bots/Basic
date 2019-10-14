const {CommandoClient} = require('discord.js-commando'),
      client = new CommandoClient({
        owner: ["Bot Dev id"],
        commandPrefix: "!",
        fetchAllMembers: true,
        commandEditableDuration: 10000,
        unknownCommandResponse: false,
        invite: "https://discord.gg/InviteHere",
      });
client.registry.registerDefaultGroups().registerGroups([["basic", "Basic Commands"]]).registerDefaultCommands({ping: true, prefix: true, help: true, commandState: true, eval_: true}).registerDefaultTypes().registerCommandsIn(require('path').join(__dirname, 'commands'))
client.login("--TOKEN--")
