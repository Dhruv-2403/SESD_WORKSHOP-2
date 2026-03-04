import { BaseCommand } from "./BaseCommand";
import axios from "axios";
import chalk from "chalk";

export class PokemonCommand extends BaseCommand {
    register(): void {
        this.program
            .command("pokemon <name>")
            .description("Get Pokemon information")
            .action(async (name: string) => {
                try {
                    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
                    
                    console.log(chalk.cyan("Name: "), data.name);
                    console.log(chalk.magenta("\nStats:"));
                    data.stats.forEach((stat: any) => {
                        console.log(chalk.yellow(stat.stat.name), ":", chalk.white(stat.base_stat));
                    });
                    console.log("");
                } catch (err) {
                    console.log(chalk.red("Pokemon not found"));
                }
            });
    }
}
