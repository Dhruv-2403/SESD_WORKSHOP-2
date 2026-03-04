"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeCommand = void 0;
const BaseCommand_1 = require("./BaseCommand");
const axios_1 = __importDefault(require("axios"));
const chalk_1 = __importDefault(require("chalk"));
class TimeCommand extends BaseCommand_1.BaseCommand {
    register() {
        this.program
            .command("time [timezone]")
            .description("Get current time in timezone (default: local)")
            .action(async (timezone) => {
            try {
                if (timezone) {
                    const response = await axios_1.default.get(`http://worldtimeapi.org/api/timezone/${timezone}`);
                    console.log(chalk_1.default.blue(`Time in ${timezone}: ${response.data.datetime}`));
                }
                else {
                    const now = new Date();
                    console.log(chalk_1.default.blue(`Local time: ${now.toLocaleString()}`));
                }
            }
            catch (err) {
                console.log(chalk_1.default.red("Timezone not found"));
            }
        });
    }
}
exports.TimeCommand = TimeCommand;
