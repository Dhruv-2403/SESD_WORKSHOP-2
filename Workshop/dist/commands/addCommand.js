"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCommand = void 0;
const BaseCommand_1 = require("./BaseCommand");
class AddCommand extends BaseCommand_1.BaseCommand {
    register() {
        this.program
            .command("add <x> <y>")
            .description("Add two numbers")
            .action((x, y) => {
            console.log(Number(x) + Number(y));
        });
    }
}
exports.AddCommand = AddCommand;
