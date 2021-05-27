const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Logged in as ${client.user.tag}!');
})

client.on('message', msg => {
  if(msg.content == '/help') {
    msg.reply('I am a Bot and here to help')
  }
})
