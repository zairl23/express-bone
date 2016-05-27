// https://github.com/tgriesser/bookshelf/wiki/Plugin:-Virtuals
// https://github.com/tgriesser/bookshelf/wiki/Plugin:-Visibility
var config = require('../../config/db.js');
var knex = require('knex')({client: 'mysql', connection: config.mysql });
var bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry');
bookshelf.plugin('virtuals');
bookshelf.plugin('visibility');
module.exports = bookshelf;
