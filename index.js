const core = require('@actions/core');

const test = core.getInput('test');
console.log("Hello, World!");
console.log(test);
