#!/usr/bin/env node

'use strict';

const {readFileSync, writeFile} = require("fs-extra");
const replace = require("../methods/replace");

var directory = readFileSync(`${process.cwd()}/${process.argv[2]}`).toString();
directory = replace(directory);

writeFile(`${process.cwd()}/${process.argv[2]}`, directory, {encoding: "utf-8"}).then(() => {
    console.log("Translate done...");
}).catch((e) => {
    console.log("Translate error...");
    throw e;
});

// nodme.js