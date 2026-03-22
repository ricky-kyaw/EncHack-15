-- ============================================================
-- LUFFA PASSPORT — Seed Data (Kingston University merchants)
-- ============================================================

INSERT INTO merchants (name, verified) VALUES
  ('KU Eat Central', true),
  ('Nino Cafe', true),
  ('Cappadocia Kingston', true)
ON CONFLICT DO NOTHING;

-- Cards and deals would be inserted here referencing merchant IDs
-- In production: merchants self-register via merchant portal