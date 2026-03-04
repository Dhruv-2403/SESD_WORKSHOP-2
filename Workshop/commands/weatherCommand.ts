import { BaseCommand } from "./BaseCommand";
import axios from "axios";
import chalk from "chalk";

export class WeatherCommand extends BaseCommand {
    register(): void {
        this.program
            .command("weather <city>")
            .description("Get weather information")
            .action(async (city: string) => {
                try {
                    const response = await axios.get(`https://wttr.in/${city}?format=j1`);
                    console.log(response.data);
                } catch (err) {
                    console.log(chalk.red("City not found"));
                }
            });
    }
}
