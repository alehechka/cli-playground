import program, { verbose } from './index';

const makeUpdateCommand = () => {
	const update = program.command('update <repo>');
	update.action((repo) => {
		verbose(`Verbose updating ${repo}`);
		console.log(`Updating ${repo}`);
	});
	return update;
};

program.addCommand(makeUpdateCommand());
