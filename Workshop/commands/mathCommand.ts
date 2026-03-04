import { BaseCommand } from "./BaseCommand";
import axios from "axios";

export class MathCommand extends BaseCommand {
    register(): void {
        this.program
            .command("multiply <x> <y>")
            .description("Multiply two numbers")
            .action((x: string, y: string) => {
                console.log(Number(x) * Number(y));
            });

        this.program
            .command("divide <x> <y>")
            .description("Divide two numbers")
            .action((x: string, y: string) => {
                if (Number(y) !== 0) {
                    console.log(Number(x) / Number(y));
                } else {
                    console.log("Cannot divide by zero");
                }
            });
    }
}
