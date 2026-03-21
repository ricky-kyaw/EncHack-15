/**
 * USER MODEL
 *
 * Users are identified by their Luffa wallet address — no email, no password.
 * This is the Web3 identity model: your wallet IS your account.
 *
 * In production: use Sequelize ORM with PostgreSQL.
 * Run: npm install sequelize pg pg-hstore
 */

// const { DataTypes } = require('sequelize')
// const sequelize = require('../../config/database')

/**
 * Table: users
 *
 * wallet_address  VARCHAR(42)   PRIMARY KEY   -- Ethereum-style address e.g. 0x3f4A...c92B
 * luffa_user_id   VARCHAR(100)  UNIQUE        -- Luffa's internal user ID
 * created_at      TIMESTAMP     DEFAULT NOW()
 * last_seen       TIMESTAMP
 *
 * No PII stored. No name, no email, no phone.
 * Privacy by design — aligns with Luffa's own privacy philosophy.
 */

// const User = sequelize.define('User', {
//   walletAddress: {
//     type: DataTypes.STRING(42),
//     primaryKey: true,
//     field: 'wallet_address'
//   },
//   luffaUserId: {
//     type: DataTypes.STRING(100),
//     unique: true,
//     field: 'luffa_user_id'
//   },
//   lastSeen: {
//     type: DataTypes.DATE,
//     field: 'last_seen'
//   }
// }, {
//   tableName: 'users',
//   timestamps: true,
//   createdAt: 'created_at',
//   updatedAt: false
// })

// module.exports = User