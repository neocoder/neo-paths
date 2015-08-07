var paths = require('../lib/paths.js');
var assert = require('assert');

var obj = {
	a:{	
		b: {
			c: 1
		}
	},
	aa: {
		b: [ 'x', 'y', 'z' ]
	},
	arr: {
		c: [ { test: 'one' }, { test: 'two' }, { test:'three' } ]
	}
};

console.log( paths.walk('a', obj).b.c );
assert( paths.walk('a', obj).b.c ==1 );

// get field
console.log( paths.walk('a.b.c', obj) );
assert( paths.walk('a.b.c', obj) == 1 );

// get array value
console.log( paths.walk('arr.c.2.test', obj) );
assert( paths.walk('aa.b.0', obj) == 'x' );

// walk with upsert and inserting value at the end point
var z = paths.walk('b.x.y.z', obj, {});
assert(obj.b.x.y.z == z);