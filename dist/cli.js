"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verbose = void 0;
const commander_1 = require("commander");
commander_1.program.option('--verbose', 'verbose output');
const options = commander_1.program.opts();
const verbose = (message) => {
    if (options.verbose) {
        console.log(message);
    }
};
exports.verbose = verbose;
const makeUpdateCommand = () => {
    const update = commander_1.program.command('update <repo>');
    update.action((repo) => {
        (0, exports.verbose)(`Verbose updating ${repo}`);
        console.log(`Updating ${repo}`);
    });
    return update;
};
const makeReleaseCommand = () => {
    const release = commander_1.program.command('release <version>');
    release.action((version) => {
        (0, exports.verbose)(`Verbose releasing ${version}`);
        console.log(`Releasing ${version}`);
    });
    return release;
};
commander_1.program.addCommand(makeUpdateCommand());
commander_1.program.addCommand(makeReleaseCommand());
exports.default = commander_1.program;
