"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JokeCommand = void 0;
const BaseCommand_1 = require("./BaseCommand");
const axios_1 = __importDefault(require("axios"));
class JokeCommand extends BaseCommand_1.BaseCommand {
    register() {
        this.program
            .command("joke")
            .description("Get a random joke")
            .action(async () => {
            try {
                const response = await axios_1.default.get("https://official-joke-api.appspot.com/random_joke");
                console.log(response.data.punchline);
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}
exports.JokeCommand = JokeCommand;
