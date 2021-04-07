const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '!';
const token = 'ODI5MjE5NDQ2NjY5MTgwOTM4.YG08yg.RHk7htXwp6yTXJdyu9RopfJhIPc';
 
bot.on('ready', () => {
    console.log(`${bot.user.tag} successfully logged in!`)
    bot.user.setActivity('the commands', ({type: "LISTENING"}))
})
 
bot.on('message', message => {
    let msg = message;
    if(msg.content === 'benji1'){
        msg.channel.send(`https://cdn.discordapp.com/attachments/829226841222676490/829227415892131850/7160.png_2.png ${message.author.tag}`)
    }
    
    
})
 
bot.login(token);


bot.on('message', message => {
    let msg = message;
    if(msg.content === 'benji2'){
        msg.channel.send(`https://cdn.discordapp.com/attachments/829226841222676490/829227461903777812/20210321_130528.jpg ${message.author.tag}`)
    }
    
})

bot.on('message', message => {
    let msg = message;
    if(msg.content === 'benji3'){
        msg.channel.send(`https://cdn.discordapp.com/attachments/829226841222676490/829227533659668510/20210313_145530.jpg ${message.author.tag}`)
    }
    
    
})

bot.on('message', message => {
    let msg = message;
    if(msg.content === 'benji4'){
        msg.channel.send(`https://cdn.discordapp.com/attachments/829226841222676490/829227534490402836/20210309_202848.jpg ${message.author.tag}`)
    }
    
    
})

bot.on('message', message => {
    let msg = message;
    if(msg.content === 'benji5'){
        msg.channel.send(`https://cdn.discordapp.com/attachments/829226841222676490/829227586714468362/20210213_024311.jpg ${message.author.tag}`)
    }
    
    
})

bot.on('message', message => {
    let msg = message;
    if(msg.content === 'benji6'){
        msg.channel.send(`https://cdn.discordapp.com/attachments/829226841222676490/829227587305603082/20210206_170127.jpg ${message.author.tag}`)
    }
    
    
})

bot.on('message', message => {
    let msg = message;
    if(msg.content === 'benji7'){
        msg.channel.send(`https://cdn.discordapp.com/attachments/829226841222676490/829227714561048587/20210113_151758.jpg ${message.author.tag}`)
    }
    
    
})

bot.on('message', message => {
    let msg = message;
    if(msg.content === 'benji8'){
        msg.channel.send(`https://cdn.discordapp.com/attachments/829226841222676490/829227715043131402/SAM_1035.JPG ${message.author.tag}`)
    }
    
    
})

