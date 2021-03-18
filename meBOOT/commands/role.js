//role command
module.exports = {
    name: "role",
    description: "Manage roles",
    usage: "!role create stinky, !role add @penguinotux",
    execute(msg, args, prefix, debug, bot, cmdhs) {
        
        // //subcmd handler setup
        // cmdhs("./role_subcmd")
        const Discord = require('discord.js');
        const fs = require('fs');
        bot.commands = new Discord.Collection();
        const commandFiles = fs.readdirSync("./commands/subcmds/").filter(file => file.endsWith('.js'));
        for( const file of commandFiles) {
            const command = require( "./commands/subcmds/" + file).catch(console.error);
            bot.commands.set(command.name, command).catch(console.error);
        }
        function cmdh (command, msg, args, prefix, debug, Discord, bot, cmdhs) {
            bot.commands.get(command).execute(msg, args, prefix, debug, Discord, bot, cmdhs);
        }
        
        //defines subcmd
        subcmd = `role:${args[0]}`;
        debug("cmd: " + subcmd);
        
        //subcmd handler
        switch (subcmd) {
            case "create":
            cmdh(subcmd, msg, args, prefix, debug, Discord, bot);
            break; 
            msg.channel.send("Invalid sub-command, please try again")
            debug("Invalid subcmd");
            break;
        }













        
        
        // //perm check
        // if(msg.member.id === "513806934512762882" || msg.member.permissions.has("ADMINISTRATOR")) {

        //     //create subcmd
        //     if (subcmd === "create") {
        //         msg.guild.roles.create({ data: { name: args[1], permissions: [], color: "RANDOM" } });
        //         msg.channel.send("I have created the role!");
        //     } else {

        //         //role definitions
        //         let role1 = msg.guild.roles.cache.find(r => r.name === args[1]);
        //         role = new Discord.Role(bot, role1, msg.guild);

        //         //valid input check
        //         if(role1 === undefined) {
        //             return msg.channel.send("bad input, get better");
        //         }

        //         //edit subcmd
        //         if(subcmd === "edit") {
        //             if(!role.editable) {
        //                 return msg.channel.send("Me no can edit this role");
        //             }
        //             arg2 = args[2];
        //             debug(arg2);
        //             role.edit({ color: "#FF00FF"});
        //             msg.channel.send("me did it")
        //         } else 
                
        //         //delete subcmd
        //         if (subcmd === "delete") {
        //             if(!role.editable) {
        //                 return msg.channel.send("Me no can delete this role");
        //             }
        //             role.delete(args[2]);
        //         } else 
                
        //         //id subcmd
        //         if (subcmd === "id") {
        //             msg.channel.send(role1.id);
        //         }}
        //     } else msg.channel.send("bad");




        // msg.guild.roles.create({ data: { name: 'stinky', permissions: [] } });
        // msg.channel.send("Alright, lemme get on that!");
        // let role = msg.guild.roles.cache.find(r => r.name === "stinky");
        // msg.member.roles.add(role).catch(console.error);
    }
}