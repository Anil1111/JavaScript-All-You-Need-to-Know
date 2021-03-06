console.log('Hello ES6');
console.log('Hello Webpack 5');
console.log('Hello Babel 7');

// Chapter Fifteen
// 151. What is Iterator - Iterator Basic Idea

const arr = [1, 2, 3];

/* for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
} */

/* function createIterator(collection) { // Interface/function
  let i = 0;
  return {
    next() { // Method
      return {
        done: i >= collection.length,
        value: collection[i++]
      };
    }
  };
} */

// let iterate = createIterator(arr);
// console.log(iterate);
// expected output: (See the Chrome DevTools Console)
/* -> {next: ƒ}
  -> next: ƒ next() */

// console.log(iterate.next());
// expected output: (See the Chrome DevTools Console)
/* -> {done: false, value: 1}
  done: false
  value: 1 */

// console.log(iterate.next());
// expected output: (See the Chrome DevTools Console)
/* -> {done: false, value: 2}
  done: false
  value: 2 */

// console.dir(iterate.next);
// expected output: (See the Chrome DevTools Console)
/* -> ƒ next()
  -> [[Scopes]]: Scopes[3]
    -> 0: Closure (createIterator) {collection: Array(3), i: 2}
      -> collection: (3) [1, 2, 3]
        i: 2 */

// console.log(iterate.next());
// expected output: (See the Chrome DevTools Console)
/* -> {done: false, value: 3}
  done: false
  value: 3 */

// console.log(iterate.next());
// expected output: (See the Chrome DevTools Console)  
/* -> {done: true, value: undefined}
  done: true
  value: undefined */

// Chapter Fifteen
// 152. Create Iterator with ES6 Symbol.Iterator Function

// console.log(arr[Symbol.iterator]); // The Symbol is a unique identifier
// expected output: (See the Chrome DevTools Console)
// ƒ values() { [native code] }

// console.log('str'[Symbol.iterator]);
// expected output: (See the Chrome DevTools Console)
// ƒ [Symbol.iterator]() { [native code] }

// In the case of arrays
let iterate = arr[Symbol.iterator](); // Symbol.iterator -> Already the interface is in an implementation state

console.log(iterate.next());
// expected output: (See the Chrome DevTools Console)
/* -> {value: 1, done: false}
  done: false
  value: 1 */

console.log(iterate.next());
// expected output: (See the Chrome DevTools Console)
/* -> {value: 2, done: false}
  done: false
  value: 2 */

console.log(iterate.next());
// expected output: (See the Chrome DevTools Console)
/* -> {value: 3, done: false}
  done: false
  value: 3 */

console.log(iterate.next());
// expected output: (See the Chrome DevTools Console)
/* -> value: undefined, done: true}
  done: true
  value: undefined */

// In the case of string
let str = 'TEXT';
let iterateText = str[Symbol.iterator]();

console.log(iterateText.next());
// expected output: (See the Chrome DevTools Console)
/* -> {value: "T", done: false}
  done: false
  value: "T" */

console.log(iterateText.next());
// expected output: (See the Chrome DevTools Console)
/* -> {value: "E", done: false}
  done: false
  value: "E" */

console.log(iterateText.next());
// expected output: (See the Chrome DevTools Console)
/* -> {value: "X", done: false}
  done: false
  value: "X" */

console.log(iterateText.next());
// expected output: (See the Chrome DevTools Console)
/* -> {value: "T", done: false}
  done: false
  value: "T" */

console.log(iterateText.next());
// expected output: (See the Chrome DevTools Console)
/* -> {value: undefined, done: true}
  done: true
  value: undefined */

// Chapter Fifteen
// 153. How does For of Loop Work

// The for...of statement
for (let v of arr) { // v = value
  console.log(v);
}

// expected output: (See the Chrome DevTools Console)
/* 1
2
3 */

// String
// Since the string is iterable
for (let v of 'S M Anwarul Islam') {
  console.log(v);
}

// expected output: (See the Chrome DevTools Console)
/* S

M

A
n
w
a
r
u
l

I
s
l
a
m */

