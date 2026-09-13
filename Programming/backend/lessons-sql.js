/* ========================================
   Chango — Backend Roadmap · Level 04: SQL & Databases (10 lessons)
   ======================================== */

Object.assign(LESSONS, {

  'sql-what': {
    id: 'sql-what',
    section: 'SQL & Databases',
    level: '04',
    title: 'What is a Database?',
    time: '25 min',
    difficulty: 'Beginner',
    book: 'Book Chapter 4 · Intro',

    intro: 'A database is a well-organized warehouse where your data lives on forever, workers (queries) fetch exactly what you asked for, and nothing gets lost when the electricity blinks. Your TXT file was a shoebox; this is a warehouse.',

    whyMatters: 'Everything you will build — users, orders, posts — ends up in a database. Understanding how databases think is the difference between an app and a tech demo. SQL is how you talk to it.',

    explanation: [
      { tag: 'heading', text: 'Tables & rows' },
      { tag: 'text', text: 'A database has <strong>tables</strong> (like spreadsheets). A table has <strong>columns</strong> (the fields: name, email) and <strong>rows</strong> (the actual records: one row per user). SQL is the language you use to ask rows questions.' },
      { tag: 'heading', text: 'MySQL in your stack' },
      { tag: 'text', text: 'MySQL is the database engine. Laravel can also use SQLite (a single file) and PostgreSQL. Same ideas, different engines — you learn one, the others feel familiar.' },
      { tag: 'heading', text: 'What SQL looks like' },
      { tag: 'text', text: 'SQL is declarative: you say WHAT you want ("all users from Cairo with at least 2 orders"), not HOW. The engine figures out the routing. That is why "\"fetch users"" is a sentence, not an algorithm.' }
    ],

    code: [
      {
        lang: 'sql',
        label: 'First taste of SQL',
        code: 'SELECT name, email\n' +
              'FROM users\n' +
              'WHERE city = "Cairo";'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'Read it like English: "select the name and email columns, from the users table, where the city equals Cairo." SQL reads almost like a sentence once you know the three keywords.' }
    ],

    mistakes: [
      'Forgetting the semicolon after the statement — most SQL clients ignore the rest of your query silently.',
      'SELECT * when you only need two columns — it may be convenient today and painfully slow on a real table.',
      'Hardcoding strings with double quotes in strict MySQL — MySQL is fine with them, but single quotes are the SQL standard.'
    ],

    proTip: 'Think about tables as a logical home for one concept: a users table holds users, an orders table holds orders. If your "users" table also contains favorite_color_of_order, reconsider the design.'

    ,

    quiz: {
      cat: 'Databases',
      question: 'What does a row in a table represent?',
      options: [
        'One single record (e.g., one user)',
        'The entire table structure',
        'A column',
        'The database name'
      ],
      correct: 0,
      feedback: { correct: '🔥 One row = one real-world record. Columns describe it, rows are it.', wrong: '❌ Nope. A row is one record; columns define the fields each record has.' }
    },

    challenge: {
      lang: 'sql',
      text: 'Write a SELECT query that returns only the <strong>name</strong> and <strong>id</strong> of users whose <strong>country</strong> is "Egypt". Just write the SQL — you will run it for real in the next lessons.',
      code: 'SELECT ...\nFROM users\nWHERE ...;\n',
      hint: 'name and id in the SELECT list, users as the table, country = "Egypt" in WHERE.'
    },

    prev: { slug: 'git-prs', title: 'Pull Requests' },
    next: { slug: 'sql-select', title: 'SELECT & WHERE' }
  },

  'sql-select': {
    id: 'sql-select',
    section: 'SQL & Databases',
    level: '04',
    title: 'SELECT & WHERE',
    time: '35 min',
    difficulty: 'Beginner',
    book: 'Book Chapter 4 · SELECT',

    intro: 'SELECT is the Kindle of SQL: you point at a table, describe the book you want, and it fetches exactly that — no repeats unless you ask for repeats. The most common command in the job.',

    whyMatters: 'Reading data is 90% of what backend devs do. SELECT + WHERE is how that reading happens. Master these two and every later topic (JOINs, aggregates, Laravel queries) plugs straight into the same idea.',

    explanation: [
      { tag: 'heading', text: 'Columns & alias' },
      { tag: 'text', text: 'List the columns you want, or use <span class="inline-code">*</span> for all. <span class="inline-code">AS</span> renames a column in the result (an <em>alias</em>): <span class="inline-code">SELECT price AS total_price</span>.' },
      { tag: 'heading', text: 'WHERE filters' },
      { tag: 'text', text: 'Comparisons: =, !=, >, <, >=, <=. Combine with <span class="inline-code">AND</span> / <span class="inline-code">OR</span>. Range: <span class="inline-code">BETWEEN</span>. Membership: <span class="inline-code">IN (...)</span>. Partial text: <span class="inline-code">LIKE "%keyword%"</span>.' },
      { tag: 'heading', text: 'ORDER BY & LIMIT' },
      { tag: 'text', text: 'Sort results with <span class="inline-code">ORDER BY price DESC</span>. Limit how many come back with <span class="inline-code">LIMIT 10</span> — essential for pagination and for not crashing your own site with a 2-million-row dump.' }
    ],

    code: [
      {
        lang: 'sql',
        label: 'Filtering power',
        code: 'SELECT name, price\n' +
              'FROM products\n' +
              'WHERE price >= 50\n' +
              '  AND category = "electronics"\n' +
              'ORDER BY price DESC\n' +
              'LIMIT 10;'
      },
      {
        lang: 'sql',
        label: 'IN, BETWEEN, LIKE',
        code: 'SELECT * FROM users WHERE city IN ("Cairo", "Giza");\n' +
              'SELECT * FROM orders WHERE total BETWEEN 100 AND 500;\n' +
              'SELECT * FROM products WHERE name LIKE "%phone%";'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'First block: the safest electronics available for 50+, shown priciest-first, only ten of them. Note <span class="inline-code">AND</span> on a new line with indentation — readability habit, not a rule.' },
      { tag: 'text', text: '<span class="inline-code">LIKE "%phone%"</span> matches any name containing "phone". The % is a wildcard: %anything. This is how search boxes work on the backend.' }
    ],

    mistakes: [
      'SELECT * over a 50-column table — slowing the network with data nobody reads. Only development escapes this sin.',
      'Mixing AND/OR without parentheses — <span class="inline-code">WHERE a OR b AND c</span> means a OR (b AND c). If you mean (a OR b) AND c, write the parentheses explicitly.',
      'Comparing strings of different formats — "php" vs "php " match differently. Clean your data before you filter.'
    ],

    proTip: 'In SQLite and MySQL, <span class="inline-code">LIMIT</span> goes last, after ORDER BY. In flavor-of-the-day SQLs it moves; still, never put WHERE after ORDER ORDER BY — the query will shame you in front of the parser.'

    ,

    quiz: {
      cat: 'SELECT',
      question: 'This returns products sorted how?',
      quizLang: 'sql',
      quizCode: 'SELECT name, price\nFROM products\nORDER BY price DESC\nLIMIT 5;',
      options: [
        'Cheapest to most expensive, 5 products',
        'Most expensive first, 5 products',
        'Alphabetical, 5 products',
        'Random order, 5 products'
      ],
      correct: 1,
      feedback: { correct: '🔥 DESC = descending = biggest price first. Exactly what a top-selling dashboard needs.', wrong: '❌ Nope. ORDER BY price DESC sorts high to low, and LIMIT 5 keeps the first five — so the five priciest.' }
    },

    challenge: {
      lang: 'sql',
      text: 'From an <strong>employees</strong> table with columns (name, salary, department), write a query returning the top 3 highest-paid employees in the "IT" department.',
      hint: 'WHERE department = "IT", ORDER BY salary DESC, LIMIT 3.'
    },

    prev: { slug: 'sql-what', title: 'What is a Database?' },
    next: { slug: 'sql-crud', title: 'INSERT, UPDATE, DELETE' }
  },

  'sql-crud': {
    id: 'sql-crud',
    section: 'SQL & Databases',
    level: '04',
    title: 'INSERT, UPDATE, DELETE',
    time: '35 min',
    difficulty: 'Beginner',
    book: 'Book Chapter 4 · CRUD',

    intro: 'Reading is easy. Writing is responsibility. INSERT adds a record, UPDATE edits one, DELETE removes it — and DELETE without a WHERE is how interns accidentally delete the entire customers table. Today you learn to respect WHERE.',

    whyMatters: 'Registering a user = INSERT. Changing a bio = UPDATE. Closing an account = DELETE. CRUD (Create, Read, Update, Delete) is the backbone of every app you will ever build — literally named after these four verbs.',

    explanation: [
      { tag: 'heading', text: 'INSERT' },
      { tag: 'text', text: '<span class="inline-code">INSERT INTO users (name, email) VALUES ("Sara", "sara@example.com");</span> — list the columns, then the values in the same order. The column list is optional but recommended: you stay honest about what you are writing.' },
      { tag: 'heading', text: 'UPDATE' },
      { tag: 'text', text: '<span class="inline-code">UPDATE users SET role = "admin" WHERE id = 3;</span> — SET says what changes, WHERE says which rows. Forget the WHERE and you just changed EVERY user to admin. Yes, that has happened to people.' },
      { tag: 'heading', text: 'DELETE' },
      { tag: 'text', text: '<span class="inline-code">DELETE FROM users WHERE id = 9;</span> — same prayer about WHERE. In production, deletion is often a soft delete (a deleted_at column) instead — Laravel does this for you later.' }
    ],

    code: [
      {
        lang: 'sql',
        label: 'Create → Read → Update → Delete',
        code: 'INSERT INTO users (name, email)\n' +
              'VALUES ("Sara", "sara@example.com");\n' +
              '\n' +
              'SELECT id, name FROM users WHERE email = "sara@example.com";\n' +
              '\n' +
              'UPDATE users SET name = "Sara H." WHERE id = 3;\n' +
              '\n' +
              'DELETE FROM users WHERE id = 3;'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'The flow: insert a user, look her up by email to grab her id, update her name, then delete her record. The WHERE id = 3 in last two protects you from touching any other row.' },
      { tag: 'text', text: 'Notice every destructive statement is scoped by a WHERE that identifies ONE row. That is the habit that saves databases.' }
    ],

    mistakes: [
      'UPDATE or DELETE without a WHERE — the WHERE is your seat belt. Always write the WHERE before you are tempted to hit Run.',
      'Inserting values in the wrong order because you omitted the column list — the DB happily writes Sara\'s email into the name column. Silent corruption, fun times.',
      'Hardcoding ids in DELETE inside code you will reuse — in real apps the id comes from the request, dynamically.'
    ],

    proTip: 'Wrap the three write operations (INSERT/UPDATE/DELETE) inside <span class="inline-code">BEGIN</span> ... <span class="inline-code">COMMIT</span> (a transaction): if anything fails halfway, <span class="inline-code">ROLLBACK</span> undoes everything. Money transfers literally depend on this.'

    ,

    quiz: {
      cat: 'CRUD',
      question: 'What does this statement do?',
      quizLang: 'sql',
      quizCode: 'UPDATE users SET role = "admin";',
      options: [
        'Makes every user an admin',
        'Makes the first user an admin',
        'Errors because role is missing',
        'Deletes the role column'
      ],
      correct: 0,
      feedback: { correct: '🔥 No WHERE = every row. This is the shortest path to a very interesting afternoon.', wrong: '❌ Nope. Without a WHERE clause, UPDATE applies to every row — the entire users table becomes admin.' }
    },

    challenge: {
      lang: 'sql',
      text: 'Write the three statements that (1) insert a product named "Wireless Mouse" priced 30, (2) raise its price to 35 where the name matches, and (3) delete it. Wrap them in <strong>BEGIN</strong> and <strong>COMMIT</strong>.',
      hint: 'INSERT with name+price, UPDATE ... SET price = 35 WHERE name = "Wireless Mouse", DELETE FROM products WHERE name = "Wireless Mouse".'
    },

    prev: { slug: 'sql-select', title: 'SELECT & WHERE' },
    next: { slug: 'sql-joins', title: 'JOINs' }
  },

  'sql-joins': {
    id: 'sql-joins',
    section: 'SQL & Databases',
    level: '04',
    title: 'JOINs',
    time: '45 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 4 · JOINs',

    intro: 'JOIN is the superpower that lets you ask questions across multiple tables at once: "Show me every order with the customer\'s name and the product title." Without JOINs, your data lives in separate rooms refusing to speak to each other.',

    whyMatters: 'Real apps are relational: orders relate to users, comments relate to posts. JOINs are THE interview topic for junior backend roles. If you learn exactly one SQL concept deeply, make it this one.',

    explanation: [
      { tag: 'heading', text: 'The mental model' },
      { tag: 'text', text: 'JOIN glues two tables based on a shared key, usually <span class="inline-code">user_id</span>. <span class="inline-code">INNER JOIN</span> keeps only rows that have a match on both sides — orders without a customer disappear.' },
      { tag: 'heading', text: 'LEFT JOIN' },
      { tag: 'text', text: '<span class="inline-code">LEFT JOIN</span> keeps ALL rows from the left table, even if there is no match — unmatched rows get NULL for the right side\'s columns. Example: "list every product, even those never ordered."' },
      { tag: 'heading', text: 'Table aliases' },
      { tag: 'text', text: 'With multiple tables, give them short aliases: <span class="inline-code">FROM orders o JOIN users u ON o.user_id = u.id</span>. Now you can write <span class="inline-code">u.name</span> without repeating "users." to death.' }
    ],

    code: [
      {
        lang: 'sql',
        label: 'Orders + their customer names',
        code: 'SELECT o.id, u.name, o.total\n' +
              'FROM orders o\n' +
              'INNER JOIN users u ON o.user_id = u.id\n' +
              'WHERE o.total > 100;'
      },
      {
        lang: 'sql',
        label: 'LEFT JOIN — products even without orders',
        code: 'SELECT p.name, COUNT(o.id) AS times_ordered\n' +
              'FROM products p\n' +
              'LEFT JOIN order_items oi ON oi.product_id = p.id\n' +
              'GROUP BY p.id;'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'First: for each order, find the matching user and show her name. <span class="inline-code">INNER JOIN users u ON o.user_id = u.id</span> is the handshake line — "connect when the order\'s user_id equals the user\'s id."' },
      { tag: 'text', text: 'Second: LEFT JOIN keeps every product; products never ordered still appear with <span class="inline-code">COUNT = 0</span>. GROUP BY p.id groups rows per product so COUNT counts its order_items.' }
    ],

    mistakes: [
      'Forgetting the ON condition — JOIN without ON = every row on both sides (cartesian explosion). A 100x100 table becomes 10,000 rows of nonsense and a frozen server.',
      'Ambiguous column names — both tables have id. Always qualify with table alias: u.id.',
      'Using LEFT JOIN when you need inner-only results — suddenly phantom customers with NULL names appear.'
    ],

    proTip: 'First write the query without WHERE, look at "does the JOIN make sense?", then add filters. A wrong JOIN hidden by a WHERE that returns nothing is pure pain; the two-step habit prevents it.'

    ,

    quiz: {
      cat: 'JOINs',
      question: 'Which JOIN keeps ALL products even if a product has never been ordered?',
      options: [
        'LEFT JOIN',
        'INNER JOIN',
        'CROSS JOIN with WHERE',
        'Only a right-join, sorry'
      ],
      correct: 0,
      feedback: { correct: '🔥 LEFT JOIN preserves everything on the left side; missing matches become NULL.', wrong: '❌ Nope. INNER JOIN drops unmatched rows; LEFT JOIN keeps them, NULLing the right side.' }
    },

    challenge: {
      lang: 'sql',
      text: 'For the tables <strong>posts</strong> (id, title, user_id) and <strong>users</strong> (id, name), write a query showing <strong>post title</strong> plus the <strong>author name</strong>, and another showing every <strong>user</strong> with the <strong>count of their posts</strong> (include users with zero posts).',
      hint: 'First needs INNER JOIN posts p JOIN users u ON p.user_id = u.id. Second needs LEFT JOIN + COUNT(o.id) + GROUP BY u.id.'
    },

    prev: { slug: 'sql-crud', title: 'INSERT, UPDATE, DELETE' },
    next: { slug: 'sql-relationships', title: 'Relationships' }
  },

  'sql-relationships': {
    id: 'sql-relationships',
    section: 'SQL & Databases',
    level: '04',
    title: 'Relationships',
    time: '40 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 4 · Relations',

    intro: 'Data in the real world has relationships: a user has many orders, an order belongs to one user, a student and a course have many of each other. Databases model these with foreign keys. This is the geometry of your data.',

    whyMatters: 'Every database design you build is 90% deciding the relationships correctly. Laravel\'s Eloquent reads these same concepts (one-to-many, many-to-many). Design them right in SQL, and the framework side becomes trivial.',

    explanation: [
      { tag: 'heading', text: 'One-to-many (the workhorse)' },
      { tag: 'text', text: 'A user has many orders. You model it with <span class="inline-code">order.user_id</span> — a foreign key pointing at users.id. The "many" side carries the key. That is the whole trick.' },
      { tag: 'heading', text: 'One-to-one' },
      { tag: 'text', text: 'One user has one profile. Same idea but unique: profile.user_id is also UNIQUE, so one profile can never belong to two users.' },
      { tag: 'heading', text: 'Many-to-many' },
      { tag: 'text', text: 'A student takes many courses, a course has many students. Nobody can hold "many" keys in one column, so you add a middle <strong>pivot table</strong> (student_course) with two foreign keys. JOINs then walk through it.' }
    ],

    code: [
      {
        lang: 'sql',
        label: 'One user, many orders',
        code: 'CREATE TABLE users (\n' +
              '  id INT AUTO_INCREMENT PRIMARY KEY,\n' +
              '  name VARCHAR(100) NOT NULL\n' +
              ');\n' +
              '\n' +
              'CREATE TABLE orders (\n' +
              '  id INT AUTO_INCREMENT PRIMARY KEY,\n' +
              '  user_id INT NOT NULL,\n' +
              '  total DECIMAL(10,2),\n' +
              '  FOREIGN KEY (user_id) REFERENCES users(id)\n' +
              ');'
      },
      {
        lang: 'sql',
        label: 'Many-to-many via pivot',
        code: 'CREATE TABLE courses (\n' +
              '  id INT AUTO_INCREMENT PRIMARY KEY,\n' +
              '  title VARCHAR(100)\n' +
              ');\n' +
              '\n' +
              'CREATE TABLE student_course (\n' +
              '  student_id INT NOT NULL,\n' +
              '  course_id INT NOT NULL,\n' +
              '  PRIMARY KEY (student_id, course_id),\n' +
              '  FOREIGN KEY (student_id) REFERENCES students(id),\n' +
              '  FOREIGN KEY (course_id) REFERENCES courses(id)\n' +
              ');'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'The <span class="inline-code">FOREIGN KEY</span> creates the relationship AND enforces it: the database refuses an order for user_id 9999 if no such user exists. Referential integrity — your data cannot point into the void.' },
      { tag: 'text', text: 'The pivot students table has a <em>composite primary key</em> of both ids — that pair appears once, preventing a student signing up for the same course twice. The two foreign keys each point to their parent.' }
    ],

    mistakes: [
      'Storing a list as a comma-separated string in one column ("1,5,9") — you just built the worst possible many-to-many. Use a pivot table.',
      'Creating a FOREIGN KEY without INDEX on MySQL — lookups on user_id crawl. Add an index (MySQL auto-indexes the column in practice, but design it on purpose).',
      'Forgetting ON DELETE — what happens to orders when the user is deleted? Decide (CASCADE deletes children, RESTRICT blocks).'
    ],

    proTip: 'Use <span class="inline-code">ON DELETE CASCADE</span> only for closely owned data (post ⭢ comments). For money and history, use RESTRICT or soft-delete. Choosing the wrong deletion behavior is a production incident that interviews love asking about.'

    ,

    quiz: {
      cat: 'Relationships',
      question: 'In a one-to-many "user → orders" relationship, which table holds the foreign key?',
      options: [
        'The orders table (the "many" side)',
        'The users table (the "one" side)',
        'Neither — a pivot table is needed',
        'Both'
      ],
      correct: 0,
      feedback: { correct: '🔥 The many side carries the key to the one side. One user, many orders each pointing back.', wrong: '❌ Nope. orders.user_id points at users.id — the many side holds the foreign key.' }
    },

    challenge: {
      lang: 'sql',
      text: 'Model a blog: <strong>posts</strong> (one user has many posts) and <strong>tags</strong> (many-to-many with posts via a pivot <strong>post_tag</strong>). Write the three CREATE TABLE statements with foreign keys.',
      hint: 'posts.user_id → users.id. post_tag holds post_id and tag_id with a composite primary key.'
    },

    prev: { slug: 'sql-joins', title: 'JOINs' },
    next: { slug: 'sql-indexes', title: 'Indexes' }
  },

  'sql-indexes': {
    id: 'sql-indexes',
    section: 'SQL & Databases',
    level: '04',
    title: 'Indexes',
    time: '35 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 4 · Indexes',

    intro: 'An index is like the book\'s index at the back: instead of reading every page to find "Doom scroll," you flip straight to page 204. Databases love them. The only catch: every index costs a little space and a little time on writes.',

    whyMatters: 'A table with 1 million users and no index on email means every login scans 1 million rows. With an index, it is a millisecond. Slow dashboard? Missing index. 90% of "why is this query so slow" answers are "no index".',

    explanation: [
      { tag: 'heading', text: 'What an index is' },
      { tag: 'text', text: 'A separate structure that maps column values → row locations, ordered for instant lookup. Tables themselves are unordered; indexes impose an order on a lookup key.' },
      { tag: 'heading', text: 'CREATE INDEX' },
      { tag: 'text', text: '<span class="inline-code">CREATE INDEX idx_users_email ON users(email);</span> — create it on columns you filter/JOIN/ORDER BY often. UNIQUE gives you an index AND enforces no duplicates (perfect for emails).' },
      { tag: 'heading', text: 'The trade-off' },
      { tag: 'text', text: 'Indexes speed up reads but slow down writes slightly (every INSERT/UPDATE must maintain them). Index where you read a lot; don\'t index every column just because you learned the word.' }
    ],

    code: [
      {
        lang: 'sql',
        label: 'Speeding up the login query',
        code: 'CREATE UNIQUE INDEX idx_users_email ON users(email);\n' +
              '\n' +
              'SELECT * FROM users WHERE email = "sara@example.com";\n' +
              '-- now this scans the index, not the whole table'
      },
      {
        lang: 'sql',
        label: 'Composite index for common pairing',
        code: 'CREATE INDEX idx_orders_user_created\n' +
              'ON orders(user_id, created_at);\n' +
              '\n' +
              'SELECT * FROM orders\n' +
              'WHERE user_id = 7\n' +
              'ORDER BY created_at DESC;'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'UNIQUE adds a superpower: the database guarantees two users can never share one email — enforcing it even under concurrency. That is a business rule your app code could never enforce solo.' },
      { tag: 'text', text: 'A composite index (two columns) serves the exact query "orders of a user, newest first" in one jump. Order matters: put the most-selective column first.' }
    ],

    mistakes: [
      'Indexing the id column — primary keys are already indexed. Adding another is pure waste.',
      'Indexing a low-cardinality column like status ("active"/"banned") — the index can\'t discriminate; MySQL might ignore it entirely.',
      'Creating an index... by never creating it, and then blaming the hosting provider for the slow query. Check for missing indexes first.'
    ],

    proTip: 'Use <span class="inline-code">EXPLAIN SELECT ...</span> to see whether MySQL actually uses your index (look for "type: ref" or "Using index"). EXPLAIN is the lie detector for performance claims.'

    ,

    quiz: {
      cat: 'Indexes',
      question: 'Why do we put an index on users.email?',
      options: [
        'Lookups by email get fast instead of scanning the whole table',
        'It automatically encrypts emails',
        'It makes the table smaller',
        'It is required by SQL syntax'
      ],
      correct: 0,
      feedback: { correct: '🔥 The email index turns a full-table scan into a direct jump.', wrong: '❌ Nope. Indexes let the engine find matching rows directly instead of reading every row.' }
    },

    challenge: {
      lang: 'sql',
      text: 'On an <strong>orders</strong> table that gets filtered by <strong>customer_id</strong> in almost every query, design the correct index (and explain why it should NOT be a UNIQUE index).',
      hint: 'customer_id repeats across orders (one customer, many orders) — so UNIQUE would block legitimate data.'
    },

    prev: { slug: 'sql-relationships', title: 'Relationships' },
    next: { slug: 'sql-normalization', title: 'Normalization' }
  },

  'sql-normalization': {
    id: 'sql-normalization',
    section: 'SQL & Databases',
    level: '04',
    title: 'Normalization',
    time: '40 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 4 · Normalization',

    intro: 'Normalization is tidiness for data: "each fact lives in exactly one place, reachable by one key." It exists because duplicate data is where reality and your database quietly stop agreeing.',

    whyMatters: 'Duplicated data rots differently per row (Sara\'s email updated here but not there), and deleting things becomes a nightmare. Normalized designs are stable, safe, and — critically — the design interviews reward.',

    explanation: [
      { tag: 'heading', text: '1NF — no repeat groups' },
      { tag: 'text', text: 'No column holds a list. Instead of orders having a column "products: 3,7,2", there is an orders table and an order_items table (one row per product in the order).' },
      { tag: 'heading', text: '2NF — no partial dependency' },
      { tag: 'text', text: 'Every non-key column depends on the WHOLE key, not part of it. With a composite key (student_id, course_id), the "course name" must not depend only on course_id — it belongs in the courses table.' },
      { tag: 'heading', text: '3NF — no transitive dependency' },
      { tag: 'text', text: 'No column depends on another non-key column. If order rows store customer_email, and email depends on customer_id (a non-key), move the email to the customers table. Fact city: one home, many pointers.' }
    ],

    code: [
      {
        lang: 'sql',
        label: 'Un-normalized (why it hurts)',
        code: 'CREATE TABLE orders_flat (\n' +
              '  id INT PRIMARY KEY,\n' +
              '  customer_name VARCHAR(100),\n' +
              '  customer_email VARCHAR(100),\n' +
              '  products TEXT  -- "3,7,2" — a list smeared into one cell\n' +
              ');'
      },
      {
        lang: 'sql',
        label: 'Normalized (facts in one home each)',
        code: 'CREATE TABLE customers (\n' +
              '  id INT PRIMARY KEY,\n' +
              '  name VARCHAR(100),\n' +
              '  email VARCHAR(100) UNIQUE\n' +
              ');\n' +
              'CREATE TABLE orders (\n' +
              '  id INT PRIMARY KEY,\n' +
              '  customer_id INT REFERENCES customers(id)\n' +
              ');\n' +
              'CREATE TABLE order_items (\n' +
              '  order_id INT REFERENCES orders(id),\n' +
              '  product_id INT,\n' +
              '  quantity INT,\n' +
              '  PRIMARY KEY (order_id, product_id)\n' +
              ');'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'In the flat version, "Sara" and her email exist in every order row. Change her email and you must update every single order or they disagree with each other. That\'s the rot.' },
      { tag: 'text', text: 'In the normalized version, Sara\'s name and email live once in customers. Orders reference her id. Elements of an order live in order_items. Update her email = one UPDATE. Delete her = your choice about orders, done cleanly.' }
    ],

    mistakes: [
      'Over-normalizing: splitting every conceivable fact until you need 12 JOINs for a simple page. Normalize 3NF by default, denormalize only with a reason (read-heavy reports).',
      'Storing computed totals that could be derived — the total in order rows can drift from its items. Compute it.',
      'Putting the foreign key on the wrong side because you never drew the boxes and arrows first.'
    ],

    proTip: 'Draw the tables on a whiteboard before writing any DDL. The drawing takes 5 minutes and catches 80% of design mistakes. Normalization is a mindset, the SQL is just the messenger.'

    ,

    quiz: {
      cat: 'Normalization',
      question: 'Normalization mainly fights against:',
      options: [
        'Redundant (duplicated) data',
        'Slow internet connections',
        'Long table names',
        'Too many joins'
      ],
      correct: 0,
      feedback: { correct: '🔥 One fact, one home. Duplicated facts are where corruption begins.', wrong: '❌ Nope. Normalization is about removing redundancy so each fact is stored once.' }
    },

    challenge: {
      lang: 'sql',
      text: 'Spot the violation: a <strong>sale</strong> table with columns (id, customer_name, customer_phone, book_title, author_name). Which normalization forms does it break, and how would you split it?',
      hint: 'customer_name/phone duplicate per sale (3NF issue), and book_title/author repeat per sale too — split into customers, books, and sales linking by id.'
    },

    prev: { slug: 'sql-indexes', title: 'Indexes' },
    next: { slug: 'sql-design', title: 'Designing Tables' }
  },

  'sql-design': {
    id: 'sql-design',
    section: 'SQL & Databases',
    level: '04',
    title: 'Designing Tables',
    time: '45 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 4 · Design',

    intro: 'Designing tables is the architect phase: before writing SQL, you answer "what is a user?" out loud. A good schema survives years of feature requests; a bad one makes every feature a data migration adventure.',

    whyMatters: 'This is the skill that separates "I can write queries" from "I can build systems." Designing tables is designing the business model itself. Every feature you add later plugs into the schema you design now.',

    explanation: [
      { tag: 'heading', text: 'Name things like a human' },
      { tag: 'text', text: 'Tables = plural nouns (users, orders). Columns = snake_case descriptive (created_at, is_active). Foreign keys = other_table_id. Consistency beats cleverness — teams read your code forever.' },
      { tag: 'heading', text: 'Column types matter' },
      { tag: 'text', text: '<span class="inline-code">INT</span> for ids/counts, <span class="inline-code">DECIMAL(10,2)</span> for money (never FLOAT — rounding eats cents), <span class="inline-code">VARCHAR(n)</span> for short text, <span class="inline-code">TEXT</span> for long content, <span class="inline-code">DATETIME</span>/<span class="inline-code">TIMESTAMP</span> for time. Type is a contract — it rejects wrong data at the door.' },
      { tag: 'heading', text: 'Timestamps are life' },
      { tag: 'text', text: 'Add <span class="inline-code">created_at</span> and <span class="inline-code">updated_at</span> to every table. Chaos has no "when did this appear?" — you will thank yourself every single audit.' }
    ],

    code: [
      {
        lang: 'sql',
        label: 'A well-designed users + posts schema',
        code: 'CREATE TABLE users (\n' +
              '  id BIGINT AUTO_INCREMENT PRIMARY KEY,\n' +
              '  name VARCHAR(100) NOT NULL,\n' +
              '  email VARCHAR(190) NOT NULL UNIQUE,\n' +
              '  password_hash VARCHAR(255) NOT NULL,\n' +
              '  is_active TINYINT(1) DEFAULT 1,\n' +
              '  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n' +
              '  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n' +
              '          ON UPDATE CURRENT_TIMESTAMP\n' +
              ');\n' +
              '\n' +
              'CREATE TABLE posts (\n' +
              '  id BIGINT AUTO_INCREMENT PRIMARY KEY,\n' +
              '  user_id BIGINT NOT NULL,\n' +
              '  title VARCHAR(160) NOT NULL,\n' +
              '  content TEXT,\n' +
              '  published_at DATETIME NULL,\n' +
              '  FOREIGN KEY (user_id) REFERENCES users(id)\n' +
              '    ON DELETE CASCADE\n' +
              ');'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'email is <span class="inline-code">UNIQUE</span> (no two accounts), <span class="inline-code">NOT NULL</span> (mandatory), varchar(190) because that works with MySQL\'s index limits under utf8mb4 and emoji. Names are future-proof: users, not "member".' },
      { tag: 'text', text: 'posts.user_id → users.id with ON DELETE CASCADE: deleting a user takes their posts with them. published_at NULL until the post goes live — NULL is the honest "not yet".' }
    ],

    mistakes: [
      'Using FLOAT for money — 0.1 + 0.2 = 0.30000000000000004 in floating point. DECIMAL or bust.',
      'Booleans as free-text columns ("true"/"yes"/"1") — pick one type and enforce it (TINYINT(1) or BOOLEAN).',
      'Inventing singular table names (user) then mixing with plural — pick a convention and glue to it with tape.'
    ],

    proTip: 'Type of a "status" is debate fuel. Short version: enum-like strings are readable; integers are faster. Modern Laravel uses strings with validation — readable and debuggable. Choose readable, document it.'

    ,

    quiz: {
      cat: 'Design',
      question: 'Best column type for storing a product price?',
      options: [
        'DECIMAL(10,2)',
        'FLOAT',
        'INT',
        'VARCHAR(20)'
      ],
      correct: 0,
      feedback: { correct: '🔥 DECIMAL is exact for money; FLOAT drifts with rounding errors.', wrong: '❌ Nope. Money needs exact decimals — DECIMAL(10,2). FLOAT rounds and FLOAT falls, wallet suffers.' }
    },

    challenge: {
      lang: 'sql',
      text: 'Design a <strong>comments</strong> table for a blog: a comment belongs to a post and can optionally belong to a user (guest comments allowed). Include id, content, created_at, and the correct foreign keys/types.',
      hint: 'post_id NOT NULL, user_id NULLABLE (NULL = anonymous). Index the post_id for "comments on this post" queries.'
    },

    prev: { slug: 'sql-normalization', title: 'Normalization' },
    next: { slug: 'sql-aggregation', title: 'Aggregation' }
  },

  'sql-aggregation': {
    id: 'sql-aggregation',
    section: 'SQL & Databases',
    level: '04',
    title: 'Aggregation',
    time: '40 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 4 · Aggregates',

    intro: 'Aggregation is asking your data for the summary instead of the details: "how many users signed up in January?", "what is the total of today\'s orders?". You read less, you decide more.',

    whyMatters: 'Dashboards, reports, admin panels, analytics — all of them are aggregate queries. "COUNT, SUM, AVG + GROUP BY" is the second-most-common interview SQL (after JOIN). Learn it and you can answer real questions with data.',

    explanation: [
      { tag: 'heading', text: 'The five great aggregates' },
      { tag: 'text', text: '<span class="inline-code">COUNT(*)</span> counts rows, <span class="inline-code">SUM(col)</span> adds a column, <span class="inline-code">AVG(col)</span> averages, <span class="inline-code">MIN/MAX(col)</span> extremes. Each collapses many rows into one number.' },
      { tag: 'heading', text: 'GROUP BY = "per category"' },
      { tag: 'text', text: '<span class="inline-code">GROUP BY category</span> computes one summary per distinct value: revenue per category, users per city. Everything you SELECT must be either an aggregate or the grouping column.' },
      { tag: 'heading', text: 'HAVING filters groups' },
      { tag: 'text', text: 'WHERE filters rows before grouping; <span class="inline-code">HAVING</span> filters groups after. "Categories with more than 50 orders" is a HAVING COUNT(order_id) > 50.' }
    ],

    code: [
      {
        lang: 'sql',
        label: 'Summaries',
        code: 'SELECT COUNT(*) AS total_users,\n' +
              '       SUM(total) AS revenue,\n' +
              '       AVG(total) AS average_order\n' +
              'FROM orders;'
      },
      {
        lang: 'sql',
        label: 'Per category, filtered groups',
        code: 'SELECT category, COUNT(*) AS products,\n' +
              '       SUM(price) AS category_value\n' +
              'FROM products\n' +
              'WHERE price > 0\n' +
              'GROUP BY category\n' +
              'HAVING COUNT(*) > 5\n' +
              'ORDER BY category_value DESC;'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'The first query returns ONE row summarizing the whole table: user count, total revenue, average order size. Utter gold for a dashboard top line.' },
      { tag: 'text', text: 'Second: rows are filtered by WHERE first (price > 0), grouped per category, then HAVING keeps only categories with more than 5 products, sorted by value. Note order: WHERE → GROUP BY → HAVING → ORDER BY.' }
    ],

    mistakes: [
      'Selecting a non-grouped, non-aggregated column: <span class="inline-code">SELECT name, COUNT(*) ... GROUP BY city</span> — MySQL "helpfully" returns a random name and corrupts your report with silence.',
      'Using WHERE on aggregates — WHERE works on rows, not groups. That is exactly what HAVING is for.',
      'Counting the primary key instead of * when NULLs matter — COUNT(col) ignores NULLs; COUNT(*) counts every row.'
    ],

    proTip: 'Read a GROUP BY query in two passes: "which rows matter (WHERE) → how do I bucket them (GROUP BY) → what do I keep (HAVING) → what order do I want (ORDER BY)". It\'s a funnel, not a single sentence.'

    ,

    quiz: {
      cat: 'Aggregation',
      question: 'Which clause filters GROUPS (after grouping), not rows?',
      options: [
        'HAVING',
        'WHERE',
        'LIMIT',
        'ORDER BY'
      ],
      correct: 0,
      feedback: { correct: '🔥 HAVING is WHERE for groups. Rows get filtered by WHERE, groups by HAVING.', wrong: '❌ Nope. WHERE filters rows before grouping; HAVING filters the grouped results.' }
    },

    challenge: {
      lang: 'sql',
      text: 'For a <strong>sales</strong> table (product_name, amount, region), write a query showing total sales per region, keeping only regions with total sales above 1000, sorted from highest to lowest.',
      hint: 'GROUP BY region, SUM(amount) AS total in SELECT, HAVING SUM(amount) > 1000, ORDER BY total DESC.'
    },

    prev: { slug: 'sql-design', title: 'Designing Tables' },
    next: { slug: 'sql-ecommerce', title: 'Practice: E-Commerce DB' }
  },

  'sql-ecommerce': {
    id: 'sql-ecommerce',
    section: 'SQL & Databases',
    level: '04',
    title: 'Practice: E-Commerce DB',
    time: '60 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 4 · Capstone',

    intro: 'Here is where SQL stops being theory. You will design and query a real e-commerce database: customers, products, categories, orders, order_items. This is literally the schema behind Amazon\'s shopping cart — scaled down by only a few zeros.',

    whyMatters: 'This capstone ties together everything: relationships, foreign keys, JOINs, aggregation. Do it once, by hand, and every future schema is just a variation. Also — this exact design is a classic take-home assignment.',

    explanation: [
      { tag: 'heading', text: 'The schema (5 tables)' },
      { tag: 'text', text: '<strong>customers</strong>, <strong>categories</strong>, <strong>products</strong> (belongs to a category), <strong>orders</strong> (belongs to a customer), and <strong>order_items</strong> (many-to-many between orders and products, carrying quantity + unit price).' },
      { tag: 'heading', text: 'Why order_items stores price' },
      { tag: 'text', text: 'Prices change and products get deleted, but a historical order must keep the price it actually charged. Snapshot that value into the item row at purchase time — never compute a past total from current prices.' },
      { tag: 'heading', text: 'Your mission' },
      { tag: 'text', text: 'Write the CREATE TABLEs, then answer questions in SQL: top-spending customers, revenue per category, the last product each category sold, abandoned carts. Every previous lesson gets used here.' }
    ],

    code: [
      {
        lang: 'sql',
        label: 'The core schema',
        code: 'CREATE TABLE customers (\n' +
              '  id BIGINT AUTO_INCREMENT PRIMARY KEY,\n' +
              '  name VARCHAR(100) NOT NULL,\n' +
              '  email VARCHAR(190) NOT NULL UNIQUE\n' +
              ');\n' +
              '\n' +
              'CREATE TABLE categories (\n' +
              '  id BIGINT AUTO_INCREMENT PRIMARY KEY,\n' +
              '  title VARCHAR(100) NOT NULL\n' +
              ');\n' +
              '\n' +
              'CREATE TABLE products (\n' +
              '  id BIGINT AUTO_INCREMENT PRIMARY KEY,\n' +
              '  category_id BIGINT NOT NULL,\n' +
              '  name VARCHAR(160) NOT NULL,\n' +
              '  price DECIMAL(10,2) NOT NULL,\n' +
              '  stock INT DEFAULT 0,\n' +
              '  FOREIGN KEY (category_id) REFERENCES categories(id)\n' +
              ');\n' +
              '\n' +
              'CREATE TABLE orders (\n' +
              '  id BIGINT AUTO_INCREMENT PRIMARY KEY,\n' +
              '  customer_id BIGINT NOT NULL,\n' +
              '  status VARCHAR(20) DEFAULT "pending",\n' +
              '  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n' +
              '  FOREIGN KEY (customer_id) REFERENCES customers(id)\n' +
              ');\n' +
              '\n' +
              'CREATE TABLE order_items (\n' +
              '  order_id BIGINT NOT NULL,\n' +
              '  product_id BIGINT NOT NULL,\n' +
              '  quantity INT NOT NULL,\n' +
              '  unit_price DECIMAL(10,2) NOT NULL,\n' +
              '  PRIMARY KEY (order_id, product_id),\n' +
              '  FOREIGN KEY (order_id) REFERENCES orders(id),\n' +
              '  FOREIGN KEY (product_id) REFERENCES products(id)\n' +
              ');'
      },
      {
        lang: 'sql',
        label: 'Answers you must be able to produce',
        code: '-- revenue, grouped by category\n' +
              'SELECT c.title, SUM(oi.quantity * oi.unit_price) AS revenue\n' +
              'FROM order_items oi\n' +
              'JOIN products p    ON p.id = oi.product_id\n' +
              'JOIN categories c  ON c.id = p.category_id\n' +
              'GROUP BY c.id\n' +
              'ORDER BY revenue DESC;\n' +
              '\n' +
              '-- each customer total spend\n' +
              'SELECT cu.name, COALESCE(SUM(oi.quantity * oi.unit_price), 0) AS spent\n' +
              'FROM customers cu\n' +
              'LEFT JOIN orders o  ON o.customer_id = cu.id\n' +
              'LEFT JOIN order_items oi ON oi.order_id = o.id\n' +
              'GROUP BY cu.id, cu.name\n' +
              'ORDER BY spent DESC;'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'Revenue per category joins items → products → categories. The <span class="inline-code">oi.quantity * oi.unit_price</span> respects the captured price, not today\'s. GROUP BY c.id with the category title in SELECT.' },
      { tag: 'text', text: 'Spend per customer uses LEFT JOINs so customers with zero orders still appear (COALESCE turns NULL to 0). Studying this one query teaches you LEFT JOIN + aggregate + GROUP BY + COALESCE together.' }
    ],

    mistakes: [
      'Storing the total on the order — recompute from items instead, or you will reconcile forever. (Reporting caches are another story, later.)',
      'Letting order_items reference a deleted product via the FKs above — snapshot unit_price anyway; prefer restricting deletion or soft-delete for products.',
      'Skipping indexes on customer_id / order_id — they are JOINable every query, they deserve indexes.'
    ],

    proTip: 'Insert sample data manually (a few customers, categories, and a three-item order). Nothing teaches a schema like hand-inserting rows and running the queries against them until they feel true.'

    ,

    quiz: {
      cat: 'E-Commerce',
      question: 'Why does order_items store unit_price even though products.price exists?',
      options: [
        'To preserve the exact price at the moment of purchase',
        'Because the database requires it',
        'It duplicates data unnecessarily',
        'To make queries faster'
      ],
      correct: 0,
      feedback: { correct: '🔥 History must survive price changes. Snapshot the price in the item.', wrong: '❌ Nope. Prices change over time — the item row must remember what was actually charged when the order happened.' }
    },

    challenge: {
      lang: 'sql',
      text: 'Using your 5-table schema, find the <strong>3 most expensive orders ever placed</strong>: order id, customer name, and total (sum of quantity × unit_price).',
      hint: 'JOIN order_items→orders→customers, GROUP BY order id + customer name, ORDER BY total DESC LIMIT 3.'
    },

    prev: { slug: 'sql-aggregation', title: 'Aggregation' },
    next: { slug: 'laravel-what', title: 'What is Laravel?' }
  }

});