/**
 * DEALS ROUTES
 * Handles deal creation, retrieval, and user-saved deals.
 *
 * Deals belong to Cards (many-to-one).
 * Users can save deals (many-to-many via UserSavedDeals join table).
 */

const express = require('express')
const router = express.Router()
const { authenticateWallet } = require('../middleware/auth')
// const Deal = require('../models/Deal')
// const UserSavedDeal = require('../models/UserSavedDeal')

/**
 * GET /api/deals?cardId=
 * Returns all active deals for a given card.
 */
router.get('/', authenticateWallet, async (req, res) => {
  try {
    const { cardId } = req.query
    // const deals = await Deal.findAll({ where: { cardId, active: true } })
    // res.json(deals)
    res.json({ message: `Deals for card ${cardId} — connect DB to activate` })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

/**
 * POST /api/deals/save
 * User saves a deal to their profile.
 * Persisted server-side so saved deals sync across devices.
 * Body: { dealId }
 */
router.post('/save', authenticateWallet, async (req, res) => {
  try {
    const { dealId } = req.body
    const walletAddress = req.user.walletAddress
    // await UserSavedDeal.upsert({ walletAddress, dealId })
    // res.json({ saved: true })
    res.json({ message: `Deal ${dealId} saved for ${walletAddress} — connect DB` })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

/**
 * GET /api/deals/saved
 * Returns all deals saved by the authenticated user.
 */
router.get('/saved', authenticateWallet, async (req, res) => {
  try {
    const walletAddress = req.user.walletAddress
    // const saved = await UserSavedDeal.findAll({ where: { walletAddress }, include: [Deal] })
    // res.json(saved)
    res.json({ message: `Saved deals for ${walletAddress} — connect DB` })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router