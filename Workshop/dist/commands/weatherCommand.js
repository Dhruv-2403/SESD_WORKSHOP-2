"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherCommand = void 0;
const BaseCommand_1 = require("./BaseCommand");
const axios_1 = __importDefault(require("axios"));
const chalk_1 = __importDefault(require("chalk"));
class WeatherCommand extends BaseCommand_1.BaseCommand {
    register() {
        this.program
            .command("weather <city>")
            .description("Get weather information")
            .action(async (city) => {
            try {
                const response = await axios_1.default.get(`https://wttr.in/${city}?format=j1`);
                console.log(response.data);
            }
            catch (err) {
                console.log(chalk_1.default.red("City not found"));
            }
        });
    }
}
exports.WeatherCommand = WeatherCommand;
