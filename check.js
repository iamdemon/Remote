var events = require('events');
const util = require('util');

var User = function (name) {
  this.name = name;
}

util.inherits(User, events.EventEmitter);

var sam = new User('Sam');
var ankit = new User('ankit');
var udit = new User('udit');

var array = [sam, ankit, udit];

array.forEach(function (person) {
  person.on('Welcome', function (name) {
    console.log(name + ' said : ' + 'Welcome');
  })
})

sam.emit('Welcome', sam.name);
ankit.emit('Welcome', ankit.name)
