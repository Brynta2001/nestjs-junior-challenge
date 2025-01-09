-- Crear tabla 'accounts'
CREATE TABLE accounts (
    account_number UUID PRIMARY KEY,
    user_id TEXT NOT NULL,
    balance NUMERIC NOT NULL,
    is_active BOOLEAN NOT NULL
);

-- Insertar datos de ejemplo en 'accounts'
INSERT INTO accounts (account_number, user_id, balance, is_active) VALUES
('550e8400-e29b-41d4-a716-446655440000', '1723456789', 1500.50, true),
('550e8400-e29b-41d4-a716-446655440001', '0912345678', 250.75, false),
('550e8400-e29b-41d4-a716-446655440002', '1109876543', 3890.00, true);

-- Crear tabla 'transactions'
CREATE TABLE transactions (
    id UUID PRIMARY KEY,
    source_account TEXT NOT NULL,
    destination_account TEXT NOT NULL,
    amount NUMERIC NOT NULL,
    created_at TIMESTAMP NOT NULL
);

-- Insertar datos de ejemplo en 'transactions'
INSERT INTO transactions (id, source_account, destination_account, amount, created_at) VALUES
('660e8400-e29b-41d4-a716-446655440000', '550e8400-e29b-41d4-a716-446655440000', '550e8400-e29b-41d4-a716-446655440001', 500.00, '2025-01-08 10:30:00'),
('660e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002', 150.75, '2025-01-08 11:00:00'),
('660e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440000', 3000.00, '2025-01-08 12:45:00');
