var paths = require('../lib/paths.js');
var assert = require('assert');


/*
// TODO: make xdiff() function that will
// return modification map instead of array
var diffPaths = {
	'+a.b.c': 5, // added prop "c" with value 5
	'*a': 2, // changed value of prop "a" to 2
	'-y': true // removed prop "y"
};
*/

var x1 = {
	a: 1,
	b: {
		n: 888,
		bb: [ { name: 'x' }, { name: 'y' }, { name: 'z' } ],
		arr: [ { test: 1 }, { test: 2 }, { test: 3 } ]
	},
	d: {},
	y: 0
};

var x2 = {
	a: 2,
	b: {		
		bb: [ { name: 'x' }, { name: 'y' }, { name: 'u' } ],
		arr: [ { test: 1 }, { test: 2 }, { test: 3 }, { test: 4 } ]
	},
	d: {
		e: {
			f: 105
		}
	},
	c: 5
};

console.log(paths.diff(x1, x2));
assert( JSON.stringify(paths.diff(x1, x2)) == '["a","b.n","b.bb.2.name","b.arr.3","d.e","y","c"]' );

//console.log(lu.equal(888, undefined))