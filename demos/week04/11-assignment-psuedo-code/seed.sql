CREATE TABLE messages (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    author TEXT,
    message TEXT
)

INSERT INTO messages (author, message) VALUES
(`Sam`, 'I went swimming'),
('Connor', 'Stars are cool'),
('Bertie', 'Sam sucks at mario kart.')


-- THIS FILE IS NOT BEING USED FOR ANYHTING, JUST COPY PASTE YOUR SUPABASE QUERIES IN HERE