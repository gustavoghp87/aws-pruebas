const express = require('express')();
const port = process.env.PORT || require('./env.json').PORT;

express.use(require('cors')())
express.use(require('express').urlencoded({ extended: true }));
express.use(require('express').json());
express.use(require('morgan')('dev'));
express.use('/api', require('./router'));

(() => {
    try {
        express.listen(port)
        console.log(`Listening on port ${port}`);
    } catch(error) {
        console.log(error);
    }
})();
