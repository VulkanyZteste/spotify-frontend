const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
    res.render('../views/logged/logged.ejs');
});


module.exports = router;