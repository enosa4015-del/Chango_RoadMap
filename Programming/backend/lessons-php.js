/* ========================================
   Chango — Backend Roadmap · Level 02: PHP (10 lessons)
   ======================================== */

Object.assign(LESSONS, {

  'php-syntax': {
    id: 'php-syntax',
    section: 'PHP',
    level: '02',
    title: 'Syntax & Output',
    time: '25 min',
    difficulty: 'Beginner',
    book: 'Book Chapter 2 · Syntax & Output',

    intro: 'PHP is the language that quietly powers a giant share of the internet. It is not dead. It is not a zombie. It is just very, very employed. 🐘',

    whyMatters: 'Your backend stack is PHP + Laravel. Before Laravel gives you the fast lane, you need to understand the car. Syntax is where every PHP developer — including the senior ones — started.',

    explanation: [
      { tag: 'heading', text: 'All PHP lives inside tags' },
      { tag: 'text', text: 'PHP code goes inside <span class="inline-code">&lt;?php ... ?&gt;</span> tags. The server understands everything between them and sends the results to the browser as HTML. Done. That is the entire mental model.' },
      { tag: 'text', text: 'Every statement ends with a semicolon <span class="inline-code">;</span>. Miss one and PHP throws an error at you like a disappointed teacher. Actually, worse — it throws it at your user.' },
      { tag: 'heading', text: 'Echo — your megaphone' },
      { tag: 'text', text: '<span class="inline-code">echo</span> prints text. You will use it a million times. Text between double quotes can interpolate variables (insert their values directly). Text between single quotes is printed literally.' },
      { tag: 'heading', text: 'Variables' },
      { tag: 'text', text: 'Variables always start with <span class="inline-code">$</span>. <span class="inline-code">$name = "Sara";</span> stores the text "Sara" inside the box called name. Use it later with <span class="inline-code">$name</span>.' }
    ],

    code: [
      {
        lang: 'PHP',
        label: 'Your first real PHP',
        code: '<?php\n' +
              '$name = "Sara";\n' +
              '$age = 21;\n' +
              'echo "Hi $name, you are $age years old!";'
      },
      {
        lang: 'PHP',
        label: 'Comments are free',
        code: '<?php\n' +
              '// single line comment\n' +
              '# also a single line comment\n' +
              '/* multi-line\n' +
              '   comment */\n' +
              '$first = "Learn";\n' +
              '$second = "Python"; // your last brain cell when you see it works\n' +
              'echo $first . " " . $second; // concatenation with the dot'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'In the first block, Brown "<span class="inline-code">$name</span>" inside double quotes gets replaced by its value — that is interpolation. The dot in the second block concatenates strings (glues them together).' },
      { tag: 'text', text: 'Output of block 2: <span class="inline-code">Learn Python</span>. Yes, the dot is how you join strings in PHP. There is no <span class="inline-code">+</span> for text.' }
    ],

    mistakes: [
      'Forgetting the semicolon — number one beginner mistake, embarrassing yourself in front of the terminal.',
      'Using single quotes when you want interpolation: <span class="inline-code">echo \'Hi $name\';</span> prints the literal text <span class="inline-code">Hi $name</span>, not <span class="inline-code">Hi Sara</span>.',
      'Writing <span class="inline-code">echo $name . " " . age</span> and forgetting the <span class="inline-code">$</span> on variable — PHP will treat it as a constant and scream at you.'
    ],

    proTip: 'If a file contains <span class="inline-code">&lt;?php</span> only, skip the closing <span class="inline-code">?&gt;</span> tag. A stray space after it can corrupt your headers and break the app in ways you will debug for an hour.'

    ,

    quiz: {
      cat: 'Output',
      question: 'What does this script print?',
      quizLang: 'PHP',
      quizCode: '<?php\n$name = "Sara";\necho "Hi $name";',
      options: [
        'Hi Sara',
        'Hi $name',
        'Hi Sara but with a warning',
        'It crashes'
      ],
      correct: 0,
      feedback: { correct: '🔥 LET\'S GOOO. Double quotes interpolate. You already know dev.', wrong: '❌ Nope. The bug wins this round. Double quotes insert the variable value; single quotes print it literally.' }
    },

    challenge: {
      lang: 'PHP',
      text: 'Create two variables — <strong>$yourName</strong> and <strong>$yourAge</strong> — and print one sentence using interpolation. Bonus: add a comment explaining sarcastically what you are doing.',
      code: '<?php\n// TODO: actually write my name here\n$yourName = "..."\n$yourAge = ...\n',
      hint: 'Remember the $ on both variables and filter out the "Error: unexpected token" face.'
    },

    prev: { slug: 'loops', title: 'Loops' },
    next: { slug: 'php-functions', title: 'Functions' }
  },

  'php-functions': {
    id: 'php-functions',
    section: 'PHP',
    level: '02',
    title: 'Functions',
    time: '30 min',
    difficulty: 'Beginner',
    book: 'Book Chapter 2 · Functions',

    intro: 'A function is a recipe you write once and then invoke by name. Like your grandmother\'s secret dish — but for data, and nobody gets hurt if you get it wrong.',

    whyMatters: 'Without functions, your code is a wall of instructions executed top to bottom with no way to reuse logic. Functions turn "typed it again" into "called it again" — the professional upgrade.',

    explanation: [
      { tag: 'heading', text: 'Anatomy of a function' },
      { tag: 'text', text: '<span class="inline-code">function name($param) { ... }</span>. It takes inputs (parameters), does work inside the curly braces, and optionally returns a value with <span class="inline-code">return</span>.' },
      { tag: 'heading', text: 'Return vs echo' },
      { tag: 'text', text: '<span class="inline-code">return</span> hands the value back to the caller — then you decide what to do with it. The function can also print directly with <span class="inline-code">echo</span>, but pure "return" functions are more reusable.' },
      { tag: 'heading', text: 'Default parameters' },
      { tag: 'text', text: 'You can give parameters default values, so calling without an argument still works: <span class="inline-code">function greet($name = "friend")</span>.' }
    ],

    code: [
      {
        lang: 'PHP',
        label: 'Write once, call many',
        code: '<?php\n' +
              'function greet($name) {\n' +
              '    return "Hello, $name!";\n' +
              '}\n' +
              '\n' +
              'echo greet("Sara");   // Hello, Sara!\n' +
              'echo greet("Omar");   // Hello, Omar!\n' +
              'echo greet("The boss");'
      },
      {
        lang: 'PHP',
        label: 'With a default value',
        code: '<?php\n' +
              'function multiply($a, $b = 2) {\n' +
              '    return $a * $b;\n' +
              '}\n' +
              '\n' +
              'echo multiply(5);    // 10\n' +
              'echo multiply(5, 3); // 15'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'The first example is a pure function: it returns a value and does not print anything itself. The caller decides what to do with it. Clean and testable.' },
      { tag: 'text', text: 'In the second, the third parameter has a default. No argument? PHP helpfully uses 2. Argument provided? Overrides the default.' }
    ],

    mistakes: [
      'Calling a return function without using the result — <span class="inline-code">greet("Sara");</span> prints nothing.',
      'Remembering the semicolon after the function definition line <span class="inline-code">function foo() ...</span> — there is none! Curly braces only.',
      'Using <span class="inline-code">echo</span> inside the function AND concatenating the call result — you get double output and a confused brain.'
    ],

    proTip: 'Name functions with verbs: <span class="inline-code">calculateTotal()</span>, <span class="inline-code">sendEmail()</span>. A function named <span class="inline-code">data()</span> was a junior mistake; <span class="inline-code">getUserById(3)</span> is a senior flex.'

    ,

    quiz: {
      cat: 'Functions',
      question: 'What is the output of <span class="inline-code">echo multiply(4);</span> if multiply is defined as in the example above?',
      quizLang: 'PHP',
      options: [
        '8',
        '4',
        '12',
        'Error: missing argument'
      ],
      correct: 0,
      feedback: { correct: '🔥 LET\'S GOOO. Default parameters are just polite functions.', wrong: '❌ Nope. $b has a default of 2, so multiply(4) is 4 x 2 = 8.' }
    },

    challenge: {
      lang: 'PHP',
      text: 'Write a function <strong>isAdult($age)</strong> that returns <strong>true</strong> if the age is 18 or more, and <strong>false</strong> otherwise. Then echo the result of calling it with the age 17 and with 23.',
      code: '<?php\nfunction isAdult($age) {\n    // your code here\n}\n',
      hint: 'The comparison operator is >=. The function returns a boolean (true/false), and echoing true/false prints "1" or "" respectively.'
    },

    prev: { slug: 'php-syntax', title: 'Syntax & Output' },
    next: { slug: 'php-arrays', title: 'Arrays' }
  },

  'php-arrays': {
    id: 'php-arrays',
    section: 'PHP',
    level: '02',
    title: 'Arrays',
    time: '30 min',
    difficulty: 'Beginner',
    book: 'Book Chapter 2 · Arrays',

    intro: 'An array is a rack of variables. One name, many compartments. The storage solution for people who are not allowed to create variables called $name1, $name2, $name3...',

    whyMatters: 'Real data rarely comes alone. Users, orders, products, results — they arrive as lists. Arrays are how PHP holds those lists, and every framework feature we build later stands on top of them.',

    explanation: [
      { tag: 'heading', text: 'Indexed arrays' },
      { tag: 'text', text: 'The simplest array is a numbered list: <span class="inline-code">$fruits = ["apple", "banana", "mango"];</span>. Items are accessed by their index starting at 0: <span class="inline-code">$fruits[0]</span> is "apple".' },
      { tag: 'heading', text: 'Associative arrays' },
      { tag: 'text', text: 'When you want names instead of numbers: <span class="inline-code">$user = ["name" => "Sara", "age" => 21];</span>. Access with <span class="inline-code">$user["name"]</span>. This is exactly how form data and JSON look.' },
      { tag: 'heading', text: 'Looping with foreach' },
      { tag: 'text', text: 'The <span class="inline-code">foreach</span> loop walks the array and gives you each value (and optionally the key). It is the most used loop in real PHP code.' }
    ],

    code: [
      {
        lang: 'PHP',
        label: 'Indexed + associative',
        code: '<?php\n' +
              '$fruits = ["apple", "banana", "mango"];\n' +
              'echo $fruits[0]; // apple\n' +
              '\n' +
              '$user = ["name" => "Sara", "age" => 21];\n' +
              'echo $user["name"]; // Sara'
      },
      {
        lang: 'PHP',
        label: 'foreach — the workhorse',
        code: '<?php\n' +
              '$users = ["Ahmed", "Sara", "Omar"];\n' +
              'foreach ($users as $name) {\n' +
              '    echo "Hey $name!\n";\n' +
              '}\n' +
              '\n' +
              'foreach ($user as $key => $value) {\n' +
              '    echo "$key is $value\n";\n' +
              '}'
      }
    ],

    codeExplained: [
      { tag: 'text', text: '<span class="inline-code">foreach ($users as $name)</span> goes through the list, putting one item into <span class="inline-code">$name</span> each round. Four items? Four echoes.' },
      { tag: 'text', text: '<span class="inline-code">foreach ($user as $key => $value)</span> also gives you the key — perfect for associative arrays where you care about the label, not just the value.' }
    ],

    mistakes: [
      'Forgetting arrays start at 0 — <span class="inline-code">$fruits[1]</span> is "banana", not "apple". Your firstborn debugging lesson.',
      'Using single quotes on the key: <span class="inline-code">$user[name]</span> — PHP will forgive you and convert it to a string, but you should write quotes on purpose, not by accident.',
      'Printing an array directly — <span class="inline-code">echo $fruits;</span> throws "Array to string conversion". Use <span class="inline-code">print_r($fruits)</span> for debugging.'
    ],

    proTip: 'Use <span class="inline-code">count($arr)</span> to get the length, <span class="inline-code">array_push($arr, $x)</span> or <span class="inline-code">$arr[] = $x</span> to append. The <span class="inline-code">[] =</span> shortcut is the idiomatic PHP way.'

    ,

    quiz: {
      cat: 'Arrays',
      question: 'What is the output?',
      quizLang: 'PHP',
      quizCode: '<?php\n$nums = [10, 20, 30];\necho $nums[1];',
      options: [
        '20',
        '10',
        '30',
        'Array'
      ],
      correct: 0,
      feedback: { correct: '🔥 LET\'S GOOO. Index 1 is the second item. Zero-indexing strikes again.', wrong: '❌ Nope. Indices start at 0, so index 1 holds 20.' }
    },

    challenge: {
      lang: 'PHP',
      text: 'Create an associative array for a product with <strong>name</strong>, <strong>price</strong>, and a <strong>stock</strong> — then loop over it with <span class="inline-code">foreach ($product as $key => $value)</span> echoing "<strong>key is value</strong>".',
      code: '<?php\n$product = ["name" => "Keyboard", "price" => 25, "stock" => 100];\n',
      hint: 'Your loop should produce 3 lines, one per key.'
    },

    prev: { slug: 'php-functions', title: 'Functions' },
    next: { slug: 'php-forms', title: 'Forms & Input' }
  },

  'php-forms': {
    id: 'php-forms',
    section: 'PHP',
    level: '02',
    title: 'Forms & Input',
    time: '35 min',
    difficulty: 'Beginner',
    book: 'Book Chapter 2 · Forms & Input',

    intro: 'A form is the front door where users hand you data and hope you do not drop it. Whatever the user typed in HTML arrives at your PHP file with a little <span class="inline-code">$_POST</span> sticker on it.',

    whyMatters: 'Backend = handling other people\'s input safely. Registration, login, search, orders — every one of them starts as a form submit. This lesson is where your app starts accepting real users.',

    explanation: [
      { tag: 'heading', text: 'GET vs POST' },
      { tag: 'text', text: 'GET sends data in the URL (?name=Sara). POST sends it in the request body — invisible to the casual glance. Use POST for anything that changes data (login, order). GET for search and simple filters.' },
      { tag: 'heading', text: 'The superglobals' },
      { tag: 'text', text: 'Form data lands in <span class="inline-code">$_POST</span> (or <span class="inline-code">$_GET</span>) — associative arrays keyed by the name attributes of your inputs.' },
      { tag: 'heading', text: 'Never trust input' },
      { tag: 'text', text: 'Treat every <span class="inline-code">$_POST</span> value as hostile until proven otherwise. At minimum, escape it before echoing with <span class="inline-code">htmlspecialchars()</span> — this is your first line of defense against XSS.' }
    ],

    code: [
      {
        lang: 'HTML',
        label: 'The form (HTML side)',
        code: '<form method="POST" action="welcome.php">\n' +
              '  <input type="text" name="username">\n' +
              '  <input type="email" name="email">\n' +
              '  <button type="submit">Submit</button>\n' +
              '</form>'
      },
      {
        lang: 'PHP',
        label: 'The receiver (PHP side)',
        code: '<?php\n' +
              '$username = $_POST["username"] ?? "Guest";\n' +
              '$email = $_POST["email"] ?? "";\n' +
              '\n' +
              'echo "Welcome, " . htmlspecialchars($username) . "!";\n' +
              'echo "We will email " . htmlspecialchars($email) . ".";'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'The <span class="inline-code">??</span> (null coalescing) operator means: if <span class="inline-code">$_POST["username"]</span> is not set, use "Guest". No notices, no crash.' },
      { tag: 'text', text: '<span class="inline-code">htmlspecialchars()</span> converts <span class="inline-code">&lt;script&gt;</span> into harmless text — so a user cannot inject HTML into your page. Learn this pattern by heart; you will use it forever.' }
    ],

    mistakes: [
      'Using GET for passwords or sensitive data — it lands up in browser history and server logs. That is a court exhibit waiting to happen.',
      'Echoing raw input without escaping — <span class="inline-code">echo $_POST["username"];</span> invites script injection into your own page.',
      'Forgetting that checkbox inputs do not exist in <span class="inline-code">$_POST</span> when unchecked — use <span class="inline-code">??</span> defaults.'
    ],

    proTip: 'Accessing <span class="inline-code">$_POST["key"]</span> when the key is missing throws a notice. Always use <span class="inline-code">$_POST["key"] ?? null</span>. In Laravel this pain disappears, but the discipline stays.'

    ,

    quiz: {
      cat: 'Forms',
      question: 'With this form, how does the username reach the PHP file?',
      quizLang: 'HTML',
      quizCode: '<form method="POST" action="welcome.php">\n  <input type="text" name="username">\n</form>',
      options: [
        'It is sent in the request body as part of $_POST',
        'It is added to the URL query string',
        'It is stored in a cookie',
        'It never reaches PHP'
      ],
      correct: 0,
      feedback: { correct: '🔥 POST, don\'t GET, your way to victory.', wrong: '❌ Nope. The method POST sends data in the request body, readable via $_POST.' }
    },

    challenge: {
      lang: 'PHP',
      text: 'Build a form with a <strong>color</strong> and a <strong>favorite_food</strong> input. On submit, print: "<strong>Your favorite color is X and you love Y</strong>" — both escaped with htmlspecialchars().',
      hint: 'You need two files (form.html + submit.php) or one file that handles both. Escape everything before echoing.'
    },

    prev: { slug: 'php-arrays', title: 'Arrays' },
    next: { slug: 'php-sessions', title: 'Sessions & Cookies' }
  },

  'php-sessions': {
    id: 'php-sessions',
    section: 'PHP',
    level: '02',
    title: 'Sessions & Cookies',
    time: '35 min',
    difficulty: 'Beginner',
    book: 'Book Chapter 2 · Sessions & Cookies',

    intro: 'Every request is born with amnesia — the server remembers nothing between them. Sessions are PHP harvesting a tiny memory on the server\'s side with a useful little cookie that says "yes, this really is that visitor."',

    whyMatters: 'Login state, shopping carts, "welcome back" — all of it needs the server to remember someone between page loads. That is the entire job of sessions. You cannot build an e-commerce platform without them.',

    explanation: [
      { tag: 'heading', text: 'How sessions work' },
      { tag: 'text', text: 'Call <span class="inline-code">session_start()</span> at the top (before ANY output). PHP hands out a session ID stored in a cookie on the visitor\'s browser. Server-side, a matching file holds the data. Visitor sends the ID with each request; PHP opens "their" file.' },
      { tag: 'heading', text: 'Storing and reading' },
      { tag: 'text', text: 'Use the <span class="inline-code">$_SESSION</span> superglobal: write to it, read from it, unset what you no longer need. Logout = <span class="inline-code">session_destroy();</span>' },
      { tag: 'heading', text: 'Cookies vs sessions' },
      { tag: 'text', text: 'Cookies live on the client, capped at ~4KB, inspectable. Sessions live on the server, near-unlimited — the cookie only holds the ID. Sensitive data belongs in sessions, not cookies.' }
    ],

    code: [
      {
        lang: 'PHP',
        label: 'Remembering a visitor',
        code: '<?php\n' +
              'session_start(); // must be the very first thing\n' +
              '\n' +
              '// page 1 — login happens\n' +
              '$_SESSION["user_id"] = 42;\n' +
              '$_SESSION["role"] = "admin";\n' +
              '\n' +
              '// page 2 — any other page\n' +
              'echo "User #{$_SESSION["user_id"]} is logged in";'
      },
      {
        lang: 'PHP',
        label: 'Checking login + logout',
        code: '<?php\n' +
              'session_start();\n' +
              'if (isset($_SESSION["user_id"])) {\n' +
              '    echo "Welcome back!";\n' +
              '} else {\n' +
              '    echo "Please log in.";\n' +
              '}\n' +
              '\n' +
              '// logout.php\n' +
              'session_start();\n' +
              'session_destroy();\n' +
              'header("Location: index.php");\n' +
              'exit;'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'Behind the scenes PHP creates a file like <span class="inline-code">sess_abc123</span> containing your serialized session data, plus a cookie with that ID. The link between cookie and file is what "remembers" the user.' },
      { tag: 'text', text: 'After <span class="inline-code">session_destroy()</span>, follow with a redirect using <span class="inline-code">header("Location: ...")</span> and always add <span class="inline-code">exit;</span> so no further code sneaks in.' }
    ],

    mistakes: [
      'Calling session_start() after output started — headers already sent, session silently fails, "why is login not working for ten hours?" — the classic.',
      'Storing passwords or the whole user object in a session file — store a user_id and fetch fresh data each request. Sessions die; don\'t store stale data.',
      'Forgetting session_start() on every single page that touches $_SESSION.'
    ],

    proTip: 'The session cookie is secure-flagged and HttpOnly by default in production. Never put the password hash in a session — the ID is enough, and it keeps stale-data bugs out of your life.'

    ,

    quiz: {
      cat: 'Sessions',
      question: 'What is stored inside the browser\'s cookie for a PHP session?',
      options: [
        'Only the session ID',
        'All the session data',
        'The whole users table',
        'The password'
      ],
      correct: 0,
      feedback: { correct: '🔥 Exactly. The cookie is a ticket with a number on it; the real data stays server-side.', wrong: '❌ Nope. The cookie just carries the session ID. The actual data lives in a server-side file.' }
    },

    challenge: {
      lang: 'PHP',
      text: 'Build a mini "login" — a form that stores <strong>username</strong> in a session, then on a second page greets "<strong>Welcome back, [username]</strong>" only if the session exists, otherwise shows a login link.',
      hint: 'Three steps: session_start, write to $_SESSION on submit, check isset($_SESSION["username"]) on the other page.'
    },

    prev: { slug: 'php-forms', title: 'Forms & Input' },
    next: { slug: 'php-files', title: 'File Handling' }
  },

  'php-files': {
    id: 'php-files',
    section: 'PHP',
    level: '02',
    title: 'File Handling',
    time: '30 min',
    difficulty: 'Beginner',
    book: 'Book Chapter 2 · Files',

    intro: 'PHP can read and write files on the server. That sounds innocent until a ticket-support system secretly is a folder of text files. You will do better. Probably.',

    whyMatters: 'Logs must be written, files must be uploaded, CSV exports must be generated. File handling is the "outside your database" storage that every real app touches at least once.',

    explanation: [
      { tag: 'heading', text: 'Read a file' },
      { tag: 'text', text: '<span class="inline-code">file_get_contents("path")</span> loads a whole file into a string in one call. For big files, prefer <span class="inline-code">fopen()</span> + <span class="inline-code">fgets()</span> line by line.' },
      { tag: 'heading', text: 'Write a file' },
      { tag: 'text', text: '<span class="inline-code">file_put_contents($path, $data)</span> writes (or overwrites). Add <span class="inline-code">FILE_APPEND</span> as the third argument to append instead of overwrite — that is exactly how logs grow.' },
      { tag: 'heading', text: 'Check before you touch' },
      { tag: 'text', text: '<span class="inline-code">file_exists()</span>, <span class="inline-code">is_dir()</span>, <span class="inline-code">is_readable()</span> — verify, then act. Servers have permission systems and your app will meet them.' }
    ],

    code: [
      {
        lang: 'PHP',
        label: 'Read + write',
        code: '<?php\n' +
              '$read = file_get_contents("notes.txt");\n' +
              'echo $read;'
      },
      {
        lang: 'PHP',
        label: 'Append a log line',
        code: '<?php\n' +
              '$line = "[" . date("Y-m-d H:i:s") . "] user logged in\n";\n' +
              'file_put_contents("logs.txt", $line, FILE_APPEND);\n' +
              '\n' +
              'if (file_exists("logs.txt")) {\n' +
              '    echo "Log exists. Size: " . filesize("logs.txt") . " bytes";\n' +
              '}'
      }
    ],

    codeExplained: [
      { tag: 'text', text: '<span class="inline-code">file_put_contents(..., FILE_APPEND)</span> is the one-liner append. Note the <span class="inline-code">\n</span> at the end of each log line so the next entry starts on a fresh line.' },
      { tag: 'text', text: '<span class="inline-code">filesize()</span> gives the byte count. Handy for sanity checks and for refusing giant uploads.' }
    ],

    mistakes: [
      'Writing to a folder you have no permission for — silent failure or a scary warning. Check is_readable/is_writable first.',
      'Forgetting that file_put_contents overwrites by default — goodbye, old log. (FILE_APPEND is your friend.)',
      'Using file_get_contents on a 2 GB file — congratulations, your server just ran out of memory.'
    ],

    proTip: 'Unescaped user input in a file path is a backdoor: <span class="inline-code">../../etc/passwd</span>. Always restrict paths and use realpath/validation in any production upload feature.'

    ,

    quiz: {
      cat: 'Files',
      question: 'Which call APPENDS a line to a file instead of overwriting it?',
      options: [
        'file_put_contents($path, $line, FILE_APPEND)',
        'file_put_contents($path, $line)',
        'file_get_contents($path, FILE_APPEND)',
        'fopen($path, "w")'
      ],
      correct: 0,
      feedback: { correct: '🔥 FILE_APPEND is the friendly flag that never overwrites good data.', wrong: '❌ Nope. file_put_contents alone overwrites; the FILE_APPEND flag keeps the old content and adds at the end.' }
    },

    challenge: {
      lang: 'PHP',
      text: 'Write a script that appends the current date and time to a file called <strong>visits.log</strong> every time it runs, then reads the last 5 lines back and prints them.',
      hint: 'date("Y-m-d H:i:s") gives you the timestamp. file() puts lines into an array; array_slice from the end gets the last ones.'
    },

    prev: { slug: 'php-sessions', title: 'Sessions & Cookies' },
    next: { slug: 'php-errors', title: 'Error Handling' }
  },

  'php-errors': {
    id: 'php-errors',
    section: 'PHP',
    level: '02',
    title: 'Error Handling',
    time: '30 min',
    difficulty: 'Beginner',
    book: 'Book Chapter 2 · Errors',

    intro: 'Errors are not your enemy. They are a very precise critic telling you exactly what went wrong. The enemy is the code that fails silently so you can\'t find why your customers are upset.',

    whyMatters: 'Half of backend debugging is reading error messages and knowing what they mean. Understanding exceptions = shipping apps other people can actually maintain.',

    explanation: [
      { tag: 'heading', text: 'Types of problems' },
      { tag: 'text', text: 'Warnings (non-fatal, execution continues) and fatal errors (execution stops). Then there are <span class="inline-code">Exception</span>s — thrown on purpose to be caught and handled gracefully.' },
      { tag: 'heading', text: 'try / catch' },
      { tag: 'text', text: 'Wrap risky code in <span class="inline-code">try {}</span>. If an exception is thrown (e.g., database is down), control jumps to <span class="inline-code">catch (Exception $e) {}</span> where you log it and show the user a friendly message instead of a white page of doom.' },
      { tag: 'heading', text: 'Finally + display errors' },
      { tag: 'text', text: '<span class="inline-code">finally {}</span> always runs (cleanup). In development you want errors visible; in production you log them and show nothing sensitive. Never leak stack traces to users.' }
    ],

    code: [
      {
        lang: 'PHP',
        label: 'try / catch in action',
        code: '<?php\n' +
              'try {\n' +
              '    $conn = new PDO("mysql:host=localhost;dbname=shop", "root", "");\n' +
              '} catch (PDOException $e) {\n' +
              '    // log it for yourself, hide it from the user\n' +
              '    error_log($e->getMessage());\n' +
              '    echo "We are having technical difficulties. Try again later.";\n' +
              '}'
      },
      {
        lang: 'PHP',
        label: 'Throwing on purpose',
        code: '<?php\n' +
              'function withdraw($balance, $amount) {\n' +
              '    if ($amount > $balance) {\n' +
              '        throw new Exception("You are not a bank. No overdraft here.");\n' +
              '    }\n' +
              '    return $balance - $amount;\n' +
              '}\n' +
              '\n' +
              'try {\n' +
              '    echo withdraw(100, 250);\n' +
              '} catch (Exception $e) {\n' +
              '    echo "Error: " . $e->getMessage();\n' +
              '}'
      }
    ],

    codeExplained: [
      { tag: 'text', text: '<span class="inline-code">error_log()</span> writes to the PHP log — your private diary. The user gets a safe, generic sentence. Rule: log everything, reveal nothing.' },
      { tag: 'text', text: 'Throwing exceptions you can foresee (like an overdraft) makes your functions fail loudly instead of returning wrong numbers that poison the rest of the app.' }
    ],

    mistakes: [
      'Catching an exception and printing $e->getMessage() to the user — now the attacker knows your database host.',
      'Empty catch blocks — the error "disappears" and you debug for days with zero clues. Always log.',
      'Catching one specific type when your code can throw many — catch the broad Exception for the message screen, log the specific type.'
    ],

    proTip: 'In development set <span class="inline-code">display_errors=On</span> and <span class="inline-code">error_reporting(E_ALL)</span>. In production set both off and log instead. This single habit never stops saving you.'

    ,

    quiz: {
      cat: 'Errors',
      question: 'Where should exception details (host, file, line) go in production?',
      quizLang: 'PHP',
      options: [
        'To the server log via error_log()',
        'Printed directly to the user',
        'Echoed inside the error message',
        'Nowhere — delete them'
      ],
      correct: 0,
      feedback: { correct: '🔥 Log it, don\'t show it. Attacks are fueled by leaked stack traces.', wrong: '❌ Nope. Never leak internal details to users — that is free reconnaissance for attackers.' }
    },

    challenge: {
      lang: 'PHP',
      text: 'Write <strong>divideNumbers($a, $b)</strong> that throws an exception if $b is 0 ("Cannot divide by zero"), and otherwise returns the result. Catch it and show a friendly error.',
      code: '<?php\nfunction divideNumbers($a, $b) {\n    // your code\n}\n',
      hint: 'A division by zero in PHP throws a DivisionByZeroError. Throwing an Exception yourself keeps the behavior predictable across PHP versions.'
    },

    prev: { slug: 'php-files', title: 'File Handling' },
    next: { slug: 'php-oop', title: 'OOP Basics' }
  },

  'php-oop': {
    id: 'php-oop',
    section: 'PHP',
    level: '02',
    title: 'OOP Basics',
    time: '45 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 2 · OOP',

    intro: 'OOP is modeling your code like the real world: classes are blueprints, objects are the actual things built from them. Think LEGO with documentation instead of LEGO with pain.',

    whyMatters: 'Laravel IS object-oriented PHP. Without classes, properties, and methods, the framework is just magic you cannot read. OOP is the grammar Laravel speaks.',

    explanation: [
      { tag: 'heading', text: 'Class vs object' },
      { tag: 'text', text: 'A <span class="inline-code">class</span> is the blueprint. A <span class="inline-code">new</span> object is an instance built from that blueprint. Blueprint says "car has 4 wheels"; the car you own is the object.' },
      { tag: 'heading', text: 'Properties & methods' },
      { tag: 'text', text: 'Properties are the data (variables inside the class). Methods are the behaviors (functions inside the class). Constructors (<span class="inline-code">__construct</span>) run automatically at creation to set initial state.' },
      { tag: 'heading', text: 'Visibility' },
      { tag: 'text', text: '<span class="inline-code">public</span> — anyone can touch it. <span class="inline-code">private</span> — only the class itself. <span class="inline-code">protected</span> — the class and its children. Real apps hide internals with private and expose a clean public API.' }
    ],

    code: [
      {
        lang: 'PHP',
        label: 'Blueprint → object',
        code: '<?php\n' +
              'class User {\n' +
              '    private $name;\n' +
              '\n' +
              '    public function __construct($name) {\n' +
              '        $this->name = $name;\n' +
              '    }\n' +
              '\n' +
              '    public function greet() {\n' +
              '        return "Hello, I am " . $this->name;\n' +
              '    }\n' +
              '}\n' +
              '\n' +
              '$sara = new User("Sara");\n' +
              'echo $sara->greet();'
      },
      {
        lang: 'PHP',
        label: 'Inheritance',
        code: '<?php\n' +
              'class Admin extends User {\n' +
              '    public function ban($otherUser) {\n' +
              '        return "Banned: " . $otherUser->name;\n' +
              '    }\n' +
              '}\n' +
              '\n' +
              '$admin = new Admin("Omar");\n' +
              'echo $admin->greet(); // inherits greet()\n' +
              'echo $admin->ban("troll");'
      }
    ],

    codeExplained: [
      { tag: 'text', text: '<span class="inline-code">$this</span> is how an object refers to itself. <span class="inline-code">$this->name</span> reads the property on "this instance". The arrow <span class="inline-code">-&gt;</span> is the object version of the dot in other languages.' },
      { tag: 'text', text: 'Inheritance: <span class="inline-code">Admin extends User</span> gets all of User\'s public/protected members and can add its own. Laravel\'s models extend a base Model class with dozens of inherited superpowers.' }
    ],

    mistakes: [
      'Writing <span class="inline-code">$this->$name</span> instead of <span class="inline-code">$this->name</span> — one extra $ and you are now reading a property called $name\'s value. Faceplant guaranteed.',
      'Making every property public — your class interns are everywhere and nothing can change without breaking something.',
      'Forgetting the constructor runs automatically — putting setup logic in a regular method means it never runs at creation.'
    ],

    proTip: 'Typed properties (<span class="inline-code">private string $name;</span>) turn sloppy bugs into instant white pages. PHP 7.4+ — use them, don\'t live in the past.'

    ,

    quiz: {
      cat: 'OOP',
      question: 'When you write <span class="inline-code">new User("Sara")</span>, which method runs automatically?',
      options: [
        '__construct',
        '__start',
        '__init',
        'greet()'
      ],
      correct: 0,
      feedback: { correct: '🔥 __construct is the class\'s welcome party — it runs the moment the object is created.', wrong: '❌ Nope. The magic method __construct runs automatically at instantiation to set up the object.' }
    },

    challenge: {
      lang: 'PHP',
      text: 'Create a <strong>Product</strong> class with private <strong>name</strong> and <strong>price</strong>, a constructor to set them, and a <strong>getPriceFormatted()</strong> method returning the price with a currency symbol. Instantiate and echo a product.',
      hint: 'echo method return like the User example. "25 USD" or "$25" — your choice, your brand now.'
    },

    prev: { slug: 'php-errors', title: 'Error Handling' },
    next: { slug: 'php-dates', title: 'Date & String Functions' }
  },

  'php-dates': {
    id: 'php-dates',
    section: 'PHP',
    level: '02',
    title: 'Date & String Functions',
    time: '30 min',
    difficulty: 'Beginner',
    book: 'Book Chapter 2 · Dates & Strings',

    intro: 'Strings and dates are the JavaScript\'s name problems of PHP — everyone works with them every day, and everyone\'s date format is wrong somewhere. This lesson reduces your pain soup by two ingredients.',

    whyMatters: 'Usernames, emails, passwords, timestamps, logging, sorting by date, showing created_at — the web runs on strings and dates. These functions are in almost every file you will ever write.',

    explanation: [
      { tag: 'heading', text: 'String helpers' },
      { tag: 'text', text: '<span class="inline-code">strlen()</span>, <span class="inline-code">strtoupper()</span>, <span class="inline-code">strtolower()</span>, <span class="inline-code">trim()</span> (removes whitespace from both ends — first thing you do to user input), <span class="inline-code">str_replace()</span>, <span class="inline-code">substr()</span>, <span class="inline-code">explode()</span> / <span class="inline-code">implode()</span> to split/join.' },
      { tag: 'heading', text: 'Dates' },
      { tag: 'text', text: '<span class="inline-code">date("Y-m-d H:i:s")</span> gives "2026-09-13 14:30:00". <span class="inline-code">time()</span> gives the current Unix timestamp (seconds since 1970). <span class="inline-code">strtotime("+3 days")</span> parses friendly English into a timestamp.' },
      { tag: 'heading', text: 'Validation habit' },
      { tag: 'text', text: '<span class="inline-code">mb_strlen()</span> for multi-byte text (Arabic!) — <span class="inline-code">strlen()</span> would count bytes and think "مرحبا" is twice as long as it is.' }
    ],

    code: [
      {
        lang: 'PHP',
        label: 'Strings, assemble!',
        code: '<?php\n' +
              '$email = "  Sara@Example.COM  ";\n' +
              '$email = strtolower(trim($email)); // sara@example.com\n' +
              '\n' +
              '$parts = explode("@", $email);\n' +
              'echo $parts[0]; // sara\n' +
              'echo implode(" - ", ["a", "b", "c"]); // a - b - c'
      },
      {
        lang: 'PHP',
        label: 'Dates everywhere',
        code: '<?php\n' +
              'echo date("Y-m-d H:i:s");         // now\n' +
              'echo date("d/m/Y");               // 13/09/2026\n' +
              'echo strtotime("+7 days");        // next week = timestamp\n' +
              'echo date("Y-m-d", strtotime("+7 days"));\n' +
              'echo time();                      // seconds since 1970-ish'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'Cleaning an email is a routine: trim whitespace, lowercase the domain (or everything). explode("@"...) splits into local and domain — exactly how many login systems verify emails.' },
      { tag: 'text', text: 'The "date" function converts a format string into text; strtotime turns human English ("+7 days", "next monday") into a timestamp. Chain them and you get formatted dates in the future or past.' }
    ],

    mistakes: [
      'Comparing dates as strings with different formats — "2026-09-13" vs "13/09/2026" sort like text, not like time. Store dates as "Y-m-d" always.',
      'Forgetting timezone — your server says 14:00 but your user sees 23:00. Set date_default_timezone_set and honor PHP 8+ default for UTC storage.',
      'Using strlen() on Arabic/UTF-8 text — use mb_* functions.'
    ],

    proTip: 'Never rely on local date functions for user-facing business rules. Store timestamps in the database as UTC and convert to the user\'s timezone only at display time. Your future self will tip their hat.'

    ,

    quiz: {
      cat: 'Strings',
      question: 'What is the output of <span class="inline-code">echo strtoupper("laravel");</span>?',
      options: [
        'LARAVEL',
        'laravel',
        'Laravel',
        'Error'
      ],
      correct: 0,
      feedback: { correct: '🔥 strtoupper shouts the whole word back at you. Useful for codes and acronyms.', wrong: '❌ Nope. strtoupper converts every character to uppercase: "LARAVEL".' }
    },

    challenge: {
      lang: 'PHP',
      text: 'Create an array of 3 names, some with extra spaces. Clean each with trim(), format to proper case (first letter capital), and print them today\'s date as "dd/mm/yyyy".',
      hint: 'Combine strtolower()+ucwords() or ucfirst() as you like. explode/implode can help join cleaned values.'
    },

    prev: { slug: 'php-oop', title: 'OOP Basics' },
    next: { slug: 'php-mysql', title: 'MySQL Connection' }
  },

  'php-mysql': {
    id: 'php-mysql',
    section: 'PHP',
    level: '02',
    title: 'MySQL Connection',
    time: '40 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 2 · Databases',

    intro: 'Now your PHP gets a memory that survives restarts — the database. This is where "website" starts becoming "application". The elephant meets the dolphin. 🐘 🐬',

    whyMatters: 'Without a database you have a brochure. With one you have a product. This lesson shows the bridge — PDO — the one habit that saves you from SQL injection attacks.',

    explanation: [
      { tag: 'heading', text: 'PDO — the secure bridge' },
      { tag: 'text', text: 'PDO (PHP Data Objects) connects PHP to MySQL safely. The critical rule: use prepared statements with placeholders (<span class="inline-code">?</span> or <span class="inline-code">:name</span>) for any user-supplied value. This turns injection attacks into safe data.' },
      { tag: 'heading', text: 'Connection' },
      { tag: 'text', text: '<span class="inline-code">new PDO($dsn, $user, $pass)</span> where DSN is a string like <span class="inline-code">mysql:host=localhost;dbname=chango</span>. Wrap it in try/catch and set errors to throw exceptions.' },
      { tag: 'heading', text: 'Querying' },
      { tag: 'text', text: '<span class="inline-code">prepare()</span> + <span class="inline-code">execute()</span> + <span class="inline-code">fetchAll()</span> / <span class="inline-code">fetch()</span>. SELECT returns rows as arrays/objects. A "last inserted id" is available via <span class="inline-code">lastInsertId()</span>.' }
    ],

    code: [
      {
        lang: 'PHP',
        label: 'Connect',
        code: '<?php\n' +
              'try {\n' +
              '    $pdo = new PDO(\n' +
              '        "mysql:host=localhost;dbname=chango;charset=utf8mb4",\n' +
              '        "root", "secret",\n' +
              '        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]\n' +
              '    );\n' +
              '    echo "Connected!";\n' +
              '} catch (PDOException $e) {\n' +
              '    error_log($e->getMessage());\n' +
              '    echo "Database trouble. Not you, us.";\n' +
              '}'
      },
      {
        lang: 'PHP',
        label: 'SELECT with prepared statement',
        code: '<?php\n' +
              '$email = $_POST["email"]; // user input!\n' +
              '$stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email");\n' +
              '$stmt->execute([":email" => $email]);\n' +
              '$user = $stmt->fetch(); // null if not found\n' +
              '\n' +
              'if ($user) {\n' +
              '    echo "Found: " . $user["name"];\n' +
              '} else {\n' +
              '    echo "No user with that email.";\n' +
              '}'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'Wrap the connection in try/catch. The <span class="inline-code">ERRMODE_EXCEPTION</span> flag means DB errors throw exceptions instead of warnings — your catch block becomes the place where problems get logged.' },
      { tag: 'text', text: 'The user\'s email never touches the SQL string directly. <span class="inline-code">:email</span> is a placeholder; PDO sends the value separately. Even if $email contains <span class="inline-code">"\'; DROP TABLE users; --"</span>, it is treated as harmless data, not as SQL.' }
    ],

    mistakes: [
      'Building queries by string concatenation: <span class="inline-code">"...WHERE email = \'$email\'"</span> — this is the most famous SQL injection in history. Stop now.',
      'Storing the password in plain code instead of a config file — and worse, the production password in the repo. Take it out.',
      'Using mysql_* or mysqli_* legacy functions instead of PDO — the 2005 way, and a security headache.'
    ],

    proTip: 'charset=utf8mb4 in the DSN supports Arabic and full emoji. Without it, a single "💻" crashes your insert and costs you an evening of Googling.'

    ,

    quiz: {
      cat: 'Databases',
      question: 'Why should you use prepared statements?',
      quizLang: 'PHP',
      quizCode: '$stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email");\n$stmt->execute([":email" => $email]);',
      options: [
        'They prevent SQL injection attacks',
        'They are faster and make code prettier',
        'They encrypt the database',
        'They remove the need for a password'
      ],
      correct: 0,
      feedback: { correct: '🔥 Parameters keep user input as data, never as code. SQL injection done.', wrong: '❌ Nope. Prepared statements send values separately from the query, so attackers cannot inject SQL into it.' }
    },

    challenge: {
      lang: 'PHP',
      text: 'Write <strong>findUserByEmail($pdo, $email)</strong> that uses a prepared statement to return the matching user row or null. Then call it with the string <span class="inline-code">"foo\"; DROP TABLE users; --"</span> and confirm it does not destroy anything.',
      hint: 'Try it against a test database. The point is to see it fail safely — the query returns no rows instead of dropping tables.'
    },

    prev: { slug: 'php-dates', title: 'Date & String Functions' },
    next: { slug: 'git-why', title: 'Why Git?' }
  }

});