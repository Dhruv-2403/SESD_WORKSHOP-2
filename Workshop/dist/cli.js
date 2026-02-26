#!/usr/bin/env node
const { Command } = require("commander");
const axios = require("axios");
const program = new Command();
program.command("greet <name>").action((name) => {
    console.log(`Hello ${name}`);
});
program.command("add <x> <y>").description("add two numbers").action((x, y) => {
    console.log(Number(x) + Number(y));
});
program.command("subtract  <x> <y>").description("subtract  two numbers").action((x, y) => {
    console.log(Number(x) - Number(y));
});
program.command("multiply <x> <y>").description("multiply two numbers").action((x, y) => {
    console.log(Number(x) * Number(y));
});
program.command("divide <x> <y>").description("divide two numbers").action((x, y) => {
    if (Number(y) != 0) {
        console.log(Number(x) / Number(y));
    }
    else {
        console.log("Cannot divide by zero");
    }
});
program.command("joke").description("random joke").action(async () => {
    try {
        const x = await axios.get("https://official-joke-api.appspot.com/random_joke");
        console.log(x.data.punchline);
    }
    catch (err) {
        console.log(err);
    }
});
program.command("quote").description("quote generator").action(async () => {
    try {
        const q = await axios.get("https://zenquotes.io/api/random");
        console.log(q.data[0].q);
    }
    catch (err) {
        console.log(err);
    }
});
program.command("pokemon <name>").description("pokemon info").action(async (name) => {
    try {
        const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        // console.log(pokemon.data)
        console.log(pokemon.data.moves.version_group_details);
        console.log(pokemon.data.stats);
        console.log(pokemon.data.name);
    }
    catch (err) {
        console.log(err);
    }
});
program.parse();
