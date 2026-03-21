/**
 * AUTH ROUTES
 * Luffa wallet-based authentication.
 *
 * Flow:
 * 1. Miniapp calls wx.login() → gets a Luffa session code
 * 2. Miniapp sends code to POST /api/auth/login
 * 3. Backend verifies with Luffa's auth server
 * 4. Backend issues a JWT tied to the user's wallet address
 * 5. All subsequent requests include JWT in Authorization header
 *
 * Security note: we never store passwords. The wallet signature
 * IS the identity. If Luffa's auth is compromised, that's their
 * security layer — our backend only trusts verified wallet addresses.
 */

const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
// const axios = require('axios')

const JWT_SECRET = process.env.JWT_SECRET // never hardcode this

/**
 * POST /api/auth/login
 * Body: { luffaCode }  ← from wx.login() in the miniapp
 */
router.post('/login', async (req, res) => {
  try {
    const { luffaCode } = req.body

    // Step 1: Exchange luffaCode for wallet address via Luffa's server
    // const luffaResponse = await axios.post('https://api.luffa.im/auth/verify', {
    //   code: luffaCode,
    //   appId: process.env.LUFFA_APP_ID,
    //   appSecret: process.env.LUFFA_APP_SECRET
    // })
    // const { walletAddress, userId } = luffaResponse.data

    // MOCK — remove when Luffa auth endpoint is confirmed
    const walletAddress = '0x' + luffaCode.substring(0, 40)
    const userId = 'user_' + luffaCode.substring(0, 8)

    // Step 2: Issue JWT
    const token = jwt.sign(
      { walletAddress, userId },
      JWT_SECRET,
      { expiresIn: '7d' }
    )

    res.json({ token, walletAddress })
  } catch (err) {
    res.status(401).json({ error: 'Authentication failed' })
  }
})

module.exports = router