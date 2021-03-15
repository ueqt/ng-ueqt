var pjson = require('../ng-ueqt/package.json');
var fs = require('fs');
var path = require('path');
var semver = require('semver');
// console.log(pjson.version);
var datas = pjson.version.split('+');
var result = semver.inc(datas[0], 'patch');
pjson.version = result;
fs.writeFileSync(
  path.join(__dirname, '../ng-ueqt/package.json'),
  JSON.stringify(pjson, null, 2)
);
console.log(result);
