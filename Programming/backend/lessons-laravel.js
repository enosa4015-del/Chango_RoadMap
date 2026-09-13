/* ========================================
   Chango — Backend Roadmap · Level 05: Laravel (15 lessons)
   ======================================== */

Object.assign(LESSONS, {

  'laravel-what': {
    id: 'laravel-what',
    section: 'Laravel',
    level: '05',
    title: 'What is Laravel?',
    time: '25 min',
    difficulty: 'Beginner',
    book: 'Book Chapter 5 · Intro',

    intro: 'Laravel is PHP wearing a suit: elegant, batteries included, and armed with a thousand conveniences. Write less code, ship faster, and wake up actually understanding your own project.',

    whyMatters: 'This is the framework on the entire roadmap\'s spine. Laravel handles auth, routing, databases, queues, email, and security — with the official PHP label at getlaravel.com. English speaking teams, interviews, and real products all speak Laravel.',

    explanation: [
      { tag: 'heading', text: 'MVC in one breath' },
      { tag: 'text', text: 'Laravel follows Model-View-Controller: a route points a URL to a <strong>controller</strong>, the controller talks to a <strong>model</strong> (the database), then returns a <strong>view</strong> (the page). Clean separation — the same reason a workshop has separate shelves for tools, parts, and manuals.' },
      { tag: 'heading', text: 'Convention over configuration' },
      { tag: 'text', text: 'Laravel has opinions: controllers live in app/Http/Controllers, views in resources/views, routes in routes/web.php. You do not configure "where"; you just place files and they work. This is why Laravel devs move fast.' },
      { tag: 'heading', text: 'Artisan — the command wardrobe' },
      { tag: 'text', text: '<span class="inline-code">php artisan</span> is your CLI pal: make controllers, run migrations, seed the database, and serve the app locally. Almost every "how do I create an X in Laravel" answer begins with <span class="inline-code">php artisan make:X</span>.' }
    ],

    code: [
      {
        lang: 'bash',
        label: 'Your Laravel life, every day',
        code: 'composer create-project laravel/laravel myapp\n' +
              'cd myapp\n' +
              'php artisan serve        # http://localhost:8000\n' +
              'php artisan make:model Post -m   # model + migration'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'The trio of habits: create a project with Composer, run the dev server with artisan serve, and generate models/migrations with make commands. Learn artisan\'s list (<span class="inline-code">php artisan list</span>) and you operate Laravel blindfolded.' }
    ],

    mistakes: [
      'Installing Laravel without Composer — you need Composer (the PHP package manager). There is no "download zip" path for real work.',
      'Editing vendor/ or framework files to "fix" something — your changes vanish on the next update. Extend, never edit.',
      'Skipping tinker for quick experiments — <span class="inline-code">php artisan tinker</span> is an interactive PHP playground against your own app. Free sandbox.'
    ],

    proTip: 'Read routes/web.php right after creating a project. It\'s the map of the whole app. New to a Laravel codebase? Start at the routes and let them navigate you to controllers, models, and views.'

    ,

    quiz: {
      cat: 'Laravel',
      question: 'What tool creates a new Laravel project?',
      quizLang: 'bash',
      options: [
        'composer create-project laravel/laravel myapp',
        'npm install laravel',
        'git clone laravel',
        'pip install laravel'
      ],
      correct: 0,
      feedback: { correct: '🔥 Composer, the PHP package manager, is the official installer.', wrong: '❌ Nope. Laravel is PHP — Composer (composer create-project laravel/laravel) is the installer.' }
    },

    challenge: {
      lang: 'bash',
      text: 'On your machine (PHP + Composer installed), create a fresh project called <strong>myfirst</strong>, start the dev server, and confirm the Laravel welcome page loads at localhost:8000.',
      hint: 'composer create-project laravel/laravel myfirst then php artisan serve.'
    },

    prev: { slug: 'sql-ecommerce', title: 'Practice: E-Commerce DB' },
    next: { slug: 'laravel-install', title: 'Installation' }
  },

  'laravel-install': {
    id: 'laravel-install',
    section: 'Laravel',
    level: '05',
    title: 'Installation',
    time: '30 min',
    difficulty: 'Beginner',
    book: 'Book Chapter 5 · Setup',

    intro: 'Installing Laravel is 90% preparation: PHP with the right extensions, Composer, a database. Do this once correctly and every future project is a two-line affair. Setup is the boss battle you only fight a few times.',

    whyMatters: 'Everything after this assumes a working local Laravel. If the setup is shaky, every tutorial misbehaves and you blame yourself instead of your environment. This lesson makes the environment your ally.',

    explanation: [
      { tag: 'heading', text: 'Requirements' },
      { tag: 'text', text: 'PHP 8.2+ (with extensions: mbstring, openssl, pdo_mysql, curl, tokenizer, xml, zip), Composer 2, and a database driver (MySQL/SQLite/PostgreSQL). SQLite needs zero setup — perfect for learning.' },
      { tag: 'heading', text: 'Environment file' },
      { tag: 'text', text: 'Laravel ships with <span class="inline-code">.env</span> — your local config: database credentials, APP_APP_KEY, debug mode. It is gitignored by default. Never commit it; teammates get their own.' },
      { tag: 'heading', text: 'First run checklist' },
      { tag: 'text', text: 'After create-project: <span class="inline-code">copy .env.example .env</span>, <span class="inline-code">php artisan key:generate</span>, point .env at your database, run <span class="inline-code">php artisan migrate</span>, then <span class="inline-code">php artisan serve</span>. Four commands, four checkpoints.' }
    ],

    code: [
      {
        lang: 'bash',
        label: 'The sacred setup chant',
        code: 'composer create-project laravel/laravel chango-backend\n' +
              'cd chango-backend\n' +
              'copy .env.example .env\n' +
              'php artisan key:generate\n' +
              'php artisan migrate\n' +
              'php artisan serve'
      },
      {
        lang: 'ini',
        label: '.env essentials (database section)',
        code: 'APP_NAME="Chango API"\n' +
              'APP_ENV=local\n' +
              'APP_DEBUG=true\n' +
              'APP_URL=http://localhost:8000\n' +
              '\n' +
              'DB_CONNECTION=mysql\n' +
              'DB_HOST=127.0.0.1\n' +
              'DB_PORT=3306\n' +
              'DB_DATABASE=chango\n' +
              'DB_USERNAME=root\n' +
              'DB_PASSWORD=secret'
      }
    ],

    codeExplained: [
      { tag: 'text', text: '<span class="inline-code">key:generate</span> creates the APP_KEY used to encrypt cookies/sessions — an app without a key starts with a fatal error. <span class="inline-code">migrate</span> builds your database tables from the built-in migrations.' },
      { tag: 'text', text: 'The .env is your dial board. APP_DEBUG=true means errors show with stack traces — keep it true in local, turn it false in production before anyone else can see them.' }
    ],

    mistakes: [
      'Skipping key:generate — sessions break mysteriously. The "encrypt" fails with funny errors.',
      'Committing .env — credentials become public. Add it to .gitignore (Laravel already does).',
      'Choosing password "123" then wondering why every security scan hates you. Future you, in Level 07, will pack a sandwich and fix it.'
    ],

    proTip: 'For super fast learning, wire the local app to SQLite (DB_CONNECTION=sqlite, create database.sqlite) — zero server install. Switch to MySQL when you are ready for the real stack.'

    ,

    quiz: {
      cat: 'Setup',
      question: 'Why the APP_DEBUG=.true (in local) vs. false (in production) difference?',
      quizLang: 'ini',
      options: [
        'Production should hide internal error details',
        'It is required by law',
        'Debug mode makes the app faster',
        'There is no difference'
      ],
      correct: 0,
      feedback: { correct: '🔥 Show yourself the internals locally; hide them from the world in production.', wrong: '❌ Nope. APP_DEBUG=true exposes stack traces (helpful locally, a security leak publicly).' }
    },

    challenge: {
      lang: 'bash',
      text: 'Fresh Laravel is running on your machine. Now visit <strong>/</strong> (welcome page) and <strong>/tinker</strong>? Tinker isn\'t a route — run <strong>php artisan tinker</strong> instead and execute <span class="inline-code">str()->upper("working")</span> to confirm the playground answers.',
      hint: 'Tinker\'s exit is ctrl+d (Windows) / ctrl+d (everywhere, really).'
    },

    prev: { slug: 'laravel-what', title: 'What is Laravel?' },
    next: { slug: 'laravel-routing', title: 'Routing' }
  },

  'laravel-routing': {
    id: 'laravel-routing',
    section: 'Laravel',
    level: '05',
    title: 'Routing',
    time: '35 min',
    difficulty: 'Beginner',
    book: 'Book Chapter 5 · Routing',

    intro: 'Routes are the redirector at the airport: each URL is a flight, and the route decides which controller (crew) boards which plane. Without routes, nobody knows where anything lands.',

    whyMatters: 'Routes are the map of your application. They are the first file interviewers and teammates open. And this is also a trick: understanding routes means understanding how every URL becomes a response.',

    explanation: [
      { tag: 'heading', text: 'The basic shape' },
      { tag: 'text', text: '<span class="inline-code">Route::get("/about", fn () => view("about"));</span> — a URL, an HTTP method, a destination (closure or controller@method). POST goes to <span class="inline-code">Route::post</span>, and so on.' },
      { tag: 'heading', text: 'Parameters' },
      { tag: 'text', text: '<span class="inline-code">Route::get("/users/{id}", ...)</span> captures the id. Add a constraint to keep URLs honest: <span class="inline-code">->whereNumber("id")</span>. Named routes (<span class="inline-code">->name("users.show")</span>) let Blade link to them by name instead of writing URLs by hand.' },
      { tag: 'heading', text: 'Route groups' },
      { tag: 'text', text: '<span class="inline-code">Route::prefix("admin")</span> or <span class="inline-code">->middleware(["auth"])</span> applies a baseline to several routes at once. Route groups = the "put your team in one room" feature.' }
    ],

    code: [
      {
        lang: 'php',
        label: 'routes/web.php',
        code: '<?php\n' +
              '\n' +
              'use Illuminate\\Support\\Facades\\Route;\n' +
              'use App\\Http\\Controllers\\PostController;\n' +
              '\n' +
              'Route::get("/", function () {\n' +
              '    return view("welcome");\n' +
              '});\n' +
              '\n' +
              'Route::get("/posts", [PostController::class, "index"])\n' +
              '    ->name("posts.index");\n' +
              '\n' +
              'Route::get("/posts/{id}", [PostController::class, "show"])\n' +
              '    ->whereNumber("id")\n' +
              '    ->name("posts.show");\n' +
              '\n' +
              'Route::post("/posts", [PostController::class, "store"])\n' +
              '    ->middleware("auth");'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'Three readings: "/" returns a view directly (fine for trivia pages). "/posts" and "/posts/{id}" delegate to a controller — the professional split. POST /posts is protected by auth middleware so only logged-in users can create posts.' },
      { tag: 'text', text: 'Routes are read top-to-bottom; give specific routes (<span class="inline-code">/posts/{id}</span>) their place and keep groups tidy. Want to see them all? <span class="inline-code">php artisan route:list</span>.' }
    ],

    mistakes: [
      'Placing <span class="inline-code">/posts/{id}</span> before <span class="inline-code">/posts</span> — both match "/posts"? No: {id} needs a value, but order still bites on similar patterns. Keep static routes before parameterized ones that could swallow them.',
      'Writing URLs by hand in Blade instead of <span class="inline-code">route("posts.show", $post)</span> — one renamed route later, hours of hunting.',
      'Forgetting to import the controller with <span class="inline-code">use App\\Http\\Controllers\\...</span> — the classic white screen wave.'
    ],

    proTip: 'Give every important route a name. It costs nothing, and it turns "what was that URL" into "route(🕊name)". Refactoring URLs becomes a one-line change.'

    ,

    quiz: {
      cat: 'Routing',
      question: 'Which route definition would serve <span class="inline-code">/products/42</span>?',
      quizLang: 'php',
      options: [
        'Route::get("/products/{id}", ...)',
        'Route::get("/products/\\d+", ...)',
        'Route::post("/products/42", ...)',
        'Route::resource("/products")'
      ],
      correct: 0,
      feedback: { correct: '🔥 {id} is a parameter that captures 42. whereNumber can guard it further.', wrong: '❌ Nope. A {id} parameter in the route captures any segment value like 42.' }
    },

    challenge: {
      lang: 'php',
      text: 'Create routes for: a page <strong>/hello/{name}</strong> that returns a view, a <strong>GET /posts</strong>, and a <strong>POST /posts</strong> behind auth. Give the GET posts route the name <strong>posts.index</strong>.',
      hint: 'Use Route::view for trivial views or a closure returning view(), and ->middleware("auth") for the POST.'
    },

    prev: { slug: 'laravel-install', title: 'Installation' },
    next: { slug: 'laravel-controllers', title: 'Controllers' }
  },

  'laravel-controllers': {
    id: 'laravel-controllers',
    section: 'Laravel',
    level: '05',
    title: 'Controllers',
    time: '35 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 5 · Controllers',

    intro: 'A controller is the manager who receives the order (the HTTP request) and organizes the kitchen (models, views) to fulfill it. Routes decide the noise; controllers do the cooking.',

    whyMatters: 'Real apps do not shove logic into route closures. Controllers are where you orchestrate: validate, fetch from models, decide, respond. Clean controllers are readable controllers — and readable is interviewable.',

    explanation: [
      { tag: 'heading', text: 'One convention, many methods' },
      { tag: 'text', text: 'Controller methods mirror CRUD: <span class="inline-code">index</span> (list), <span class="inline-code">create</span> (show form), <span class="inline-code">store</span> (save), <span class="inline-code">show</span> (one item), <span class="inline-code">edit</span> (form), <span class="inline-code">update</span>, <span class="inline-code">destroy</span>. <span class="inline-code">php artisan make:controller PostController --resource</span> generates them all.' },
      { tag: 'heading', text: 'Dependency injection' },
      { tag: 'text', text: 'Laravel constructs your controller and feeds it what it needs. A method can accept <span class="inline-code">Request $request</span> or a route model (<span class="inline-code">Post $post</span>) — Laravel resolves them for you.' },
      { tag: 'heading', text: 'Single responsibility' },
      { tag: 'text', text: 'Each method does one job. If a controller method grows 50 lines of "billing + email + cache warmup", extract. Controllers should read like a table of contents, not a novel.' }
    ],

    code: [
      {
        lang: 'php',
        label: 'Generated controller, then customized',
        code: '<?php\n\n' +
              'namespace App\\Http\\Controllers;\n' +
              '\n' +
              'use App\\Models\\Post;\n' +
              'use Illuminate\\Http\\Request;\n' +
              '\n' +
              'class PostController extends Controller\n' +
              '{\n' +
              '    public function index()\n' +
              '    {\n' +
              '        return view("posts.index", [\n' +
              '            "posts" => Post::latest()->paginate(10),\n' +
              '        ]);\n' +
              '    }\n' +
              '\n' +
              '    public function show(Post $post)\n' +
              '    {\n' +
              '        return view("posts.show", compact("post"));\n' +
              '    }\n' +
              '\n' +
              '    public function store(Request $request)\n' +
              '    {\n' +
              '        Post::create($request->validate([\n' +
              '            "title" => "required|max:160",\n' +
              '            "body"  => "required",\n' +
              '        ]));\n' +
              '        return redirect()->route("posts.index");\n' +
              '    }\n' +
              '}'
      }
    ],

    codeExplained: [
      { tag: 'text', text: '<span class="inline-code">Post::latest()->paginate(10)</span> — model query, newest first, sliced into pages. <span class="inline-code">show(Post $post)</span> — Laravel finds the post by the {post} parameter automatically (route-model binding).' },
      { tag: 'text', text: '<span class="inline-code">$request->validate(...)</span> returns the validated data; if invalid, Laravel redirects back with errors and 422 for APIs. That single line handles security + validation. Welcome to why Laravel feels luxurious.' }
    ],

    mistakes: [
      'Putting business logic inside views — "it works" until you need it in another page and it\'s unextractable.',
      'Naming controller methods inconsistently (getUser, updateUser, create_stuff) — stick to the framework\'s index/store/show conventions.',
      'Creating controllers by hand instead of <span class="inline-code">php artisan make:controller</span> — Artisan writes the correct namespace, base class, and syntax for you.'
    ],

    proTip: 'Keep controllers thin: they should (1) take input, (2) call the appropriate service/model, (3) return a response. If you catch yourself writing "and also email everyone", you are leaking responsibilities.'

    ,

    quiz: {
      cat: 'Controllers',
      question: 'What does <span class="inline-code">show(Post $post)</span> do?',
      quizLang: 'php',
      options: [
        'Laravel injects the Post matching the route parameter',
        'It creates a new Post',
        'It deletes the Post',
        'It only works with POST requests'
      ],
      correct: 0,
      feedback: { correct: '🔥 Route-model binding: Laravel finds the Post for us — automatic 404 if missing.', wrong: '❌ Nope. Laravel\'s route-model binding loads the Post matching {post} for that route.' }
    },

    challenge: {
      lang: 'php',
      text: 'Generate a resource controller for <strong>Product</strong>, then implement <strong>index</strong> (list with pagination) and <strong>store</strong> (validate title required, create the product, redirect back to index).',
      hint: 'php artisan make:controller ProductController --resource; model name Product assumes App\Models\Product — create it too if missing.'
    },

    prev: { slug: 'laravel-routing', title: 'Routing' },
    next: { slug: 'laravel-blade', title: 'Blade Templates' }
  },

  'laravel-blade': {
    id: 'laravel-blade',
    section: 'Laravel',
    level: '05',
    title: 'Blade Templates',
    time: '40 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 5 · Blade',

    intro: 'Blade is Laravel\'s templating language: HTML with superpowers. You write nearly-normal HTML, sprinkle {{ }} for output and @if for logic, and Blade compiles it into plain PHP before serving. Magic with a compiler.',

    whyMatters: 'Your views ARE the user\'s experience. Blade is how you render data into pages safely ({{ }} auto-escapes — XSS proof), reuse layouts, and keep templates readable instead of spaghetti strings.',

    explanation: [
      { tag: 'heading', text: 'Echo is automatic' },
      { tag: 'text', text: '<span class="inline-code">{{ $user->name }}</span> prints the value AND escapes it for you — no more manual htmlspecialchars. This is Blade\'s quiet security gift.' },
      { tag: 'heading', text: 'Directives' },
      { tag: 'text', text: '<span class="inline-code">@if / @else / @endif</span>, <span class="inline-code">@foreach (@endforeach)</span>, <span class="inline-code">@forelse</span> (with empty branch). The @wire controller for loops and conditionals reads like plain English.' },
      { tag: 'heading', text: 'Layouts & components' },
      { tag: 'text', text: '@extends/@section or, today, component-based layouts: <span class="inline-code">&lt;x-app-layout&gt; ... &lt;/x-app-layout&gt;</span>. Both let you define a skeleton once and fill in per-page content.' }
    ],

    code: [
      {
        lang: 'php',
        label: 'posts/index.blade.php',
        code: '{{-- posts/index.blade.php --}}\n' +
              '@extends("layouts.app")\n' +
              '\n' +
              '@section("content")\n' +
              '  <h1>Latest posts</h1>\n' +
              '\n' +
              '  @forelse ($posts as $post)\n' +
              '    <article>\n' +
              '      <h2>{{ $post->title }}</h2>\n' +
              '      <p>{!! $post->body !!}</p>\n' +
              '    </article>\n' +
              '  @empty\n' +
              '    <p>No posts yet — be the first hero.</p>\n' +
              '  @endforelse\n' +
              '\n' +
              '  {{ $posts->links() }}\n' +
              '@endsection'
      }
    ],

    codeExplained: [
      { tag: 'text', text: '<span class="inline-code">{{ $post->title }}</span> is auto-escaped (safe). <span class="inline-code">{!! $post->body !!}</span> is the raw (unsafe) echo — intentionally there for rich HTML, and ONLY safe if you trust the source (e.g., admin content). Use it like an unmarked gun.' },
      { tag: 'text', text: '<span class="inline-code">@forelse</span> handles the empty case with @empty — the human way to loop. <span class="inline-code">{{ $posts->links() }}</span> renders the pagination buttons from the paginate() collection.' }
    ],

    mistakes: [
      'Using {!! !!} on user-submitted content — that is how your "great comment feature" becomes an XSS minefield. Escape by default; only trust editors you fully govern.',
      'Writing raw PHP inside views (<?php ... ?>) — Blade exists so views stay declarative. If you need logic-heavy code, it belongs in a controller or a component, not the template.',
      'Forgetting @else branches — the unhandled case is where "why is the button missing" bugs live.'
    ],

    proTip: 'Blade components (x-button, x-badge) are the modern way to keep views tidy and consistent. Level 05 has a dedicated lesson — meet them before you build anything big.'

    ,

    quiz: {
      cat: 'Blade',
      question: 'What does {{ $user->name }} do?',
      quizLang: 'php',
      options: [
        'Echoes the name with HTML escaping (safe)',
        'Echoes it raw without escaping',
        'Saves it to the database',
        'It prints source code'
      ],
      correct: 0,
      feedback: { correct: '🔥 Doubles curly = escaped output = your XSS shield.', wrong: '❌ Nope. {{ }} prints and escapes. {!! !!} prints raw and unsafe.' }
    },

    challenge: {
      lang: 'php',
      text: 'Build a Blade view listing products: use @forelse to show each product\'s name and price, an @empty message, and a heading. Values must be printed with {{ }} to be safe.',
      hint: 'Pass $products from the controller with ->with("products", ...) or compact().'
    },

    prev: { slug: 'laravel-controllers', title: 'Controllers' },
    next: { slug: 'laravel-migrations', title: 'Migrations' }
  },

  'laravel-migrations': {
    id: 'laravel-migrations',
    section: 'Laravel',
    level: '05',
    title: 'Migrations',
    time: '40 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 5 · Migrations',

    intro: 'Migrations are version control for your database, written in PHP. Instead of "I added a column... wait, did I? Which server?", migrations say precisely: "This is step 12 of the schema. Apply me and move on."',

    whyMatters: 'Team databases need shared truth. Migrations are that truth — committed to git, applied on every machine with one command. Forget "please run this CREATE TABLE that is floating in the group chat" forever.',

    explanation: [
      { tag: 'heading', text: 'The shapes of a table' },
      { tag: 'text', text: '<span class="inline-code">Schema::create("posts", function (Blueprint $table) { ... })</span> — inside, add columns: <span class="inline-code">$table->id()</span>, <span class="inline-code">->string("title")</span>, <span class="inline-code">->text("body")</span>, <span class="inline-code">->foreignId("user_id")->constrained()</span> for relationships, <span class="inline-code">->timestamps()</span> for created_at/updated_at.' },
      { tag: 'heading', text: 'Up and down' },
      { tag: 'text', text: 'Every migration has <span class="inline-code">up()</span> (create/alter) and <span class="inline-code">down()</span> (roll back). Symmetry matters: <span class="inline-code">->dropIfExists("posts")</span> in down(). This is how teams undo changes safely.' },
      { tag: 'heading', text: 'The migration commands' },
      { tag: 'text', text: '<span class="inline-code">php artisan migrate</span> applies all pending. <span class="inline-code">migrate:fresh</span> drops everything and re-applies (dev only — it erases data). <span class="inline-code">migrate:rollback</span> undoes the last batch.' }
    ],

    code: [
      {
        lang: 'php',
        label: 'A posts table, the Laravel way',
        code: '<?php\n' +
              '\n' +
              'use Illuminate\\Database\\Migrations\\Migration;\n' +
              'use Illuminate\\Database\\Schema\\Blueprint;\n' +
              'use Illuminate\\Support\\Facades\\Schema;\n' +
              '\n' +
              'return new class extends Migration\n' +
              '{\n' +
              '    public function up()\n' +
              '    {\n' +
              '        Schema::create("posts", function (Blueprint $table) {\n' +
              '            $table->id();\n' +
              '            $table->string("title", 160);\n' +
              '            $table->text("body");\n' +
              '            $table->foreignId("user_id")\n' +
              '                  ->constrained()\n' +
              '                  ->cascadeOnDelete();\n' +
              '            $table->timestamps();\n' +
              '        });\n' +
              '    }\n' +
              '\n' +
              '    public function down()\n' +
              '    {\n' +
              '        Schema::dropIfExists("posts");\n' +
              '    }\n' +
              '};'
      }
    ],

    codeExplained: [
      { tag: 'text', text: '<span class="inline-code">foreignId("user_id")->constrained()</span> is the modern FK: it guesses the referenced table (users) and index, then cascadeOnDelete means removing the user removes their posts. Timestamps fill themselves in.' },
      { tag: 'text', text: 'The anonymous class wrapper is Laravel 11+ style — each migration is a discrete, reversible unit. Run it: <span class="inline-code">php artisan migrate</span>. Undo it: <span class="inline-code">migrate:rollback</span>.' }
    ],

    mistakes: [
      'Locking Schema::dropIfExists instead of down creating — an irreversible migration is a tarpit for teammates.',
      'Adding a NOT NULL column to a table with existing rows and no default — the DB throws. Give a default or ->nullable().',
      'Running migrate:fresh on data you care about — the "fresh" in the name is not a suggestion. It erases everything.'
    ],

    proTip: 'Edit migrations only before they are pushed. Once applied by teammates or on prod, change the future via a NEW migration. This discipline is what makes migrations work as shared history.'

    ,

    quiz: {
      cat: 'Migrations',
      question: 'Which command wipes all tables and re-runs EVERY migration (dangerous)',
      quizLang: 'bash',
      options: [
        'php artisan migrate:fresh',
        'php artisan migrate:status',
        'php artisan migrate',
        'php artisan db:seed'
      ],
      correct: 0,
      feedback: { correct: '🔥 migrate:fresh drops and rebuilds everything. Development playground only.', wrong: '❌ Nope. migrate:fresh drops all tables then re-migrates from scratch — data included.' }
    },

    challenge: {
      lang: 'php',
      text: 'Create a <strong>products</strong> table migration with: id, name (string 160), price (decimal 10,2), stock (integer, default 0), timestamps. Write the up() and down() methods.',
      hint: 'php artisan make:migration create_products_table. price DECIMAL → $table->decimal("price", 10, 2).'
    },

    prev: { slug: 'laravel-blade', title: 'Blade Templates' },
    next: { slug: 'laravel-eloquent', title: 'Eloquent ORM' }
  },

  'laravel-eloquent': {
    id: 'laravel-eloquent',
    section: 'Laravel',
    level: '05',
    title: 'Eloquent ORM',
    time: '45 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 5 · Eloquent',

    intro: 'Eloquent is Laravel\'s ORM: each table is a Model class, each row an object, and relationships read like English — $post->user, $user->posts. You think in objects, Eloquent writes the SQL.',

    whyMatters: 'Eloquent is where SQL and PHP hug. You will write almost no raw SQL in a Laravel app — Eloquent queries read, mutate, and relate your data. Interviewers LOVE fluent Eloquent signature questions. This is the framework\'s heart.',

    explanation: [
      { tag: 'heading', text: 'The model' },
      { tag: 'text', text: '<span class="inline-code">class Post extends Model</span> — by convention maps to the posts table. That\'s it. Query like a pro: <span class="inline-code">Post::where("status", "published")->orderBy("created_at", "desc")->get()</span>.' },
      { tag: 'heading', text: 'Relationships' },
      { tag: 'text', text: 'Define them once and reuse everywhere: <span class="inline-code">public function user() { return $this->belongsTo(User::class); }</span> gives you <span class="inline-code">$post->user</span> (with automatic JOIN). <span class="inline-code">hasMany</span> on the other side, <span class="inline-code">belongsToMany</span> for pivot.' },
      { tag: 'heading', text: 'Eager loading' },
      { tag: 'text', text: '<span class="inline-code">->with("user")</span> preloads relationships in ONE query instead of 100 (the "N+1" problem). Loading 100 posts with their authors becomes 2 queries, not 101. This is THE performance habit of Eloquent.' }
    ],

    code: [
      {
        lang: 'php',
        label: 'Model + relationships',
        code: '<?php\n\n' +
              'namespace App\\Models;\n' +
              '\n' +
              'use Illuminate\\Database\\Eloquent\\Model;\n' +
              '\n' +
              'class Post extends Model\n' +
              '{\n' +
              '    protected $fillable = ["title", "body", "user_id"];\n' +
              '\n' +
              '    public function user()\n' +
              '    {\n' +
              '        return $this->belongsTo(User::class);\n' +
              '    }\n' +
              '\n' +
              '    public function comments()\n' +
              '    {\n' +
              '        return $this->hasMany(Comment::class);\n' +
              '    }\n' +
              '}'
      },
      {
        lang: 'php',
        label: 'Queries that read like sentences',
        code: '// published posts with authors + comment counts, paged\n' +
              '$posts = Post::with(["user", "comments"])\n' +
              '    ->where("status", "published")\n' +
              '    ->latest()\n' +
              '    ->paginate(10);\n' +
              '\n' +
              '$post = Post::findOrFail($id);   // 404 if missing\n' +
              '$post = Post::firstWhere("slug", $slug);\n' +
              '\n' +
              '// relationships work both ways\n' +
              '$user->posts()->create(["title" => "Hi there", "body" => "..."]);'
      }
    ],

    codeExplained: [
      { tag: 'text', text: '$fillable says WHICH columns may be mass-assigned via create() — the security door. Without it, create($request->all()) could let a user set is_admin=true. Fillable is non-negotiable.' },
      { tag: 'text', text: '<span class="inline-code">$user->posts()->create([...])</span> fills in user_id for you. findOrFail throws → Laravel returns 404 automatically. These little courtesies are why seniors say Laravel developers ship faster.' }
    ],

    mistakes: [
      'Forgetting $fillable, then create() silently fails (or accepts everything, worse). Define it thoughtfully.',
      'Triggering N+1: looping 100 posts calling $post->user each time = 101 queries. Use ->with().',
      'Accessing relationships in Blade within a loop without eager loading — the classic hiring-system "why is the page slow".'
    ],

    proTip: 'Order query chains like a sentence: with() first, then where(), then order, then paginate/get. If you ever see 500+ slow queries in Laravel Debugbar/Telescope, inspect eager loading first.'

    ,

    quiz: {
      cat: 'Eloquent',
      question: 'What is the purpose of <span class="inline-code">protected $fillable</span>?',
      quizLang: 'php',
      options: [
        'Whitelists columns allowed in mass assignment (create/update)',
        'Hides columns from queries',
        'Makes columns required',
        'Encrypts the columns'
      ],
      correct: 0,
      feedback: { correct: '🔥 Fillable controls what create($input) may write — the mass-assignment gate.', wrong: '❌ Nope. $fillable whitelists which fields mass assignment may set; everything else is ignored.' }
    },

    challenge: {
      lang: 'php',
      text: 'Two models: <strong>Category</strong> and <strong>Product</strong> (a product belongs to a category). Define the belongsTo/hasMany relationships, then write a query fetching all categories with their products eager-loaded.',
      hint: 'In Category: public function products() { return $this->hasMany(Product::class); } and query Category::with("products")->get().'
    },

    prev: { slug: 'laravel-migrations', title: 'Migrations' },
    next: { slug: 'laravel-validation', title: 'Validation' }
  },

  'laravel-validation': {
    id: 'laravel-validation',
    section: 'Laravel',
    level: '05',
    title: 'Validation',
    time: '35 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 5 · Validation',

    intro: 'Validation is asking politely but firmly before touching the database: "Is that an email? Is it on the record? Did we really just receive a -5 year old as birth date?" The data must earn its place.',

    whyMatters: 'Validation is your first security layer AND your user experience. Bad validation = corrupt databases + angry users + injections. Good validation = trust in your data. Laravel makes this a one-liner habit.',

    explanation: [
      { tag: 'heading', text: 'Rules in a chain' },
      { tag: 'text', text: '<span class="inline-code">$request->validate(["email" => "required|email|max:190"])</span>. On failure Laravel redirects back with errors (and old input) for web, or a 422 JSON for APIs. That is the whole UX loop.' },
      { tag: 'heading', text: 'The rule dictionary' },
      { tag: 'text', text: 'required, email, min/max, unique:table, in:value1,value2, confirmed (password twice), date, integer, nullable. Combine freely with pipe <span class="inline-code">|</span> or arrays.' },
      { tag: 'heading', text: 'Custom messages' },
      { tag: 'text', text: '<span class="inline-code">->withErrors()</span> and per-rule messages make errors sound human. Keep messages helpful, never leak implementation details.' }
    ],

    code: [
      {
        lang: 'php',
        label: 'Validation at the door',
        code: 'public function store(Request $request)\n' +
              '{\n' +
              '    $validated = $request->validate([\n' +
              '        "name"  => "required|string|max:100",\n' +
              '        "email" => "required|email|unique:users,email",\n' +
              '        "age"   => "required|integer|between:13,120",\n' +
              '        "password" => "required|min:8|confirmed",\n' +
              '    ]);\n' +
              '\n' +
              '    $user = User::create($validated);\n' +
              '    return redirect()->route("users.index");\n' +
              '}'
      }
    ],

    codeExplained: [
      { tag: 'text', text: '<span class="inline-code">unique:users,email</span> runs a database check — another account already using that email fails. <span class="inline-code">confirmed</span> demands a matching field <span class="inline-code">password_confirmation</span>. The $validated array contains ONLY the whitelisted, passed data.' },
      { tag: 'text', text: 'Working with $validated (not $request->all()) means no sneaky extra fields. Every extra key in the request (hello, is_admin) is ignored. Validation and safety are the same act here.' }
    ],

    mistakes: [
      'Validating only the frontend — users can open DevTools and delete your checks. The backend must validate, always.',
      'unique missing the table in multi-DB setups — specify unique:users,email explicitly.',
      'Using rules that reject a normal user (min:8 password is fine, but "5 chars" from a real workflow will lose customers) — tune rules to your domain, not to a template.'
    ],

    proTip: 'For complex feels, move rules into a Form Request class (<span class="inline-code">php artisan make:request StorePostRequest</span>): rules() + authorize() + messages() in one tidy home.'

    ,

    quiz: {
      cat: 'Validation',
      question: 'What does <span class="inline-code">email => "required|unique:users,email"</span> do?',
      quizLang: 'php',
      options: [
        'Requires an email that does not exist yet in the users table',
        'Only checks it is syntactically an email',
        'Encrypts the email',
        'Requires it to match the logged-in user'
      ],
      correct: 0,
      feedback: { correct: '🔥 required + unique checks both presence and database uniqueness. Registration-ready.', wrong: '❌ Nope. unique:users,email fails if the address already exists in that table.' }
    },

    challenge: {
      lang: 'php',
      text: 'Validate a <strong>profile</strong> update: name required (max 100), bio required (min 20), website nullable and url-valid, birthday date, and before today. Then use the validated data to update the user.',
      hint: 'url rule is literally "url". "nullable" lets an empty website pass. date|before:today for birthdays.'
    },

    prev: { slug: 'laravel-eloquent', title: 'Eloquent ORM' },
    next: { slug: 'laravel-forms', title: 'Forms & Requests' }
  },

  'laravel-forms': {
    id: 'laravel-forms',
    section: 'Laravel',
    level: '05',
    title: 'Forms & Requests',
    time: '40 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 5 · Forms',

    intro: 'Forms in Laravel are the bridge between what users see and what your controllers receive. CSRF token, method spoofing, old input, file uploads — the pieces that make form submission feel like a conversation, not a stampede.',

    whyMatters: 'Almost every feature starts as a form: register, comment, create a post, checkout. Get form handling right and every screen you build just works. The CSRF token alone protects your app from attack-by-form.',

    explanation: [
      { tag: 'heading', text: 'CSRF: the invisible bouncer' },
      { tag: 'text', text: 'Every POST form needs <span class="inline-code">@csrf</span> — a hidden token that proves the request came from YOUR page, not somebody else\'s website. Laravel rejects mismatched tokens with a 419. Never forget @csrf in a form.' },
      { tag: 'heading', text: 'Method spoofing' },
      { tag: 'text', text: 'Forms only support GET and POST in HTML — but your routes need PUT/DELETE. Add <span class="inline-code">@method("PUT")</span> and Laravel interprets it as PUT. The wire works under the hood.' },
      { tag: 'heading', text: 'Old input & errors' },
      { tag: 'text', text: 'After validation failure, Laravel redirects back. <span class="inline-code">old("name")</span> refills the form with what the user typed (not lost!), and <span class="inline-code">$errors</span> is available to show messages.' },
    ],

    code: [
      {
        lang: 'php',
        label: 'posts/create.blade.php',
        code: '<form method="POST" action="{{ route(\'posts.store\') }}">\n' +
              '    @csrf\n' +
              '    <input name="title" value="{{ old(\'title\') }}">\n' +
              '    <textarea name="body">{{ old(\'body\') }}</textarea>\n' +
              '\n' +
              '    @error("title")<p class="err">{{ $message }}</p>@enderror\n' +
              '\n' +
              '    <button type="submit">Save post</button>\n' +
              '</form>'
      },
      {
        lang: 'php',
        label: 'Updating with method spoofing',
        code: '<form method="POST" action="{{ route(\'posts.update\', $post) }}">\n' +
              '    @csrf\n' +
              '    @method("PUT")\n' +
              '    <input name="title" value="{{ $post->title }}">\n' +
              '    <button type="submit">Update</button>\n' +
              '</form>'
      }
    ],

    codeExplained: [
      { tag: 'text', text: '<span class="inline-code">@error("title")</span> + $message shows the validation error right under the field. old() refills the field so users do not retype everything after one typo. This pair is the delightful UX of Laravel forms.' },
      { tag: 'text', text: 'Note @method("PUT") inside the POST form — Laravel rewrites the method internally. The URL uses route() with the model ($post) — route-model binding again, just in the template.' },
    ],

    mistakes: [
      'Building login/comment forms without @csrf → instant 419 for real users.',
      'POSTing directly to /products/5 without spoofing for updates — the route expects PUT and 405s.',
      'Not using old() — after any validation error the whole form empties and users rage-quit.'
    ],

    proTip: 'Use named routes in the action (route("posts.store"), route("posts.update", $post)) and let the framework refactor URLs for you. The day you change a URL, every hardcoded form action is a landmine.'

    ,

    quiz: {
      cat: 'Forms',
      question: 'Why must every POST form include @csrf?',
      options: [
        'It attaches a token that verifies the request came from your own app',
        'It encrypts the form data',
        'It is needed to enable the submit button',
        'It speeds up submission'
      ],
      correct: 0,
      feedback: { correct: '🔥 CSRF tokens stop cross-site forgery: another site cannot forge a valid form post.', wrong: '❌ Nope. @csrf injects a session-bound token Laravel verifies — blocking forged cross-site submissions.' }
    },

    challenge: {
      lang: 'php',
      text: 'Build a complete edit form for a product: PUT spoof, @csrf, name input with old()/value, price input, and @error blocks showing messages. Action should point to route("products.update", $product).',
      hint: 'Two forms boss-fights: create needs POST+store, edit needs PUT+update. @error("name") shows only if that key failed validation.'
    },

    prev: { slug: 'laravel-validation', title: 'Validation' },
    next: { slug: 'laravel-auth', title: 'Auth' }
  },

  'laravel-auth': {
    id: 'laravel-auth',
    section: 'Laravel',
    level: '05',
    title: 'Auth',
    time: '45 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 5 · Auth',

    intro: 'Authentication = knowing who the visitor is. Laravel ships login, registration, password reset, and session-protection out of the box. You will harden it in Level 07; today you turn on the lock.',

    whyMatters: 'Auth is the gate to your app. Almost everything after Level 05 assumes "the logged-in user": their posts, their orders, their permissions. This is where your app stops being anonymous.',

    explanation: [
      { tag: 'heading', text: 'The scaffolding command' },
      { tag: 'text', text: '<span class="inline-code">php artisan make:auth</span> (Laravel 11: <span class="inline-code">php artisan install:api</span> or Breeze/Jetstream) generates login/register routes, controllers, and views. For APIs, <span class="inline-code">sanctum</span> comes in Level 07.' },
      { tag: 'heading', text: 'Auth facade in your code' },
      { tag: 'text', text: '<span class="inline-code">auth()->user()</span> gives the logged-in user (or null). <span class="inline-code">auth()->check()</span> asks "are they logged in?". <span class="inline-code">auth()->attempt([...])</span> tries a login. <span class="inline-code">auth()->logout()</span> sends them away.' },
      { tag: 'heading', text: 'Authentication vs authorization' },
      { tag: 'text', text: 'Authentication = "who are you?". Authorization = "may you?". Laravel gate/policies cover the second (Level 07). Confusing them is how "any logged-in user can delete anyone\'s post" bugs happen.' }
    ],

    code: [
      {
        lang: 'php',
        label: 'A homemade login',
        code: 'public function login(Request $request)\n' +
              '{\n' +
              '    $credentials = $request->validate([\n' +
              '        "email"    => "required|email",\n' +
              '        "password" => "required",\n' +
              '    ]);\n' +
              '\n' +
              '    if (auth()->attempt($credentials)) {\n' +
              '        $request->session()->regenerate();\n' +
              '        return redirect()->intended("/dashboard");\n' +
              '    }\n' +
              '\n' +
              '    return back()->withErrors([\n' +
              '        "email" => "These credentials do not match our records.",\n' +
              '    ])->onlyInput("email");\n' +
              '}'
      },
      {
        lang: 'php',
        label: 'Using the auth state',
        code: '// Blade\n' +
              '@if (auth()->check())\n' +
              '    <p>Welcome, {{ auth()->user()->name }}!</p>\n' +
              '    <form action="{{ route(\'logout\') }}" method="POST">\n' +
              '        @csrf\n' +
              '        <button type="submit">Logout</button>\n' +
              '    </form>\n' +
              '@else\n' +
              '    <a href="{{ route(\'login\') }}">Login</a>\n' +
              '@endif'
      }
    ],

    codeExplained: [
      { tag: 'text', text: '<span class="inline-code">attempt()</span> checks credentials and logs the user in on success. <span class="inline-code">session()->regenerate()</span> issues a fresh session ID (prevents session fixation). intended() sends the user where they were heading.' },
      { tag: 'text', text: 'The Blade snippet reads like English: logged in? greet + logout form. Not? show a login link. Every page in a real app knows whether to show "Dashboard" or "Login".' }
    ],

    mistakes: [
      'Giving a different message for "email not found" vs "wrong password" — you are helping attackers enumerate accounts. Same soft message for both.',
      'Forgetting session regenerate after login — session fixation attacks thank you.',
      'Writing your own hashing and compare — use Laravel\'s built-in attempt(), which compares against the BCrypt hash automatically.'
    ],

    proTip: 'Never store the password in the session or model. Laravel\'s password field is hashed with bcrypt (Hash facade) and never printed. Trust the framework\'s defaults here — do not reinvent the crypto.'

    ,

    quiz: {
      cat: 'Auth',
      question: 'Which line tells Laravel "are they logged in?"',
      quizLang: 'php',
      options: [
        'auth()->check()',
        'auth()->attempt()',
        'auth()->login()',
        'auth()->hashing()'
      ],
      correct: 0,
      feedback: { correct: '🔥 check() is the question; attempt() is the try-to-log-in.', wrong: '❌ Nope. auth()->check() returns true when a user is authenticated. attempt() tries credentials.' }
    },

    challenge: {
      lang: 'php',
      text: 'Protect a page: create a route GET /dashboard guarded by <strong>auth</strong> middleware, and in the controller show the logged-in user\'s name. Also add a logout POST route.',
      hint: 'Route::get("/dashboard", ...)->middleware("auth"); redirect() routes to /login for guests automatically.'
    },

    prev: { slug: 'laravel-forms', title: 'Forms & Requests' },
    next: { slug: 'laravel-middleware', title: 'Middleware' }
  },

  'laravel-middleware': {
    id: 'laravel-middleware',
    section: 'Laravel',
    level: '05',
    title: 'Middleware',
    time: '35 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 5 · Middleware',

    intro: 'Middleware is the checklist every request must pass before reaching your controller: "logged in?", "admin?", "throttled?". Requests either get a stamp of approval or get turned away at the gate.',

    whyMatters: 'Security, logging, throttling, CORS — all of these are middleware. Rather than repeating checks in every controller method, you declare them once on the route. This is how apps stay secure by default.',

    explanation: [
      { tag: 'heading', text: 'Built-ins you already used' },
      { tag: 'text', text: '<span class="inline-code">auth</span> (must be logged in), <span class="inline-code">guest</span> (must NOT be), <span class="inline-code">throttle:60,1</span> (60 requests per minute), <span class="inline-code">verified</span> (email verified). Registered in bootstrap/app.php.' },
      { tag: 'heading', text: 'Create your own' },
      { tag: 'text', text: '<span class="inline-code">php artisan make:middleware EnsureUserIsSubscriber</span> — the handle() method either continues the request (<span class="inline-code">$next($request)</span>) or redirects with an error.' },
      { tag: 'heading', text: 'Route-level power' },
      { tag: 'text', text: 'Attach middleware to one route, a group, or a controller. <span class="inline-code">->middleware(["auth", "admin"])</span> chains checks; order matters (auth first, admin second).' }
    ],

    code: [
      {
        lang: 'php',
        label: 'Your own check',
        code: '<?php\n\n' +
              'namespace App\\Http\\Middleware;\n' +
              '\n' +
              'use Closure;\n' +
              'use Illuminate\\Http\\Request;\n' +
              '\n' +
              'class EnsureUserIsActive\n' +
              '{\n' +
              '    public function handle(Request $request, Closure $next)\n' +
              '    {\n' +
              '        if (auth()->check() && auth()->user()->is_active === false) {\n' +
              '            abort(403, "This account is suspended.");\n' +
              '        }\n' +
              '        return $next($request);\n' +
              '    }\n' +
              '}'
      },
      {
        lang: 'php',
        label: 'Applying it',
        code: '// per route\n' +
              'Route::get("/account", [AccountController::class, "show"])\n' +
              '    ->middleware(["auth", "active"]);\n' +
              '\n' +
              '// or a group\n' +
              'Route::middleware(["auth", "active"])->group(function () {\n' +
              '    Route::resource("/account", AccountController::class);\n' +
              '});'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'The middleware is a guard standing before the controller. If the check fails, it aborts with a 403 and the request never reaches your business logic. Clean, central, untouchable by controllers.' },
      { tag: 'text', text: 'Declaring middleware in a group protects an entire set of routes with one line — the modern way to say "everything under /account requires an active user".' }
    ],

    mistakes: [
      'Doing permission checks only inside controllers — every new route must remember to repeat the check. Middleware centralizes it.',
      'Order chaos: checking a permission before auth — if you are a guest, auth()->user() is null and you "fail" the wrong check.',
      'Blocking middleware for CSRF — never forget CSRF middleware; it protects every POST you own.'
    ],

    proTip: 'Middleware is also a great place for logging and timing. A "LogRequests" middleware can record method, URL, and duration for every request — eventually feeding the analytics you\'ll add in Level 12.'

    ,

    quiz: {
      cat: 'Middleware',
      question: 'What does middleware do if its check fails?',
      options: [
        'Stops the request before it reaches the controller (401/403/etc.)',
        'Ignores the check and lets everything through',
        'Deletes the request',
        'Calls the controller anyway'
      ],
      correct: 0,
      feedback: { correct: '🔥 The request is halted and a response (like 403) is returned immediately.', wrong: '❌ Nope. Middleware short-circuits: the controller is never reached when the check fails.' }
    },

    challenge: {
      lang: 'php',
      text: 'Create a middleware <strong>CheckRole</strong> that takes a role parameter and blocks users without it (abort 403). Apply it to a /admin route: <span class="inline-code">->middleware("role:admin")</span>.',
      hint: 'handle(Request $request, Closure $next, string $role). Compare $request->user()?->role === $role.'
    },

    prev: { slug: 'laravel-auth', title: 'Auth' },
    next: { slug: 'laravel-upload', title: 'File Upload' }
  },

  'laravel-upload': {
    id: 'laravel-upload',
    section: 'Laravel',
    level: '05',
    title: 'File Upload',
    time: '40 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 5 · Uploads',

    intro: 'File uploads are where users hand your server real payloads: images, PDFs, avatars. Laravel makes storing them remarkably safe — provided you remember the three rules: validate, size-limit, rename.',

    whyMatters: 'Avatars, product images, documents — every real app handles uploads. Unsafe upload handling = malicious files on your server or megabytes of junk in your storage. Handle uploads once, correctly, and reuse the pattern forever.',

    explanation: [
      { tag: 'heading', text: 'The storage() helper' },
      { tag: 'text', text: '<span class="inline-code">request->file("avatar")->store("avatars", "public")</span> saves with a random filename and returns the path. The "public" disk means a public URL, and <span class="inline-code">php artisan storage:link</span> exposes it.' },
      { tag: 'heading', text: 'Validate like a tyrant' },
      { tag: 'text', text: '<span class="inline-code">"avatar" => ["required", "file", "image", "mimes:jpeg,png,webp", "max:2048"]</span> — type, allow-list, and a size cap. mimes is the key: trusting file extensions alone lets attackers win.' },
      { tag: 'heading', text: 'Display it' },
      { tag: 'text', text: 'Store the path (e.g., "avatars/ab12.jpg") in the DB. Render with <span class="inline-code">asset("storage/" . $user->avatar)</span> for public files or a storage URL for private ones.' }
    ],

    code: [
      {
        lang: 'php',
        label: 'Controller handling an avatar',
        code: 'public function update(Request $request)\n' +
              '{\n' +
              '    $validated = $request->validate([\n' +
              '        "name"   => "required|max:100",\n' +
              '        "avatar" => "nullable|image|mimes:jpeg,png,webp|max:2048",\n' +
              '    ]);\n' +
              '\n' +
              '    $user = auth()->user();\n' +
              '\n' +
              '    if ($request->hasFile("avatar")) {\n' +
              '        $path = $request->file("avatar")\n' +
              '                    ->store("avatars", "public");\n' +
              '        $user->avatar = $path;\n' +
              '    }\n' +
              '\n' +
              '    $user->name = $validated["name"];\n' +
              '    $user->save();\n' +
              '    return back()->with("status", "Profile updated!");\n' +
              '}'
      },
      {
        lang: 'php',
        label: 'The form + display',
        code: '<form method="POST" enctype="multipart/form-data"\n' +
              '      action="{{ route(\'profile.update\') }}">\n' +
              '    @csrf\n' +
              '    @method("PUT")\n' +
              '    <input type="file" name="avatar">\n' +
              '    <button type="submit">Update</button>\n' +
              '</form>\n' +
              '\n' +
              '@if ($user->avatar)\n' +
              '    <img src="{{ asset("storage/" . $user->avatar) }}">\n' +
              '@endif'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'enctype="multipart/form-data" on the form is mandatory for files. The controller stores under avatars/ with a random name (Laravel renames automatically, killing path-traversal), then saves only the path in the DB.' },
      { tag: 'text', text: 'asset("storage/...") maps to the symlink created by storage:link. The upload system just works — the hard parts (naming, collision, traversal) are handled by the framework.' }
    ],

    mistakes: [
      'Validating only size and leaving mimes — a .php disguised as any image you trust could serve code.',
      'Forgetting the multipart enctype — the file arrives as an empty $_POST key and you debug for an hour.',
      'Using the original filename directly — path traversal like "../../config.php" becomes your vulnerability. Let store() generate the name.'
    ],

    proTip: 'Think of upload validation as a checklist: it IS a file? file. Is it an image? image. mimes? yes. Size? capped. Store under a disk (avatars, images). Fail fast, and the user gets a friendly message.'

    ,

    quiz: {
      cat: 'Uploads',
      question: 'In a file upload form, which attribute is mandatory?',
      quizLang: 'php',
      options: [
        'enctype="multipart/form-data"',
        'type="button"',
        'autocomplete="off"',
        'novalidate'
      ],
      correct: 0,
      feedback: { correct: '🔥 Without multipart/form-data, files arrive as empty strings. The classic silent killer.', wrong: '❌ Nope. File forms need enctype="multipart/form-data" or the browser sends no file data.' }
    },

    challenge: {
      lang: 'php',
      text: 'Add a <strong>cover image</strong> to posts: validation (image, mimes jpeg/png/webp, max 2MB), storage under "covers" on the public disk, saving the path to the DB, and displaying it in Blade.',
      hint: 'Add covers column to posts first (migration: nullable string). Store returns a relative path like covers/xyz.jpg.'
    },

    prev: { slug: 'laravel-middleware', title: 'Middleware' },
    next: { slug: 'laravel-storage', title: 'Storage & Helpers' }
  },

  'laravel-storage': {
    id: 'laravel-storage',
    section: 'Laravel',
    level: '05',
    title: 'Storage & Helpers',
    time: '35 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 5 · Storage',

    intro: 'Storage is where files live beyond the request — avatars, uploads, exports. Laravel gives it disks: local, public, or cloud (S3), all with the same interface. Swap disks without touching your controllers.',

    whyMatters: 'Putting files on the "wrong" disk means either private files publicly exposed or public images 403-ing. Knowing public vs private disks — and the helper toolbox — keeps files exactly as locked as they should be.',

    explanation: [
      { tag: 'heading', text: 'Disks are rooms with locks' },
      { tag: 'text', text: '<span class="inline-code">"local"</span> = private (only your app reads). <span class="inline-code">"public"</span> = reachable at /storage/... after storage:link. <span class="inline-code">"s3"</span> = cloud. Your controller never knows which — it just says <span class="inline-code">Storage::disk($name)</span>.' },
      { tag: 'heading', text: 'The Storage facade' },
      { tag: 'text', text: '<span class="inline-code">Storage::put()</span>, <span class="inline-code">Storage::exists()</span>, <span class="inline-code">Storage::get()</span>, <span class="inline-code">Storage::delete()</span>, <span class="inline-code">Storage::disk("public")->url($path)</span>. Plus streams for big files so you don\'t slurp gigabytes into RAM.' },
      { tag: 'heading', text: 'The helper chest behind it' },
      { tag: 'text', text: '<span class="inline-code">str()</span>, <span class="inline-code">now()</span>, <span class="inline-code">collect()</span>, <span class="inline-code">optional()</span>, <span class="inline-code">blank()</span> — Laravel\'s global helpers trim boilerplate: <span class="inline-code">Str::slug($title)</span> turns "Hello World" into "hello-world" for URLs.' }
    ],

    code: [
      {
        lang: 'php',
        label: 'Disks and facade in action',
        code: 'use Illuminate\\Support\\Facades\\Storage;\n' +
              '\n' +
              '$disk = Storage::disk("public");\n' +
              '\n' +
              '// save text content as a file\n' +
              '$disk->put("reports/summary.txt", "Sales are up 12%");\n' +
              '\n' +
              '// stream a big file without loading it into memory\n' +
              'Storage::disk("s3")->put("huge.mp4", fopen($localPath, "r"));\n' +
              '\n' +
              '// delete old avatar, keep the account tidy\n' +
              'if ($disk->exists($user->avatar)) {\n' +
              '    $disk->delete($user->avatar);\n' +
              '}'
      },
      {
        lang: 'php',
        label: 'Helpers that earn their keep',
        code: '$slug = Str::slug("My Awesome Post!");     // my-awesome-post\n' +
              '$date = now()->addDays(7);                // Carbon, fluent\n' +
              '$total = collect([1, 2, 3])->sum();       // 6\n' +
              '$name = optional($user)->name ?? "Guest"; // null-safe'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'Notice the controllers() read exactly the same regardless of disk — that is the power of the Storage abstraction. fsopen() streams the file in chunks instead of loading a giant video into memory.' },
      { tag: 'text', text: 'Str::slug, now(), collect(), optional() — every major helper in one LineBox. Master them and your code stops being "PHP with extra typing".' }
    ],

    mistakes: [
      'Putting user-uploaded files on the local disk then trying to show them via URL — local is private; the URL 404s. Use public (or stream a download route).',
      'Forgetting storage:link — public files get "File not found" because the public/storage symlink is missing.',
      'Loading giant files into memory with Storage::get when a stream would do — RAM says thank you.'
    ],

    proTip: 'For private uploads, store on local and expose a download route that authenticates first (<span class="inline-code">Storage::disk("local")->download($path)</span>). One small route turns "private files" into a full permission feature.'

    ,

    quiz: {
      cat: 'Storage',
      question: 'Which command makes public-disk files reachable at /storage/...?',
      quizLang: 'bash',
      options: [
        'php artisan storage:link',
        'php artisan storage:public',
        'php artisan link',
        'composer storage:link'
      ],
      correct: 0,
      feedback: { correct: '🔥 storage:link creates the public/storage symlink that serves public disk files.', wrong: '❌ Nope. php artisan storage:link (via the Artisan console) exposes the public disk.' }
    },

    challenge: {
      lang: 'php',
      text: 'Write a controller that: receives a report.txt (validated as file|mimes:txt|max:512), stores it on the public disk under "reports", and returns the public URL.',
      hint: '$request->file("report")->store("reports", "public") returns the path; Storage::disk("public")->url($path) gives the URL.'
    },

    prev: { slug: 'laravel-upload', title: 'File Upload' },
    next: { slug: 'laravel-components', title: 'Blade Components' }
  },

  'laravel-components': {
    id: 'laravel-components',
    section: 'Laravel',
    level: '05',
    title: 'Blade Components',
    time: '40 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 5 · Components',

    intro: 'Blade components are custom kitchen gadgets for your markup: define <x-alert> once, reuse it everywhere, feed it attributes and slots. Same button, one definition, fifty forms.',

    whyMatters: 'Duplicate markup is the slow rot of large templates. Components kill it: one source of truth for buttons, alerts, modals, inputs. They are also the modern Laravel UI coding style (Breeze/Jetstream are built with them).',

    explanation: [
      { tag: 'heading', text: 'Anonymous components' },
      { tag: 'text', text: 'A file at resources/views/components/alert.blade.php becomes <span class="inline-code">&lt;x-alert&gt;</span> — zero class needed. Attributes arrive as <span class="inline-code">{{ $attributes }}</span> or declared via @props.' },
      { tag: 'heading', text: 'Slots' },
      { tag: 'text', text: 'Content between the tags <span class="inline-code">&lt;x-alert&gt;This is the slot&lt;/x-alert&gt;</span> flows into <span class="inline-code">{{ $slot }}</span> inside the component. Components become reusable boxes with changeable insides.' },
      { tag: 'heading', text: 'Named slots & classes' },
      { tag: 'text', text: 'Class-based components (make:component) get real methods and props validation — for complex components. Named slots (<span class="inline-code">&lt;x-slot:title&gt;...</span>) let one component host several regions.'
    ],

    code: [
      {
        lang: 'php',
        label: 'components/alert.blade.php',
        code: '{{-- components/alert.blade.php --}}\n' +
              '@props(["type" => "info"])\n' +
              '\n' +
              '<div {{ $attributes->merge(["class" => "alert alert-" . $type]) }}>\n' +
              '    {{ $slot }}\n' +
              '</div>'
      },
      {
        lang: 'php',
        label: 'Using it everywhere',
        code: '<x-alert type="success">\n' +
              '    Profile saved successfully!\n' +
              '</x-alert>\n' +
              '\n' +
              '<x-alert type="danger" class="mt-4">\n' +
              '    Something went terribly, but recoverably, wrong.\n' +
              '</x-alert>'
      }
    ],

    codeExplained: [
      { tag: 'text', text: '<span class="inline-code">@props</span> declares defaults — "type" defaults to info. <span class="inline-code">$attributes->merge()</span> lets callers pass extra classes (like mt-4) that blend with the component\'s own classes.' },
      { tag: 'text', text: 'Callers get a clean, semantic tag: <span class="inline-code">&lt;x-alert&gt;</span>. The component\'s markup lives in one file; change the design once and all alerts change everywhere.' }
    ],

    mistakes: [
      'Putting complex logic inside an anonymous component view — for logic, upgrade to a class-based component.',
      'Forgetting $slot inside the component image — content between your tags silently disappears.',
      'Hardcoding styles so callers cannot merge classes — $attributes->merge is the contract that keeps components flexible.'
    ],

    proTip: 'Name components by UI role (x-card, x-badge, x-input) and keep them small. A component library built this way is the fastest path to a consistent design system across your app.'

    ,

    quiz: {
      cat: 'Components',
      question: 'Where does the content between <x-alert> and </x-alert> appear?',
      options: [
        'Inside {{ $slot }} in the component',
        'In the browser console',
        'In the header only',
        'Nowhere — it is ignored'
      ],
      correct: 0,
      feedback: { correct: '🔥 $slot is the default slot where nested content lands.', wrong: '❌ Nope. Content between the component tags flows into the component view\'s {{ $slot }}.' }
    },

    challenge: {
      lang: 'php',
      text: 'Build a reusable <strong>x-card</strong> component: props for title, a named slot "actions", and a default $slot for the body. Then use it on a page with a title, some body text, and a small action button.',
      hint: 'Named slots: <x-slot:actions>...</x-slot:actions> inside the component tag; in the view use {{ $actions }} next to {{ $slot }}.'
    },

    prev: { slug: 'laravel-storage', title: 'Storage & Helpers' },
    next: { slug: 'laravel-container', title: 'Service Container' }
  },

  'laravel-container': {
    id: 'laravel-container',
    section: 'Laravel',
    level: '05',
    title: 'Service Container',
    time: '40 min',
    difficulty: 'Advanced',
    book: 'Book Chapter 5 · Container',

    intro: 'The service container is Laravel\'s dependency-injection engine: when your code asks for something (a service, a class, a config), the container builds it and hands it over. Think of it as the framework\'s personal butler who already knows your order.',

    whyMatters: 'Dependency injection (DI) is what makes Laravel apps testable and extensible. Knowing the container explains WHY <span class="inline-code">Request $request</span> just appears in your method — and how to swap implementations without touching callers.',

    explanation: [
      { tag: 'heading', text: 'Making magic explicit' },
      { tag: 'text', text: 'When a controller method says <span class="inline-code">public function index(ReportService $reports)</span>, Laravel\'s container resolves ReportService — building it and all its dependencies, recursively. No manual "new", no wiring by hand.' },
      { tag: 'heading', text: 'Binding & singleton' },
      { tag: 'text', text: '<span class="inline-code">$this->app->bind(Contract::class, Implementation::class)</span> says "when something asks for the contract, give it THIS implementation." <span class="inline-code">->singleton()</span> reuses one instance instead of rebuilding. This is how you swap one PaymentGateway for another in one line.' },
      { tag: 'heading', text: 'Resolution from anywhere' },
      { tag: 'text', text: 'Outside controllers (in commands, jobs), resolve with the helper: <span class="inline-code">app(PaymentGateway::class)</span>. Keep it rare — the container-visible PHP relies on DI as the main path.' }
    ],

    code: [
      {
        lang: 'php',
        label: 'A service injected like butter',
        code: 'namespace App\\Services;\n' +
              '\n' +
              'class ReportService\n' +
              '{\n' +
              '    public function __construct(\n' +
              '        private DataExporter $exporter,\n' +
              '        private PdfRenderer $pdf\n' +
              '    ) {}\n' +
              '\n' +
              '    public function generate(): string\n' +
              '    {\n' +
              '        return $this->pdf->render($this->exporter->data());\n' +
              '    }\n' +
              '}'
      },
      {
        lang: 'php',
        label: 'Binding an interface to an implementation',
        code: '// in a service provider\n' +
              '$this->app->bind(\n' +
              '    PaymentGateway::class,\n' +
              '    StripeGateway::class\n' +
              ');\n' +
              '\n' +
              '// anywhere: receive the interface, get Stripe\n' +
              'public function checkout(PaymentGateway $gateway)\n' +
              '{\n' +
              '    return $gateway->charge(amount: 49.99);\n' +
              '}'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'ReportService needs an exporter and a PDF renderer — the container builds both automatically (constructor injection, promoted properties). You never write <span class="inline-code">new ReportService(new ...)</span> when Laravel does it for you.' },
      { tag: 'text', text: 'The bind maps a contract to an implementation. Change payment providers later? Edit one binding line, done. This is the "swap a part without new tools" benefit of DI.'
    ],

    mistakes: [
      'Manually doing <span class="inline-code">new PaymentGateway()</span> deep in controllers — you cheat yourself out of testability.',
      'Binding a class that has required constructor params without binding its deps — the container fails with a resolution error. Bind the whole dependency graph once, not only the top.',
      'Forgetting singleton for heavy services (e.g., an API client) — instantiating it on every request wastes connections.'
    ],

    proTip: 'Think of DI as "declare your needs, receive them". It is the same polite pattern in tests: pass a fake/mock against the interface and your tests do not touch the real Stripe.' 

    ,

    quiz: {
      cat: 'Container',
      question: 'What does the service container automatically do here?',
      quizLang: 'php',
      quizCode: 'public function index(ReportService $reports)',
      options: [
        'Builds ReportService (and all its dependencies), then injects it',
        'Turns $reports into a string',
        'Makes a database query',
        'Caches the controller'
      ],
      correct: 0,
      feedback: { correct: '🔥 The container resolves the whole dependency tree for you. That is its butler talent.', wrong: '❌ Nope. Constructor/parameter injection is resolved by the container, dependencies included.' }
    },

    challenge: {
      lang: 'php',
      text: 'Define an interface <strong>Mailer</strong> and two implementations <strong>SmtpMailer</strong> and <strong>LoggerMailer</strong> ("sends" into the log). Bind Mailer to SmtpMailer in a service provider, then inject Mailer into a controller method.',
      hint: 'bind(Mailer::class, SmtpMailer::class) in a provider\'s register(). Inject Mailer $mailer — Laravel returns the bound implementation.'
    },

    prev: { slug: 'laravel-components', title: 'Blade Components' },
    next: { slug: 'api-what', title: 'What is an API?' }
  }

});