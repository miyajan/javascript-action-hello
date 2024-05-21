import * as core from '@actions/core';

const test = core.getInput('test');
console.log("Hello, World!");
console.log(test);
