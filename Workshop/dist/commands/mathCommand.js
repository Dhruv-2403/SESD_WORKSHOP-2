"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathCommand = void 0;
const BaseCommand_1 = require("./BaseCommand");
class MathCommand extends BaseCommand_1.BaseCommand {
    register() {
        this.program
            .command("multiply <x> <y>")
            .description("Multiply two numbers")
            .action((x, y) => {
            console.log(Number(x) * Number(y));
        });
        this.program
            .command("divide <x> <y>")
            .description("Divide two numbers")
            .action((x, y) => {
            if (Number(y) !== 0) {
                console.log(Number(x) / Number(y));
            }
            else {
                console.log("Cannot divide by zero");
            }
        });
    }
}
exports.MathCommand = MathCommand;
