"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyCommand = void 0;
const BaseCommand_1 = require("./BaseCommand");
const axios_1 = __importDefault(require("axios"));
const chalk_1 = __importDefault(require("chalk"));
class CurrencyCommand extends BaseCommand_1.BaseCommand {
    register() {
        this.program
            .command("currency <amount> <from> <to>")
            .description("Convert currency")
            .action(async (amount, from, to) => {
            try {
                const response = await axios_1.default.get(`https://api.exchangerate-api.com/v4/latest/${from}`);
                const rate = response.data.rates[to.toUpperCase()];
                if (rate) {
                    const result = Number(amount) * rate;
                    console.log(chalk_1.default.green(`${amount} ${from.toUpperCase()} = ${result.toFixed(2)} ${to.toUpperCase()}`));
                }
                else {
                    console.log(chalk_1.default.red("Currency not found"));
                }
            }
            catch (err) {
                console.log(chalk_1.default.red("Currency conversion failed"));
            }
        });
    }
}
exports.CurrencyCommand = CurrencyCommand;
