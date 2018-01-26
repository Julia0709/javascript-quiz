// Classes in Javascript

// class (ES6)
class Test {
  constructor(arg1) {
    this.arg1 = arg1; // When preserving the value
    console.log(arg1);
  }
  get() {
    return this.arg1;
  }
  set(a) {
    this.arg1 = a;
  }
}

const t = new Test('instance');
console.log(`t.get(): ${t.get()}`);
console.log(`t.set(): ${t.set('instance2')}`);
console.log(`t.get(): ${t.get()}`);

// prototype (ES5)
function Test2(arg2) {
  this.arg2 = arg2;
  console.log(arg2);
}
Test2.prototype.get = function() {
  return this.arg2;
};
Test2.prototype.set = function(b) {
  this.arg2 = b;
};

const e = new Test2('prototype');
console.log(`t.get(): ${e.get()}`);
console.log(`t.set(): ${e.set('prototype2')}`);
console.log(`t.get(): ${e.get()}`);
