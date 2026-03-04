"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtractCommand = void 0;
const BaseCommand_1 = require("./BaseCommand");
class SubtractCommand extends BaseCommand_1.BaseCommand {
    register() {
        this.program
            .command("subtract <x> <y>")
            .description("Subtract two numbers")
            .action((x, y) => this.subtract(x, y));
    }
    subtract(x, y) {
        console.log(parseInt(x) - parseInt(y));
    }
}
exports.SubtractCommand = SubtractCommand;
