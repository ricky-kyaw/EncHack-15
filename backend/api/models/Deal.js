/**
 * DEAL MODEL
 *
 * A deal belongs to a Card.
 * Deals have an expiry — expired deals are hidden from the miniapp
 * but kept in DB for analytics (which deals drove most engagement).
 *
 * Table: deals
 *
 * id            UUID          PRIMARY KEY
 * card_id       UUID          REFERENCES cards(id) ON DELETE CASCADE
 * title         VARCHAR(200)  NOT NULL
 * description   TEXT
 * tag           VARCHAR(50)              -- e.g. "Student", "Limited Time"
 * tag_color     VARCHAR(7)              -- hex
 * expiry_date   DATE                    -- NULL means ongoing
 * active        BOOLEAN       DEFAULT true
 * claim_count   INTEGER       DEFAULT 0  -- analytics: how many times claimed
 * created_at    TIMESTAMP     DEFAULT NOW()
 */

// const { DataTypes } = require('sequelize')
// const sequelize = require('../../config/database')

// const Deal = sequelize.define('Deal', {
//   id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
//   cardId: { type: DataTypes.UUID, references: { model: 'cards', key: 'id' }, field: 'card_id' },
//   title: { type: DataTypes.STRING(200), allowNull: false },
//   description: { type: DataTypes.TEXT },
//   tag: { type: DataTypes.STRING(50) },
//   tagColor: { type: DataTypes.STRING(7), field: 'tag_color' },
//   expiryDate: { type: DataTypes.DATEONLY, field: 'expiry_date' },
//   active: { type: DataTypes.BOOLEAN, defaultValue: true },
//   claimCount: { type: DataTypes.INTEGER, defaultValue: 0, field: 'claim_count' }
// }, { tableName: 'deals', timestamps: true, createdAt: 'created_at', updatedAt: false })

// module.exports = Deal