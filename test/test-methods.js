var paths = require('../lib/paths.js');
var assert = require('assert');


var arr1 = ['one', 'two', 'three', 'four'];

paths.addToSet(arr1, ['two', 'four', 'five', 'six']);
assert(paths.objEqual(arr1, [ 'one', 'two', 'three', 'four', 'five', 'six' ]));