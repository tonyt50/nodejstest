const logger = require('./logger');
const path = require('path');
const os = require('os');

var pathobj = path.parse(__dirname);
var fileobj = path.parse(__filename);
console.log(pathobj);
console.log(fileobj);


function sayhello(name) {
    console.log('hello ' + name);
}

sayhello('tonyt');

console.log(module);

console.log(logger);

logger.log('fromloggerjs');

console.log(__filename);
console.log(__dirname);
console.log('hostname ' + os.hostname);

var freemem = os.freemem();

console.log(`freemem : ${freemem}`);
