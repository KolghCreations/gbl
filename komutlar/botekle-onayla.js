const Discord = require('discord.js');


exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:no_entry: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
	let botisim = args[0]
  let sahip = args[1]
	let log = "730435453773414400" // bot eklendi / onaylandı / reddedildi kanalı id eklemeyi unutma yoksa çalışmaz!
	
	if (!botisim) return message.channel.send(`:no_entry: Botun idsini yazmalısın.`).then(msg => msg.delete(10000))
    if (!sahip) return message.channel.send(`:no_entry: Bot Sahibi id yazman lazım.`).then(msg => msg.delete(10000))
  message.delete()
		client.channels.get(log).send(`<a:ticky:737340591700181041> | <@${sahip}> adlı kişini <@${botisim}> adlı botu onaylandı. Onaylayan yetkili : ${message.author}`);
		message.channel.send(`:white_check_mark: | Botu onayladınız.`).then(msg => msg.delete(10000))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['onayla', 'kabul'],
  permLevel: 0
};

exports.help = {
  name: 'bot-onayla', 
  description: "Sunucuya eklenen botu onaylar",
  usage: 'onayla botid sahipid'
};