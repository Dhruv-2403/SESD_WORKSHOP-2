"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteCommand = void 0;
const BaseCommand_1 = require("./BaseCommand");
const axios_1 = __importDefault(require("axios"));
class QuoteCommand extends BaseCommand_1.BaseCommand {
    register() {
        this.program
            .command("quote")
            .description("Get a random quote")
            .action(async () => {
            try {
                const response = await axios_1.default.get("https://zenquotes.io/api/random");
                console.log(response.data[0].q);
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}
exports.QuoteCommand = QuoteCommand;
