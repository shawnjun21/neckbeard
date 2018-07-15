const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "NDY3ODAxNzY0MjYzODg2ODQ4.Div6lA.jsWF8Z4HrpRC7pcI2DdUg7gatss";

var neckbeardpictures = [
"https://instagram.fhnl1-1.fna.fbcdn.net/vp/2fe0479f0a65f33e828371490384f9fe/5BE04187/t51.2885-15/sh0.08/e35/s640x640/36160980_442495329564572_309071846689472512_n.jpg",
]
var neckbeardpostdescription = [
"Y’know I feel like I’ve really been neglecting anyone who actually looks at my site and this account because I said that I’d put new photos up and I haven’t. Yet. Anyway, they should be up by this Friday so for now, enjoy these water lilies."
]
var neckbeardpostdate = [
"7/11/18",
]
var neckbeardposturl = [
"https://www.instagram.com/p/BlFZ8HfFfGs/?taken-by=54th_scout_battalion"
]
var SquadIDs = {
    [442148001457111040]:"nick",
    [358133639126581249]:"jd",
    [358349584629628949]:"mila",
};
var SquadStats = {
    ["nick"]:{
        responses:[
            "raging homosexual slav",
            "fucking slav",
            "fuck you slav",
        ],
        nouns:[
            "none",
        ],
        adjectives:[
            "none",
        ],
    },
    ["jd"]:{
        responses:[
            "raging homosexual filipino",
            "fucking filipino",
            "fuck you filipino",
        ],
        nouns:[
            "none",
        ],
        adjectives:[
            "none",
        ],
    },
    ["mila"]:{
        responses:[
            "Hey Mila! how was your <noun>!",
            "Hey Mila! hope you had a nice <noun>!",
            "Hey Mila! hope you had a good <noun>!",
        ],
        nouns:[
            "breakfast",
            "lunch",
            "dinner",
        ],
        adjectives:[
            "none",
        ],
    },
}
bot.on("message", message =>
{
    var txt = message.content.split(" ");
    if (txt[0].toLowerCase() == "-neckbeard")
    {
        var chosenresponse = Math.floor(Math.random() * 0)
        if (chosenresponse == 0)
        {
            var chosenpost = Math.floor(Math.random() * neckbeardpictures.length)
            message.channel.send({embed: {
            title: "" + neckbeardpostdate[chosenpost] + "",
            description: "" + neckbeardpostdescription[chosenpost] + "",
            url: "" + neckbeardposturl[chosenpost] + "",
              color: 3447003,
              image: {
                url: "" + neckbeardpictures[chosenpost] + ""
              },
              author: {
                name: "54th_scout-battalion",
                url: "https://www.instagram.com/54th_scout_battalion/",
                icon_url: "https://instagram.fhnl1-1.fna.fbcdn.net/vp/9db36a579c569b9fa08e127eaad3df07/5BC9DCDA/t51.2885-19/s150x150/31157028_226463401449889_1664746520978653184_n.jpg"
              },
            }
        })
        }
        if (chosenresponse == 1)
        {
            message.channel.send("oof")
        }
    }
   else if (txt[0].toLowerCase() != "-neckbeard")
    {
        if (typeof SquadIDs[message.author.id] == "string" && Math.floor(Math.random() * 0) == 0)
        {
            var stats = SquadStats[SquadIDs[message.author.id]];
            var util = "lmao"
            var str = util.RandomFromArray(stats.responses);
            str.replace("<noun>", util.RandomFromArray(stats.nouns));
            str.replace("<adj>", util.RandomFromArray(stats.adjectives));
            message.channel.send(str);
        }
    }
});
bot.login(token);