// Object
/* let obj = {
  a: 10,
  b: 20
};

for (let v of obj) {
  console.log(v);
} */

// expected output: (See the Chrome DevTools Console)
/* Uncaught TypeError: Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method. */

// Chapter Fifteen
// 154. What is Generator Function in ES6

let obj = {
  start: 1,
  end: 5,
  /* [Symbol.iterator]: function () { // [Symbol.iterator] -> Iterator interface implement
    let currentValue = this.start;
    const self = this;
    return {
      next() {
        return {
          done: currentValue > self.end,
          value: currentValue > self.end ? undefined : currentValue++
        };
      }
    };
  } */
  [Symbol.iterator]: function* () { // function* -> Generator
    let currentValue2 = this.start;
    while (currentValue2 <= this.end) {
      yield currentValue2++; // yield -> Keep doing pause
    }
  }
};

let iterate2 = obj[Symbol.iterator]();
console.log(iterate2.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: false, value: 1}

console.log(iterate2.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: false, value: 2}

console.log(iterate2.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: false, value: 3}

console.log(iterate2.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: false, value: 4}

console.log(iterate2.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: false, value: 5}

console.log(iterate2.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: true, value: undefined}

console.log(iterate2.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: true, value: undefined}

function* generate() {
  yield 1; // yield -> pause
  yield 2; // yield -> pause
  yield 3; // yield -> pause
  // return undefined;
}

let it = generate(); // it for iterator
console.log(it);
// expected output: (See the Chrome DevTools Console)
// -> Generator {_invoke: ƒ}

console.log(it.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: 1, done: false}

console.log(it.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: 2, done: false}

console.log(it.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: 3, done: false}

console.log(it.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: undefined, done: true}

function* generate2(collection2) {
  for (let i = 0; i < collection2.length; i++) {
    yield collection2[i];
  }
}

let it2 = generate2(arr);
console.log(it2.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: 1, done: false}

console.log(it2.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: 2, done: false}

console.log(it2.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: 3, done: false}

console.log(it2.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: undefined, done: true}

const arr2 = [10, 22, 35];

function* generate3(collection3) {
  for (let i = 0; i < collection3.length; i++) {
    yield collection3[i];
  }
}

let it3 = generate3(arr2);
console.log(it3.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: 10, done: false}

console.log(it3.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: 22, done: false}

console.log(it3.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: 35, done: false}

console.log(it3.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: undefined, done: true}

// Chapter Fifteen
// 155. How to Create Custom Iterable Object

let obj2 = {
  start: 1,
  end: 5
};

// The for...of statement
/* for (let v of obj2) {
  console.log(v);
} */

// expected output: (See the Chrome DevTools Console)
/* -> bundle.js:9336 Uncaught TypeError: Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method. */

let obj3 = {
  start: 1,
  end: 5,
  [Symbol.iterator]: function () {
    let currentValue3 = this.start;
    const self2 = this;
    return {
      next() {
        return {
          done: currentValue3 > self2.end,
          // value: currentValue3++
          // Extra logic
          value: currentValue3 > self2.end ? undefined : currentValue3++
        };
      }
    };
  }
};

// The for...of statement
for (let v of obj3) {
  console.log(v);
}

// expected output: (See the Chrome DevTools Console)
/* 1
2
3
4
5 */

// Works as an iterator
let iterate3 = obj3[Symbol.iterator]();
console.log(iterate3.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: false, value: 1}

console.log(iterate3.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: false, value: 2}

console.log(iterate3.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: false, value: 3}

console.log(iterate3.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: false, value: 4}

console.log(iterate3.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: false, value: 5}

console.log(iterate3.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: true, value: undefined}

console.log(iterate3.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: true, value: undefined}

// Chapter Fifteen
// 156. Understanding Set in ES6

let set = new Set([1, 2, 3]);
console.log(set);
// expected output: (See the Chrome DevTools Console)
// -> Set(3) {1, 2, 3}

let set2 = new Set();
set2.add(5);
set2.add(6);
console.log(set2);
// expected output: (See the Chrome DevTools Console)
// -> Set(2) {5, 6}

