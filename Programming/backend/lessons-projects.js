/* ========================================
   Chango — Backend Roadmap · Level 11: Real Projects (6 lessons)
   ======================================== */

Object.assign(LESSONS, {

  'projects-todo': {
    id: 'projects-todo',
    section: 'Real Projects',
    level: '11',
    title: 'Todo API',
    time: '3–4 days',
    difficulty: 'Advanced',
    book: 'Book Chapter 11 · Project 1',

    intro: 'Every developer has built a todo app. That is the point — it is the smallest project big enough to teach a full stack: CRUD, validation, auth, relations, and tests. No excuses, no "it\'s too hard". Just build it.',

    whyMatters: 'A finished todo API proves you can take a whole feature from model to endpoint to tested code. It looks simple, but doing it properly — auth, ownership, validation, pagination, tests — is exactly the routine you will repeat on every real product.',

    explanation: [
      { tag: 'heading', text: 'Requirements' },
      { tag: 'text', text: 'Users register/login (Sanctum tokens). Authenticated users can create, list, show, update, complete, and delete their own todos. A todo has a title, an optional description, a completed flag, and belongs to a user. Unauthenticated access → 401.' },
      { tag: 'heading', text: 'Schema' },
      { tag: 'text', text: 'todos table: id, user_id (FK → users), title, description (nullable), is_completed (bool, default false), timestamps. Add an index on user_id — every query filters by it.' },
      { tag: 'heading', text: 'Doing it like production' },
      { tag: 'text', text: 'Use apiResource with Sanctum in the middleware group, a TodoPolicy so users only touch their own todos, FormRequest validation, a TodoResource, and Feature tests for every endpoint. That is the difference between a tutorial copy and a portfolio piece.'
      }
    ],

    code: [
      {
        lang: 'php',
        label: 'routes/api.php — protected, tested, real',
        code: 'Route::post("/register", [AuthController::class, "register"]);\n' +
              'Route::post("/login", [AuthController::class, "login"]);\n' +
              '\n' +
              'Route::middleware("auth:sanctum")->group(function () {\n' +
              '    Route::apiResource("todos", TodoController::class);\n' +
              '    Route::post("todos/{todo}/toggle", [TodoController::class, "toggle"]);\n' +
              '});'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'Everything rests on this shape: public auth, protected resources. The toggle endpoint flips is_completed — a nice non-CRUD action to prove you control the flow, not just the boilerplate.' }
    ],

    mistakes: [
      'Skipping the policy and manually comparing user ids inside every controller method — it works, but it is exactly the duplication you will forget to update in one place.',
      'Writing zero tests "because it\'s just a todo app" — the todo app is precisely where tests teach you the pattern painlessly.',
      'Returning raw models instead of a TodoResource — public API leaks internal fields and an inconsistent shape.'
    ],

    proTip: 'Ship it, then show it: a working HTTPS URL beats a screenshot. Deploy this one to a free host and link it on your GitHub README. "It works on my machine" does not count for anything here.',

    quiz: {
      cat: 'Project',
      question: 'Why must unauthenticated requests to /api/todos return 401?',
      options: [
        'Because the routes sit behind auth:sanctum middleware',
        'Because the API is broken',
        'Because todos are public',
        'Because 401 is faster'
      ],
      correct: 0,
      feedback: { correct: 'Correct. The middleware group rejects requests without a valid token before the controller runs.', wrong: 'Nope. auth:sanctum demands a token; otherwise it stops the request with 401.' }
    },

    challenge: {
      lang: 'php',
      text: 'Build the whole thing: migration, model+relation, FormRequest, apiResource controller, TodoPolicy, TodoResource, Sanctum auth, Feature tests that cover create/list/toggle/ownership denial. Then deploy it and use it from Postman live.',
      hint: 'Start with make:model -m -f Todo, then work outward. Test list acts as your spec.' 
    ,
      solution: "# 1) Model + migration + factory\nphp artisan make:model Todo -m -f\n// migration:\n$table->foreignId(\"user_id\")->constrained()->cascadeOnDelete();\n$table->string(\"title\");\n$table->boolean(\"done\")->default(false);\n// User: hasMany(Todo::class)   Todo: belongsTo(User::class)\n\n# 2) FormRequest\nphp artisan make:request StoreTodoRequest   // title => required|max:255\n\n# 3) Controller (api resource) — index/store/show/update/destroy,\n#    only the owner's todos: $request->user()->todos\n\n# 4) Policy\nphp artisan make:policy TodoPolicy --model=Todo\npublic function update(User $user, Todo $todo) { return $user->id === $todo->user_id; }\npublic function destroy(User $user, Todo $todo) { return $user->id === $todo->user_id; }\n\n# 5) Resource: id, title, done\n\n# 6) Sanctum login → token (User: use HasApiTokens)\n\n# 7) Feature tests — THE spec:\npublic function test_guest_cannot_toggle_others_todo()\n{\n    $other = User::factory()->create();\n    $todo = Todo::factory()->for($other)->create();\n\n    $this->actingAs($other, \"sanctum\")\n        ->patchJson(\"/api/todos/{$todo->id}\", [\"done\" => true])\n        ->assertStatus(403);\n}\n\n# 8) Deploy + drive it from Postman live.",
      solutionLang: "php"},

    miniProject: {
      title: 'Todo API Project Checklist',
      text: 'Track yourself as a real dev would: which pieces took longest, which error you hit repeatedly, and what you would improve. This becomes the "challenges I faced" story for interviews.',
      steps: [
        'Set up Laravel + Sanctum + auth routes',
        'Create the todos migration, model, factory with user relation',
        'Write the controller using the policy + resource + request',
        'Cover every endpoint with Feature tests',
        'Deploy with HTTPS and confirm with Postman'
      ]
    },

    prev: { slug: 'deploy-https', title: 'HTTPS & Domains' },
    next: { slug: 'projects-blog', title: 'Blog API' }
  },

  'projects-blog': {
    id: 'projects-blog',
    section: 'Real Projects',
    level: '11',
    title: 'Blog API',
    time: '4–5 days',
    difficulty: 'Advanced',
    book: 'Book Chapter 11 · Project 2',

    intro: 'A blog API is the todo app with teeth: authors write posts, admins moderate, everyone reads, and comments crawl out of the woodwork. This is where relations and queries stop being exercises and start being the product.',

    whyMatters: 'Blogs had the exact shape of half the real APIs you\'ll build: public read side, protected write side, categories, comments, filters, pagination. Master this and "CMS for lawyers" is the same job with different nouns.',

    explanation: [
      { tag: 'heading', text: 'The schema' },
      { tag: 'text', text: 'posts (id, user_id author, title, slug unique, body, status: draft/published), categories (id, name, slug), post_category pivot, comments (id, post_id, user_id, body). All three relations: belongsTo, belongsToMany, hasMany.' },
      { tag: 'heading', text: 'Public vs protected' },
      { tag: 'text', text: 'Public endpoints: GET /posts (published, paginated), GET /posts/{slug} (published), GET /posts/{post}/comments. Protected: creating/editing posts, comments, and anything admin-ish. This split mirrors real-world read/write separation.' },
      { tag: 'heading', text: 'Performance habits' },
      { tag: 'text', text: 'Eager-load author and comments count with <span class="inline-code">withCount</span> to dodge N+1. Slug in the URL (not id) for friendly links — add a unique index and a route model binding by slug. Pagination on every list endpoint.'
      }
    ],

    code: [
      {
        lang: 'php',
        label: 'Post model: relations that make the API come alive',
        code: 'class Post extends Model\n' +
              '{\n' +
              '    protected $casts = ["status" => "string"];\n' +
              '\n' +
              '    public function author(): BelongsTo\n' +
              '    {\n' +
              '        return $this->belongsTo(User::class, "user_id");\n' +
              '    }\n' +
              '\n' +
              '    public function categories(): BelongsToMany\n' +
              '    {\n' +
              '        return $this->belongsToMany(Category::class);\n' +
              '    }\n' +
              '\n' +
              '    public function comments(): HasMany\n' +
              '    {\n' +
              '        return $this->hasMany(Comment::class);\n' +
              '    }\n' +
              '\n' +
              '    public function scopePublished($query)\n' +
              '    {\n' +
              '        return $query->where("status", "published");\n' +
              '    }\n' +
              '}'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'BelongsTo, BelongsToMany, HasMany — one of each. The <span class="inline-code">scopePublished</span> query is the reusable "only show published" rule used by every public endpoint. This is a model that reads like documentation.' }
    ],

    mistakes: [
      'Publishing the slug and then changing URLs — once public, treat slugs like API contracts; version or redirect instead of breaking.',
      'Querying posts page by page without eager loading and watching page 3 trigger 200 queries.',
      'Letting "draft" posts slip into the public list because the index didn\'t apply scopePublished.'
    ],

    proTip: 'Write the tests from the client\'s perspective: "guest sees published posts only", "author edits own post only", "pinned posts sort first". If a test needs a new scene, that\'s a real requirement, not homework.',

    quiz: {
      cat: 'Project',
      question: 'How do you list only published posts on the public feed?',
      options: [
        'Post::published()->latest()->paginate(...)',
        'Post::all() and filter in the browser',
        'Post::where("status", "!==", "draft")->get()',
        'Only by admin action'
      ],
      correct: 0,
      feedback: { correct: 'Correct. A scope keeps the rule in one place and readable.', wrong: 'Nope. A published() scope on the model keeps the rule in one reusable place — filtering in the browser is not a backend.' }
    },

    challenge: {
      lang: 'php',
      text: 'Build the blog API. Public: paginated published feed (with author, categories, comments_count), single post by slug, comments for a post. Protected: author create/update/delete own posts, commenting, and an admin-only "approve comment" endpoint. Add tests for the guest-vs-authenticated split.',
      hint: 'Use route model binding by slug for posts; withCount for comments; scopePublished everywhere public.'
    ,
      solution: "# Public routes (api.php):\nRoute::get(\"/posts\", [PostController::class, \"index\"]);          // paginated feed\nRoute::get(\"/posts/{post}\", [PostController::class, \"show\"]);    // by slug\nRoute::get(\"/posts/{post}/comments\", [CommentController::class, \"index\"]);\n\nRoute::middleware(\"auth:sanctum\")->group(function () {\n    Route::post(\"/posts\", [PostController::class, \"store\"]);\n    Route::put(\"/posts/{post}\", [PostController::class, \"update\"]);\n    Route::delete(\"/posts/{post}\", [PostController::class, \"destroy\"]);\n    Route::post(\"/posts/{post}/comments\", [CommentController::class, \"store\"]);\n    Route::post(\"/comments/{comment}/approve\", [CommentController::class, \"approve\"])\n        ->middleware(\"can:approve,comment\");\n});\n\n# Model binding by slug:\npublic function show(Post $post) { ... }\n# post->slug in route: Route::get(\"/posts/{post:slug}\", ...)\n\n# Feed query:\nPost::published()->withCount(\"comments\")->with([\"author\", \"categories\"])->paginate();\n\n# scopePublished: whereNotNull(\"published_at\")\n\n# Tests cover the guest-vs-authenticated split:\n# guests see feed 200, but POST /posts → 401.",
      solutionLang: "php"},

    prev: { slug: 'projects-todo', title: 'Todo API' },
    next: { slug: 'projects-auth', title: 'Auth API' }
  },

  'projects-auth': {
    id: 'projects-auth',
    section: 'Real Projects',
    level: '11',
    title: 'Auth API',
    time: '2–3 days',
    difficulty: 'Advanced',
    book: 'Book Chapter 11 · Project 3',

    intro: 'This project is pure plumbing and it is the most copied code in your whole journey: registration, login/logout, me, password resets, email verification, and token lifecycles. Get this airtight and your other projects ride on it safely.',

    whyMatters: 'Auth is where "works locally" is not enough — a hole here costs real accounts. Building a hardened Auth API on purpose (not by accident) is the clearest proof that you understand tokens, hashing, rate limits, and policies.',

    explanation: [
      { tag: 'heading', text: 'The endpoints' },
      { tag: 'text', text: '<strong>POST /register</strong> — validate, hash, create, return token + user. <strong>POST /login</strong> — validate credentials, 401 on mismatch, return token. <strong>GET /me</strong> — the token tells you who; return the user resource. <strong>POST /logout</strong> — revoke the current token on the server.' },
      { tag: 'heading', text: 'Hardening' },
      { tag: 'text', text: 'Rate-limit login (throttle:5,1). Never leak which field was wrong ("These credentials do not match our records"). Same response timing for wrong-email and wrong-password. Abilities on tokens: scope what a fresh token can do.' },
      { tag: 'heading', text: 'Databases and edge cases' },
      { tag: 'text', text: 'Unique email (case-insensitive, trim it), a password confirmation on register, token revocation on logout, and idempotent login (logging in again just issues another token — that is normal). Email verification and password reset can be added with Laravel\'s built-ins.'
      }
    ],

    code: [
      {
        lang: 'php',
        label: 'login(): the strict, unhackable version',
        code: 'public function login(Request $request)\n' +
              '{\n' +
              '    $credentials = $request->validate([\n' +
              '        "email" => ["required", "email"],\n' +
              '        "password" => ["required", "string"],\n' +
              '    ]);\n' +
              '\n' +
              '    $user = User::where("email", $credentials["email"])->first();\n' +
              '\n' +
              '    if (! $user || ! Hash::check($credentials["password"], $user->password)) {\n' +
              '        throw ValidationException::withMessages([\n' +
              '            "email" => ["These credentials do not match our records."],\n' +
              '        ]);\n' +
              '    }\n' +
              '\n' +
              '    return response()->json([\n' +
              '        "token" => $user->createToken("client")->plainTextToken,\n' +
              '        "user" => new UserResource($user),\n' +
              '    ]);\n' +
              '}'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'One branch for both failure reasons (no user OR wrong password) and one generic message. That means no timing/response difference between "email exists" and "password wrong" — exactly what prevents user enumeration.' }
    ],

    mistakes: [
      'Returning "email not found" vs "password wrong" separately as JSON — that is user enumeration on a silver platter.',
      'Logging credentials or tokens "for debugging" — never, ever. Log events like "login failed", not the payload.',
      'Allowing unlimited login attempts — brute force is a script away. throttle:5,1 is one string.'
    ],

    proTip: 'Add an <span class="inline-code">active</span> boolean on users and a middleware that rejects banned accounts before they reach your precious controllers. A suspended user should 403 on every route, consistently.',

    quiz: {
      cat: 'Auth',
      question: 'Why give the same error for "no such email" and "wrong password"?',
      options: [
        'To prevent user enumeration (attackers cannot learn which emails exist)',
        'To save database queries',
        'Because Laravel forbids detailed errors',
        'There is no reason'
      ],
      correct: 0,
      feedback: { correct: 'Correct. If wrong-email and wrong-password respond differently, attackers learn which addresses are registered.', wrong: 'Nope. Generic messages prevent attackers from learning which emails exist — that is user enumeration defense.' }
    },

    challenge: {
      lang: 'php',
      text: 'Build a complete Auth API: register/login/me/logout with Sanctum, throttled login, generic failure messages, abilities on tokens, Feature tests for: valid register, wrong password, no-token 401, logout invalidates token.',
      hint: 'Tests: actingAs($user)->getJson("/api/me") for authed, and assertStatus(401) for the tokenless case.'
    ,
      solution: "// routes/api.php\nRoute::post(\"/register\", [AuthController::class, \"register\"]);\nRoute::post(\"/login\", [AuthController::class, \"login\"])->middleware(\"throttle:5,1\");\n\nRoute::middleware(\"auth:sanctum\")->group(function () {\n    Route::get(\"/me\", [AuthController::class, \"me\"]);\n    Route::post(\"/logout\", [AuthController::class, \"logout\"]);\n});\n\n// register\npublic function register(Request $request)\n{\n    $validated = $request->validate([\n        \"name\" => \"required|string|max:255\",\n        \"email\" => \"required|email|unique:users,email\",\n        \"password\" => \"required|min:8|confirmed\",\n    ]);\n\n    $user = User::create([...$validated, \"password\" => Hash::make($validated[\"password\"])]);\n    $token = $user->createToken(\"web\", [\"posts:all\"])->plainTextToken;\n\n    return response()->json([\"token\" => $token, \"user\" => $user], 201);\n}\n\n// login — same message whether the email or the password is wrong\npublic function login(Request $request)\n{\n    $credentials = $request->validate([\n        \"email\" => \"required|email\",\n        \"password\" => \"required\",\n    ]);\n\n    if (!Auth::attempt($credentials)) {\n        return response()->json([\"message\" => \"Invalid credentials.\"], 401);\n    }\n\n    $user = Auth::user();\n    return [\"token\" => $user->createToken(\"web\")->plainTextToken, \"user\" => $user];\n}\n\n// logout invalidates the current token\npublic function logout(Request $request)\n{\n    $request->user()->currentAccessToken()->delete();\n    return response()->noContent();\n}\n\n// tests: valid register → 201 · wrong password → 401\n//        /me without token → 401 · logout then old token → 401",
      solutionLang: "php"},

    prev: { slug: 'projects-blog', title: 'Blog API' },
    next: { slug: 'projects-ecommerce', title: 'E-Commerce API' }
  },

  'projects-ecommerce': {
    id: 'projects-ecommerce',
    section: 'Real Projects',
    level: '11',
    title: 'E-Commerce API',
    time: '5–6 days',
    difficulty: 'Advanced',
    book: 'Book Chapter 11 · Project 4',

    intro: 'Cart, products, stock, orders, payments (mock). The e-commerce API is the fitness test: it forces you to reason about state — who owns the cart, what happens to stock at payment, and why order totals cannot be recomputed from product prices.',

    whyMatters: 'E-commerce is the highest-density real-world backend domain: transactions, concurrency, invariants ("stock can\'t go negative"), and money (never floats). Build this right and your resume stops looking like a course collection.',

    explanation: [
      { tag: 'heading', text: 'The entities' },
      { tag: 'text', text: 'products (price in integer cents!), categories, carts (one per user), cart_items (product_id + quantity), orders (user_id, status, total_cents), order_items (snapshot of product name/price at order time — prices change later).' },
      { tag: 'heading', text: 'The critical rules' },
      { tag: 'text', text: '<strong>Stock must never go negative</strong> — use a database constraint or a lock around decrements. <strong>Order totals freeze at purchase time</strong> — they reference order_items snapshots, not today\'s product price. <strong>Money is integer cents</strong>, never float/double — floating point cannot represent cents exactly.' },
      { tag: 'heading', text: 'The flow' },
      { tag: 'text', text: 'Add to cart → view cart with totals → place order (validate stock, lock rows, decrement, create order + items in a DB transaction, clear the cart) → order has status pending/paid/shipped. Mock the payment as a webhook-grade endpoint that flips status.'
      }
    ],

    code: [
      {
        lang: 'php',
        label: 'Placing an order — the transaction that keeps your shop honest',
        code: 'DB::transaction(function () use ($user, $cartItems) {\n' +
              '    foreach ($cartItems as $item) {\n' +
              '        $product = Product::where("id", $item->product_id)\n' +
              '                        ->lockForUpdate()->first();\n' +
              '\n' +
              '        if ($product->stock < $item->quantity) {\n' +
              '            throw ValidationException::withMessages([\n' +
              '                "stock" => ["Not enough stock for {$product->name}"],\n' +
              '            ]);\n' +
              '        }\n' +
              '\n' +
              '        $product->decrement("stock", $item->quantity);\n' +
              '    }\n' +
              '\n' +
              '    $totalCents = $cartItems->sum(\n' +
              '        fn ($item) => $item->product->price_cents * $item->quantity\n' +
              '    );\n' +
              '\n' +
              '    $order = Order::create([\n' +
              '        "user_id"    => $user->id,\n' +
              '        "status"     => "pending",\n' +
              '        "total_cents" => $totalCents,\n' +
              '    ]);\n' +
              '\n' +
              '    foreach ($cartItems as $item) {\n' +
              '        $order->items()->create([\n' +
              '            "product_id"  => $item->product_id,\n' +
              '            "name"        => $item->product->name,\n' +
              '            "price_cents" => $item->product->price_cents,\n' +
              '            "quantity"    => $item->quantity,\n' +
              '        ]);\n' +
              '    }\n' +
              '\n' +
              '    $user->cart()->delete();\n' +
              '});'
      }
    ],

    codeExplained: [
      { tag: 'text', text: '<span class="inline-code">lockForUpdate</span> locks the stock row so two parallel checkouts cannot both sell the last unit. The transaction rolls everything back if any step fails — no half-orders, no negative stock, no floating money.' }
    ],

    mistakes: [
      'Storing prices as floats — 0.1 + 0.2 !== 0.3 in binary. Integer cents, always.',
      'Recomputing order totals from live product prices later — prices change; orders must not.',
      'Decrementing stock without a lock or constraint — the classic double-sold-last-item bug under load.'
    ],

    proTip: 'Put a CHECK constraint on stock >= 0 in the migration. Even if business logic slips, the database refuses to let stock go negative. Defense in depth — the database is the last honest man.',

    quiz: {
      cat: 'E-Commerce',
      question: 'Why store prices and totals as integer cents instead of float?',
      options: [
        'Float cannot represent decimal cents exactly, causing rounding bugs in money',
        'Cents are easier to type',
        'Databases reject floats',
        'It saves disk space'
      ],
      correct: 0,
      feedback: { correct: 'Correct. Money in floats is rounding-bug lottery. 0.1+0.2 !== 0.3. Integer cents make totals exact.', wrong: 'Nope. Binary floats cannot represent most decimal fractions exactly, so money computations drift. Integers are exact.' }
    },

    challenge: {
      lang: 'php',
      text: 'Build the e-commerce API: products + categories with filtering and pagination; user cart (add/update/remove/view); checkout that locks stock, snapshots prices, creates the order transactionally; an order index; and a mock payment endpoint that marks orders paid. Add Feature tests including a race test for the last item.',
      hint: 'Test the race by firing two concurrent checkouts in a test — lockForUpdate should sell only one.'
    ,
      solution: "public function store(Request $request)\n{\n    $cart = $request->user()->cart->load(\"items\");\n\n    if ($cart->items->isEmpty()) {\n        return response()->json([\"message\" => \"Cart is empty.\"], 422);\n    }\n\n    $order = DB::transaction(function () use ($cart) {\n        $order = Order::create([\"user_id\" => $cart->user_id, \"status\" => \"pending\"]);\n\n        foreach ($cart->items as $item) {\n            $product = Product::whereKey($item->product_id)->lockForUpdate()->first();\n\n            if ($product->stock < $item->quantity) {\n                throw ValidationException::withMessages([\n                    \"cart\" => \"Not enough stock for {$product->name}\",\n                ]);\n            }\n\n            $product->decrement(\"stock\", $item->quantity);\n\n            $order->items()->create([\n                \"product_id\" => $product->id,\n                \"quantity\" => $item->quantity,\n                \"unit_price\" => $product->price,   // price snapshot\n            ]);\n        }\n\n        $cart->items()->delete();\n        return $order;\n    });\n\n    return OrderResource::make($order);\n}\n\n// race test — two checkouts on the last unit:\n// lockForUpdate serialises them; only ONE completes, the other gets 422.\n\n// mock payment endpoint: marks the order paid.",
      solutionLang: "php"},

    prev: { slug: 'projects-auth', title: 'Auth API' },
    next: { slug: 'projects-job-market', title: 'Job Marketplace API' }
  },

  'projects-job-market': {
    id: 'projects-job-market',
    section: 'Real Projects',
    level: '11',
    title: 'Job Marketplace API',
    time: '1–2 weeks',
    difficulty: 'Advanced',
    book: 'Book Chapter 11 · Project 5',

    intro: 'The big one. A marketplace where companies post jobs and developers apply. Two roles, complex listings, search across many fields, applications (one per user per job), and the kind of feature creep that would dissolve a lesser programmer.',

    whyMatters: 'This is the project that gets interviews. It proves you can hold a full product in your head: roles, permissions, search, filters, file uploads (CVs), pagination, sorting, and a clean public API. It is your demo reel.',

    explanation: [
      { tag: 'heading', text: 'Roles and gates' },
      { tag: 'text', text: '<strong>Company</strong> — can create/manage jobs (a "company" model with a user). <strong>Developer</strong> — can browse jobs and apply (one application per job per developer). <strong>Admin</strong> (you) — everything. Policies: only the job owner edits; only confirmed employers post.'
      },
      { tag: 'heading', text: 'Search that works' },
      { tag: 'text', text: 'Filter by keyword (title + description + company), by location/country, by type (remote/hybrid/onsite), by category, sorted by newest or salary. Paginate everything. Keep it all through the query builder — bound, safe, index-aware.' },
      { tag: 'heading', text: 'Applications with receipts' },
      { tag: 'text', text: 'A developer applies with an optional cover letter + CV file (store on disk/S3, never in the DB). The API returns the application status (pending/accepted/rejected). Companies see applications for their jobs only. Unique(user_id, job_id) keeps one application per (developer, job).'
      }
    ],

    code: [
      {
        lang: 'php',
        label: 'Job model: the filters most marketplaces need',
        code: 'public function scopeFilter($query, array $filters): Builder\n' +
              '{\n' +
              '    return $query\n' +
              '        ->when($filters["q"] ?? null, fn ($q, $s) =>\n' +
              '            $q->where("title", "like", "%{$s}%")\n' +
              '              ->orWhereHas("company", fn ($c) =>\n' +
              '                  $c->where("name", "like", "%{$s}%")))\n' +
              '        ->when($filters["type"] ?? null, fn ($q, $t) =>\n' +
              '            $q->where("type", $t))\n' +
              '        ->when($filters["country"] ?? null, fn ($q, $c) =>\n' +
              '            $q->where("country", $c))\n' +
              '        ->when($filters["min_salary"] ?? null, fn ($q, $s) =>\n' +
              '            $q->where("salary_min", ">=", $s));\n' +
              '}'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'The <span class="inline-code">when()</span> pattern only applies a filter when the value exists — empty query params can\'t corrupt the results. orWhereHas searches company names, so "Laravel @ Zorix" style queries work. Every value is bound safely.' }
    ],

    mistakes: [
      'Letting a developer apply to the same job 80 times (no unique constraint) — the employer\'s inbox drowns.',
      'Showing every company every applicant\'s CV file — policies must scope to that job\'s owner.',
      'Building the saga in one giant controller — split into JobController, ApplicationController, and keep search in a filter scope or query object.'
    ],

    proTip: 'Write the API with real interview answers in mind: "How did you prevent double applications?" (unique index) and "How would this scale?" (cursor pagination, indexed filters, queued file storage). The project is also your interview prep.',

    quiz: {
      cat: 'Marketplace',
      question: 'How do you prevent a developer from applying twice to the same job?',
      options: [
        'A unique index on (user_id, job_id) plus a check in the controller',
        'By refusing to accept form submits',
        'By storing applications in a cache',
        'Developers are too lazy to apply twice'
      ],
      correct: 0,
      feedback: { correct: 'Correct. A DB constraint guarantees it even if two requests race simultaneously.', wrong: 'Nope. The unique index (user_id, job_id) is the hard guarantee; controller checks are polite but not enough alone.' }
    },

    challenge: {
      lang: 'php',
      text: 'Build the Job Marketplace API: company + developer roles with policies; jobs CRUD (companies, private); public job search with the filters above; applications with CV upload + unique(user_id, job_id); employer-only application views; status updates; notifications (mock). Feature-test the double-application and the cross-company CV leak.',
      hint: 'TDD it like a pro: write the test for "developer cannot view another company\'s applications" FIRST, watch it fail, then add the policy.'
    ,
      solution: "Roles: company + developer (roles table / enum).\n\nJobs CRUD:\n- companies create/edit/delete their OWN jobs (JobPolicy: owner check)\n- job index/search is public (filters: title, city, type, salary range, min_experience)\n\nApplications:\n- applications table: user_id, job_id, cv_path, status — UNIQUE(user_id, job_id)\n- developers apply once (double-application test → 422)\n- company sees candidates only for ITS jobs (cross-company CV leak test → 403)\n\nStatus updates: pending → rejected/accepted via a policy-guarded route.\nNotifications: mock Notification facade and assert it fired in tests.\n\nTDD order: write \"developer cannot view another company's applications\" FIRST,\nwatch it fail, then add the policy that makes it pass.",
      solutionLang: "php"},

    prev: { slug: 'projects-ecommerce', title: 'E-Commerce API' },
    next: { slug: 'projects-portfolio', title: 'Portfolio Project' }
  },

  'projects-portfolio': {
    id: 'projects-portfolio',
    section: 'Real Projects',
    level: '11',
    title: 'Portfolio Project',
    time: '1 week',
    difficulty: 'Advanced',
    book: 'Book Chapter 11 · Project 6',

    intro: 'You have a todo API, a blog API, a hardened auth API, an e-commerce API, and a job marketplace. Do not leave them in a repo graveyard. Glue one of them to a frontend and ship it as a living, clickable product you can hand to a human.',

    whyMatters: 'Backend skills are invisible to many interviewers until they can click something. One full-stack deployment — API + simple frontend + HTTPS + live URL — converts "I built APIs" from a claim into a demonstrable fact.',

    explanation: [
      { tag: 'heading', text: 'Pick the crown jewel' },
      { tag: 'text', text: 'Choose the marketplace or e-commerce API (they show the most). Build a clean single-page frontend against it — plain HTML/JS or a small Vue/React if you already know one. The point is calling YOUR API, not writing a frontend masterpiece.' },
      { tag: 'heading', text: 'Present it like a product' },
      { tag: 'text', text: 'README with: what it does, the API base URL, a cURL example, the repo, a screenshot, and "challenges solved". Add a Postman collection. Employer-facing demo users (demo@company.com / demo@dev.com) so any recruiter can log in without signing up.' },
      { tag: 'heading', text: 'Interviewers peek in three places' },
      { tag: 'text', text: 'The live URL (does it work?), the README (do they know what they built?), and the public repo (are there tests? is .env ignored? are secrets missing?). Polish all three, because that is the exactly the review a senior does on your code.'
      }
    ],

    code: [
      {
        lang: 'bash',
        label: 'The visibility loop: ship, then measure',
        code: '# 1) run the test suite\nphp artisan test\n' +
              '\n' +
              '# 2) seed demo users\nphp artisan db:seed --class=DemoDataSeeder\n' +
              '\n' +
              '# 3) show the world\n# deploy -> HTTPS -> git push to a public/business repo\n' +
              'git push origin main'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'Tests green, demo accounts seeded, deployed, committed. That\'s the checklist of "portfolio piece", not "homework". If you cannot run php artisan test clean, fix the code before you let recruiters see it.' }
    ],

    mistakes: [
      'Leaving a super-secret APP_KEY and real DB credentials in the seeded demo — rotate anything public.',
      'No demo accounts — forcing a recruiter to register is friction you will regret at 2am.',
      'One giant ambiguous repo named "project" — name it professionally (job-marketplace-api) so a GitHub search and your own CV match.'
    ],

    proTip: 'Write 3 bullet points per project starting with an outcome: "Reduced checkout failures by locking stock rows", not "Used lockForUpdate". Outcome-first reads like a senior; action-first reads like a list of tools.',

    quiz: {
      cat: 'Portfolio',
      question: 'What makes a backend project interview-proof?',
      options: [
        'Live URL + passing tests + README + demo accounts, with no secrets in the repo',
        'A big complex codebase no one can run',
        'A private repo nobody can see',
        'Only a screenshot of the code editor'
      ],
      correct: 0,
      feedback: { correct: 'Correct. Clickable, tested, documented, and safe to share. That is the full package.', wrong: 'Nope. Interview-proof = deployable, tested, documented, with demo access and no secrets. Everything else is clutter.' }
    },

    challenge: {
      lang: 'text',
      text: 'Final flagship week: pick your best API, build a minimal frontend against it, add demo accounts, write a clean README, secure an HTTPS URL, and send the link to exactly one person you trust for brutal feedback. Fix every complaint you agree with.',
      hint: 'Brutal feedback on free hosting issues beats a stunned silence from a recruiter later. Ship first, polish after.'
    ,
      solution: "Week plan:\n- Day 1–3: pick the best API, build a minimal frontend against it\n- Day 4: demo accounts, seed data, clean README (what / how / demo logins / stack)\n- Day 5: https URL (certbot), mobile + desktop smoke test\n- Day 6: send the link to exactly one person you trust — ask for BRUTAL feedback\n- Day 7: fix every complaint you agree with, re-send once\n\n\"The loading spinner never ends on slow phones\" → moved the demo to better hosting.\nShip first, polish after.",
      solutionLang: "text"},

    prev: { slug: 'projects-job-market', title: 'Job Marketplace API' },
    next: { slug: 'job-portfolio', title: 'Your Portfolio' }
  }

});