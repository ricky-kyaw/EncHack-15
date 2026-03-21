/**
 * DATABASE CONNECTION
 * PostgreSQL via Sequelize ORM.
 *
 * Setup:
 * 1. Install: npm install sequelize pg pg-hstore
 * 2. Create DB: createdb dealpassport
 * 3. Set environment variables in .env (never commit .env)
 * 4. Run schema: psql -U postgres -d dealpassport -f db/schema.sql
 */

// const { Sequelize } = require('sequelize')

// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//   dialect: 'postgres',
//   logging: false, // set to console.log to debug queries
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// })

// module.exports = sequelize