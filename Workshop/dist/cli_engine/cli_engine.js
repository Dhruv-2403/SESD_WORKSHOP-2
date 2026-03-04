"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLIEngine = void 0;
const commander_1 = require("commander");
const greetCommand_1 = require("../commands/greetCommand");
const addCommand_1 = require("../commands/addCommand");
const subtractCommand_1 = require("../commands/subtractCommand");
const mathCommand_1 = require("../commands/mathCommand");
const jokeApiCommand_1 = require("../commands/jokeApiCommand");
const quoteCommand_1 = require("../commands/quoteCommand");
const pokemonCommand_1 = require("../commands/pokemonCommand");
const weatherCommand_1 = require("../commands/weatherCommand");
const currencyCommand_1 = require("../commands/currencyCommand");
const timeCommand_1 = require("../commands/timeCommand");
class CLIEngine {
    constructor() {
        this.commands = [];
        this.program = new commander_1.Command();
        this.setupCommands();
    }
    setupCommands() {
        this.commands = [
            new greetCommand_1.GreetCommand(this.program),
            new addCommand_1.AddCommand(this.program),
            new subtractCommand_1.SubtractCommand(this.program),
            new mathCommand_1.MathCommand(this.program),
            new jokeApiCommand_1.JokeCommand(this.program),
            new quoteCommand_1.QuoteCommand(this.program),
            new pokemonCommand_1.PokemonCommand(this.program),
            new weatherCommand_1.WeatherCommand(this.program),
            new currencyCommand_1.CurrencyCommand(this.program),
            new timeCommand_1.TimeCommand(this.program)
        ];
        this.commands.forEach(command => command.register());
    }
    run() {
        this.program.parse();
    }
}
exports.CLIEngine = CLIEngine;
