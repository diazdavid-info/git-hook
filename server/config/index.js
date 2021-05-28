require('dotenv').config('');

const config = {
    server: {
        port: process.env.SERVER_PORT,
    },
    database: {
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASS,
        database: process.env.DATABASE_DATABASE
    }
};

module.exports = config;