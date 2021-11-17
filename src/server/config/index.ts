import * as dotenv from "dotenv";

const envFound = dotenv.config();

if (!envFound) {
    throw new Error('Cannot find a .env file!')
}

export default {
    mysql: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_SCHEMA,
        // port: process.env.DB_PORT
    },
    port: process.env.PORT,
    apiPrefix: process.env.API_PREFIX
}