const replace = require("./methods/replace.js");

console.log(replace("const client = new Discord.Client({disableEveryone: true})"));

// return *const client = new Discord.Client({disableMentions: 'everyone'})*
