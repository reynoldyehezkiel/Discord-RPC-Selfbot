const discord = require('freeze-selfbot');
const client = new discord.Client();
const config = require("./config")
const express = require('express');
const console = require("./utils/logger")
const app = express();

module.exports = client;
process.env.TOKEN ? client.login(process.env.TOKEN) : console.exit("No token provided");
config.mode ? require(`./presences/${config.mode}`) : console.exit('No presence selected!');
console.logger.info(`

                    ██████╗ ██╗███████╗ ██████╗ ██████╗ ██████╗ ██████╗       ██████╗ ██████╗  ██████╗
                    ██╔══██╗██║██╔════╝██╔════╝██╔═══██╗██╔══██╗██╔══██╗      ██╔══██╗██╔══██╗██╔════╝
                    ██║  ██║██║███████╗██║     ██║   ██║██████╔╝██║  ██║█████╗██████╔╝██████╔╝██║     
                    ██║  ██║██║╚════██║██║     ██║   ██║██╔══██╗██║  ██║╚════╝██╔══██╗██╔═══╝ ██║     
                    ██████╔╝██║███████║╚██████╗╚██████╔╝██║  ██║██████╔╝      ██║  ██║██║     ╚██████╗
                    ╚═════╝ ╚═╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝       ╚═╝  ╚═╝╚═╝      ╚═════╝                                                                                
`
)

app.get('/', (_, res) => {
  res.send('Presence is ready!');
});
app.listen(3000)

const Eris = require("eris");
const keepAlive = require("./server");
keepAlive();

//your can put your token in a .env file to secure it
const bot = new Eris(process.env.TOKEN); 
 
bot.connect();
