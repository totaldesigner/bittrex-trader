require('shelljs/global');
const addCheckMark = require('./helpers/checkmark.js');

process.stdout.write('Cleanup started...');

exec('find ./build -maxdepth 1 -type f -delete');
exec('rm -rf ./coverage');

addCheckMark();

echo('\nCleanup done. Happy Coding!!!');
