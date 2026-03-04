import { BaseCommand } from "./BaseCommand";
import axios from "axios";
import chalk from "chalk";

export class TimeCommand extends BaseCommand {
    register(): void {
        this.program
            .command("time [timezone]")
            .description("Get current time in timezone (default: local)")
            .action(async (timezone?: string) => {
                try {
                    if (timezone) {
                        const response = await axios.get(`http://worldtimeapi.org/api/timezone/${timezone}`);
                        console.log(chalk.blue(`Time in ${timezone}: ${response.data.datetime}`));
                    } else {
                        const now = new Date();
                        console.log(chalk.blue(`Local time: ${now.toLocaleString()}`));
                    }
                } catch (err) {
                    console.log(chalk.red("Timezone not found"));
                }
            });
    }
}
