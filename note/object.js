// Objects in Javascript
// Implement a function getKey() that returns an object's key from value.

// Given obj:
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  z: 26,
};

// O(n)
function getKey1(value) {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (obj[key] === value) {
      return key;
    }
  }
}

console.log(getKey1(1));

// O(1)
const keys = Object.keys(obj);
const obj2 = {};
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  obj2[obj[key]] = key;
}

function getKey2(value) {
  return obj2[value];
}

console.log(getKey2(2));