let set3 = new Set([1, 2, 3]);
set3.add(5);
set3.add(6);
console.log(set3);
// expected output: (See the Chrome DevTools Console)
// -> Set(5) {1, 2, 3, 5, 6}

let set4 = new Set([1, 2, 3]);
set4.add(5);
set4.add(6);
set4.add(1);
set4.add(2);
console.log(set4);
// expected output: (See the Chrome DevTools Console)
// -> Set(5) {1, 2, 3, 5, 6}

console.log(set4.size);
// expected output: (See the Chrome DevTools Console)
// 5

// Some collection of the Set
// clear()
let set5 = new Set([1, 2, 3]);
set5.add(5);
set5.add(6);
set5.add(1);
set5.add(2);

// clear()
set5.clear();
console.log(set5);
// expected output: (See the Chrome DevTools Console)
// -> Set(0) {}

// delete()
let set6 = new Set([1, 2, 3]);
set6.add(5);
set6.add(6);
set6.add(1);
set6.add(2);

// delete()
set6.delete(5);
console.log(set6);
// expected output: (See the Chrome DevTools Console)
// -> Set(4) {1, 2, 3, 6}

// has()
let set7 = new Set([1, 2, 3]);
set7.add(5);
set7.add(6);
set7.add(1);
set7.add(2);

// has()
console.log(set7.has(5));
// expected output: (See the Chrome DevTools Console)
// true

console.log(set7);
// expected output: (See the Chrome DevTools Console)
// -> Set(5) {1, 2, 3, 5, 6}

// keys()
console.log(set7.keys());
// expected output: (See the Chrome DevTools Console)
// -> SetIterator {1, 2, 3, 5, 6}

// values()
console.log(set7.values());
// expected output: (See the Chrome DevTools Console)
// -> SetIterator {1, 2, 3, 5, 6}

let keyIterate = set7.keys();
console.log(keyIterate.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: 1, done: false}

let valueIterate = set7.values();
console.log(valueIterate.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: 1, done: false}

function isIterable(obj) {
  return typeof obj[Symbol.iterator] === 'function';
}

console.log(isIterable({}));
// expected output: (See the Chrome DevTools Console)
// false

console.log(isIterable(obj));
// expected output: (See the Chrome DevTools Console)
// true

console.log(isIterable([]));
// expected output: (See the Chrome DevTools Console)
// true

console.log(isIterable('test'));
// expected output: (See the Chrome DevTools Console)
// true

console.log(isIterable(new Number(45)));
// expected output: (See the Chrome DevTools Console)
// false

console.log(isIterable(new Set()));
// expected output: (See the Chrome DevTools Console)
// true

console.log(isIterable(set));
// expected output: (See the Chrome DevTools Console)
// true

// The for...of statement
for (let v of set7) {
  console.log(v);
}

// expected output: (See the Chrome DevTools Console)
/* 1
2
3
5
6 */

// entries()
console.log(set7.entries());
// expected output: (See the Chrome DevTools Console)
// -> SetIterator {1 => 1, 2 => 2, 3 => 3, 5 => 5, 6 => 6}

// Chapter Fifteen
// 157. Understanding Map in ES6

let map = new Map([
  ['a', 10],
  ['b', 20],
  ['c', 30]
])

console.log(map);
// expected output: (See the Chrome DevTools Console)
// -> Map(3) {"a" => 10, "b" => 20, "c" => 30}

// Some collection of the Map
// set()
map.set('d', 40);
console.log(map);
// expected output: (See the Chrome DevTools Console)
// -> Map(4) {"a" => 10, "b" => 20, "c" => 30, "d" => 40}

// size()
console.log(map.size);
// expected output: (See the Chrome DevTools Console)
// 4

// delete()
map.delete('c');

console.log(map.size);
// expected output: (See the Chrome DevTools Console)
// 3

console.log(map);
// expected output: (See the Chrome DevTools Console)
// -> Map(3) {"a" => 10, "b" => 20, "d" => 40}

// clear()
map.clear();
console.log(map);
// expected output: (See the Chrome DevTools Console)
// -> Map(0) {}

