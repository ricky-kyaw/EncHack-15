/**
 * LUFFA PASSPORT — Express Server
 *
 * Entry point for the REST API.
 * The Luffa miniapp communicates with this via wx.request().
 *
 * To run locally:
 *   cd backend && npm install && npm run dev
 *
 * In production: deploy to Railway, Render, or AWS EC2.
 * The miniapp's wx.request() base URL is set in config/api.js.
 */

require('dotenv').config()
const express = require('express')
const cors = require('cors')

const authRoutes = require('./api/routes/auth')
const cardRoutes = require('./api/routes/cards')
const dealRoutes = require('./api/routes/deals')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/cards', cardRoutes)
app.use('/api/deals', dealRoutes)

app.get('/health', (req, res) => res.json({ status: 'ok' }))

app.listen(PORT, () => {
  console.log(`Luffa Passport API running on port ${PORT}`)
})

module.exports = app