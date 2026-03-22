# Luffa Passport 🃏

> A unified loyalty and discount miniapp built on the Luffa SuperBox platform.
> Built at Encode Hackathon 2025 by Team Fuzzy — Kingston University.

---

## What It Does

Luffa Passport is a super-wallet for loyalty cards. Instead of juggling separate apps
for every coffee shop, restaurant, and membership scheme, users store all their cards
in one place. Tapping a card instantly surfaces all deals, discounts, and rewards
available for that card — personalised, contextual, and instant.

Built for Kingston University students, starting with local merchants:
- 🍽️ KU Eat Central (campus canteen, Penrhyn Road)
- ☕ Nino Cafe (Fairfield Park)
- 🥙 Cappadocia Kingston (student favourite near KU)
- ⬡ Luffa Wallet (Web3 / crypto card)

---

## Features

- **Card wallet** — horizontal scrollable card carousel, colour-themed per merchant
- **Per-card deals feed** — contextual deals change when switching cards
- **Card detail** — hero banner, points balance, progress bar toward next tier, barcode toggle
- **Save deals** — bookmark any deal, persisted via `wx.setStorageSync`
- **Saved deals page** — view and unsave all bookmarked deals
- **Browse & add cards** — merchant discovery screen with search, tap + to add
- **Add custom card** — manual entry fallback for unlisted merchants
- **Onboarding animation** — first launch shows cards being added one by one
- **Deal count badges** — active deal count shown on each card in the carousel
- **Crypto card** — Luffa Wallet card with ETH balance and EDS token deals
- **Per-merchant analytics** — each merchant has a dedicated dashboard (members, claims, weekly chart, cross-retail insight)
- **Platform analytics** — cross-retail behavioural dashboard accessible via Merchant Portal

---

## Tech Stack

### Frontend — Luffa SuperBox Miniapp

| Technology | Purpose |
|-----------|---------|
| **WXML** | Markup language for miniapp UI. Similar to HTML but with WeChat/Luffa-specific components like `<scroll-view>`, `<view>`, `<text>`. Supports data binding via `{{}}` syntax. |
| **WXSS** | Stylesheet language for miniapp. CSS subset with `rpx` units (responsive pixels that scale to screen width). No external fonts or backdrop-filter support. |
| **JavaScript** | Page logic, lifecycle hooks (`onLoad`, `onShow`), and API calls via `wx.request()`. |
| **wx.setStorageSync** | Luffa/WeChat's built-in local storage API. Used to persist saved deals and custom cards across sessions without a backend. |
| **LuffaTools DevTools** | Electron-based IDE for compiling, previewing, and debugging SuperBox miniapps on simulated and real devices. |

### Backend (Production Architecture)

| Technology | Purpose |
|-----------|---------|
| **Node.js + Express** | REST API server. Lightweight, JavaScript-consistent with the frontend. |
| **PostgreSQL** | Relational database. Chosen for its strong consistency guarantees — important for loyalty point balances and deal claim counts. |
| **Sequelize ORM** | Database abstraction layer. Prevents SQL injection and simplifies migrations. |
| **JWT (JSON Web Tokens)** | Stateless session tokens issued after Luffa wallet authentication. 7-day expiry. |
| **Luffa Wallet Auth** | Users authenticate via their Luffa wallet signature — no passwords stored anywhere in our system. |

---

## Architecture Flow

```
User opens miniapp
       │
       ▼
  wx.login() ──► Luffa auth server
                      │
                      ▼ wallet address
  POST /api/auth/login
       │
       ▼
  JWT issued ──► stored in miniapp
       │
       ▼
  wx.request() with JWT header
       │
  ┌────┴────┐
  │  Express  │
  │   API     │
  └────┬────┘
       │
  ┌────┴────┐
  │PostgreSQL│
  │    DB    │
  └─────────┘
```

---

## Security Model

- **No passwords.** Ever. The Luffa wallet signature is the identity.
- **No PII stored.** Users are identified only by wallet address.
- **JWT expiry.** Tokens expire in 7 days. Refresh flow in roadmap.
- **Parameterised queries.** All DB queries via Sequelize — no raw SQL from user input.
- **HTTPS only.** All `wx.request()` calls require HTTPS in production (Luffa enforces this).

---

## Project Structure

```
EncHack-15/
├── pages/
│   ├── home/              # Main wallet screen
│   ├── card-detail/       # Per-card deals, barcode, merchant view
│   ├── browse-cards/      # Merchant discovery + add card
│   ├── add-card/          # Manual card entry fallback
│   ├── saved-deals/       # Bookmarked deals
│   └── analytics/         # Per-merchant + platform analytics dashboard
├── backend/
│   ├── api/
│   │   ├── routes/        # Express route handlers (cards, deals, auth)
│   │   ├── models/        # Sequelize DB models (User, Card, Deal)
│   │   └── middleware/    # JWT auth middleware
│   ├── db/
│   │   ├── schema.sql     # PostgreSQL table definitions
│   │   └── seed.sql       # Initial Kingston merchant seed data
│   ├── config/
│   │   └── database.js    # Sequelize connection config
│   └── server.js          # Express entry point
├── app.js                 # Global miniapp config + card data
├── app.json               # Page routing
├── app.wxss               # Global styles
└── README.md
```

---

## Roadmap

- [ ] Connect backend to live Luffa auth endpoint
- [ ] Merchant self-registration portal
- [ ] Real deal data via affiliate APIs (Awin, CJ)
- [ ] Crypto card: live ETH balance from Luffa Web3 wallet API
- [ ] Push notifications for expiring deals
- [ ] Expand beyond Kingston — any local merchant can register
- [ ] Cross-retail analytics subscriptions as B2B product
- [ ] JWT refresh token flow and revocation list
