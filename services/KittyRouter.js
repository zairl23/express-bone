var express = require('express');
var router = new express.Router();
var KittyModel = require('./KittyModel.js');

router.get('/kitty', function(req, res, next){
    var kitty = new KittyModel({ name: 'Silence' });
    console.log(kitty.name); // 'Silence'
    res.send('hello worlds,' + kitty.speak());
});

module.exports = router;
