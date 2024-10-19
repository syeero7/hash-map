import HashMap from "./HashMap.js";
import HashSet from "./HashSet.js";

const test = new HashMap(16, 0.75);
// test.set("xd", "ko");
// test.set("h", "dd");
// test.set("half", "ku");
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
test.set("moon", "silver");
test.set("moon", "gold");
test.set("apple", "green");
test.set("some", "string");
test.set("moon", "red");
console.log(test.has("moon"));
test.remove("moon");
console.log(test.has("moon"));

// console.log(test.has("go"));
// console.log(test.has("xd"));
// console.log(test.remove("xd"));
// console.log(test.has("xd"));
// console.log(test.get("h"));
console.log(test.length());
// console.log(test.keys());
// console.log(test.values());
console.log(test.entries());
console.log(test.get("apple"));

console.log("----------------------------------------------------------------");

const hash = new HashSet(16, 0.75);

hash.set("apple");
hash.set("yellow");
hash.set("hat");
hash.set("cap");
hash.set("green");
hash.set("red");
hash.set("blue");
hash.set("black");
hash.set("white");
hash.set("pink");
hash.set("cat");
hash.set("dog");
hash.set("fish");
hash.set("duck");
hash.remove("cap");
console.log(hash.length());
console.log(hash.keys());
console.log(hash.get("hat"));
console.log(hash.has("gray"));
console.log(hash.has("cat"));
