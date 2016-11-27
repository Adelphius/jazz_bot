const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}#${client.user.discriminator}`);
});

client.on('message', msg => {
    bee=msg+"";
  if (bee.indexOf('bee')){
    msg.reply('Ya like jazz?');
  } 
});

client.login('MjUyNTU4MTUyNjk0ODkwNDk2.Cx0B0g.7S81lUmz4oLGb7scs99JpJAc86U');