const { writeFile } = require("fs");

//prefix command
module.exports = {
    name: 'prefix',
    description: "Changes prefix",
    execute(msg, args, prefix, debug, fs) {
        if (args.length === 0) {
            return msg.channel.send("The prefix is " + prefix);      
        } else if(msg.member.permissions.has("ADMINISTRATOR")) {
            if(args.length === 1) {
                
                //prefix set
                prefix = args;
                msg.channel.send("Prefix set: " + args);
                debug("prefix: " + prefix);

                //prefix save
                const prefix1 = require("../prefix.json");
                prefix1["prefix"] = prefix;
                debug("prefix1: " + prefix1["prefix"])
                writeFile("prefix.json", JSON.stringify(prefix1), err => {if(err) console.error(err);})
            } else {
                msg.channel.send("That cannot be a prefix!");
                debug("prefix failed: bad input");
            }
        } else msg.channel.send("You are not allowed to use this command ||get gud lol!!||");
}}