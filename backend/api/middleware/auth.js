/**
 * AUTHENTICATION MIDDLEWARE
 *
 * Verifies the JWT on every protected request.
 * Attaches req.user = { walletAddress, userId } for downstream routes.
 *
 * Why JWT + wallet address?
 * - No passwords stored anywhere in our system
 * - Luffa handles the identity layer (wallet = identity)
 * - JWT is stateless — scales horizontally with no session store needed
 * - 7-day expiry balances security and UX
 *
 * In production: add token refresh endpoint and revocation list (Redis).
 */

const jwt = require('jsonwebtoken')

const authenticateWallet = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1] // Bearer <token>

  if (!token) {
    return res.status(401).json({ error: 'No token provided' })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded  // { walletAddress, userId }
    next()
  } catch (err) {
    return res.status(403).json({ error: 'Invalid or expired token' })
  }
}

module.exports = { authenticateWallet }