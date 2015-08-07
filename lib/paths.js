/**
 *	Paths.js
 *  An object traversion and modification library
 * 
 *  Copyright 2012 (c) Alex Ladyga ( neocoder@gmail.com )
 * 
 *  Licensed under the terms of MIT license.
 */

(function(){

	var P;

	if ( typeof module !== 'undefined' && module.exports ) {
		P = module.exports = {};
	} else if (window) {
		P = window.P = {};
	} else {
		P = this.P = {};
	}

	P.DEBUG = true;

	function log(str) {
		if ( P.DEBUG ) {
			console.log(str);
		}
	}

	var U = P.utils = {
		isString: function(obj) {
			return (typeof obj == 'string');
		},
		isObject: function(obj) {
			return (typeof obj == 'object' && obj !== null);
		},
		isPlainObject: function(o) {
			return this.isObject(o) && !this.isArray(o);
		},
		isEmpty: function(obj) {
			var empty = true;
			for (p in obj) {
				empty = false;
				break;
			}
			return empty;
		},
		isArray: function(obj) {
			return typeof obj == 'object' && obj != null && obj.concat !== undefined;
		},
		isNumber: function(object) {
			return (typeof object == "number" && !isNaN(object));
		},
		isDate: function(o) {
			return o instanceof Date;
		},
		isArgs: function(o) {
			return o.callee && ( typeof o.length !== undefined )
		},
		getType: function(o) {
			var nativeType = typeof o;
			if ( nativeType === 'object' ) {
				if ( this.isArray(o) ) {
					return 'array';
				} else if ( o === null ) {
					return 'null';
				} else if ( this.isDate(o) ) {
					return 'date';
				} else if ( this.isArgs(o) ) {
					return 'args';
				} else {
					return nativeType;
				}
			} else {
				return nativeType;
			}
		}
	};

	function equal(t, x) {
		var p;

		if ( (typeof t == 'undefined' || typeof x == 'undefined') ) {
			return t === x;
		}

		if ( typeof t == 'string' ||
			typeof t == 'number' ||
			typeof x == 'string' ||
			typeof x == 'number' ) {
			return x === t;		 	 	
		}		

		// walking though the t object				
		for ( p in t ) {
			if ( !t.hasOwnProperty(p) ) { continue; }

			switch ( typeof(t[p]) ) {
				case 'object':
					if ( t[p] === null && t[p] !== x[p] ) {
						return false;
					} else if ( !equal(t[p], x[p]) ) { return false; } 
					break;
				case 'function':
					if ( typeof(x[p]) == 'undefined' || t[p] != x[p] ) {
						return false;	
					}							
					break;
				default:
					if ( t[p] !== x[p] ) { return false; }
			}
		}

		// walking though the x object
		for ( p in x ) {
			if ( !x.hasOwnProperty(p) ) { continue; }

			switch ( typeof(x[p]) ) {
				case 'object':
					if ( x[p] === null && x[p] !== t[p] ) {
						return false;
					} else if ( !equal(x[p], t[p]) ) { return false; } 
					break;
				case 'function':
					if ( typeof(t[p]) == 'undefined' || x[p] != t[p] ) {
						return false;	
					}							
					break;
				default:
					if ( x[p] !== t[p] ) { return false; }
			}
		}

		return true;
	}

	function addToSet(base, newValsArr) {	
		if ( !U.isArray(newValsArr) ) {
			newValsArr = [ newValsArr ];
		}
		var i, j, found;
		for ( i = 0; i < newValsArr.length; i++) {
			found = false;
			for (j = 0; j < base.length; j++) {
				if ( equal(base[j], newValsArr[i] ) ) {
					found = true;
					break;
				}
			}

			if ( !found ) {
				base.push(newValsArr[i]);
			}			
		};
		return base;
	}

	function diff(orig, changed, path) {
		path = path || [];
		var diffPaths = [], k;

		if ( typeof orig == 'undefined' ||
			 typeof changed == 'undefined' ) {
			 return [ path.join('.') ];
		}

		for ( k in orig ) {		

			if ( U.getType(orig[k]) != 'object' && U.getType(orig[k]) != 'array' ) {
				if ( !equal(orig[k], changed[k]) ) {
					diffPaths.push([].concat(path, k).join('.'));
				}
			} else {			
				diffPaths = diffPaths.concat( diff(orig[k], changed[k], [].concat(path, k)) );
			}
		}

		for ( k in changed ) {		
			if ( U.getType(changed[k]) != 'object' &&  U.getType(changed[k]) != 'array') {
				if ( !equal(changed[k], orig[k]) ) {
					addToSet(diffPaths, [].concat(path, k).join('.'));
				}			
			} else {
				addToSet(diffPaths, diff(changed[k], orig[k], [].concat(path, k)) );
			}
		}	

		return diffPaths;
	}

	function buildPath(needle) {
		if ( !U.isString(needle) ) return needle; // path is already converted

		var path = null, keys = [], i = 0;
		if (needle) {
			// Strip the ["string keys"] and [1] array indexes
			needle = needle.
				replace(/\[(['"])(.*?)\1\]/g,
				function (x,$1,$2) {keys[i]=$2;return '.@'+(i++);}).
				replace(/\[(\d+)\]/g,
				function (x,$1) {keys[i]=parseInt($1,10)|0;return '.@'+(i++);}).
				replace(/^\./,''); // remove leading dot

			// If the cleaned needle contains invalid characters, the
			// path is invalid
			if (!(/[^\w\.\$@]/).test(needle)) {
				path = needle.split('.');
				for (i=path.length-1; i >= 0; --i) {
					if (path[i].charAt(0) === '@') {
						path[i] = keys[parseInt(path[i].substr(1),10)];
					}
				}
			} else {
				throw new Error("[paths] Invalid locator: " + needle);
			}
		}
		return path;
	}

	// Function to walk a path and return the object
	function walk(path, origin, upsert, insertValue) {

		insertValue = typeof insertValue != 'undefined' ? insertValue : {};
		// insertValue is a value that will be inserted a the end of the path
		// if upsert property is specified
		
		switch ( arguments.length ) {
			case 1: 
				origin = global;
				upsert = false;
				break;				
			case 2:		
				if ( typeof origin == 'boolean' ) {
					upsert = origin;
					origin = global;					
				} else {
					upsert = false;
				}
				break;
		}

		path = U.isString(path) ? buildPath(path) : path;

		var v=origin,i=0,len=path.length, m;
		for (;i<len && v;++i) {

			m = ( i == (len-1) ) ? insertValue : {};

			v[path[i]] = ( v[path[i]] === undefined && upsert ) ? m : v[path[i]];

			v = v[path[i]];
		}
		return v;
	}

	function isModifier(obj) {
		if ( U.isPlainObject(obj) && !U.isEmpty(obj) ) {

			for ( var p in obj ) {
				if ( p[0] != '$' ) {
					return false
				}
			}
			
			// all properties start with $
			return true;
		}
		return false;
	}

	function getFirstProp(modifier) {
		for ( var p in modifier ) {
			if ( modifier.hasOwnProperty(p)	) {
				return p;
			}
		}
		return null;
	}

	var modifiers = {
		'$inc': function(obj, path, val){

			var v, path, opath = buildPath(path);

				prop = opath.pop(); // getting the property to modify

			if ( path.length > 0 ) {
				v = walk(opath, obj, true, 0); // walk the rest of the path to get the parent object			
			} else {
				v = obj; // if there's no path to walk
			}

			if ( typeof v[prop] == 'undefined' ) {
				v[prop] = val;
			} else {
				v[prop] += val;	
			}		
			return v[prop];
		},
		'$dec': function(obj, path, val){

			var v, path, opath = buildPath(path);

				prop = opath.pop(); // getting the property to modify

			if ( path.length > 0 ) {
				v = walk(opath, obj, true, 0); // walk the rest of the path to get the parent object			
			} else {
				v = obj; // if there's no path to walk
			}

			if ( typeof v[prop] == 'undefined' ) {
				v[prop] = val;
			} else {
				v[prop] -= val;	
			}		
			return v[prop];
		},	
		'$set': function(obj, path, val){
			var v, path, opath = buildPath(path);

				prop = opath.pop(); // getting the property to modify

			if ( path.length > 0 ) {
				v = walk(opath, obj, true); // walk the rest of the path to get the parent object			
			} else {
				v = obj; // if there's no path to walk			
			}
			v[prop] = val;
			return val;
		},
		'$unset': function(obj, path, val){
			var v, path, opath = buildPath(path);

				prop = opath.pop(); // getting the property to modify

			if ( path.length > 0 ) {
				v = walk(opath, obj, false); // walk the rest of the path to get the parent object
				if (typeof v == 'undefined') {
					return;
				}
			} else {
				v = obj; // if there's no path to walk			
			}

			if ( typeof v[prop] != 'undefined' ) {
				delete v[prop];
			}

			return undefined;
		},
		'$push': function(obj, path, val){
			var v, path, opath = buildPath(path);

				prop = opath.pop(); // getting the property to modify

			if ( path.length > 0 ) {
				v = walk(opath, obj, true); // walk the rest of the path to get the parent object			
			} else {
				v = obj; // if there's no path to walk
			}

			if ( typeof v[prop] == 'undefined' ) {
				v[prop] = [].concat(val);
			} else {
				v[prop] = v[prop].concat(val);	
			}

			return v[prop];
		},
		/**
		 * Removes values from an array found by path
		 * @obj Object origin
		 * @path String path
		 * @val mixed value or array of values to remove from array found by path
		 */
		'$pull': function(obj, path, val){
			var v, path, opath = buildPath(path);

				prop = opath.pop(); // getting the property to modify

			if ( path.length > 0 ) {
				v = walk(opath, obj, true); // walk the rest of the path to get the parent object			
			} else {
				v = obj; // if there's no path to walk
			}

			if ( typeof v[prop] === 'undefined' ) {				
				return; // TODO: maybe raise an error here?
			} else {

				var arr = v[prop];

				// WARN: remove this after implementing the comment below
				if ( !U.isArray(val) ) { val = [val]; }

				for ( var j = 0; j < val.length; j++ ) {
					for ( var i = arr.length - 1; i >= 0 ; i-- ) {							
						// TODO: reaplce compariosion with a match function
						// to be able to apply match queries like { val: 'test' }, or { '$gt': 3 }
						if ( arr[i] == val[j] ) {
							arr.splice(i, 1);
						}
					}
				}
				return arr;
			}						
		},
		'$addToSet': function(obj, path, val){
			var v, path, opath = buildPath(path);

				prop = opath.pop(); // getting the property to modify

			if ( path.length > 0 ) {
				v = walk(opath, obj, true); // walk the rest of the path to get the parent object			
			} else {
				v = obj; // if there's no path to walk
			}

			if ( !U.isArray(val) ) { val = [val]; }

			if ( typeof v[prop] == 'undefined' ) {
				v[prop] = val;
			} else {
				var inArr, arr = v[prop];
				
				for ( var j = 0; j < val.length; j++ ) {
					inArr = false;
					for ( var i = arr.length - 1; i >= 0 ; i-- ) {
						if ( arr[i] == val[j] ) {
							inArr = true;
							break;
						}
					}
					if ( !inArr ) {
						arr.push(val[j]);
					}
				}
			}	
			return v[prop];		
		}
	};

	/*[path], obj, val*/
	function walkNSet() {
		var path, obj, val;
		if ( U.isString(arguments[0]) ) {
			path = arguments[0]; 
			obj =  arguments[1];
			val =  arguments[2];
		} else if ( arguments.length >= 2 ) {
			path = '';
			obj = arguments[0];
			val = arguments[1];		
		} else if ( arguments.length < 2 ) {
			throw new Error('paths.walkNSet: not enough arguments');
		}

		var updater = {};

		if ( isModifier(val) ) {
			for ( var type in val ) {
				updater[type] = {};
				updater[type][path] = val[type];
			}
		} else {		
			var o = {};
			o[path] = val;
			updater = {
				'$set': o
			};
		}

		return modify(obj, updater);	
	}

	function modify(obj, mod) {

		// mod = {
		// 	'$inc': {
		// 		'a.b.c': 1,
		// 		'c.d.e': 2
		// 	}
		// }

		var type, path, pathsVals, newValue, oldValueS,
			modifiedPaths = {};

		for ( type in mod ) {

			pathsVals = mod[type];

			for ( path in pathsVals ) {
				
				if ( modifiers[type] ) {

					oldValueS = walk(path, obj, false)+'';
					newValue = modifiers[type](obj, path, pathsVals[path]);
					if ( oldValueS != newValue+'' ) {
						modifiedPaths[path] = newValue;	
					}				
				} else {
					console.warn('unknown modifier: '+type);
					// TODO: test for simple path
				}
			}
		}

		return modifiedPaths;
	}


	P.objEqual = equal;
	P.buildPath = buildPath;
	P.walk = walk;
	P.addToSet = addToSet;
	P.diff = diff;
	P.modify = modify;
}).call(this);