"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreetCommand = void 0;
const BaseCommand_1 = require("./BaseCommand");
class GreetCommand extends BaseCommand_1.BaseCommand {
    register() {
        this.program
            .command("greet <name>")
            .description("Greet someone by name")
            .action((name) => this.sayHello(name));
    }
    sayHello(name) {
        console.log(`Hello ${name}`);
    }
}
exports.GreetCommand = GreetCommand;
