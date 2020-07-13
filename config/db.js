

let pg = require('pg');

let pool = new pg.Pool({
    user: 'me',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5432,
}, async (err) => {
    if (!err) {
        console.log('db ok');
    }
});


module.exports = pool;