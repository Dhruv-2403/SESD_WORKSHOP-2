import { BaseCommand } from "./BaseCommand";
import axios from "axios";
import chalk from "chalk";

export class CurrencyCommand extends BaseCommand {
    register(): void {
        this.program
            .command("currency <amount> <from> <to>")
            .description("Convert currency")
            .action(async (amount: string, from: string, to: string) => {
                try {
                    const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${from}`);
                    const rate = response.data.rates[to.toUpperCase()];
                    if (rate) {
                        const result = Number(amount) * rate;
                        console.log(chalk.green(`${amount} ${from.toUpperCase()} = ${result.toFixed(2)} ${to.toUpperCase()}`));
                    } else {
                        console.log(chalk.red("Currency not found"));
                    }
                } catch (err) {
                    console.log(chalk.red("Currency conversion failed"));
                }
            });
    }
}
