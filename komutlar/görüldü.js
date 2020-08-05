const Discord = require("discord.js");

exports.run = function(client, message, args) {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      `:no_entry: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`
    );
  let botisim = args[0];
  let sahip = args[1];
  let sebep = args[2];
  let log = "730435453773414400"; // bot eklendi / onaylandı / reddedildi kanalı id eklemeyi unutma yoksa çalışmaz!

  if (!botisim)
    return message.channel
      .send(`:no_entry: Botun idsini yazmalısın.`)
      .then(msg => msg.delete(10000));
  if (!sahip)
    return message.channel
      .send(`:no_entry: Bot Sahibi id yazman lazım.`)
      .then(msg => msg.delete(10000));
  client.channels
    .get(log)
    .send(
      `:tada: <@${sahip}> adlı kişinin <@${botisim}> adlı bot görüldü. Yakında Onaylanıp/Reddedilecek.`
    );
  message.channel
    .send(`:white_check_mark: Botu Görüldü Ye Aldınız.`)
    .then(msg => msg.delete(10000));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gör", "bot-görüldü"],
  permLevel: 0
};

exports.help = {
  name: "görüldü",
  description: "Sunucuya eklenen botu reddeder.",
  usage: "botreddet <bot ismi> - <sebep>"
};
