// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith('k!kick')) {
    // Assuming we mention someone in the message, this will return the user
    if(!message.guild.member(message.author).hasPermission("VIEW_AUDIT_LOG")) return message.reply("Vous n'avez pas la permission de kick")
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member.kick('Optional reason that will display in the audit logs').then(() => {
          // We let the message author know we were able to kick the person
          message.reply(`Terminé   ${user.tag} a été expulsé du serveur`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to kick the member,
          // either due to missing permissions or role hierarchy
          message.reply('I was unable to kick the member');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('That user isn\'t in this guild!');
      }
    // Otherwise, if no user was mentioned
    } else {
      message.reply('You didn\'t mention the user to kick!');
    }
  }
});


client.login('NjQzNDM4MDkwMDg1NTk3MTg2.XdFtFA.NaGoy_xx03qn3HHUBzhbQVYc3Mg');

// Import the discord.js module

// Create an instance of a Discord client

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // if the message content starts with "!ban"
  if (message.content.startsWith('k!ban')) {
    // Assuming we mention someone in the message, this will return the user
    if(!message.guild.member(message.author).hasPermission("VIEW_AUDIT_LOG")) return message.reply("Vous n'avez pas la permission de ban")
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=ban
         */
        member.ban({
          reason: 'They were bad!',
        }).then(() => {
          // We let the message author know we were able to ban the person
          message.reply(`Fini ! ${user.tag}`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to ban the member,
          // either due to missing permissions or role hierarchy
          message.reply('I was unable to ban the member');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('That user isn\'t in this guild!');
      }
    } else {
  
      message.reply('You didn\'t mention the user to ban!');
    }
  }
});


client.login('NjQzNDM4MDkwMDg1NTk3MTg2.XdFtFA.NaGoy_xx03qn3HHUBzhbQVYc3Mg');


client.on('ready', () => {
  console.log('I am ready!');
});


client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'k!dev') {
   
    message.channel.send("https://twitter.com/KurokoFN");
  }
});



client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'k!help') {
   
    message.channel.send("***LES COMMANDES : k!avatar : Affiche ton avatar | k!dev : Affiche le Twitter du dev | k!kick : Expulse une personne malvaillante (seulement les admins peuvent l'utilisé) | k!meme : affiche un raton laveur qui danse sa mère ! | k!ban : Banni une personne malvaillante (seulement les admins)***");
  }
});

client.login('NjQzNDM4MDkwMDg1NTk3MTg2.XdFtFA.NaGoy_xx03qn3HHUBzhbQVYc3Mg');


client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {

  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
 
  if (!channel) return;

  channel.send(`Bienvenue dans le serveur, ${member} on espera que il te plaira !`);
});


client.login('NjQzNDM4MDkwMDg1NTk3MTg2.XdFtFA.NaGoy_xx03qn3HHUBzhbQVYc3Mg');


const { Client, Attachment } = require('discord.js');




client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
   
    if (message.content === 'k!meme') {
       
      message.reply("https://cdn.discordapp.com/attachments/636271941388337175/643441200291905538/-qXIpSzskv-MAGUu.mp4");
       
    }
});


client.login('NjQzNDM4MDkwMDg1NTk3MTg2.XdFtFA.NaGoy_xx03qn3HHUBzhbQVYc3Mg');


client.on('ready', () => {
  console.log('I am ready!');
});


client.on('message', message => {
  
  if (message.content === 'k!avatar') {
    
    message.reply(message.author.avatarURL);
  }
});


client.login('NjQzNDM4MDkwMDg1NTk3MTg2.XdFtFA.NaGoy_xx03qn3HHUBzhbQVYc3Mg');




    


client.on('ready', () => {
  console.log('I am ready!');
});



client.login('NjQzNDM4MDkwMDg1NTk3MTg2.XdFtFA.NaGoy_xx03qn3HHUBzhbQVYc3Mg');

client.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === 'k!vocal') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
      message.reply('Tu dois rejoindre la vocal en premier !');
    }
  }
});

