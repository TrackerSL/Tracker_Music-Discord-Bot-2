const _0x57d1b5=(function(){let _0x618fc0=!![];return function(_0x54892c,_0x4303f4){const _0x504f09=_0x618fc0?function(){if(_0x4303f4){const _0x5548e3=_0x4303f4['apply'](_0x54892c,arguments);return _0x4303f4=null,_0x5548e3;}}:function(){};return _0x618fc0=![],_0x504f09;};}()),_0x456021=_0x57d1b5(this,function(){return _0x456021['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](_0x456021)['search']('(((.+)+)+)+$');});_0x456021();const {SlashCommandBuilder}=require('@discordjs/builders'),Discord=require('discord.js'),fs=require('fs'),yaml=require('js-yaml'),config=yaml['load'](fs['readFileSync']('./config.yml','utf8')),commands=yaml['load'](fs['readFileSync']('./commands.yml','utf8')),utils=require('../../utils.js');module['exports']={'enabled':commands['Ticket']['Delete']['Enabled'],'data':new SlashCommandBuilder()['setName']('delete')['setDescription'](commands['Ticket']['Delete']['Description']),async 'execute'(_0x39c7d7,_0x42dba9){if(!_0x42dba9['tickets']['has'](_0x39c7d7['channel']['id']))return _0x39c7d7['reply']({'content':config['Locale']['NotInTicketChannel'],'ephemeral':!![]});let _0x486507=utils['checkIfUserHasSupportRoles'](_0x39c7d7);if(!_0x486507)return _0x39c7d7['reply']({'content':config['Locale']['NoPermsMessage'],'ephemeral':!![]});let _0x53d7ed=_0x42dba9['users']['cache']['get'](_0x42dba9['tickets']['get'](''+_0x39c7d7['channel']['id'],'userID'));const _0x2ba80c=new Discord['EmbedBuilder']();_0x2ba80c['setColor']('Red'),_0x2ba80c['setTitle'](config['Locale']['ticketForceDeleted']),_0x2ba80c['addFields']([{'name':'•\x20'+config['Locale']['logsDeletedBy'],'value':'>\x20<@!'+_0x39c7d7['user']['id']+'>\x0a>\x20'+_0x39c7d7['user']['username']},{'name':'•\x20'+config['Locale']['logsTicketAuthor'],'value':'>\x20<@!'+_0x53d7ed['id']+'>\x0a>\x20'+_0x53d7ed['username']},{'name':'•\x20'+config['Locale']['logsTicket'],'value':'>\x20#'+_0x39c7d7['channel']['name']+'\x0a>\x20'+_0x42dba9['tickets']['get'](''+_0x39c7d7['channel']['id'],'ticketType')}]),_0x2ba80c['setTimestamp'](),_0x2ba80c['setThumbnail'](_0x39c7d7['user']['displayAvatarURL']({'format':'png','dynamic':!![],'size':0x400})),_0x2ba80c['setFooter']({'text':config['Locale']['totalMessagesLog']+'\x20'+_0x42dba9['tickets']['get'](''+_0x39c7d7['channel']['id'],'messages'),'iconURL':''+_0x39c7d7['user']['displayAvatarURL']({'format':'png','dynamic':!![],'size':0x400})});let _0x4387ff=await utils['saveTranscript'](_0x39c7d7),_0x4db482;if(!config['deleteTicket']['ChannelID'])_0x4db482=_0x39c7d7['guild']['channels']['cache']['get'](config['TicketSettings']['LogsChannelID']);if(config['deleteTicket']['ChannelID'])_0x4db482=_0x39c7d7['guild']['channels']['cache']['get'](config['deleteTicket']['ChannelID']);if(_0x4db482&&config['deleteTicket']['Enabled']&&config['TicketSettings']['DeleteCommandTranscript'])await _0x4db482['send']({'embeds':[_0x2ba80c],'files':[_0x4387ff]});if(_0x4db482&&config['deleteTicket']['Enabled']&&config['TicketSettings']['DeleteCommandTranscript']===![])await _0x4db482['send']({'embeds':[_0x2ba80c]});let _0x51b1f3=config['TicketSettings']['DeleteTime']*0x3e8,_0x141140=config['Locale']['deletingTicketMsg']['replace'](/{time}/g,''+config['TicketSettings']['DeleteTime']);const _0x1339db=new Discord['EmbedBuilder']()['setDescription'](_0x141140)['setColor']('Red');await _0x39c7d7['reply']({'embeds':[_0x1339db]}),await setTimeout(()=>_0x39c7d7['channel']['delete'](),_0x51b1f3);}};