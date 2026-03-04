import { BaseCommand } from "./BaseCommand";

export class AddCommand extends BaseCommand {

    register(): void {
        this.program
            .command("add <x> <y>")
            .description("Add two numbers")
            .action((x: string, y: string) => {
                console.log(Number(x) + Number(y));
            });
    }
}
