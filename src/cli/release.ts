import program, { verbose } from './index';

const makeReleaseCommand = () => {
	const release = program.command('release <version>');
	release.action((version) => {
		verbose(`Verbose releasing ${version}`);
		console.log(`Releasing ${version}`);
	});
	return release;
};

program.addCommand(makeReleaseCommand());
