/* ========================================
   Chango — Backend Roadmap · Lesson Data
   Level 01: Programming Fundamentals (5 lessons)
   ======================================== */

var SIDEBAR = [
  {
    name: 'Level 01 · Programming Fundamentals',
    status: 'available',
    lessons: [
      { slug: 'what-is-programming', title: 'What Is Programming?' },
      { slug: 'variables', title: 'Variables' },
      { slug: 'data-types', title: 'Data Types & Operators' },
      { slug: 'conditionals', title: 'Conditionals (if / else)' },
      { slug: 'loops', title: 'Loops' }
    ]
  },
  {
    name: 'Level 02 · PHP',
    status: 'available',
    lessons: [
      { slug: 'php-syntax', title: 'Syntax & Output' },
      { slug: 'php-functions', title: 'Functions' },
      { slug: 'php-arrays', title: 'Arrays' },
      { slug: 'php-forms', title: 'Forms & Input' },
      { slug: 'php-sessions', title: 'Sessions & Cookies' },
      { slug: 'php-files', title: 'File Handling' },
      { slug: 'php-errors', title: 'Error Handling' },
      { slug: 'php-oop', title: 'OOP Basics' },
      { slug: 'php-dates', title: 'Date & String Functions' },
      { slug: 'php-mysql', title: 'MySQL Connection' }
    ]
  },
  {
    name: 'Level 03 · Git',
    status: 'available',
    lessons: [
      { slug: 'git-why', title: 'Why Git?' },
      { slug: 'git-commits', title: 'Commits & History' },
      { slug: 'git-branches', title: 'Branches & Merge' },
      { slug: 'git-github', title: 'GitHub' },
      { slug: 'git-prs', title: 'Pull Requests' }
    ]
  },
  {
    name: 'Level 04 · SQL',
    status: 'available',
    lessons: [
      { slug: 'sql-what', title: 'What is a Database?' },
      { slug: 'sql-select', title: 'SELECT & WHERE' },
      { slug: 'sql-crud', title: 'INSERT, UPDATE, DELETE' },
      { slug: 'sql-joins', title: 'JOINs' },
      { slug: 'sql-relationships', title: 'Relationships' },
      { slug: 'sql-indexes', title: 'Indexes' },
      { slug: 'sql-normalization', title: 'Normalization' },
      { slug: 'sql-design', title: 'Designing Tables' },
      { slug: 'sql-aggregation', title: 'Aggregation' },
      { slug: 'sql-ecommerce', title: 'Practice: E-Commerce DB' }
    ]
  },
  {
    name: 'Level 05 · Laravel',
    status: 'available',
    lessons: [
      { slug: 'laravel-what', title: 'What is Laravel?' },
      { slug: 'laravel-install', title: 'Installation' },
      { slug: 'laravel-routing', title: 'Routing' },
      { slug: 'laravel-controllers', title: 'Controllers' },
      { slug: 'laravel-blade', title: 'Blade Templates' },
      { slug: 'laravel-migrations', title: 'Migrations' },
      { slug: 'laravel-eloquent', title: 'Eloquent ORM' },
      { slug: 'laravel-validation', title: 'Validation' },
      { slug: 'laravel-forms', title: 'Forms & Requests' },
      { slug: 'laravel-auth', title: 'Auth' },
      { slug: 'laravel-middleware', title: 'Middleware' },
      { slug: 'laravel-upload', title: 'File Upload' },
      { slug: 'laravel-storage', title: 'Storage & Helpers' },
      { slug: 'laravel-components', title: 'Blade Components' },
      { slug: 'laravel-container', title: 'Service Container' }
    ]
  },
  {
    name: 'Level 06 · REST APIs',
    status: 'available',
    lessons: [
      { slug: 'api-what', title: 'What is an API?' },
      { slug: 'api-http', title: 'HTTP Methods' },
      { slug: 'api-routes', title: 'Building API Routes' },
      { slug: 'api-resources', title: 'API Resources' },
      { slug: 'api-status', title: 'Status Codes' },
      { slug: 'api-postman', title: 'Postman Testing' },
      { slug: 'api-pagination', title: 'Pagination' },
      { slug: 'api-search', title: 'Filtering & Search' }
    ]
  },
  {
    name: 'Level 07 · Auth & Security',
    status: 'available',
    lessons: [
      { slug: 'security-hashing', title: 'Password Hashing' },
      { slug: 'security-sanctum', title: 'Sanctum Tokens' },
      { slug: 'security-csrf', title: 'CSRF Protection' },
      { slug: 'security-xss', title: 'XSS Prevention' },
      { slug: 'security-roles', title: 'Roles & Policies' },
      { slug: 'security-api-auth', title: 'API Authentication' },
      { slug: 'security-rate-limit', title: 'Rate Limiting' },
      { slug: 'security-checklist', title: 'Security Checklist' }
    ]
  },
  {
    name: 'Level 08 · Linux',
    status: 'available',
    lessons: [
      { slug: 'linux-terminal', title: 'The Terminal' },
      { slug: 'linux-files', title: 'Files & Permissions' },
      { slug: 'linux-processes', title: 'Processes' },
      { slug: 'linux-ssh', title: 'SSH & Servers' },
      { slug: 'linux-cron', title: 'Cron & Scheduling' }
    ]
  },
  {
    name: 'Level 09 · Docker',
    status: 'available',
    lessons: [
      { slug: 'docker-why', title: 'Why Containers?' },
      { slug: 'docker-images', title: 'Images & Containers' },
      { slug: 'dockerfile', title: 'Dockerfile' },
      { slug: 'docker-compose', title: 'docker-compose' },
      { slug: 'docker-laravel', title: 'Laravel + Docker' }
    ]
  },
  {
    name: 'Level 10 · Deployment',
    status: 'available',
    lessons: [
      { slug: 'deploy-hosting', title: 'Shared Hosting' },
      { slug: 'deploy-vps', title: 'VPS Basics' },
      { slug: 'deploy-nginx', title: 'Nginx Setup' },
      { slug: 'deploy-env', title: 'Environment Variables' },
      { slug: 'deploy-https', title: 'HTTPS & Domains' }
    ]
  },
  {
    name: 'Level 11 · Real Projects',
    status: 'available',
    lessons: [
      { slug: 'projects-todo', title: 'Todo API' },
      { slug: 'projects-blog', title: 'Blog API' },
      { slug: 'projects-auth', title: 'Auth API' },
      { slug: 'projects-ecommerce', title: 'E-Commerce API' },
      { slug: 'projects-job-market', title: 'Job Marketplace API' },
      { slug: 'projects-portfolio', title: 'Portfolio Project' }
    ]
  },
  {
    name: 'Level 12 · Job Ready',
    status: 'available',
    lessons: [
      { slug: 'job-portfolio', title: 'Your Portfolio' },
      { slug: 'job-github', title: 'GitHub Profile' },
      { slug: 'job-cv', title: 'CV & LinkedIn' },
      { slug: 'job-interview', title: 'Interview Questions' },
      { slug: 'job-first-job', title: 'First Job Tips' }
    ]
  }
];

