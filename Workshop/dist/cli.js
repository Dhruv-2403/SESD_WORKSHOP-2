#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cli_engine_1 = require("./cli_engine/cli_engine");
const cli = new cli_engine_1.CLIEngine();
cli.run();
