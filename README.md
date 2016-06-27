# Paths.js

A javascript library to traverse an modify complex javascript objects with mongoDB inspired syntax.

# Examples

paths.walk
----------

```javascript

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

    paths.walk('a', obj);
    // returns refference to the { b: { c: 1 } } object

    paths.walk('a.b.c', obj);
    // returns 1

    paths.walk('arr.c.2.test', obj);
    // returns 'three'

```

paths.modify
------------

### ```$set``` modifier ###

```javascript

    var obj = {
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

```

The result object

```javascript

    obj = {
        "a": {
            "b": {
                "c": 5
            }
        },
        "b": "test",
        "c": 555,
        "h": {
            "e": {
                "l": {
                    "l": {
                        "o": "world"
                    }
                }
            }
        }
    }

```

### ```$dec``` modifier ###

```javascript

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

```

The result object

```javascript

obj = {
    "a": {
        "b": {
            "c": 4,
            "cc": 7
        }
    },
    "b": 2,
    "c": 1,
    "aa": {
        "bb": 5
    }
}


```


### ```$unset``` modifier ###

```javascript

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

```

The result object

```javascript

    {
        "a": {
            "b": {}
        }
    }


```

### ```$push``` modifier ###

```javascript

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

```

The result object

```javascript

    {
        "a": {
            "b": {
                "c": [
                    "apple",
                    "orange",
                    "pear",
                    "tangerine"
                ]
            }
        },
        "b": [
            "plums",
            "cherries"
        ]
    }

```

### ```$pull``` modifier ###

```javascript

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


```

the result object

```javascript

    obj = {
        "a": {
            "b": {
                "c": [
                    "apple",
                    "orange"
                ]
            }
        }
    }

```


### ```$addToSet``` modifier ###

```javascript

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

```

the result object

```javascript

    {
        "a": {
            "b": {
                "c": [
                    "apple",
                    "orange",
                    "pear",
                    "tangering"
                ]
            }
        },
        "b": [
            "plums",
            "cherries"
        ],
        "c": [
            "hello"
        ]
    }

```



# Licence

(The MIT License)

Copyright (c) 2012 [Alex Ladyga](mailto:neocoder@gmail.com) - [http://alexladyga.posterous.com](http://alexladyga.posterous.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
