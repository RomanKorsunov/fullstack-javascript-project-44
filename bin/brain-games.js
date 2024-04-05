#!/usr/bin/env node

import { nameRequest } from '../src/cli.js';

const greeting = () => {
	console.log('Welcome to the Brain Games!');
};

greeting();

nameRequest();
