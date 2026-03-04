"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonCommand = void 0;
const BaseCommand_1 = require("./BaseCommand");
const axios_1 = __importDefault(require("axios"));
const chalk_1 = __importDefault(require("chalk"));
class PokemonCommand extends BaseCommand_1.BaseCommand {
    register() {
        this.program
            .command("pokemon <name>")
            .description("Get Pokemon information")
            .action(async (name) => {
            try {
                const { data } = await axios_1.default.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
                console.log(chalk_1.default.cyan("Name: "), data.name);
                console.log(chalk_1.default.magenta("\nStats:"));
                data.stats.forEach((stat) => {
                    console.log(chalk_1.default.yellow(stat.stat.name), ":", chalk_1.default.white(stat.base_stat));
                });
                console.log("");
            }
            catch (err) {
                console.log(chalk_1.default.red("Pokemon not found"));
            }
        });
    }
}
exports.PokemonCommand = PokemonCommand;
