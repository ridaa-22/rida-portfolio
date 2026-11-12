/*
# Create contact_messages table

1. New Tables
- `contact_messages`: messages submitted through the portfolio contact form.
  - `id` (uuid, primary key)
  - `name` (text, required, max 120 chars)
  - `email` (text, required, max 254 chars)
  - `message` (text, required, max 2000 chars)
  - `created_at` (timestamptz, defaults to now)

2. Security
- Row level security enabled on `contact_messages`.
- Visitors (anon role) can only INSERT rows. They cannot read, update, or delete any messages.
- Only the INSERT privilege is granted, so the table stays private to the site owner.

3. Notes
- No sign-in exists in this app, so the insert policy targets the anon role.
- Length and format checks are enforced in the table itself as well as in the form.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 120),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 254 AND email LIKE '%_@_%'),
  message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_messages TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
