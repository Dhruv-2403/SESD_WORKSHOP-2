import { Command } from "commander";
import { BaseCommand } from "../commands/BaseCommand";
import { GreetCommand } from "../commands/greetCommand";
import { AddCommand } from "../commands/addCommand";
import { SubtractCommand } from "../commands/subtractCommand";
import { MathCommand } from "../commands/mathCommand";
import { JokeCommand } from "../commands/jokeApiCommand";
import { QuoteCommand } from "../commands/quoteCommand";
import { PokemonCommand } from "../commands/pokemonCommand";
import { WeatherCommand } from "../commands/weatherCommand";
import { CurrencyCommand } from "../commands/currencyCommand";
import { TimeCommand } from "../commands/timeCommand";

export class CLIEngine {
    private program: Command;
    private commands: BaseCommand[] = [];

    constructor() {
        this.program = new Command();
        this.setupCommands();
    }

    private setupCommands(): void {
        this.commands = [
            new GreetCommand(this.program),
            new AddCommand(this.program),
            new SubtractCommand(this.program),
            new MathCommand(this.program),
            new JokeCommand(this.program),
            new QuoteCommand(this.program),
            new PokemonCommand(this.program),
            new WeatherCommand(this.program),
            new CurrencyCommand(this.program),
            new TimeCommand(this.program)
        ];

        this.commands.forEach(command => command.register());
    }

    public run(): void {
        this.program.parse();
    }
}

