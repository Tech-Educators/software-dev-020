CREATE TABLE jokes (
  id INT PRIMARY KEY generated ALWAYS AS IDENTITY,
  joke TEXT,
  punchline TEXT
  -- they are the same 
)

-- PRImARY KEY - some unique thing about each record in your table. Normally going to be the ID number. Cannot be null. Tables can only have ONE primary key. 

INSERT INTO jokes (joke, punchline) VALUES
('Why did the scarecrow win an award?', 'Because he was outstanding in his field.'),
('Why don’t skeletons fight each other?', 'They don’t have the guts.'),
('Why did the JavaScript developer go broke?', 'Because he kept using var when he should’ve used let.'),
('What’s a computer’s favorite beatle song?', '“Help!” – every time the user opens Task Manager.'),
('Why do cows wear bells?', 'Because their horns don’t work.'),
('Why don’t eggs tell jokes?', 'They’d crack each other up.'),
('Why did the tomato blush?', 'Because it saw the salad dressing.'),
('What did the zero say to the eight?', 'Nice belt!'),
('Why did the golfer bring two pairs of pants?', 'In case he got a hole in one.'),
('What’s orange and sounds like a parrot?', 'A carrot.'),
('Why did the bicycle fall over?', 'It was two-tired.'),
('Why don’t scientists trust atoms?', 'Because they make up everything.'),
('Why do bees have sticky hair?', 'Because they use honeycombs.'),
('What do you call fake spaghetti?', 'An impasta.'),
('Why did the math book look sad?', 'It had too many problems.'),
('Why can’t your nose be 12 inches long?', 'Because then it would be a foot.'),
('What do you call cheese that isn’t yours?', 'Nacho cheese.'),
('Why don’t some couples go to the gym?', 'Because some relationships don’t work out.'),
('How does the moon cut its hair?', 'Eclipse it.'),
('What kind of music do mummies listen to?', 'Wrap music.');



-- Pretty good, going to use this alot 
SELECT * FROM jokes

-- good for filtering, ordering by price or alphabet ect
SELECT * FROM jokes ORDER BY joke ASC;

-- LIMIT to limit the amount of results
SELECT * FROM jokes LIMIT 5;

-- COUnt how many jokes are in the table
SELECT COUNT(*) FROM jokes;
-- THeres also average and sum functions

-- select specific jokes by the id

SELECT * FROM jokes WHERE id = 1;

-- SELECT specific columns instead of everything 

SELECT joke, id from jokes WHERE id = 2;

-- Select based on character filter
SELECT * FROM jokes WHERE joke ILIKE '%cows%'
