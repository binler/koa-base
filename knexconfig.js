require('dotenv').config();

module.exports = {
    development: {
        client: 'mysql',
        debug: false,
        connection: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
        },
        migrations: {
            directory: './app/database/migrations',
        },
        seeds: {
            directory: './app/database/seeds/dev',
        },
    },
    production: {
        client: 'mysql',
        debug: false,
        connection: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
        },
        migrations: {
            directory: './app/database/migrations',
        },
    }
}
