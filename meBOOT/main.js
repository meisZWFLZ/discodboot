//above my comprehension:
const Discord = require('discord.js');
const bot = new Discord.Client();

//token
const mextkn = 'Nzg1OTI5ODEyNjIyODM1NzEz.X8_ALQ.20OFFrc0JU7DD8dNUZ_RSlDZdV4';
const wfltkn = 'NzczMDA0NjU3NzUxNjIxNjQy.X6C6sA.Eei2QdNAHiGsDjkn1k57rWoTwUM';

//debug: bool
const dbg = 1;
//debug: function
function debug(p1) {
    if (dbg) {
        console.log(p1);
}}
//prefix

const prefix1 = require("./prefix.json");
var prefix = (prefix1["prefix"][0]);
debug(prefix)

//Advanced Command Handler Set Up
function cmdhs(folder) {
const fs = require('fs');
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync(folder).filter(file => file.endsWith('.js'));
for( const file of commandFiles) {
    const command = require(folder + file);
    bot.commands.set(command.name, command)
}}
cmdhs("./commands/")

//commands
function cmdh (command, msg, args, prefix, debug, Discord, bot, cmdhs) {
    bot.commands.get(command).execute(msg, args, prefix, debug, Discord, bot, cmdhs);
}

//boot verifier
bot.on('ready', () =>{
    debug('Online!');
})

//on message
bot.on('message', msg=>{
    debug('MessageRecieved');

    //checks for prefix and user
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;

        //finds args + command
        const args = msg.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
        debug('PrefixDetected');
        debug(args);
        debug('command: ' + command);

        //command handler
        switch (command) {
            case "ping":
            cmdh(command, msg, args, prefix, debug, Discord, bot, cmdhs);
            break; 
            case "prefix":
            cmdh(command, msg, args, prefix, debug, Discord, bot, cmdhs);
            prefix = (prefix1["prefix"][0]);
            break;
            case "role":
            cmdh(command, msg, args, prefix, debug, Discord, bot, cmdhs);
            break;
            default:
            debug("No command found");
            break;
        }
})

//login
bot.login(wfltkn);