import { BaseCommand } from "./BaseCommand";

export class SubtractCommand extends BaseCommand {

    register(): void {
        this.program
            .command("subtract <x> <y>")
            .description("Subtract two numbers")
            .action((x: string, y: string) => this.subtract(x, y));
    }


    private subtract(x: string, y: string): void {
        console.log(parseInt(x) - parseInt(y));
    }
}
