const discord = require('discord.js');
const bot = new discord.Client();

const token = 'NzY1NjI2OTU2OTY3ODM3NzE3.X4Xjqw.2LAWE9k1tKaF_KKPJEqYal6dylU';

bot.on('ready', () => {
    console.log('Bot is online');
});

messageList = [
    'Oh wonderful choice',
    'I don\'t like this song',
    'This is nice.',
    'Beautiful',
    'Please change your music taste :P',
    'Ouuu melodious',
    'I like this one',
    'C\'mon, you can do better',
    'Now thats what Im talking about.',
    'Awesome!!!'
]

bot.login(token);

bot.on('message', msg => {
    if (msg.content.indexOf('-p ') !== -1) {
        index = Math.floor(Math.random() * 10);
        msg.channel.send(messageList[index]);
    }
})