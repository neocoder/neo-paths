var paths = require('../lib/paths.js');
var assert = require('assert');


var obj = {
	a:{	
		b: {
			c: 1
		},
		bb: 8
	}
};

// test $inc ier

var mpaths = paths.modify(obj, {
	'$inc': {
		'a.b.c': 2,
		'a.b.cc': 7,
		'b': 1,
		'c': 1
	},
	'$set': { 'aa.bb': 5, 'a.bb':8 }
});

assert(obj.a.b.c === 3);
assert(obj.a.b.cc === 7);
assert(obj.b === 1);
assert(obj.c === 1);
assert(obj.a.bb === 8);

assert(typeof mpaths['a.bb'] == 'undefined' ); // value wasn't changed

// test $set modifier

obj = {
	a:{	
		b: {
			c: 1
		}
	},
	b: 0
};


paths.modify(obj, {
	'$set': {
		'a.b.c': 5,
		'b': 'test',
		'c': 555,
		'h.e.l.l': { o: 'world' }
	}
});

assert(obj.a.b.c === 5);
assert(obj.b === 'test');
assert(obj.c === 555);
assert(obj.h.e.l.l.o === 'world');

// test $dec modifier

obj = {
	a:{	
		b: {
			c: 5
		}
	},
	b: 3
};

paths.modify(obj, {
	'$dec': {
		'a.b.c': 1,
		'a.b.cc': 7,
		'b': 1,
		'c': 1
	},
	'$set': { 'aa.bb': 5 }
});

assert(obj.a.b.c === 4);
assert(obj.a.b.cc === 7);
assert(obj.b === 2);
assert(obj.c === 1);

// test $unset modifier

obj = {
	a:{	
		b: {
			c: 5
		}
	},
	b: 3
};

paths.modify(obj, {
	'$unset': {
		'a.b.c': 1,
		'a.b.cc': 7,
		'b': 1
	}
});

assert(typeof obj.a.b.c == 'undefined');
assert(typeof obj.a.b.cc === 'undefined');
assert(typeof obj.b == 'undefined');


// test $push modifier

obj = {
	a:{	
		b: {
			c: [ 'apple', 'orange', 'pear' ]
		}
	}	
};


paths.modify(obj, {
	'$push': {
		'a.b.c': [ 'tangerine' ],
		'b': ['plums', 'cherries']
	}
});

assert(obj.a.b.c.length === 4);
assert(obj.b.length === 2);

// test $pull modifier

obj = {
	a:{	
		b: {
			c: [ 'apple', 'orange', 'pear' ]
		}
	}	
};


paths.modify(obj, {
	'$pull': {
		'a.b.c': [ 'pear' ],
		'b': ['plums', 'cherries']
	}
});

assert(obj.a.b.c.length === 2);
assert( typeof obj.b == 'undefined');

// test $addToSet modifier

obj = {
	a:{	
		b: {
			c: [ 'apple', 'orange', 'pear' ]
		}
	}	
};

var modedPaths = paths.modify(obj, {
	'$addToSet': {
		'a.b.c': [ 'tangering', 'apple' ],
		'b': ['plums', 'cherries'],
		'c': 'hello'
	}
});

console.log( JSON.stringify(obj, null, '\t') );

assert(obj.a.b.c.length === 4);
assert(obj.b.length === 2);
assert(obj.c.length === 1);

// modified paths should always be an array

assert( typeof modedPaths == 'object' );

assert(modedPaths['a.b.c'] && modedPaths['a.b.c'].length == 4);
assert(modedPaths['b'] && modedPaths['b'].length == 2);
assert(modedPaths['c'] && modedPaths['c'].length == 1);


//console.log(JSON.stringify(obj, null, '  '));


