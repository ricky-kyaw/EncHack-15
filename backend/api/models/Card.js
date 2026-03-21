/**
 * CARD MODEL
 *
 * Represents a merchant's loyalty or Web3 card registered on Deal Passport.
 * Merchants register via the merchant portal (future).
 * Users subscribe to cards — stored in user_cards join table.
 */

/**
 * Table: cards
 *
 * id            UUID          PRIMARY KEY   DEFAULT gen_random_uuid()
 * name          VARCHAR(100)  NOT NULL      -- e.g. "Nino Cafe"
 * card_type     VARCHAR(20)   NOT NULL      -- 'loyalty' | 'crypto'
 * accent_color  VARCHAR(7)                 -- hex e.g. "#fbbf24"
 * logo          VARCHAR(10)               -- emoji or icon key
 * color         VARCHAR(7)               -- card background hex
 * active        BOOLEAN       DEFAULT true
 * merchant_id   UUID          REFERENCES merchants(id)
 * created_at    TIMESTAMP     DEFAULT NOW()
 */

// const { DataTypes } = require('sequelize')
// const sequelize = require('../../config/database')

// const Card = sequelize.define('Card', {
//   id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
//   name: { type: DataTypes.STRING(100), allowNull: false },
//   cardType: { type: DataTypes.ENUM('loyalty', 'crypto'), allowNull: false, field: 'card_type' },
//   accentColor: { type: DataTypes.STRING(7), field: 'accent_color' },
//   logo: { type: DataTypes.STRING(10) },
//   color: { type: DataTypes.STRING(7) },
//   active: { type: DataTypes.BOOLEAN, defaultValue: true }
// }, { tableName: 'cards', timestamps: true, createdAt: 'created_at', updatedAt: false })

// module.exports = Card