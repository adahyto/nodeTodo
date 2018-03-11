const express = require('express');
const router = express.Router();

router.all('/', (req, res, next)=>{
    req.app.locals.layout = 'board';
    next();
});

router.get('/', (req, res)=>{
    res.render('board/index');
});

module.exports = router;