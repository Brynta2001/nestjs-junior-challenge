-- Crear tabla 'transactions'
CREATE TABLE transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    source_account TEXT NOT NULL,
    destination_account TEXT NOT NULL,
    amount NUMERIC NOT NULL,
    state TEXT NOT NULL
);

-- Insertar datos de ejemplo en 'transactions'
INSERT INTO transactions (source_account, destination_account, amount, state) VALUES
('550e8400-e29b-41d4-a716-446655440000', '550e8400-e29b-41d4-a716-446655440001', 500.00, 'APPROVED'),
('550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002', 150.75, 'PENDING'),
('550e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440000', 3000.00, 'FAILED');