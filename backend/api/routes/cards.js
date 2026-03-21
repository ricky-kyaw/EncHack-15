/**
 * CARDS ROUTES
 * Handles merchant card registration and retrieval.
 *
 * In production: merchants register their loyalty scheme here.
 * The miniapp fetches available cards for a given user via GET /cards.
 *
 * Future: paginate by location (lat/lng) so users see nearby merchants first.
 */

const express = require('express')
const router = express.Router()
const { authenticateWallet } = require('../middleware/auth')
// const Card = require('../models/Card')  // uncomment when DB is connected

/**
 * GET /api/cards
 * Returns all active merchant cards.
 * Optionally filtered by ?lat=&lng= for location-aware sorting.
 */
router.get('/', authenticateWallet, async (req, res) => {
  try {
    // const cards = await Card.findAll({ where: { active: true } })
    // res.json(cards)

    // MOCK — replace with DB query above
    res.json([
      { id: 'ku-eat', name: 'KU Eat Central', type: 'loyalty' },
      { id: 'nino', name: 'Nino Cafe', type: 'loyalty' },
      { id: 'cappadocia', name: 'Cappadocia', type: 'loyalty' },
      { id: 'luffa-crypto', name: 'Luffa Wallet', type: 'crypto' }
    ])
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

/**
 * POST /api/cards
 * Merchant registers a new loyalty card scheme.
 * Body: { name, type, accentColor, logo, deals[] }
 */
router.post('/', authenticateWallet, async (req, res) => {
  try {
    // const card = await Card.create(req.body)
    // res.status(201).json(card)
    res.status(201).json({ message: 'Card creation endpoint — connect to DB to activate' })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

module.exports = router