let map2 = new Map([
  ['a', 10],
  ['b', 20],
  ['c', 30]
])

// set()
map2.set('d', 40);
console.log(map2);
// expected output: (See the Chrome DevTools Console)
// -> Map(4) {"a" => 10, "b" => 20, "c" => 30, "d" => 40}

// delete()
map2.delete('c');

console.log(map2.size);
// expected output: (See the Chrome DevTools Console)
// 3

console.log(map2);
// expected output: (See the Chrome DevTools Console)
// -> Map(3) {"a" => 10, "b" => 20, "d" => 40}

// get()
console.log(map2.get('a'));
// expected output: (See the Chrome DevTools Console)
// 10

console.log(map2.get('b'));
// expected output: (See the Chrome DevTools Console)
// 20

// values()
console.log(map2.values());
// expected output: (See the Chrome DevTools Console)
// -> MapIterator {10, 20, 40}

// keys()
console.log(map2.keys());
// expected output: (See the Chrome DevTools Console)
// -> MapIterator {"a", "b", "d"}

// entries()
console.log(map2.entries());
// expected output: (See the Chrome DevTools Console)
// -> MapIterator {"a" => 10, "b" => 20, "d" => 40}

// The for...of statement
let map3 = new Map([
  ['a', 10],
  ['b', 20],
  ['c', 30]
])

// set()
map3.set('d', 40);
console.log(map3);
// expected output: (See the Chrome DevTools Console)
// -> Map(4) {"a" => 10, "b" => 20, "c" => 30, "d" => 40}

map3.set({name: 'S M Anwarul Islam'}, 30); // key, value
// expected output: (See the Chrome DevTools Console)
// -> {name: "S M Anwarul Islam"} 30

for (let [k, v] of map3) { // [k, v] -> key-value destructure from an array
  console.log(v, k); // v -> value | k -> key
}

// expected output: (See the Chrome DevTools Console)
/* 10 "a"
20 "b"
30 "c"
40 "d" */

// The forEach() method
map3.forEach((v, k) => {
  console.log(k, v);
})

// expected output: (See the Chrome DevTools Console)
/* a 10
b 20
c 30
d 40 */

// Chapter Fifteen
// 158. What is WeakSet

let a = {a: 10}, b = {b: 20};
let set8 = new Set([a, b]);

console.log(set8);
// expected output: (See the Chrome DevTools Console)
/* -> Set(2) {{…}, {…}}
  -> [[Entries]]
    -> 0: Object
      -> value: {a: 10}
        a: 10
    -> 1: Object
      -> value: {b: 20}
        b: 20 */

let a2 = {a: 10}, b2 = {b: 20};
let set9 = new Set([a2, b2]);

a2 = null;

console.log(set9);
// expected output: (See the Chrome DevTools Console)
/* -> Set(2) {{…}, {…}}
  -> [[Entries]]
    -> 0: Object
      -> value: {a: 10}
        a: 10
    -> 1: Object
      -> value: {b: 20}
        b: 20 */

let arr3 = [...set9];
console.log(arr3);
// expected output: (See the Chrome DevTools Console)
/* -> (2) [{…}, {…}]
  -> 0: {a: 10}
  -> 1: {b: 20} */

console.log(arr3[0]);
// expected output: (See the Chrome DevTools Console)
// -> {a: 10}

// Using the WeakSet object
// WeakSet()

// Cannot keep any primitive data inside the WeakSet
// let weakSet = new WeakSet([1, 3]);
// expected output: (See the Chrome DevTools Console)
// -> Uncaught TypeError: Invalid value used in weak set

let a3 = {a: 10}, b3 = {b: 20};

let weakSet2 = new WeakSet([a3, b3]);
console.log(weakSet2);
// expected output: (See the Chrome DevTools Console)
/* -> WeakSet {{…}, {…}}
  -> [[Entries]]
    No properties */

a3 = null;    

console.log(weakSet2.has(a3));
// expected output: (See the Chrome DevTools Console)
// false

