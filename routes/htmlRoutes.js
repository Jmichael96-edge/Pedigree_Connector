const router = require('express').Router();
const path = require('path');

// index page
router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../app/public/index.html'));
});

module.exports = router;