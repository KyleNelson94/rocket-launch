var express = require('express');
var router = express.Router();

router.get('/api', function(req, res, next) {
    res.json({message: 'All Systems go!'});
});

module.exports = router;