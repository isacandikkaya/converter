const {DiscordJS11, DiscordJS12} = require("../Discord.js");

/**
 * The Replace Function.
 * @param {String} translate
 * @example
 * const replace = require("converter");
 * replace("message.author.iconURL");
 * @returns Discord.js v12 code!
 */

module.exports = function(translate) {
    for(var i = 0; i < DiscordJS11.length; i++) {
        const xir = new RegExp(DiscordJS11[i], "g");
        translate = translate.replace(xir, DiscordJS12[i]);
    };
    const x = new RegExp("disableEveryone: true", "g");
    translate = translate.replace(x, "disableMentions: 'everyone'");
    return translate;
};

// replace.js
