"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
commander_1.program
    .option('-h, --hello <person>', 'says hello to user')
    .addOption(new commander_1.Option('-d, --drink <size>', 'drink size').choices(['small', 'medium', 'large']));
function makeStartCommand() {
    const start = commander_1.program.command('start <first> [second]');
    start.action((first, second) => {
        console.log({ first, second, message: 'start command called' });
    });
    return start;
}
function makeBuildCommand() {
    const build = commander_1.program.command('build <something> [different]');
    const options = commander_1.program.opts();
    build.action((something, different) => {
        console.log({ something, different, message: 'build command called', options });
    });
    return build;
}
commander_1.program.addCommand(makeStartCommand());
commander_1.program.addCommand(makeBuildCommand());
commander_1.program.parse(process.argv);
exports.default = commander_1.program;
