import { BaseCommand } from "./BaseCommand";
import axios from "axios";

export class QuoteCommand extends BaseCommand {
    register(): void {
        this.program
            .command("quote")
            .description("Get a random quote")
            .action(async () => {
                try {
                    const response = await axios.get("https://zenquotes.io/api/random");
                    console.log(response.data[0].q);
                } catch (err) {
                    console.log(err);
                }
            });
    }
}
