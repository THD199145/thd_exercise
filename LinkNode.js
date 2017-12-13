function CreateLinkNode(data, pre, next) {
  this.data = data;
  this.preNode = pre;
  if (this.preNode) {
    pre.nextNode = this;
  }
  this.nextNode = next;
};

CreateLinkNode.prototype.print = function() {
  if (this.nextNode) {
    return this.data.name + this.nextNode.print();
  } else {
    return this.data.name;
  }
};

CreateLinkNode.prototype.insertNode = function(node) {
  if (this.nextNode && this.nextNode.preNode) {
    this.nextNode.preNode = node;
  }
  node.nextNode = this.nextNode;
  node.preNode = this;
  this.nextNode = node;
};

CreateLinkNode.prototype.removeNode = function() {
  this.nextNode.preNode = this.preNode;
  this.preNode.nextNode = this.nextNode;
};

CreateLinkNode.prototype.revertNode = function() {
  let tmp = null;
  function revert() {
    if (!this.nextNode) {
      this.nextNode = this.preNode;
      this.preNode = null;
      return this;
    } else {
      tmp = this.preNode;
      this.preNode = this.nextNode;
      this.nextNode = tmp;
      return revert.call(this.preNode);
    }
  }  
  return revert.call(this);
};

var ln1 = new CreateLinkNode({"name": "1"}, null, null);
var ln2 = new CreateLinkNode({"name": "2"}, ln1, null);
var ln3 = new CreateLinkNode({"name": "3"}, ln2, null);
var ln4 = new CreateLinkNode({"name": "4"}, ln3, null);
var ln5 = new CreateLinkNode({"name": "5"}, null, null);

var lHead = ln1;
ln4.insertNode(ln5);
 
console.log(lHead.print());//12345
 
ln3.removeNode();
console.log(lHead.print());// 1245
ln2.insertNode(ln3);
console.log(lHead.print());// 12345
lHead = lHead.revertNode();
console.log(lHead.print());// 54321