var LESSONS = {
  'what-is-programming': {
    id: 'what-is-programming',
    section: 'Programming Fundamentals',
    level: '01',
    title: 'What Is Programming?',
    time: '15 min',
    difficulty: 'Beginner',
    book: 'Book Chapter 1 · Introduction',

    intro: 'Programming is the art of explaining things to a computer that takes everything literally. It never "gets what you mean." You have to tell it exactly. Every. Single. Step.',

    whyMatters: 'Programming is the foundation of everything you will build — APIs, databases, websites, mobile apps. If you don\'t understand how a computer thinks, your backend will be the next "it works on my machine" meme.',

    explanation: [
      {
        tag: 'p',
        text: 'Imagine you are writing a recipe — but your reader is a robot who has never cooked anything before, has zero common sense, and will do <b>exactly</b> what you write. Not what you meant. What you wrote.'
      },
      {
        tag: 'p',
        text: 'That is programming. You write a set of instructions — called <b>code</b> — and a computer follows them exactly, in order, one after the other.'
      },
      {
        tag: 'p',
        text: 'Every app on your phone, every website you visit, every server you connect to — it is all just a long list of very specific instructions that someone (a developer, like you are becoming) wrote.'
      },
      {
        tag: 'heading',
        text: 'A Real Example'
      },
      {
        tag: 'p',
        text: 'Here is a real PHP program. If you have never seen PHP before — don\'t worry. You just need to understand what is happening. You will learn the details in the next lesson.'
      }
    ],

    code: [
      {
        pre: true,
        lang: 'PHP',
        label: 'Your very first program',
        code: '<span class="tok-k">&lt;?php</span>\n\n<span class="tok-f">echo</span> <span class="tok-s">"Hello, World!"</span>;\n<span class="tok-f">echo</span> <span class="tok-s">"</span><span class="tok-s">\n"</span>;\n<span class="tok-f">echo</span> <span class="tok-s">"Welcome to programming."</span>;\n'
      }
    ],

    codeExplained: [
      {
        tag: 'p',
        text: 'Let\'s break that down:'
      },
      {
        tag: 'p',
        text: '<span class="inline-code">&lt;?php</span> — This tells PHP: "Hey, the code is starting here." Every PHP file begins like this.'
      },
      {
        tag: 'p',
        text: '<span class="inline-code">echo</span> — This is a command that prints text to the screen. Think of it like pressing "print" on a very literal printer.'
      },
      {
        tag: 'p',
        text: '<span class="inline-code">"Hello, World!"</span> — This is a <b>string</b> — a piece of text inside quotation marks. The computer prints this word for word.'
      },
      {
        tag: 'p',
        text: '<span class="inline-code">;</span> — The semicolon is the period of PHP. It means: "That\'s the end of this instruction." Forget it and PHP panics.'
      }
    ],

    code2: [
      {
        pre: true,
        lang: 'PHP',
        label: 'What if we change the order?',
        code: '<span class="tok-k">&lt;?php</span>\n\n<span class="tok-f">echo</span> <span class="tok-s">"Second line"</span>;\n<span class="tok-f">echo</span> <span class="tok-s">"</span><span class="tok-s">\n"</span>;\n<span class="tok-f">echo</span> <span class="tok-s">"First line"</span>;\n'
      }
    ],

    code2Explained: [
      {
        tag: 'p',
        text: 'Computers execute code <b>top to bottom</b>, line by line. They don\'t guess what you meant. If you write "Second" before "First," that\'s what gets printed. No magic. No reading ahead. Just: read line → do it → read next line → do it → repeat until done.'
      }
    ],

    mistakes: [
      'Forgetting the semicolon — PHP will throw a "Parse error" and you will spend 20 minutes looking for a missing character.',
      'Not closing the PHP tag (but this only matters if you are mixing PHP and HTML — we\'ll get to that later).',
      'Expecting PHP to "figure out what you meant." It won\'t. Be specific.'
    ],

    proTip: 'Every developer in the history of programming started by printing "Hello, World!" to a screen. You are in good company. Keep going.',

    quiz: {
      question: 'What does a program do?',
      cat: 'Concept',
      options: [
        'A set of instructions a computer follows, line by line, exactly as written',
        'A smart system that guesses what you meant',
        'A tool that runs things "automatically" — no input needed',
        'A complicated version of Microsoft Word'
      ],
      correct: 0,
      feedback: {
        correct: '🔥 Correct. Computers are very obedient — they just follow exactly what you write. Line. By. Line.',
        wrong: '❌ Not quite. A program is a set of step-by-step instructions the computer executes exactly as written. No guessing involved.'
      }
    },

    challenge: {
      text: 'What will this code output? Don\'t run it — predict it first.',
      code: '<span class="tok-k">&lt;?php</span>\n\n<span class="tok-f">echo</span> <span class="tok-s">"I am "</span>;\n<span class="tok-f">echo</span> <span class="tok-s">"learning"</span>;\n<span class="tok-f">echo</span> <span class="tok-s">" programming."</span>;\n<span class="tok-f">echo</span> <span class="tok-s">"</span><span class="tok-s">\n"</span>;\n<span class="tok-f">echo</span> <span class="tok-s">"This is line 5."</span>;\n',
      hint: 'The computer reads top to bottom, line by line, and prints exactly what it sees. Don\'t overthink it.'
    },

    bookChapter: '#',
    prev: null,
    next: { slug: 'variables', title: 'Variables' }
  },

  'variables': {
    id: 'variables',
    section: 'Programming Fundamentals',
    level: '01',
    title: 'Variables',
    time: '20 min',
    difficulty: 'Beginner',
    book: 'Book Chapter 1 · Programming Fundamentals',

    intro: 'Variables are named boxes. You put a value inside, close the lid, give it a name, and call it later by that name. That\'s it. They aren\'t mysterious — they\'re just labeled storage.',

    whyMatters: 'Without variables, your program is a stateless machine that forgets everything between lines. Variables let you remember data, make decisions, and build anything that isn\'t "Hello, World!"',

    explanation: [
      {
        tag: 'p',
        text: 'In real life: you walk into a room, put your phone on the table, and leave. Later you say "where\'s my phone?" and someone says "on the table." You know what that means — you put something there, and now you\'re looking it up by a name (the table).'
      },
      {
        tag: 'p',
        text: 'In PHP, a variable is the same idea. You store a value (text, a number, anything) inside a name. Then later, you use that name to get the value back.'
      },
      {
        tag: 'heading',
        text: 'How Variables Work in PHP'
      },
      {
        tag: 'p',
        text: 'Every variable in PHP starts with a <span class="inline-code">$</span> sign. Then a name. Then <span class="inline-code">=</span>. Then the value.'
      }
    ],

    code: [
      {
        pre: true,
        lang: 'PHP',
        label: 'Creating variables',
        code: '<span class="tok-k">&lt;?php</span>\n\n<span class="tok-v">$name</span> = <span class="tok-s">"John"</span>;\n<span class="tok-v">$age</span> = <span class="tok-n">22</span>;\n<span class="tok-v">$isStudent</span> = <span class="tok-k">true</span>;\n\n<span class="tok-f">echo</span> <span class="tok-s">"Hello, "</span> . <span class="tok-v">$name</span>;\n<span class="tok-f">echo</span> <span class="tok-s">"</span><span class="tok-s">\n"</span>;\n<span class="tok-f">echo</span> <span class="tok-s">"Age: "</span> . <span class="tok-v">$age</span>;\n<span class="tok-f">echo</span> <span class="tok-s">"</span><span class="tok-s">\n"</span>;\n<span class="tok-f">echo</span> <span class="tok-s">"Student: "</span> . <span class="tok-v">$isStudent</span>;\n'
      }
    ],

    codeExplained: [
      {
        tag: 'p',
        text: '<span class="inline-code">$name = "John";</span> — We created a variable called <b>$name</b> and stored the text "John" inside it.'
      },
      {
        tag: 'p',
        text: '<span class="inline-code">$age = 22;</span> — A variable called <b>$age</b> holding the number 22. No quotes — this is a number, not text.'
      },
      {
        tag: 'p',
        text: '<span class="inline-code">$isStudent = true;</span> — A special type called a <b>boolean</b>. It can only be true or false.'
      },
      {
        tag: 'p',
        text: 'The <span class="inline-code">.</span> (dot) joins text together. This is called <b>concatenation</b> — basically gluing strings together.'
      }
    ],

    code2: [
      {
        pre: true,
        lang: 'PHP',
        label: 'Changing a variable',
        code: '<span class="tok-k">&lt;?php</span>\n\n<span class="tok-v">$score</span> = <span class="tok-n">0</span>;\n<span class="tok-f">echo</span> <span class="tok-s">"Score: "</span> . <span class="tok-v">$score</span>;\n<span class="tok-f">echo</span> <span class="tok-s">"</span><span class="tok-s">\n"</span>;\n\n<span class="tok-v">$score</span> = <span class="tok-v">$score</span> + <span class="tok-n">10</span>;\n<span class="tok-f">echo</span> <span class="tok-s">"Score: "</span> . <span class="tok-v">$score</span>;\n<span class="tok-f">echo</span> <span class="tok-s">"</span><span class="tok-s">\n"</span>;\n\n<span class="tok-v">$score</span> += <span class="tok-n">5</span>;\n<span class="tok-f">echo</span> <span class="tok-s">"Final: "</span> . <span class="tok-v">$score</span>;\n'
      }
    ],

    code2Explained: [
      {
        tag: 'p',
        text: 'Variables can be changed. That\'s the point. We start with <b>0</b>, add <b>10</b>, then add another <b>5</b> with the shorthand <span class="inline-code">+=</span>. The final score is <b>15</b>.'
      },
      {
        tag: 'p',
        text: 'This is exactly how a scoreboard works. Every time someone scores, the variable updates. Same idea — just in code.'
      }
    ],

    mistakes: [
      'Using a name without the <span class="inline-code">$</span> — PHP won\'t know it\'s a variable. This is the #1 beginner mistake.',
      'Naming a variable with spaces or starting with a number — <span class="inline-code">$my name</span> and <span class="inline-code">$2name</span> are both illegal. Use only letters, numbers, and underscores.',
      'Forgetting the semicolon — at this point you\'re probably doing this on purpose.'
    ],

    proTip: 'Use descriptive names. <span class="inline-code">$name</span> is okay. <span class="inline-code">$userFullName</span> is better. <span class="inline-code">$x</span> is a cry for help.',

    quiz: {
      question: 'What is wrong with this line of code?',
      cat: 'Syntax',
      quizPre: true,
      quizCode: '<span class="tok-v">$name</span> = <span class="tok-s">"Sara"</span>',
      options: [
        'It is missing the semicolon at the end',
        'The variable name is invalid',
        'You cannot store text in a variable',
        'There is nothing wrong with it'
      ],
      correct: 0,
      feedback: {
        correct: '🔥 Correct. Every statement in PHP must end with a semicolon. Without it, PHP throws a parse error. Little things, big consequences.',
        wrong: '❌ The semicolon is missing. PHP statements must end with <code>;</code>. This is a syntax error.'
      }
    },

    challenge: {
      text: 'Fix the bugs in this code. How many mistakes can you find?',
      code: '<span class="tok-k">&lt;?php</span>\n\n<span class="tok-v">$name</span> = <span class="tok-s">"Ahmed"</span>\n<span class="tok-f">echo</span> <span class="tok-v">$name</span>\n<span class="tok-f">echo</span> <span class="tok-v">$age</span>;\n',
      hint: 'Two lines are missing semicolons, and $age was never created. A computer does exactly what you wrote — and nothing more.'
    },

    bookChapter: '#',
    prev: { slug: 'what-is-programming', title: 'What Is Programming?' },
    next: { slug: 'data-types', title: 'Data Types & Operators' }
  },

  'data-types': {
    id: 'data-types',
    section: 'Programming Fundamentals',
    level: '01',
    title: 'Data Types & Operators',
    time: '20 min',
    difficulty: 'Beginner',
    book: 'Book Chapter 1 · Programming Fundamentals',

    intro: 'A computer needs to know whether it\'s holding text, a number, or a yes/no value — because it treats each one differently. Data types are just labels that tell PHP what kind of thing you\'re working with.',

    whyMatters: 'If you try to subtract "hello" from "5", PHP won\'t just give you a weird number — it will give you something you didn\'t expect. Understanding types prevents bugs that look like ghosts.',

    explanation: [
      {
        tag: 'p',
        text: 'PHP has several core data types. Here are the ones you will use every day:'
      },
      {
        tag: 'heading',
        text: '1. String (text)'
      },
      {
        tag: 'p',
        text: 'Any text, surrounded by quotes. Single or double — both work.'
      }
    ],

    code: [
      {
        pre: true,
        lang: 'PHP',
        label: 'Strings — text in quotes',
        code: '<span class="tok-k">&lt;?php</span>\n\n<span class="tok-v">$greeting</span> = <span class="tok-s">"Hello!"</span>;\n<span class="tok-v">$name</span> = <span class="tok-s">\'Ahmed\'</span>;\n\n<span class="tok-f">echo</span> <span class="tok-v">$greeting</span> . <span class="tok-s">" "</span> . <span class="tok-v">$name</span>;\n<span class="tok-c">// Output: Hello! Ahmed</span>\n'
      }
    ],

    codeExplained: [
      {
        tag: 'p',
        text: '<span class="inline-code">"Hello!"</span> uses double quotes. <span class="inline-code">\'Ahmed\'</span> uses single quotes. Both create strings. PHP treats them slightly differently (double quotes parse variables inside them, single quotes don\'t) — but for now, both are fine.'
      }
    ],

    code2: [
      {
        pre: true,
        lang: 'PHP',
        label: 'Numbers — integers and floats',
        code: '<span class="tok-k">&lt;?php</span>\n\n<span class="tok-v">$age</span> = <span class="tok-n">25</span>;           <span class="tok-c">// Integer (whole number)</span>\n<span class="tok-v">$price</span> = <span class="tok-n">19.99</span>;     <span class="tok-c">// Float (decimal number)</span>\n<span class="tok-v">$total</span> = <span class="tok-v">$price</span> * <span class="tok-n">3</span>;  <span class="tok-c">// 59.97</span>\n\n<span class="tok-f">echo</span> <span class="tok-s">"Total: "</span> . <span class="tok-v">$total</span>;\n'
      }
    ],

    code2Explained: [
      {
        tag: 'p',
        text: '<span class="inline-code">25</span> is an <b>integer</b> — a whole number with no decimal point. <span class="inline-code">19.99</span> is a <b>float</b> — a number with decimals. You can do math with both: add, subtract, multiply, divide.'
      }
    ],

    code3: [
      {
        pre: true,
        lang: 'PHP',
        label: 'Booleans, arrays, and null',
        code: '<span class="tok-k">&lt;?php</span>\n\n<span class="tok-v">$isAdmin</span> = <span class="tok-k">false</span>;   <span class="tok-c">// Boolean: true or false</span>\n\n<span class="tok-v">$colors</span> = [<span class="tok-s">"red"</span>, <span class="tok-s">"blue"</span>, <span class="tok-s">"green"</span>];\n<span class="tok-c">// Array: a list of values</span>\n\n<span class="tok-v">$nickname</span> = <span class="tok-k">null</span>;\n<span class="tok-c">// Null: empty / no value yet</span>\n\n<span class="tok-f">echo</span> <span class="tok-v">$colors</span>[<span class="tok-n">0</span>]; <span class="tok-c">// "red" (first item)</span>\n<span class="tok-f">echo</span> <span class="tok-v">$colors</span>[<span class="tok-n">2</span>]; <span class="tok-c">// "green" (third item)</span>\n'
      }
    ],

    code3Explained: [
      {
        tag: 'p',
        text: '<b>Boolean:</b> Only two values — <span class="inline-code">true</span> or <span class="inline-code">false</span>. Perfect for yes/no logic.'
      },
      {
        tag: 'p',
        text: '<b>Array:</b> A list of values inside square brackets. Access items by position — but note: arrays start at <b>0</b>, not 1. The first item is index 0.'
      },
      {
        tag: 'p',
        text: '<b>Null:</b> A variable with no value yet. Like a box that exists but is empty.'
      }
    ],

    code4: [
      {
        pre: true,
        lang: 'PHP',
        label: 'Arithmetic operators',
        code: '<span class="tok-k">&lt;?php</span>\n\n<span class="tok-v">$a</span> = <span class="tok-n">10</span>;\n<span class="tok-v">$b</span> = <span class="tok-n">3</span>;\n\n<span class="tok-f">echo</span> <span class="tok-v">$a</span> + <span class="tok-v">$b</span>;   <span class="tok-c">// 13  (addition)</span>\n<span class="tok-f">echo</span> <span class="tok-v">$a</span> - <span class="tok-v">$b</span>;   <span class="tok-c">// 7   (subtraction)</span>\n<span class="tok-f">echo</span> <span class="tok-v">$a</span> * <span class="tok-v">$b</span>;   <span class="tok-c">// 30  (multiplication)</span>\n<span class="tok-f">echo</span> <span class="tok-v">$a</span> / <span class="tok-v">$b</span>;   <span class="tok-c">// 3.33... (division)</span>\n<span class="tok-f">echo</span> <span class="tok-v">$a</span> % <span class="tok-v">$b</span>;   <span class="tok-c">// 1   (modulus — remainder)</span>\n'
      }
    ],

    code4Explained: [
      {
        tag: 'p',
        text: 'The <b>modulo operator</b> (<span class="inline-code">%</span>) returns the remainder after division. 10 ÷ 3 = 3 remainder <b>1</b>. Useful for checking if a number is even (number % 2 === 0).'
      }
    ],

    mistakes: [
      'Confusing <span class="inline-code">=</span> (assignment) with <span class="inline-code">==</span> (comparison). <span class="inline-code">$x = 5</span> sets a value. <span class="inline-code">$x == 5</span> checks if it equals 5.',
      'Expecting <span class="inline-code">$colors[0]</span> to give you the first item and getting confused — remember: arrays start at 0, not 1.',
      'Treating a string like a number. <span class="inline-code">"5" + 5</span> might work in PHP (thanks to type juggling), but it is unreliable and you should explicitly cast types.'
    ],

    proTip: 'When you\'re unsure what type a variable is, use <span class="inline-code">gettype($var)</span>. It will return "string", "integer", "double", "boolean", "array", or "NULL". Debugging is just asking the computer better questions.',

    quiz: {
      question: 'What is the value of <code>$result</code> in this code?',
      cat: 'Operators',
      quizPre: true,
      quizCode: '<span class="tok-v">$result</span> = <span class="tok-n">7</span> % <span class="tok-n">2</span>;',
      options: [
        '$result = 2',
        '$result = 3',
        '$result = 1',
        '$result = 0'
      ],
      correct: 2,
      feedback: {
        correct: '🔥 Correct. 7 ÷ 2 = 3 with a remainder of 1. The % operator gives you the remainder. So $result = 1. Your operators are sharp.',
        wrong: '❌ Nope. % is the modulo operator — it returns the REMAINDER after division. 7 ÷ 2 = 3 remainder 1. So $result = 1.'
      }
    },

    challenge: {
      text: 'Create variables and calculate the average of three exam scores:',
      code: '<span class="tok-c">// Complete this code:</span>\n<span class="tok-v">$math</span> = <span class="tok-n">85</span>;\n<span class="tok-v">$english</span> = <span class="tok-n">92</span>;\n<span class="tok-v">$science</span> = <span class="tok-n">78</span>;\n\n<span class="tok-c">// Calculate average here</span>\n<span class="tok-v">$average</span> = <span class="tok-c">???</span>;\n\n<span class="tok-f">echo</span> <span class="tok-s">"Average: "</span> . <span class="tok-v">$average</span>;\n<span class="tok-c">// Should print: Average: 85</span>\n',
      hint: 'Add the three numbers, then divide by 3.'
    },

    bookChapter: '#',
    prev: { slug: 'variables', title: 'Variables' },
    next: { slug: 'conditionals', title: 'Conditionals (if / else)' }
  },

  'conditionals': {
    id: 'conditionals',
    section: 'Programming Fundamentals',
    level: '01',
    title: 'Conditionals (if / else)',
    time: '25 min',
    difficulty: 'Beginner',
    book: 'Book Chapter 1 · Programming Fundamentals',

    intro: 'Life is full of decisions. "If it\'s raining, take an umbrella. Else, wear sunglasses." Conditionals are how your program makes decisions — and they work exactly the same way.',

    whyMatters: 'Without conditionals, every program runs the same code regardless of input. Conditionals are how software reacts: checking age, validating passwords, showing different pages, handling errors. They are the brain behind the logic.',

    explanation: [
      {
        tag: 'p',
        text: 'The basic structure is simple:'
      },
      {
        tag: 'p',
        text: '<b>If</b> a condition is true → do something.<br><b>Else if</b> another condition is true → do something else.<br><b>Else</b> → do this when nothing else matched.'
      },
      {
        tag: 'heading',
        text: 'Comparison Operators'
      },
      {
        tag: 'p',
        text: 'To write conditions, you need operators that compare values:'
      },
      {
        tag: 'p',
        text: '<span class="inline-code">==</span> equals · <span class="inline-code">!=</span> does not equal · <span class="inline-code">===</span> strictly equals (same type + same value) · <span class="inline-code">!==</span> strictly not equals · <span class="inline-code">&gt;</span> greater than · <span class="inline-code">&lt;</span> less than · <span class="inline-code">&gt;=</span> greater than or equal · <span class="inline-code">&lt;=</span> less than or equal'
      },
      {
        tag: 'p',
        text: 'Always prefer <span class="inline-code">===</span> over <span class="inline-code">==</span>. The double-equals version ignores types (which causes bugs). Strict is better.'
      }
    ],

    code: [
      {
        pre: true,
        lang: 'PHP',
        label: 'Basic if / else',
        code: '<span class="tok-k">&lt;?php</span>\n\n<span class="tok-v">$age</span> = <span class="tok-n">20</span>;\n\n<span class="tok-k">if</span> (<span class="tok-v">$age</span> >= <span class="tok-n">18</span>) {\n    <span class="tok-f">echo</span> <span class="tok-s">"You are an adult."</span>;\n} <span class="tok-k">else</span> {\n    <span class="tok-f">echo</span> <span class="tok-s">"You are a minor."</span>;\n}\n'
      }
    ],

    codeExplained: [
      {
        tag: 'p',
        text: '<span class="inline-code">if ($age >= 18)</span> — if the condition inside the parentheses is true, the code inside the curly braces runs.'
      },
      {
        tag: 'p',
        text: '<span class="inline-code">else</span> — if the condition was false, run this block instead. One or the other, never both.'
      }
    ],

    code2: [
      {
        pre: true,
        lang: 'PHP',
        label: 'Using elseif for multiple branches',
        code: '<span class="tok-k">&lt;?php</span>\n\n<span class="tok-v">$score</span> = <span class="tok-n">75</span>;\n\n<span class="tok-k">if</span> (<span class="tok-v">$score</span> >= <span class="tok-n">90</span>) {\n    <span class="tok-f">echo</span> <span class="tok-s">"Grade: A"</span>;\n} <span class="tok-k">elseif</span> (<span class="tok-v">$score</span> >= <span class="tok-n">80</span>) {\n    <span class="tok-f">echo</span> <span class="tok-s">"Grade: B"</span>;\n} <span class="tok-k">elseif</span> (<span class="tok-v">$score</span> >= <span class="tok-n">70</span>) {\n    <span class="tok-f">echo</span> <span class="tok-s">"Grade: C"</span>;\n} <span class="tok-k">else</span> {\n    <span class="tok-f">echo</span> <span class="tok-s">"Grade: F"</span>;\n}\n<span class="tok-c">// Output: Grade: C</span>\n'
      }
    ],

    code2Explained: [
      {
        tag: 'p',
        text: 'PHP checks the conditions <b>from top to bottom</b>. The moment one is true, it runs that block and skips the rest. So for <span class="inline-code">$score = 75</span>: Is 75 >= 90? No. Is 75 >= 80? No. Is 75 >= 70? Yes → Grade: C.'
      }
    ],

    code3: [
      {
        pre: true,
        lang: 'PHP',
        label: 'Nested conditionals',
        code: '<span class="tok-k">&lt;?php</span>\n\n<span class="tok-v">$isLoggedIn</span> = <span class="tok-k">true</span>;\n<span class="tok-v">$isAdmin</span> = <span class="tok-k">false</span>;\n\n<span class="tok-k">if</span> (<span class="tok-v">$isLoggedIn</span>) {\n    <span class="tok-k">if</span> (<span class="tok-v">$isAdmin</span>) {\n        <span class="tok-f">echo</span> <span class="tok-s">"Welcome, admin."</span>;\n    } <span class="tok-k">else</span> {\n        <span class="tok-f">echo</span> <span class="tok-s">"Welcome, user."</span>;\n    }\n} <span class="tok-k">else</span> {\n    <span class="tok-f">echo</span> <span class="tok-s">"Please log in."</span>;\n}\n<span class="tok-c">// Output: Welcome, user.</span>\n'
      }
    ],

    code3Explained: [
      {
        tag: 'p',
        text: 'Conditionals can go inside other conditionals — called <b>nesting</b>. Here: first check if the user is logged in. If yes, then check if they\'re an admin. Keep nesting to a minimum — more than 2-3 levels deep and the code gets unreadable fast.'
      }
    ],

    mistakes: [
      'Using <span class="inline-code">=</span> instead of <span class="inline-code">===</span> inside conditions. <span class="inline-code">if ($x = 5)</span> sets $x to 5 and always evaluates to true. Not what you meant.',
      'Forgetting that PHP checks conditions top to bottom — order matters. A score of 95 matches both >= 90 and >= 80, but the first match wins.',
      'Not using curly braces. Technically you can skip them for single-line ifs, but don\'t. It leads to bugs when you add more lines later.'
    ],

    proTip: 'When a condition is getting too complex (more than 2 operators), break it into multiple if-else blocks or extract it into a function with a clear name. Readability > cleverness.',

    quiz: {
      question: 'What will this code output?',
      cat: 'Logic',
      quizPre: true,
      quizCode: '<span class="tok-v">$years</span> = <span class="tok-n">12</span>;\n<span class="tok-k">if</span> (<span class="tok-v">$years</span> >= <span class="tok-n">10</span>) {\n    <span class="tok-f">echo</span> <span class="tok-s">"Hello, senior!"</span>;\n} <span class="tok-k">elseif</span> (<span class="tok-v">$years</span> >= <span class="tok-n">5</span>) {\n    <span class="tok-f">echo</span> <span class="tok-s">"Hello, experienced!"</span>;\n} <span class="tok-k">elseif</span> (<span class="tok-v">$years</span> >= <span class="tok-n">1</span>) {\n    <span class="tok-f">echo</span> <span class="tok-s">"Hello, beginner!"</span>;\n} <span class="tok-k">else</span> {\n    <span class="tok-f">echo</span> <span class="tok-s">"Hello, welcome!"</span>;\n}',
      options: [
        '"Hello, senior!"',
        '"Hello, experienced!"',
        '"Hello, beginner!"',
        '"Hello, welcome!"'
      ],
      correct: 0,
      feedback: {
        correct: '🔥 Correct! $years = 12 matches >= 10 first, so the first branch wins. Top to bottom — always.',
        wrong: '❌ Nope. $years is 12, which is >= 10. The first condition matches, so PHP runs that block and skips everything else.'
      }
    },

    challenge: {
      text: 'Write an if/else chain that assigns a traffic light color based on speed:',
      code: '<span class="tok-c">// Speed conditions:</span>\n<span class="tok-c">// speed <= 40  → "Green: go!"</span>\n<span class="tok-c">// speed <= 70  → "Yellow: slow down"</span>\n<span class="tok-c">// speed > 70   → "Red: stop!"</span>\n\n<span class="tok-v">$speed</span> = <span class="tok-n">55</span>;\n<span class="tok-c">// Your if/else code here:</span>\n',
      hint: 'Start from the highest number and work down, or use <= conditions in order from lowest to highest.'
    },

    bookChapter: '#',
    prev: { slug: 'data-types', title: 'Data Types & Operators' },
    next: { slug: 'loops', title: 'Loops' }
  },

  'loops': {
    id: 'loops',
    section: 'Programming Fundamentals',
    level: '01',
    title: 'Loops',
    time: '25 min',
    difficulty: 'Beginner',
    book: 'Book Chapter 1 · Programming Fundamentals',

    intro: 'Without loops, you\'d have to write the same code 100 times for 100 users. With loops, you write it once, and PHP does the boring part for you. Loops are how programs avoid repetitive jobs — and why "automate everything" is a developer\'s religion.',

    whyMatters: 'Loops power everything: displaying a list of posts, processing payments, sending emails to a million users, iterating over database results. You will use loops in every single project you ever build.',

    explanation: [
      {
        tag: 'p',
        text: 'PHP has three main loop types. You\'ll use all of them. Here\'s when to use which:'
      },
      {
        tag: 'heading',
        text: '1. The for loop (when you know how many times)'
      },
      {
        tag: 'p',
        text: 'Use a <b>for</b> loop when you know exactly how many iterations you need. You give it a start, an end, and a step.'
      }
    ],

    code: [
      {
        pre: true,
        lang: 'PHP',
        label: 'The for loop',
        code: '<span class="tok-k">&lt;?php</span>\n\n<span class="tok-k">for</span> (<span class="tok-v">$i</span> = <span class="tok-n">0</span>; <span class="tok-v">$i</span> < <span class="tok-n">5</span>; <span class="tok-v">$i</span>++) {\n    <span class="tok-f">echo</span> <span class="tok-s">"Count: "</span> . <span class="tok-v">$i</span> . <span class="tok-s">"</span><span class="tok-s">\n"</span>;\n}\n'
      }
    ],

    codeExplained: [
      {
        tag: 'p',
        text: '<span class="inline-code">$i = 0</span> — start at 0 (runs before the loop begins)'
      },
      {
        tag: 'p',
        text: '<span class="inline-code">$i < 5</span> — keep going while this is true (runs before each iteration)'
      },
      {
        tag: 'p',
        text: '<span class="inline-code">$i++</span> — add 1 to $i after each iteration (runs after each iteration)'
      },
      {
        tag: 'p',
        text: 'Output: 0, 1, 2, 3, 4. Not 5 — because when $i becomes 5, the condition <span class="inline-code">$i < 5</span> is false, and the loop stops before running that time.'
      }
    ],

    code2: [
      {
        pre: true,
        lang: 'PHP',
        label: 'The while loop (when you don\'t know how many times)',
        code: '<span class="tok-k">&lt;?php</span>\n\n<span class="tok-v">$attempts</span> = <span class="tok-n">0</span>;\n\n<span class="tok-k">while</span> (<span class="tok-v">$attempts</span> < <span class="tok-n">3</span>) {\n    <span class="tok-f">echo</span> <span class="tok-s">"Attempt "</span> . (<span class="tok-v">$attempts</span> + <span class="tok-n">1</span>) . <span class="tok-s">"</span><span class="tok-s">\n"</span>;\n    <span class="tok-v">$attempts</span>++;\n}\n<span class="tok-f">echo</span> <span class="tok-s">"Done. "</span> . <span class="tok-v">$attempts</span> . <span class="tok-s">" attempts."</span>;\n'
      }
    ],

    code2Explained: [
      {
        tag: 'p',
        text: 'The <b>while</b> loop checks the condition <b>before</b> each iteration. If the condition is false from the start, the loop never runs. <b>Important:</b> Always make sure something inside the loop changes the condition — otherwise you get an <b>infinite loop</b> and your browser tab will freeze.'
      }
    ],

    code3: [
      {
        pre: true,
        lang: 'PHP',
        label: 'The foreach loop (the one you\'ll use most)',
        code: '<span class="tok-k">&lt;?php</span>\n\n<span class="tok-v">$students</span> = [<span class="tok-s">"Ahmed"</span>, <span class="tok-s">"Sara"</span>, <span class="tok-s">"Omar"</span>];\n\n<span class="tok-k">foreach</span> (<span class="tok-v">$students</span> <span class="tok-k">as</span> <span class="tok-v">$name</span>) {\n    <span class="tok-f">echo</span> <span class="tok-s">"Hello, "</span> . <span class="tok-v">$name</span> . <span class="tok-s">"</span><span class="tok-s">\n"</span>;\n}\n<span class="tok-c">// Output:</span>\n<span class="tok-c">// Hello, Ahmed</span>\n<span class="tok-c">// Hello, Sara</span>\n<span class="tok-c">// Hello, Omar</span>\n'
      }
    ],

    code3Explained: [
      {
        tag: 'p',
        text: '<b>foreach</b> goes through every item in an array, one at a time, and assigns it to <span class="inline-code">$name</span>. This is the loop you will use 90% of the time — whenever you have a list of things (users, posts, products) and need to do something with each one.'
      }
    ],

    mistakes: [
      'Creating an infinite loop by forgetting to update the counter: <span class="inline-code">while ($x < 10) { echo "oops"; }</span> — $x never changes, so this never stops.',
      'Using <span class="inline-code">for</span> when <span class="inline-code">foreach</span> would be cleaner. If you\'re iterating over an array, just use foreach.',
      'Starting a for loop at 1 instead of 0. Arrays start at index 0. If you start at 1, you skip the first item every time.'
    ],

    proTip: 'The biggest beginner mistake with loops: forgetting to update the counter. If your loop isn\'t stopping, check: is the variable that controls the loop actually changing inside the loop?',

    quiz: {
      question: 'What does this foreach loop print?',
      cat: 'Output',
      quizPre: true,
      quizCode: '<span class="tok-v">$names</span> = [<span class="tok-s">"Ahmed"</span>, <span class="tok-s">"Sara"</span>, <span class="tok-s">"Omar"</span>, <span class="tok-s">"Mona"</span>];\n<span class="tok-k">foreach</span> (<span class="tok-v">$names</span> <span class="tok-k">as</span> <span class="tok-v">$n</span>) {\n    <span class="tok-f">echo</span> <span class="tok-v">$n</span> . <span class="tok-s">"</span><span class="tok-s">\n"</span>;\n}',
      options: [
        'Ahmed, Sara, Omar, Mona — one per line',
        'Ahmed, Sara, Omar — one per line (no Mona)',
        'Mona, Omar, Sara, Ahmed — reversed',
        'Error: invalid array syntax'
      ],
      correct: 0,
      feedback: {
        correct: '🔥 LET\'S GOOO. foreach walks through every item in order. All 4 names print, one per line.',
        wrong: '❌ Nope. foreach goes through each item in the array — there are 4 of them. Semicolons are fine here, the array is valid. The result is 4 lines, in order.'
      }
    },

    challenge: {
      text: 'Write a loop that prints even numbers from 1 to 20 (2, 4, 6, 8, ... 20):',
      code: '<span class="tok-c">// Use a for loop</span>\n<span class="tok-c">// Hint: check if a number is even using the % operator</span>\n\n<span class="tok-k">for</span> (<span class="tok-v">$i</span> = <span class="tok-n">1</span>; <span class="tok-v">$i</span> <= <span class="tok-n">20</span>; <span class="tok-v">$i</span>++) {\n    <span class="tok-c">// Your code here</span>\n}\n',
      hint: 'An even number divided by 2 has no remainder: <code>$i % 2 === 0</code>.'
    },

    miniProject: {
      title: 'Console Calculator',
      text: 'Build a simple calculator that adds, subtracts, multiplies, and divides two numbers. Use variables for the inputs and an if/elseif chain for the operation. Bonus: wrap it in a loop so the user can "calculate" again (use a counter for a fixed number of iterations).',
      steps: [
        'Create two number variables',
        'Create a string variable for the operation (e.g., "add", "multiply")',
        'Use if/elseif to handle each operation',
        'Print the result',
        'Wrap it all in a for loop that runs 3 times with different numbers'
      ]
    },

    bookChapter: '#',
    prev: { slug: 'conditionals', title: 'Conditionals (if / else)' },
    next: null
  }
};