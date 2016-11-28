const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}#${client.user.discriminator}`);
});

client.on('message', msg => {
    bee=msg+"";
    bee=bee.toLocaleLowerCase();
  if (bee.indexOf('bee')!= -1){
    msg.reply('Ya like jazz?');
  } 
});

client.login('token');