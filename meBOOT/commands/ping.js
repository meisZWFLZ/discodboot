//ping command
module.exports = {
    name: "ping",
    description: "Ping the boot",
    usage: "!ping",
    execute(msg, args, prefix, debug){
        msg.channel.send('***Pong! ||?ms||***');
}}