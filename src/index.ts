import program from './cli';

const options = program.opts();
const args = program.args;

console.log({ options, args });
