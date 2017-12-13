var name = 'ZS';
var age = 19;

function test() {
  // console.log(this);
  console.log(this.name);
  console.log(this.age);
};

test();

var obj = {name: 'LS', age: 20};
test.call(obj);

function foo(a, b) {
  console.log(this.name);
  console.log(a);
  console.log(b);  
};

foo.call(obj, 12, true);

function bar(a, b) {
  var o = {name: 'WW'};
  foo.call(o, a, b);
};

bar.call('CodeerPlayer', '1', '2');