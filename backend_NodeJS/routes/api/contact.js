var router = require('express').Router();

// return a list of tags
router.post('/sendmail', function(req, res) {
    return res.json({email: req});
});

module.exports = router;
