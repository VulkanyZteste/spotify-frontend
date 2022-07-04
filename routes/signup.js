const express = require('express');
const router = express.Router();

router.get('/signup', (req, res) => {
    res.render('../views/signup/signup.ejs');
});


module.exports = router;