console.log(weakSet2.has(b3));
// expected output: (See the Chrome DevTools Console)
// true

// The methods that are with the WeakSet:
// weakSet2.has();
// weakSet2.add();
// weakSet2.delete();
// weakSet2.addAll();
// weakSet2.deleteAll();

// Chapter Fifteen
// 159. What is WeakMap

// Using WeakMap
// WeakMap()

let weakMap = new WeakMap([[a, 45], [b, 75]]);
console.log(weakMap);
// expected output: (See the Chrome DevTools Console)
/* -> WeakMap {{…} => 45, {…} => 75}
  -> [[Entries]]
    -> 0: {Object => 45}
      -> key: {a: 10}
         value: 45
    -> 1: {Object => 75}
      -> key: {b: 20}
         value: 75 */

// The methods that are with the WeakMap:
console.log(weakMap.get(a));
// expected output: (See the Chrome DevTools Console)
// 45

let weakMap2 = new WeakMap([[a, 45], [b, 75]]);

a = null;

console.log(weakMap2.get(a));
// expected output: (See the Chrome DevTools Console)
// undefined

console.log(weakMap2.has(a));
// expected output: (See the Chrome DevTools Console)
// false

console.log(weakMap2.has(b));
// expected output: (See the Chrome DevTools Console)
// true

// Chapter Fifteen
// 160. New Class Syntax in ES6

// Constructor function/Constructor pattern (as usual called Constructor function)
// Rectangle
// Earlier when we were working with the constructor pattern
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.draw = function () { // draw -> Method
  console.log(this);
  console.log('Drawing...');
}

let rect1 = new Rectangle(12, 15);
rect1.draw();
// expected output: (See the Chrome DevTools Console)
/* -> Rectangle {width: 12, height: 15}
  height: 15
  width: 12
  -> __proto__: Object
    -> draw: ƒ ()
    -> constructor: ƒ Rectangle(width, height)
    -> __proto__: Object */

// expected output: (See the Chrome DevTools Console)    
// Drawing...

// Convert to class (class syntax in ES6)
class Rectangle2 {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  draw2() { // draw2 -> Method
    console.log('Drawing 2...');
  }
}

let rect2 = new Rectangle2(45, 23);
console.log(rect2);
// expected output: (See the Chrome DevTools Console)
/* -> Rectangle2 {width: 45, height: 23}
  height: 23
  width: 4
  -> __proto__: Object
    -> constructor: ƒ Rectangle2(width, height)
    -> draw2: ƒ draw2()
    -> __proto__: Object */

console.log(typeof Rectangle2)
// expected output: (See the Chrome DevTools Console)
// function

// Without 'new' keyword
/* class Rectangle3 {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  draw3() { // draw3 -> Method
    console.log('Drawing 3...');
  }
} */

// Without 'new' keyword
// let rect3 = Rectangle3(45, 23);
// console.log(rect3);
// expected output: (See the Chrome DevTools Console)
// -> Uncaught TypeError: Cannot call a class as a function

// Chapter Fifteen
// 161. ES6 Class Properties

/* class Rectangle4 {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  this.name = 'S M Anwarul Islam'; // this -> Error

  draw4() { // draw4 -> Method
    console.log('Drawing 4...');
  }
} */

// let rect4 = new Rectangle4(45, 23);
// console.log(rect4);
// expected output: (See the Chrome DevTools Console)
/* -> Uncaught Error: Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: G:\GitHub\repositories\JavaScript-All-You-Need-to-Know\15. Chapter Fifteen - ES6 in Action (All We Need)\150_new_environment_setup_with_webpack_4_babel_7\src\app.js: Unexpected token (872:6) */

class Rectangle5 {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // This is how we can define a property in newer versions of JavaScript
  name = 'S M Anwarul Islam'; // There is no syntax error | We have to install Plugins (class-properties)

  draw5() { // draw5 -> Method
    console.log('Drawing 5...');
  }
}

