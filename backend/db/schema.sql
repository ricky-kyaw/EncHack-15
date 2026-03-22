-- ============================================================
-- LUFFA PASSPORT — PostgreSQL Schema
-- ============================================================
-- Run this once to initialise the database.
-- psql -U postgres -d luffapassport -f schema.sql
-- ============================================================

CREATE EXTENSION IF NOT EXISTS "pgcrypto"; -- for gen_random_uuid()

-- Users: identified by Luffa wallet address only. No PII.
CREATE TABLE IF NOT EXISTS users (
  wallet_address  VARCHAR(42)   PRIMARY KEY,
  luffa_user_id   VARCHAR(100)  UNIQUE NOT NULL,
  created_at      TIMESTAMP     DEFAULT NOW(),
  last_seen       TIMESTAMP
);

-- Merchants: businesses that register loyalty schemes
CREATE TABLE IF NOT EXISTS merchants (
  id              UUID          PRIMARY KEY DEFAULT gen_random_uuid(),
  name            VARCHAR(100)  NOT NULL,
  wallet_address  VARCHAR(42)   REFERENCES users(wallet_address),
  verified        BOOLEAN       DEFAULT false,
  created_at      TIMESTAMP     DEFAULT NOW()
);

-- Cards: loyalty or crypto cards belonging to merchants
CREATE TABLE IF NOT EXISTS cards (
  id              UUID          PRIMARY KEY DEFAULT gen_random_uuid(),
  merchant_id     UUID          REFERENCES merchants(id) ON DELETE CASCADE,
  name            VARCHAR(100)  NOT NULL,
  card_type       VARCHAR(20)   NOT NULL CHECK (card_type IN ('loyalty', 'crypto')),
  accent_color    VARCHAR(7),
  color           VARCHAR(7),
  logo            VARCHAR(10),
  active          BOOLEAN       DEFAULT true,
  created_at      TIMESTAMP     DEFAULT NOW()
);

-- Deals: offers attached to cards
CREATE TABLE IF NOT EXISTS deals (
  id              UUID          PRIMARY KEY DEFAULT gen_random_uuid(),
  card_id         UUID          REFERENCES cards(id) ON DELETE CASCADE,
  title           VARCHAR(200)  NOT NULL,
  description     TEXT,
  tag             VARCHAR(50),
  tag_color       VARCHAR(7),
  expiry_date     DATE,
  active          BOOLEAN       DEFAULT true,
  claim_count     INTEGER       DEFAULT 0,
  created_at      TIMESTAMP     DEFAULT NOW()
);

-- User cards: which cards a user has added to their passport
CREATE TABLE IF NOT EXISTS user_cards (
  wallet_address  VARCHAR(42)   REFERENCES users(wallet_address) ON DELETE CASCADE,
  card_id         UUID          REFERENCES cards(id) ON DELETE CASCADE,
  added_at        TIMESTAMP     DEFAULT NOW(),
  PRIMARY KEY (wallet_address, card_id)
);

-- User saved deals: bookmarked deals per user
CREATE TABLE IF NOT EXISTS user_saved_deals (
  wallet_address  VARCHAR(42)   REFERENCES users(wallet_address) ON DELETE CASCADE,
  deal_id         UUID          REFERENCES deals(id) ON DELETE CASCADE,
  saved_at        TIMESTAMP     DEFAULT NOW(),
  PRIMARY KEY (wallet_address, deal_id)
);

-- Indexes for common query patterns
CREATE INDEX IF NOT EXISTS idx_deals_card_id ON deals(card_id);
CREATE INDEX IF NOT EXISTS idx_user_cards_wallet ON user_cards(wallet_address);
CREATE INDEX IF NOT EXISTS idx_user_saved_wallet ON user_saved_deals(wallet_address);