import { BaseCommand } from "./BaseCommand";
import axios from "axios";

export class JokeCommand extends BaseCommand {

    register(): void {
        this.program
            .command("joke")
            .description("Get a random joke")
            .action(async () => {
                try {
                    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
                    console.log(response.data.punchline);
                } catch (err) {
                    console.log(err);
                }
            });
    }
}
