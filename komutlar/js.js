const Discord = require('discord.js'); //Oyun Elitleri, Chyper Code
exports.run = (client, message, args) => {
   message.member.addRole("738765642848796692") // verielcek js rolünün id si
   const embed = new Discord.RichEmbed()
   .setAuthor('')
   .setColor("RED")        //Oyun Elitleri GLOBAL Discord Bot
.setTitle('<a:ticky:737340591700181041>') //120.000+ kullanıcı!
.setDescription(`${message.author.tag}, <@&738765642848796692> Rolünü aldın`)
   .setImage(`https://cdn.discordapp.com/attachments/696313270042361856/706649198657011742/OyunElitleri-js-gif.gif`)
return message.channel.send(embed);
  }

exports.conf = {              //Her zamanki gibi dostlar, kullanmak serbest editlemek yasak :)
  enabled: true,             //Her zamanki gibi dostlar, kullanmak serbest editlemek yasak :)
  guildOnly: false,         //Her zamanki gibi dostlar, kullanmak serbest editlemek yasak :)
  aliases: ['javascript','js-al','jsal']
};

exports.help = {
  name: 'js',
  description: 'Oyun Elitleri',
  usage: 'js)'
};