-- Crear tabla 'users'
CREATE TABLE users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL
);

-- Insertar datos de ejemplo con números de cédula ecuatorianos
INSERT INTO users (id, name, email) VALUES
('1723456789', 'Bryan Tapia', 'brynta79@gmail.com'),
('0912345678', 'Ana Gómez', 'ana.gomez@example.com'),
('1109876543', 'Luis Pérez', 'luis.perez@example.com');
