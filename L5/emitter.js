function Emitter() {
  this.events = {};
}
// {
//   greet:[cb1,cb2,cb3],
//  my-age:[cb1]
// }
Emitter.prototype.on = function (type, cb) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(cb);
};

Emitter.prototype.emit = function (type) {
  if (this.events[type]) {
    this.events[type].forEach((listener) => {
      listener();
    });
  }
};


module.exports=Emitter;
