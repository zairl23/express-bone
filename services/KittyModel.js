var mongoose = require('mongoose');

var kittySchema = mongoose.Schema({
    name: String
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
  return greeting;
}

var KittyModel = mongoose.model('Kitty', kittySchema);

module.exports = KittyModel;
