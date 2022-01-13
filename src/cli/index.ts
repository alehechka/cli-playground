import { program } from 'commander';

interface OptionType {
	verbose?: boolean;
}

program.option('--verbose', 'verbose output');

export const options: OptionType = program.opts();

export const verbose = (message: string) => {
	if (options.verbose) {
		console.log(message);
	}
};

export default program;
