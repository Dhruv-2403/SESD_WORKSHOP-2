import { BaseCommand } from "./BaseCommand";

export class GreetCommand extends BaseCommand {

    register(): void {
        this.program
            .command("greet <name>")
            .description("Greet someone by name")
            .action((name: string) => this.sayHello(name));
    }


    private sayHello(name: string): void {
        console.log(`Hello ${name}`);
    }
}
