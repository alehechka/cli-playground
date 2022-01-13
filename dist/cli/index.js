"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verbose = exports.options = void 0;
const commander_1 = require("commander");
commander_1.program.option('--verbose', 'verbose output');
exports.options = commander_1.program.opts();
const verbose = (message) => {
    if (exports.options.verbose) {
        console.log(message);
    }
};
exports.verbose = verbose;
exports.default = commander_1.program;
