const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "NDY3ODAxNzY0MjYzODg2ODQ4.Div6lA.jsWF8Z4HrpRC7pcI2DdUg7gatss";

var neckbeardpictures = [
"https://instagram.fhnl1-1.fna.fbcdn.net/vp/2fe0479f0a65f33e828371490384f9fe/5BE04187/t51.2885-15/sh0.08/e35/s640x640/36160980_442495329564572_309071846689472512_n.jpg",
"https://instagram.fhnl1-1.fna.fbcdn.net/vp/59830570c188096414ceab1e54557f08/5BD593DB/t51.2885-15/sh0.08/e35/s640x640/34359572_1136668796488843_7495168993280393216_n.jpg",
"https://instagram.fhnl1-1.fna.fbcdn.net/vp/06a848f05606b096f95f422b9cb35201/5BDE0C3D/t51.2885-15/sh0.08/e35/s640x640/29417285_1530604937062900_7670751486883659776_n.jpg",
"https://instagram.fhnl1-1.fna.fbcdn.net/vp/fa0459c429531bf33aaedd157fd78ef5/5BC64D39/t51.2885-15/sh0.08/e35/s640x640/30602978_1793425477380887_7811851122586419200_n.jpg",
"https://instagram.fhnl1-1.fna.fbcdn.net/vp/ef69df841a07dac192a07247911e5583/5BD63904/t51.2885-15/sh0.08/e35/s640x640/35999189_2083903221860071_3734466225556684800_n.jpg",
"https://instagram.fhnl1-1.fna.fbcdn.net/vp/6e271d633057a3ace7a7de2ff7f06925/5BDFDE1E/t51.2885-15/e35/20759068_117613142231307_7963588597712420864_n.jpg",
]
var neckbeardpostdescription = [
"Y’know I feel like I’ve really been neglecting anyone who actually looks at my site and this account because I said that I’d put new photos up and I haven’t. Yet. Anyway, they should be up by this Friday so for now, enjoy these water lilies.",
"Rarely do I ever take pictures of myself, but tonight is the exception. Thanks to everyone who worked hard at alumni luau. Also yes I worked in the fridge truck unloading crates of food",
"Thank you Maui! :pray: new gallery goes up in 1 hour. Link in bio",
"Ours is not to reason why, ours is but to do. The long haul has arrived. Are you ready?",
"Tomorrow is a new day. The start of a new week. Last week sucked. So what are you gonna do about it? How will you improve this week? Work out? Do extra chores? Read a book? Whatever you choose, take a lesson from it that you can apply to every day. Then use it. Every day. A hard-won skill never tested becomes weak.",
"Free shavocadoo! Comment your favorite food-flavored street below! Happy Tuesday!",
]
var neckbeardpostdate = [
"7/11/18",
"7/9/18",
"3/30/18",
"4/20/18",
"7/1/18",
"8/8/17",
]
var neckbeardposturl = [
"https://www.instagram.com/p/BlFZ8HfFfGs/?taken-by=54th_scout_battalion",
"https://www.instagram.com/p/Bj1juAClBiR/?taken-by=54th_scout_battalion",
"https://www.instagram.com/p/Bg-ZIKlBaHz/?taken-by=54th_scout_battalion",
"https://www.instagram.com/p/Bh03o5FFM96/?taken-by=54th_scout_battalion",
"https://www.instagram.com/p/BkuJz8HFGMh/?taken-by=54th_scout_battalion",
"https://www.instagram.com/p/BXkEa_iBIHG/?taken-by=54th_scout_battalion",
]
var SquadIDs = {
    ["204130146834186241"]:"nick",
    ["358133639126581249"]:"jd",
    ["358349584629628949"]:"mila",
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
        var chosenresponse = Math.floor(Math.random() * 2)
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
            var oof = 0
            message.channel.send("hey girl, so I heard you like art")
            setTimeout(awkwardsilence, 5000)
            function awkwardsilence() {
                if(oof == 0)
                {
                    message.channel.send("so")
                    oof = 1
                    setTimeout(awkwardsilence, 10000)
                }
                if(oof == 1)
                {
                    message.channel.send("um")
                    oof = 2
                    setTimeout(awkwardsilence, 8000)
                }
                if(oof == 2)
                {
                    message.channel.send("do you wanna bang?")
                    oof = 3
                }
            }
            if (oof == 3)
            {
                message.channel.send ("fuck you")
            }
        }
    }
    if (txt[0].toLowerCase() != "-neckbeard")
    {
        const util = {
            ArrayHasValue: function(arr, val)
            {
                return arr.indexOf(val) != -1;
            },
            RandomFromArray:  function(arr)
            {
                return arr[Math.floor(Math.random() * arr.length)];
            },
        };
        if (typeof SquadIDs[message.author.id] == "string" && Math.floor(Math.random() * 5) == 0)
        {
            var stats = SquadStats[SquadIDs[message.author.id]];
            var str = util.RandomFromArray(stats.responses);
            str = str.replace("<noun>", util.RandomFromArray(stats.nouns))
            str = str.replace("<adj>", util.RandomFromArray(stats.adjectives))
            message.channel.send(str);               
        }
        else if (typeof SquadIDs[message.author.id] != "string" && Math.floor(Math.random() * 8) == 0 && message.author.id != "467801764263886848")
        {
            message.channel.send("shameless advert: https://54thphotography.pixieset.com/")
        }
    }
});
bot.login(token);