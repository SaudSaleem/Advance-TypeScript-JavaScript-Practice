const EventEmitter = require("events");

class Loggers extends EventEmitter {
  log(message) {
    //raise an event
    this.emit('userCreated',message);
  }
}
module.exports = Loggers;
