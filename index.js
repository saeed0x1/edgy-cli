#!/usr/bin/env node

/**
 * sussy-cli
 * Joke from edgy api
 *
 * @author Saeed <https://www.twitter.com/zerodayrat>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const { Intro } = require('./utils/data');
const axois = require('axios');
const ora = require('ora');
const { green } = require('chalk');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

const spinner = ora({ text: '' });

(async () => {
	init({ clear });

	debug && log(flags);
	input.includes("help") && cli.showHelp;
	
	flags.info && console.log(Intro);
	flags.help && cli.showHelp	

	if (flags.joke) {
		spinner.start('Fetching joke from api..');
		const res = await axois.get(
			'https://edgyapi.vercel.app/api/joke/random'
		);
		const data = await res.data.body;
		spinner.succeed('Fetched !\n');

		console.log(`${green(data)}`);
	}
})();
