var BotKey = "";


var ComText = "";
var ComType = "";
var Reptype = "";
var replyText = "";


var ComText2 = "";
var ComType2 = "";
var Reptype2 = "";
var replyText2 = "";

function editreply(){
    replyText = document.getElementById('replyInput').value;
    replyText2 = document.getElementById('replyInput2').value;
}

function editCom(){
    ComText = document.getElementById('comInput').value.toLowerCase();
    ComText2 = document.getElementById('comInput2').value.toLowerCase();
}

function setReplytype(){
    Reptype = document.getElementById("RepType").value;
    Reptype2 = document.getElementById("RepType2").value;
}

function setCommandtype(){
    ComType = document.getElementById("CommandType").value;
    ComType2 = document.getElementById("CommandType2").value;
}


function compileCode(){

    if(document.getElementById("PrevSelect").value == "Prev1"){
        document.getElementById("UserPrevText").value = ComText
        document.getElementById("BotPrevText").value = replyText
    }else if(document.getElementById("PrevSelect").value == "Prev2"){
        document.getElementById("UserPrevText").value = ComText2
        document.getElementById("BotPrevText").value = replyText2
    }

    var ComCode = "";
    var RepCode = "";

    var ComCode2 = "";
    var RepCode2 = "";


    if(Reptype == "bots reply" || Reptype == ""){

        if(document.getElementById("PrevSelect").value == "Prev1"){
            if(ComType == "bot replys to any message"){

                document.getElementById('MesPrev').src = "./AnyMessage reply.png"
                document.getElementById('UserPrevText').disabled = true
                document.getElementById('BotPrevText').disabled = false
    
            }else{
                document.getElementById('MesPrev').src = "./Bot reply preveiw.png"
                document.getElementById('UserPrevText').disabled = false
                document.getElementById('BotPrevText').disabled = false
            }   
        }

        

        RepCode = "    message.reply('" + replyText + "')"

    }else if(Reptype == "bots message"){
        
        if(ComType == "channel Id"){

            if(document.getElementById("PrevSelect").value == "Prev1"){
                document.getElementById('MesPrev').src = "./Bot Welcome preveiw.png"
                document.getElementById('UserPrevText').disabled = true
                document.getElementById('BotPrevText').disabled = false
            }

            RepCode = '    const channel = member.guild.channels.cache.get(member.channelId)'
            + '\r\n' + "    channel.send('" + replyText + "');"
        }else if(ComType == "bot replys to any message"){

            if(document.getElementById("PrevSelect").value == "Prev1"){
                document.getElementById('MesPrev').src = "./AnyMessage.png"
                document.getElementById('UserPrevText').disabled = true
                document.getElementById('BotPrevText').disabled = false
            }
            
            RepCode = '   const channel = message.guild.channels.cache.get(message.channelId)'
            + '\r\n' + "   channel.send('" + replyText + "');"
        }else{

            if(document.getElementById("PrevSelect").value == "Prev1"){
                document.getElementById('MesPrev').src = "./Bot Message preveiw.png"
                document.getElementById('UserPrevText').disabled = false
                document.getElementById('BotPrevText').disabled = false
            }

            RepCode = '   const channel = message.guild.channels.cache.get(message.channelId)'
            + '\r\n' + "   channel.send('" + replyText + "');"
        }

    }else if(Reptype == "bots Dm"){

        if(ComType == "channel Id"){

            if(document.getElementById("PrevSelect").value == "Prev1"){
                document.getElementById('MesPrev').src = "./Welcome Dm.png"
                document.getElementById('UserPrevText').disabled = true
                document.getElementById('BotPrevText').disabled = false
            }

            RepCode = "    member.send('" + replyText + "')"
        }else if(ComType == "bot replys to any message"){

            if(document.getElementById("PrevSelect").value == "Prev1"){
                document.getElementById('MesPrev').src = "./AnyMessage Dm.png"
                document.getElementById('UserPrevText').disabled = true
                document.getElementById('BotPrevText').disabled = false
            }

            RepCode = "    message.author.send('" + replyText + "')"
        }else{

            if(document.getElementById("PrevSelect").value == "Prev1"){
                document.getElementById('MesPrev').src = "./Direct Message.png"
                document.getElementById('UserPrevText').disabled = false
                document.getElementById('BotPrevText').disabled = false
            }

            RepCode = "    message.author.send('" + replyText + "')"
        }

    }else if(Reptype == "Role Id"){


        if(ComType == "channel Id"){

            if(document.getElementById("PrevSelect").value == "Prev1"){
                document.getElementById('MesPrev').src = "./Welcome role.png"
                document.getElementById('UserPrevText').disabled = true
                document.getElementById('BotPrevText').disabled = true
            }

            RepCode = "    const role = member.guild.roles.cache.get('" + replyText + "')"
            + '\r\n' + '    member.roles.add(role);'
        }else{

            if(document.getElementById("PrevSelect").value == "Prev1"){
                document.getElementById('MesPrev').src = "./Bot message role.png"
                document.getElementById('UserPrevText').disabled = false
                document.getElementById('BotPrevText').disabled = true
            }

            RepCode = "    const role = message.guild.roles.cache.get('" + replyText + "')"
            + '\r\n' + '    message.member.roles.add(role);'
        }

    }else if(Reptype == "message with mention"){

        if(ComType == "channel Id"){

            if(document.getElementById("PrevSelect").value == "Prev1"){
                if(replyText == ""){
                    document.getElementById('MesPrev').src = "./Bot Welcome mention.png"
                    document.getElementById('UserPrevText').disabled = true
                    document.getElementById('BotPrevText').disabled = true
                }else{
                    document.getElementById('MesPrev').src = "./Welcome Mention message.png"
                    document.getElementById('UserPrevText').disabled = true
                    document.getElementById('BotPrevText').disabled = false
                }
            }

            RepCode = '    const channel = member.guild.channels.cache.get(member.channelId)'
            + '\r\n' + "    channel.send('@everyone')"
            + '\r\n' + "    channel.send('" + replyText + "')"
        }else{

            if(document.getElementById("PrevSelect").value == "Prev1"){
                if(replyText == ""){
                    document.getElementById('MesPrev').src = "./Bot mention.png"
                    document.getElementById('UserPrevText').disabled = true
                    document.getElementById('BotPrevText').disabled = true
                }else{
                    document.getElementById('MesPrev').src = "./Mention message.png"
                    document.getElementById('UserPrevText').disabled = false
                    document.getElementById('BotPrevText').disabled = false
                }
            }

            RepCode = '    const channel = message.guild.channels.cache.get(message.channelId)'
            + '\r\n' + "    channel.send('@everyone')"
            + '\r\n' + "    channel.send('" + replyText + "')"
        }
    }else if(Reptype == "Username"){

        RepCode = '    const channel = message.guild.channels.cache.get(message.channelId)'
        + '\r\n' + "    channel.send('" + '@' + replyText + "')"

    }

    if(Reptype2 == "bots reply" || Reptype2 == ""){

        if(document.getElementById("PrevSelect").value == "Prev2"){
            if(ComType2 == "bot replys to any message"){

                document.getElementById('MesPrev').src = "./AnyMessage reply.png"
                document.getElementById('UserPrevText').disabled = true
                document.getElementById('BotPrevText').disabled = false
    
            }else{
                document.getElementById('MesPrev').src = "./Bot reply preveiw.png"
                document.getElementById('UserPrevText').disabled = false
                document.getElementById('BotPrevText').disabled = false
            }   
        }

        RepCode2 = "    message.reply('" + replyText2 + "')"

    }else if(Reptype2 == "bots message"){
        
        if(ComType2 == "channel Id"){

            if(document.getElementById("PrevSelect").value == "Prev2"){
                document.getElementById('MesPrev').src = "./Bot Welcome preveiw.png"
                document.getElementById('UserPrevText').disabled = true
                document.getElementById('BotPrevText').disabled = false
            }

            RepCode2 = '    const channel = member.guild.channels.cache.get(member.channelId)'
            + '\r\n' + "    channel.send('" + replyText2 + "');"
        }else if(ComType2 == "bot replys to any message"){

            if(document.getElementById("PrevSelect").value == "Prev2"){
                document.getElementById('MesPrev').src = "./AnyMessage.png"
                document.getElementById('UserPrevText').disabled = true
                document.getElementById('BotPrevText').disabled = false
            }
            
            RepCode2 = '    const channel = message.guild.channels.cache.get(message.channelId)'
            + '\r\n' + "    channel.send('" + replyText2 + "');"

        }else{

            if(document.getElementById("PrevSelect").value == "Prev2"){
                document.getElementById('MesPrev').src = "./Bot Message preveiw.png"
                document.getElementById('UserPrevText').disabled = false
                document.getElementById('BotPrevText').disabled = false
            }

            

            RepCode2 = '   const channel = message.guild.channels.cache.get(message.channelId)'
            + '\r\n' + "   channel.send('" + replyText2 + "');"
        }

    }else if(Reptype2 == "bots Dm"){

        if(ComType2 == "channel Id"){

            if(document.getElementById("PrevSelect").value == "Prev2"){
                document.getElementById('MesPrev').src = "./Welcome Dm.png"
                document.getElementById('UserPrevText').disabled = true
                document.getElementById('BotPrevText').disabled = false
            }

            RepCode2 = "    member.send('" + replyText2 + "')"
        }else if(ComType2 == "bot replys to any message"){

            if(document.getElementById("PrevSelect").value == "Prev2"){
                document.getElementById('MesPrev').src = "./AnyMessage Dm.png"
                document.getElementById('UserPrevText').disabled = true
                document.getElementById('BotPrevText').disabled = false
            }

            RepCode2 = "    message.author.send('" + replyText2 + "')"
        }else{

            if(document.getElementById("PrevSelect").value == "Prev2"){
                document.getElementById('MesPrev').src = "./Direct Message.png"
                document.getElementById('UserPrevText').disabled = false
                document.getElementById('BotPrevText').disabled = false
            }

            RepCode2 = "    message.author.send('" + replyText2 + "')"
        }

    }else if(Reptype2 == "Role Id"){


        if(ComType2 == "channel Id"){

            if(document.getElementById("PrevSelect").value == "Prev2"){
                document.getElementById('MesPrev').src = "./Welcome role.png"
                document.getElementById('UserPrevText').disabled = true
                document.getElementById('BotPrevText').disabled = true
            }

            RepCode2 = "    const role = member.guild.roles.cache.get('" + replyText2 + "')"
            + '\r\n' + '    member.roles.add(role);'
        }else{

            if(document.getElementById("PrevSelect").value == "Prev2"){
                document.getElementById('MesPrev').src = "./Bot message role.png"
                document.getElementById('UserPrevText').disabled = false
                document.getElementById('BotPrevText').disabled = true
            }

            RepCode2 = "    const role = message.guild.roles.cache.get('" + replyText2 + "')"
            + '\r\n' + '    message.member.roles.add(role);'
        }

    }else if(Reptype2 == "message with mention"){

        if(ComType2 == "channel Id"){

            if(document.getElementById("PrevSelect").value == "Prev2"){
                if(replyText2 == ""){
                    document.getElementById('MesPrev').src = "./Bot Welcome mention.png"
                    document.getElementById('UserPrevText').disabled = true
                    document.getElementById('BotPrevText').disabled = true
                }else{
                    document.getElementById('MesPrev').src = "./Welcome Mention message.png"
                    document.getElementById('UserPrevText').disabled = true
                    document.getElementById('BotPrevText').disabled = false
                }
            }

            RepCode2 = '    const channel = member.guild.channels.cache.get(member.channelId)'
            + '\r\n' + "    channel.send('@everyone')"
            + '\r\n' + "    channel.send('" + replyText2 + "')"
        }else{

            if(document.getElementById("PrevSelect").value == "Prev2"){
                if(replyText2 == ""){
                    document.getElementById('MesPrev').src = "./Bot mention.png"
                    document.getElementById('UserPrevText').disabled = true
                    document.getElementById('BotPrevText').disabled = true
                }else{
                    document.getElementById('MesPrev').src = "./Mention message.png"
                    document.getElementById('UserPrevText').disabled = false
                    document.getElementById('BotPrevText').disabled = false
                }
            }

            RepCode2 = '    const channel = message.guild.channels.cache.get(message.channelId)'
            + '\r\n' + "    channel.send('@everyone')"
            + '\r\n' + "    channel.send('" + replyText2 + "')"
        }
    }else if(Reptype2 == "Username"){

        RepCode2 = '    const channel = message.guild.channels.cache.get(message.channelId)'
        + '\r\n' + "    channel.send('" + '@' + replyText2 + "')"

    }


    if ((ComType == "messge for bot to reply to" || ComType == "bot replys to any message" || ComType == "command for bot to reply to" || ComType == "slash command") && (ComType2 == "messge for bot to reply to" || ComType2 == "bot replys to any message" || ComType2 == "command for bot to reply to" || ComType2 == "slash command")){
        //console.log("conditions vague")
        if(ComType2 == ""){
        
        }else if(ComType2 == "messge for bot to reply to"){
    
            ComCode2 = 'else if(message.content.toLowerCase() === "' + ComText2 + '"){'
            + '\r\n' + RepCode2
            + '\r\n' + '  }' 
    
        }else if(ComType2 == "bot replys to any message"){
    
            ComCode2 = 'else if(!message.author.bot){'
            + '\r\n' + RepCode2
            + '\r\n' + '  }' 
    
        }else if(ComType2 == "command for bot to reply to"){
    
            ComCode2 = 'else if(message.content === "' + ComText2 + '"){'
            + '\r\n' + RepCode2
            + '\r\n' + '  }' 
    
        }else if(ComType2 == "slash command"){
    
            ComCode2 = 'else if(message.content === "' + '/' + ComText2 + '"){'
            + '\r\n' + RepCode2
            + '\r\n' + '  }' 
        }else if(ComType2 == "channel Id"){   
            
            ComCode2 = RepCode2
        }

        if(ComType == ""){
        
        }else if(ComType == "messge for bot to reply to"){
    
            ComCode = "client.on('messageCreate', async (message) => {"
            + '\r\n' + '  if(message.content.toLowerCase() === "' + ComText + '"){'
            + '\r\n' + RepCode
            + '\r\n' + '  }' + ComCode2 
            + '\r\n' + '})' + '\r\n' + ' '
    
        }else if(ComType == "bot replys to any message"){
    
            ComCode = "client.on('messageCreate', async (message) => {"
            + '\r\n' + '  if(!message.author.bot){'
            + '\r\n' + RepCode
            + '\r\n' + '  }' + ComCode2
            + '\r\n' + '})' + '\r\n' + ' '
    
        }else if(ComType == "command for bot to reply to"){
    
            ComCode = "client.on('messageCreate', async (message) => {"
            + '\r\n' + '  if(message.content === "' + ComText + '"){'
            + '\r\n' + RepCode
            + '\r\n' + '  }' + ComCode2
            + '\r\n' + '})' + '\r\n' + ' '
    
        }else if(ComType == "slash command"){
    
            ComCode = "client.on('messageCreate', async (message) => {"
            + '\r\n' + '  if(message.content === "' + '/' + ComText + '"){'
            + '\r\n' + RepCode
            + '\r\n' + '  }' + ComCode2
            + '\r\n' + '})' + '\r\n' + ' '
        }else if(ComType == "channel Id"){
            
            ComCode = "client.on('guildMemberAdd', async member => {"
            + '\r\n' + RepCode 
            + '\r\n' + ComCode2
            + '\r\n' + '})' + '\r\n' + ' '
        }
    }else if(ComType == ComType2){
        //console.log("condition equal")
        if(ComType2 == ""){
        
        }else if(ComType2 == "messge for bot to reply to"){
    
            ComCode2 = 'else if(message.content.toLowerCase() === "' + ComText2 + '"){'
            + '\r\n' + RepCode2
            + '\r\n' + '  }' 
    
        }else if(ComType2 == "bot replys to any message"){
    
            ComCode2 = 'else if(!message.author.bot){'
            + '\r\n' + RepCode2
            + '\r\n' + '   }' 
    
        }else if(ComType2 == "command for bot to reply to"){
    
            ComCode2 = 'else if(message.content === "' + ComText2 + '"){'
            + '\r\n' + RepCode2
            + '\r\n' + '   }' 
    
        }else if(ComType2 == "slash command"){
    
            ComCode2 = 'else if(message.content === "' + '/' + ComText2 + '"){'
            + '\r\n' + RepCode2
            + '\r\n' + '   }' 
        }else if(ComType2 == "channel Id"){
            
            ComCode2 = RepCode2
        }

        if(ComType == ""){
        
        }else if(ComType == "messge for bot to reply to"){
    
            ComCode = "client.on('messageCreate', async (message) => {"
            + '\r\n' + '  if(message.content.toLowerCase() === "' + ComText + '"){'
            + '\r\n' + RepCode
            + '\r\n' + '  }' + ComCode2 
            + '\r\n' + '})' + '\r\n' + ' '
    
        }else if(ComType == "bot replys to any message"){
    
            ComCode = "client.on('messageCreate', async (message) => {"
            + '\r\n' + '  if(!message.author.bot){'
            + '\r\n' + RepCode
            + '\r\n' + '  }' + ComCode2
            + '\r\n' + '})' + '\r\n' + ' '
    
        }else if(ComType == "command for bot to reply to"){
    
            ComCode = "client.on('messageCreate', async (message) => {"
            + '\r\n' + '  if(message.content === "' + ComText + '"){'
            + '\r\n' + RepCode
            + '\r\n' + '  }' + ComCode2
            + '\r\n' + '})' + '\r\n' + ' '
    
        }else if(ComType == "slash command"){
    
            ComCode = "client.on('messageCreate', async (message) => {"
            + '\r\n' + '  if(message.content === "' + '/' + ComText + '"){'
            + '\r\n' + RepCode
            + '\r\n' + '  }' + ComCode2
            + '\r\n' + '})' + '\r\n' + ' '
        }else if(ComType == "channel Id"){            
            ComCode = "client.on('guildMemberAdd', async member => {"
            + '\r\n' + RepCode 
            + '\r\n' + ComCode2
            + '\r\n' + '})' + '\r\n' + ' '
        }
    }else if(ComType2 == "Else"){

        ComCode2 = 'else{'
        + '\r\n' + RepCode2
        + '\r\n' + '  }'

        if(ComType == ""){
        
        }else if(ComType == "messge for bot to reply to"){
    
            ComCode = "client.on('messageCreate', async (message) => {"
            + '\r\n' + '  if(message.content.toLowerCase() === "' + ComText + '"){'
            + '\r\n' + RepCode
            + '\r\n' + '  }' + ComCode2 
            + '\r\n' + '})' + '\r\n' + ' '
    
        }else if(ComType == "bot replys to any message"){
    
            ComCode = "client.on('messageCreate', async (message) => {"
            + '\r\n' + '  if(!message.author.bot){'
            + '\r\n' + RepCode
            + '\r\n' + '  }' + ComCode2
            + '\r\n' + '})' + '\r\n' + ' '
    
        }else if(ComType == "command for bot to reply to"){
    
            ComCode = "client.on('messageCreate', async (message) => {"
            + '\r\n' + '  if(message.content === "' + ComText + '"){'
            + '\r\n' + RepCode
            + '\r\n' + '  }' + ComCode2
            + '\r\n' + '})' + '\r\n' + ' '
    
        }else if(ComType == "slash command"){
    
            ComCode = "client.on('messageCreate', async (message) => {"
            + '\r\n' + '  if(message.content === "' + '/' + ComText + '"){'
            + '\r\n' + RepCode
            + '\r\n' + '  }' + ComCode2
            + '\r\n' + '})' + '\r\n' + ' '
        }else if(ComType == "channel Id"){
            
            ComCode = "client.on('guildMemberAdd', async member => {"
            + '\r\n' + RepCode 
            + '\r\n' + ComCode2
            + '\r\n' + '})' + '\r\n' + ' '
        }
    }else{
        //console.log("new condition")
        if(ComType2 == ""){
        
        }else if(ComType2 == "messge for bot to reply to"){
    
            ComCode2 = "client.on('messageCreate', async (message) => {"
            + '\r\n' + '  if(message.content.toLowerCase() === "' + ComText2 + '"){'
            + '\r\n' + RepCode2
            + '\r\n' + '  }' 
            + '\r\n' + '})' + '\r\n' + ' '
    
        }else if(ComType2 == "bot replys to any message"){
    
            ComCode2 = "client.on('messageCreate', async (message) => {"
            + '\r\n' + '  if(!message.author.bot){'
            + '\r\n' + RepCode2
            + '\r\n' + '  }' 
            + '\r\n' + '})' + '\r\n' + ' '
    
        }else if(ComType2 == "command for bot to reply to"){
    
            ComCode2 = "client.on('messageCreate', async (message) => {"
            + '\r\n' + '  if(message.content === "' + ComText2 + '"){'
            + '\r\n' + RepCode2
            + '\r\n' + '  }' 
            + '\r\n' + '})' + '\r\n' + ' '
    
        }else if(ComType2 == "slash command"){
    
            ComCode2 = "client.on('messageCreate', async (message) => {"
            + '\r\n' + '  if(message.content === "' + '/' + ComText2 + '"){'
            + '\r\n' + RepCode2
            + '\r\n' + '  }' 
            + '\r\n' + '})' + '\r\n' + ' '
        }else if(ComType2 == "channel Id"){
            
            ComCode2 = "client.on('guildMemberAdd', async member => {"
            + '\r\n' + RepCode2
            + '\r\n' + '})' + '\r\n' + ' '
        }


        if(ComType == ""){
        
        }else if(ComType == "messge for bot to reply to"){
    
            ComCode = "client.on('messageCreate', async (message) => {"
            + '\r\n' + '  if(message.content.toLowerCase() === "' + ComText + '"){'
            + '\r\n' + RepCode
            + '\r\n' + '  }' 
            + '\r\n' + '})' 
            + '\r\n' + ' ' + '\r\n' + ComCode2 + '\r\n' + ' '
    
        }else if(ComType == "bot replys to any message"){
    
            ComCode = "client.on('messageCreate', async (message) => {"
            + '\r\n' + '  if(!message.author.bot){'
            + '\r\n' + RepCode
            + '\r\n' + '  }' 
            + '\r\n' + '})' + '\r\n' + ' ' 
            + '\r\n' + ComCode2 + '\r\n' + ' '
    
        }else if(ComType == "command for bot to reply to"){
    
            ComCode = "client.on('messageCreate', async (message) => {"
            + '\r\n' + '  if(message.content === "' + ComText + '"){'
            + '\r\n' + RepCode
            + '\r\n' + '  }' 
            + '\r\n' + '})' + '\r\n' + ' ' 
            + '\r\n' + ComCode2 + '\r\n' + ' '
    
        }else if(ComType == "slash command"){
    
            ComCode = "client.on('messageCreate', async (message) => {"
            + '\r\n' + '  if(message.content === "' + '/' + ComText + '"){'
            + '\r\n' + RepCode
            + '\r\n' + '  }' 
            + '\r\n' + '})' + '\r\n' + ' ' 
            + '\r\n' + ComCode2 + '\r\n' + ' '
        }else if(ComType == "channel Id"){
            
            ComCode = "client.on('guildMemberAdd', async member => {"
            + '\r\n' + RepCode
            + '\r\n' + '})' + '\r\n' + ' ' 
            + '\r\n' + ComCode2 + '\r\n' + ' '
        }
    }

    


//10

    document.getElementById("Code").textContent = (
        'const token = ("' + BotKey + '")' + '\r\n' + ' '
        + '\r\n' + 'const Discord = require("discord.js");' + '\r\n' + ' '
        + '\r\n' + 'const GatewayIntentBits = Discord.GatewayIntentBits' + '\r\n' + ' ' 
        + '\r\n' + 'const client = new Discord.Client({'
        + '\r\n' + '  intents: [' 
        + '\r\n' + '      GatewayIntentBits.Guilds,' 
        + '\r\n' + '      GatewayIntentBits.GuildMessages,' 
        + '\r\n' + '      GatewayIntentBits.GuildMembers,' 
        + '\r\n' + '      GatewayIntentBits.DirectMessages,' 
        + '\r\n' + '      GatewayIntentBits.MessageContent,' 
        + '\r\n' + '  ],' 
        + '\r\n' + '});' + '\r\n' + ' ' 
        + '\r\n' + ' ' 
        + '\r\n' + ComCode
        + '\r\n' + 'client.login(token);'  + '\r\n' + ' ' 
        + '\r\n' + "client.on('ready', async () => {" 
        + '\r\n' + "  console.log('Bot-Link Bot Activated')" 
        + '\r\n' + '});')
}

function editKey(){

    var inputKey = document.getElementById('Keyinput').value;

    BotKey = inputKey;

    document.getElementById('KeyDisplay').textContent = "Bot Key:" + BotKey;
}