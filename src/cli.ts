import { program, Option } from 'commander';

program
	.option('-h, --hello <person>', 'says hello to user')
	.addOption(new Option('-d, --drink <size>', 'drink size').choices(['small', 'medium', 'large']));

function makeStartCommand() {
	const start = program.command('start <first> [second]');
	start.action((first, second) => {
		console.log({ first, second, message: 'start command called' });
	});
	return start;
}

function makeBuildCommand() {
	const build = program.command('build <something> [different]');
	const options = program.opts();
	build.action((something, different) => {
		console.log({ something, different, message: 'build command called', options });
	});
	return build;
}

program.addCommand(makeStartCommand());
program.addCommand(makeBuildCommand());

program.parse(process.argv);

export default program;