// let rect5 = new Rectangle5(45, 23);
// console.log(rect5);
// expected output: (See the Chrome DevTools Console)
/* -> Uncaught Error: Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: G:\GitHub\repositories\JavaScript-All-You-Need-to-Know\15. Chapter Fifteen - ES6 in Action (All We Need)\150_new_environment_setup_with_webpack_4_babel_7\src\app.js: Support for the experimental syntax 'classProperties' isn't currently enabled (891:8): */

// This is an upcoming system
// Babel (https://babeljs.io/)
// Docs -> Plugins (Experimental -> class-properties)

let rect5 = new Rectangle5(45, 23);
console.log(rect5);
// expected output: (See the Chrome DevTools Console)
/* -> Rectangle5 {name: "S M Anwarul Islam", width: 45, height: 23}
  height: 23
  name: "S M Anwarul Islam"
  width: 45
  -> __proto__: Object
    -> constructor: ƒ Rectangle5(width, height)
    -> draw5: ƒ draw5()
    -> __proto__: Object */

class Rectangle6 {
/*   constructor(width, height) {
    this.width = width;
    this.height = height;
  } */

  // This is how we can define a property in newer versions of JavaScript
  name2 = 'S M Anwarul Islam';

  draw6() { // draw6 -> Method
    console.log('Drawing 6...');
  }
}

let rect6 = new Rectangle6(45, 23);
console.log(rect6);
// expected output: (See the Chrome DevTools Console)
/* -> Rectangle6 {name2: "S M Anwarul Islam"}
  name2: "S M Anwarul Islam"
  -> __proto__: Object
    -> constructor: ƒ Rectangle6()
    -> draw6: ƒ draw6()
    -> __proto__: Object */

class Rectangle7 {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // This is how we can define a property in newer versions of JavaScript
  name3 = 'S M Anwarul Islam';

  draw7() { // draw7 -> Method
    console.log('Drawing 7...');
  }

  test() { // test -> Method
    
  }
}

let rect7 = new Rectangle7(45, 23);
console.log(rect7);
// expected output: (See the Chrome DevTools Console)
/* -> Rectangle7 {name3: "S M Anwarul Islam", width: 45, height: 23}
  height: 23
  name3: "S M Anwarul Islam"
  width: 45
  -> __proto__: Object
    -> constructor: ƒ Rectangle7(width, height)
    -> draw7: ƒ draw7()
    -> test: ƒ test()
    -> __proto__: Object */

class Rectangle8 {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.another = function () { // another -> Method

    }
  }

  // This is how we can define a property in newer versions of JavaScript
  name4 = 'S M Anwarul Islam';

  draw8() { // draw8 -> Method
    console.log('Drawing 8...');
  }

  test2() { // test2 -> Method
    
  }
}

let rect8 = new Rectangle8(45, 23);
console.log(rect8);
// expected output: (See the Chrome DevTools Console)
/* -> Rectangle8 {name4: "S M Anwarul Islam", width: 45, height: 23, another: ƒ}
  -> another: ƒ ()
     height: 23
     name4: "S M Anwarul Islam"
     width: 45
     -> __proto__: Object
       -> constructor: ƒ Rectangle8(width, height)
       -> draw8: ƒ draw8()
       -> test2: ƒ test2()
       -> __proto__: Object */

class Rectangle9 {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.another2 = function () { // another2 -> Method

    }
  }

  // This is how we can define a property in newer versions of JavaScript
  name5 = 'S M Anwarul Islam';

  test4 = function () { // test4 -> Method
    
  }

  draw9() { // draw9 -> Method
    console.log('Drawing 9...');
  }

  test3() { // test3 -> Method
    
  }
}

let rect9 = new Rectangle9(45, 23);
console.log(rect9);
// expected output: (See the Chrome DevTools Console)
/* -> Rectangle9 {name5: "S M Anwarul Islam", width: 45, height: 23, test4: ƒ, another2: ƒ}
  -> another2: ƒ ()
     height: 23
     name5: "S M Anwarul Islam"
  -> test4: ƒ ()
     width: 45
  -> __proto__: Object
    -> constructor: ƒ Rectangle9(width, height)
    -> draw9: ƒ draw9()
    -> test3: ƒ test3()
    -> __proto__: Object */