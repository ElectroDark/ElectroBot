const Discord = require('discord.js');
const Client = new Discord.Client();
const fs = require("fs");
const low = require('lowdb')
const fileSync = require('lowdb/adapters/fileSync')

const adapter = new fileSync('database.json')
const db = low(adapter)

var PREFIX = "etb?";
var message = message;

Client.on("ready", () => {
    console.log('Je suis prêt !')
    Client.user.setGame("etb?help | v1.0")})


Client.login('votre token')

Client.on('message', message => {

    if(message.content === 'etb?help') {
        message.delete(1)
        var help_embed = new Discord.RichEmbed()
        .setColor("#d62fcd")
        .setTitle("ElectroBot v1.0 | Commandes disponibles")
        .addField("etb?help", "affiche toutes les commandes disponibles pour le moment.")
        .addField("préfixe", "Permet de te donner le préfixe du bot.")
        .addField("etb?bonjour", "Pour dire bonjour au bot.")
        .addField("etb?ping", "Tu n'aimes pas jouer au ping pong ?")
        .addField("etb?calin", "Si tu m'aimes tu adoreras cette commande !")
        .addField("etb?bvn", "Pour souhaiter la bienvenue à un nouveau membre du serveur.")
        .addField("etb?invite", "Te donnes le lien pour m'inviter sur votre serveur.")
        .addField("etb?pb", "Tu as un problème avec le bot ? Alors cette commande te permettras de rejoindre mon serveur de support afin de faire part de ton problème et de le résoudre.")
        .addField("etb?serverinfo", "Donnes des informations sur le serveur où a été effectuée la commande.")
        .addField("etb?userinfo", "Donne des informations sur l'utilisateur qui fait la commande (en cours de développement).")
        .addField("etb?ban", "Permet de bannir un membre du serveur.")
        .addField("etb?warn", "Permet d'avertir un membre du serveur.")
        .addField("etb?kick", "Permet d'expulser un membre du serveur.")
        .addField("etb?livecount", "Donne le nombre de personnes actuellement sur le serveur.")
        .addField("Autres commandes", "Les autres commandes arrivent en version suivante donc n'hésitez pas à nous faire part des suggestions que vous avez :wink:")
        .setFooter("Menu d'aide | © ElectroBot 2018")
        message.reply("je t'ai envoyé ton menu d'aide en message privé ! :envelope_with_arrow:")
        message.author.send(help_embed)
        console.log("Menu d'aide envoyé")
    }

    if(message.content === 'etb?bvn') {
        message.delete(1)
        message.channel.send(`Hey le nouveau ! Bienvenue sur **___${message.guild}___** ! Nous espérons que tu t'amuseras comme un fou :hugging: :tada: Penses aussi à lire le **_règlement_** et les **_informations_** :wink: `)
        console.log("Message de bienvenue envoyé")
    }

    if(message.content === 'etb?bonjour') {
        message.delete(1)
        message.reply('bonjour :smiley:')
        console.log("Le bot dit bonjour.")
    }

    if(message.content === 'etb?ping') {
        message.delete(1)
        message.channel.send(":ping_pong: **pong !**")
        console.log("Le bot joue au ping pong avec un utilisateur.")
    }

    if(message.content === 'etb?calin') {
        message.delete(1)
        message.reply("je t'adores fais-moi un gros calin :heart_eyes:")
    }

    if(message.content === 'préfixe') {
        message.delete(1)
        var préfixe_embed = new Discord.RichEmbed()
        .setColor("#d62fcd")
        .setTitle("ElectroBot | Préfixe")
        .addField("Préfixe de ElectroTechBot", "etb? + la commande. Pour plus d'infos sur mes commandes tapez la commande ``etb?help`` (bientôt disponible).")
        .setFooter("Demande du préfixe | © ElectroBot 2018")
        message.channel.send(préfixe_embed)
        console.log("Demande de préfixe envoyée")
    }

    if(message.content === 'etb?invite') {
        message.delete(1)
        var invitation_embed = new Discord.RichEmbed()
        .setColor("#d62fcd")
        .setTitle("ElectroBot | invitation du BOT")
        .addField("Voici mon lien d'invitation afin que vous puissiez m'ajouter dans votre serveur !", "https://discordapp.com/oauth2/authorize?client_id=444942908617916426&scope=bot&permissions=2146958591")
        .addField("Voici aussi mon serveur dédié au support en cas de problèmes rencontrés.", "https://discord.gg/gVTESB2")
        .setFooter("Demande d'invitation du bot sur un serveur | © ElectroBot 2018")
        message.channel.send(invitation_embed)
        console.log("Demande d'invitation envoyée.")
    }

    if(message.content === 'etb?pb') {
        message.delete(1)
        var pb_embed = new Discord.RichEmbed()
        .setColor("#d62fcd")
        .setTitle("ElectroBot | Nous signaler un problème")
        .addField("Vous rencontrez des problèmes ou des crashs avec le bot ? Alors rendez-vous sur le serveur de mon créateur, il pourra sûrement vous aider avec plaisir !", "https://discord.gg/gVTESB2")
        .setFooter("Report d'un problème | © ElectroBot 2018")
        message.channel.send(pb_embed)
        console.log("Demande de support anvoyée.")
    }

    if(message.content === 'etb?serverinfo') {
        message.delete(1)
        var serverinfo = new Discord.RichEmbed()
        .setColor("#d62fcd")
        .setTitle(`ElectroBot | Informations serveur`)
        .addField("Nom du serveur", message.guild)
        .addField("ID du serveur", message.guild.id)
        .setThumbnail(message.guild.iconURL)
        .addField("Propriété du serveur", message.guild.owner)
        .addField("Date de création", message.guild.createdAt)
        .addField("Région du serveur", message.guild.region)
        .addField("Nombre de personnes sur le serveur", message.guild.memberCount)
        .addField("Nombres de salons", message.guild.channels.size)
        .addField("Nombre de rôles", message.guild.roles.size)
        .addField("Salon AFK", message.guild.afkChannel)
        .addField("Niveau de vérification", message.guild.verificationLevel)
        .setFooter("Informations serveur | © ElectroBot 2018")
        message.channel.send(serverinfo)

    }

    if(message.content === 'etb?userinfo') {
        message.delete(1)
        var userinfo = new Discord.RichEmbed()
        .setColor("#d62fcd")
        .setTitle("ElectroBot | Informations utilisateur")
        .addField("Nom de compte", message.author.username.discriminator)
        .addField("ID de compte", message.author.id)
        .setThumbnail(message.author.iconURL)
        .addField("Date de création", message.author.createdAt)
        .addField("A rejoint le serveur le", message.member.join)
        .setFooter("Informations utilisateur | © ElectroBot 2018")
        message.channel.send(userinfo)
    }

    if(message.content === 'etb?livecount') {
        message.delete(1)
        message.channel.send(`Nous sommes **${message.guild.memberCount} personnes** sur le serveur **${message.guild}.**`)
    }

    if (!message.guild) return;
 
    if(message.content.startsWith("etb?warn")){
        message.delete(1)
 
        var myrole = message.guild.member(Client.user).hasPermission("KICK_MEMBERS");
        var yourole = message.guild.member(message.author).hasPermission("KICK_MEMBERS");
        var logs =  message.guild.channels.find('name', 'logs');
        var report = message.member.id;
        var helpban = new Discord.RichEmbed()
              .setColor("#d62fcd")
             .addField("ElectroBot | Warn d'un membre", "_ _")
             .addField("Utilité de la commande", "``etb?warn + mention + raison du warn``")
             .setFooter("Warn d'un membre | © ElectroBot 2018")
        if(!message.mentions.users.first())
        return message.channel.sendEmbed(helpban)
        var member = message.mentions.users.first();
        var reason = message.content.split(" ").slice(2).join(" ");
        var banerreur = new Discord.RichEmbed()
            .setColor("#d62fcd")
             .addField("ElectroBot | Warn d'un membre", "_ _")
             .addField("Erreur du warn", "Vous n'avez pas les permissions nécessaires afin de warn cette personne. Contactez un administrateur du serveur afin qu'il vous attribue les permissions nécessaires.")
             .setFooter("Warn d'un membre | © ElectroBot 2018")
       
        if(!reason) reason = "Aucune raison indiquée.";
        if(!myrole){
            message.channel.send("Je n'ai pas la permission nécessaire afin de warn cette personne. Vérifiez que cette permission m'est attribuée.")
        };
       
        if(yourole){
        if(myrole){
        if(message.guild.member(message.mentions.users.first())
        ){
        eval(message.guild.member(message.mentions.users.first()))
                var ban_embed = new Discord.RichEmbed()
                .setColor("#d62fcd")
                .setTitle("ElectroBot | Warn d'un membre")
                .addField('Membre warn', '' + member.username + '')
                .addField('Serveur où a été effectué le warn', '' + message.guild.name + '')
                .addField('Modérateur', '' + message.author.username + '')
                .addField('Raison du warn', '' + reason + '')
                .setFooter("Warn d'un membre | © ElectroBot 2018")
                message.guild.member(message.mentions.users.first()).sendEmbed(ban_embed)
                message.channel.send('**:white_check_mark: ' + member.username + '  a été warn avec succès**')
                message.channel.send(ban_embed)
                }
           
    }}}

    if (!message.guild) return;
 
    if(message.content.startsWith("etb?kick")){
        message.delete(1)
 
        var myrole = message.guild.member(Client.user).hasPermission("KICK_MEMBERS");
        var yourole = message.guild.member(message.author).hasPermission("KICK_MEMBERS");
        var logs =  message.guild.channels.find('name', 'logs');
        var report = message.member.id;
        var helpban = new Discord.RichEmbed()
              .setColor("#d62fcd")
             .addField("ElectroBot | Kick d'un membre", "_ _")
             .addField("Utilité de la commande", "``etb?kick + mention + raison du kick``")
             .setFooter("Kick d'un membre | © ElectroBot 2018")
        if(!message.mentions.users.first())
        return message.channel.sendEmbed(helpban)
        var member = message.mentions.users.first();
        var reason = message.content.split(" ").slice(2).join(" ");
        var banerreur = new Discord.RichEmbed()
            .setColor("#d62fcd")
             .addField("ElectroBot | Kick d'un membre", "_ _")
             .addField("Erreur du kick", "Vous n'avez pas les permissions nécessaires afin de kick cette personne. Contactez un administrateur du serveur afin qu'il vous attribue les permissions nécessaires.")
             .setFooter("Kick d'un membre | © ElectroBot 2018")
       
        if(!reason) reason = "Aucune raison indiquée.";
        if(!myrole){
            message.channel.send("Je n'ai pas la permission _expulser des membres_ afin de kick cette personne. Vérifiez que cette permission m'est attribuée.")
        };
       
        if(yourole){
        if(myrole){
        if(message.guild.member(message.mentions.users.first()).kickable){
        eval(message.guild.member(message.mentions.users.first()).kickable)
                var ban_embed = new Discord.RichEmbed()
                .setColor("#d62fcd")
                .setTitle("ElectroBot | Kick d'un membre")
                .addField('Membre kick', '' + member.username + '')
                .addField('Serveur où a été effectué le kick', '' + message.guild.name + '')
                .addField('Modérateur', '' + message.author.username + '')
                .addField('Raison du kick', '' + reason + '')
                .setFooter("Kick d'un membre | © ElectroBot 2018")
                message.guild.members.get(member.id).kick();
                message.guild.member(message.mentions.users.first()).sendEmbed(ban_embed)
                message.channel.send('**:white_check_mark: ' + member.username + '  a été kick avec succès**')
                message.channel.send(ban_embed)
                }
           
    }}}

    if (!message.guild) return;
 
    if(message.content.startsWith("etb?ban")){
        message.delete(1)
 
        var myrole = message.guild.member(Client.user).hasPermission("BAN_MEMBERS");
        var yourole = message.guild.member(message.author).hasPermission("BAN_MEMBERS");
        var logs =  message.guild.channels.find('name', 'logs');
        var report = message.member.id;
        var helpban = new Discord.RichEmbed()
              .setColor("#d62fcd")
             .addField("ElectroBot | Bannissement d'un membre", "_ _")
             .addField("Utilité de la commande", "``etb?ban + mention + raison du bannissement``")
             .setFooter("Bannissement d'un membre | © ElectroBot 2018")
        if(!message.mentions.users.first())
        return message.channel.sendEmbed(helpban)
        var member = message.mentions.users.first();
        var reason = message.content.split(" ").slice(2).join(" ");
        var banerreur = new Discord.RichEmbed()
            .setColor("#d62fcd")
             .addField("ElectroBot | Bannissement d'un membre", "_ _")
             .addField("Erreur du bannissement", "Vous n'avez pas les permissions nécessaires afin de bannir cette personne. Contactez un administrateur du serveur afin qu'il vous attribue les permissions nécessaires.")
             .setFooter("Bannissement d'un membre | © ElectroBot 2018")
       
        if(!reason) reason = "Aucune raison indiquée.";
        if(!myrole){
            message.channel.send("Je n'ai pas la permission _bannir des membres_ afin de bannir cette personne. Vérifiez que cette permission m'est attribuée.")
        };
       
        if(yourole){
        if(myrole){
        if(message.guild.member(message.mentions.users.first()).bannable){
        eval(message.guild.member(message.mentions.users.first()).bannable)
                var ban_embed = new Discord.RichEmbed()
                .setColor("#d62fcd")
                .setTitle("ElectroBot | Bannissement d'un membre")
                .addField('Membre banni', '' + member.username + '')
                .addField('Serveur où a été effectué le bannissement', '' + message.guild.name + '')
                .addField('Modérateur', '' + message.author.username + '')
                .addField('Raison du bannissement', '' + reason + '')
                .setFooter("Bannissement d'un membre | © ElectroBot 2018")
                message.guild.members.get(member.id).ban();
                message.guild.member(message.mentions.users.first()).sendEmbed(ban_embed)
                message.channel.send('**:white_check_mark: ' + member.username + '  a été banni avec succès**')
                message.channel.send(ban_embed)
    }
}}}})
