const Events = require("./config").events;
const Emitter = require("./emitter");

console.log(Events);
// output
// {
//   GREET: 'greet',
//   FILESAVED: 'filesaved',
//   FILEOPEN: 'fileopen',
//   MYAGE: 'my-age'
// }


const emitter = new Emitter(); // Emitter { events: {} }
console.log(emitter);

// on is used to add callback to the event type
emitter.on(Events.GREET, () => {
  console.log("Hello World");
});

emitter.on(Events.GREET, () => {
  console.log("Hello World 2");
});

emitter.on(Events.MYAGE, () => {
  console.log("I am 22 Years old");
});

emitter.emit(Events.MYAGE);
