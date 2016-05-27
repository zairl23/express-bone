var bookshelf = require('../base/bookshelf');

var User = bookshelf.Model.extend({
  tableName: 'users',
  idAttribute: '_id'
 });

 module.exports = bookshelf.model('User', User);
