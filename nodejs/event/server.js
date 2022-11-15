var events = require('events');
var eventEmitter = new events.EventEmitter();



var myHandler2 = function () {
    console.log("MyHandler file 2.");
    eventEmitter.emit('event3')
}
var myHandler3 = function () {
    console.log("MyHandler file 3.");
    // eventEmitter.emit('event3')
}

var myHandler = function () {
    console.log("MyHandler file 1.");
    eventEmitter.emit('event2');

}




eventEmitter.on('event1', myHandler);
eventEmitter.on('event2', myHandler2);
eventEmitter.on('event3', myHandler3);
eventEmitter.on('event4',function (msg) {
    console.log(msg);
})

eventEmitter.emit('event1');
// eventEmitter.emit('event3');
eventEmitter.emit('event4', "Jai Shree Ram");

var i = 0;
eventEmitter.once('event5',function () {
    console.log(++i);
})

eventEmitter.emit('event5');
eventEmitter.emit('event5');
eventEmitter.emit('event5');
eventEmitter.emit('event5');