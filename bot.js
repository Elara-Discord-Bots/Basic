const {CommandoClient} = require('discord.js-commando'),
      client = new CommandoClient({
        owner: ["The bot owner's user ID"],
        commandPrefix: "!",
        fetchAllMembers: true,
        commandEditableDuration: 10000,
        invite: "https://discord.gg/InviteHere",
      });


client.registry
      .registerDefaultGroups()
      .registerGroups([
      ["basic", "Basic Commands"]
      ])
      .registerDefaultCommands({
            ping: true, 
            prefix: true, 
            help: true, 
            commandState: true, 
            eval_: true,
            unknownCommand: false
      })
      .registerDefaultTypes()
      .registerCommandsIn(require('path').join(__dirname, 'commands'))

client.login("--TOKEN--")
