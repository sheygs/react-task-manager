const { Pool } = require("pg");
require("dotenv").config();

const dev_config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
};

// heroku addon
const prod_config = {
  connectionString: process.env.DATABASE_URL,
};

const pool = new Pool(
  process.env.NODE_ENV === "production" ? prod_config : dev_config
);

module.exports = pool;
