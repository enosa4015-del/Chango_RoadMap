/* ========================================
   Chango — Backend Roadmap · Level 06: REST APIs (8 lessons)
   ======================================== */

Object.assign(LESSONS, {

  'api-what': {
    id: 'api-what',
    section: 'REST APIs',
    level: '06',
    title: 'What is an API?',
    time: '20 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 6 · Intro',

    intro: 'Your frontend wants data. Your database has data. The API is the awkward but very professional friend who introduces them, takes the order, and brings back exactly what was asked. No more, no less.',

    whyMatters: 'Almost no real project these days is a single page that talks directly to a database. The backend exposes an API — a contract — and every other client (web, mobile, third-party) talks to that. If you can build good APIs, you can build almost anything.',

    explanation: [
      { tag: 'heading', text: 'What an API actually is' },
      { tag: 'text', text: 'API stands for Application Programming Interface. Practically, it is a set of well-defined URLs (<strong>endpoints</strong>) that accept requests and return responses — almost always JSON. Think of it as the menu of a restaurant: you (the client) order off the menu, and the kitchen (the server) sends the dish (data).' },
      { tag: 'heading', text: 'REST in particular' },
      { tag: 'text', text: 'REST is a style, not a law. It is built on resources (<strong>nouns</strong>) and standard HTTP verbs (<strong>actions</strong>). A <strong>resource</strong> is a thing your app works with — users, posts, orders. You use the verb in the request to say what you want to do to that resource.' },
      { tag: 'heading', text: 'The golden rule' },
      { tag: 'text', text: 'REST routes are about resources, not actions. Good: <span class="inline-code">POST /users</span>. Bad: <span class="inline-code">POST /createUser</span>. The verb already says "create". The URL should only say <em>what</em>.' }
    ],

    code: [
      {
        lang: 'php',
        label: 'An API route in Laravel (routes/api.php)',
        code: 'Route::get("/users", [UserController::class, "index"]);\n' +
              'Route::post("/users", [UserController::class, "store"]);\n' +
              'Route::get("/users/{id}", [UserController::class, "show"]);\n' +
              'Route::put("/users/{id}", [UserController::class, "update"]);\n' +
              'Route::delete("/users/{id}", [UserController::class, "destroy"]);'
      },
      {
        lang: 'json',
        label: 'The JSON a client gets back',
        code: '{\n' +
              '  "data": {\n' +
              '    "id": 1,\n' +
              '    "name": "Sara",\n' +
              '    "email": "sara@example.com"\n' +
              '  }\n' +
              '}'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'Each line is one endpoint. The verb does the action, the URL names the resource. <span class="inline-code">/users</span> for the collection, <span class="inline-code">/users/{id}</span> for a single record. This is the "resource-oriented" idea — the same five lines cover 90% of API routes you will ever write.' },
      { tag: 'text', text: 'JSON is the universal language of APIs. What you return is almost always a structured chunk of data like this. Frontend <span class="inline-code">fetch()</span>, mobile apps, and third parties all read it.' }
    ],

    mistakes: [
      'Putting actions in the URL (<span class="inline-code">/getAllUsers</span>) instead of resources and verbs (<span class="inline-code">GET /users</span>). The verb is already the action.',
      'Returning HTML or plain text instead of JSON — clients expect structured data, not a web page.',
      'Ignoring the "contract". If you change the shape of your JSON, every consumer breaks. Version your API when you must change it.'
    ],

    proTip: 'Before you build a route, ask: "What resource is this about, and what verb describes the action?" If you can answer cleanly, the URL writes itself.',

    quiz: {
      cat: 'REST Basics',
      question: 'Which of these is idiomatic REST?',
      options: [
        'POST /users — create a user',
        'POST /createUser — create a user',
        'GET /getAllUsers — list users',
        'DELETE /removeUser/5 — delete user 5'
      ],
      correct: 0,
      feedback: { correct: 'Correct. Nouns in the URL, verbs in the request. /users + POST = create.', wrong: 'Nope. REST keeps action verbs out of the URL. POST /users says "create a user" without the word "create".' }
    },

    challenge: {
      lang: 'text',
      text: 'Design the endpoint set for an e-commerce API: resources are <strong>products</strong> and <strong>orders</strong>. Write the 5 core routes for each (list, create, show one, update, delete). Use proper REST style.',
      code: '// products\n...\n// orders\n...',
      hint: 'Collection = plural noun. Single item = plural noun + /{id}. Verb decides the action.'
    ,
      solution: "// products\nGET    /api/products          // list\nPOST   /api/products          // create\nGET    /api/products/{id}     // show one\nPUT    /api/products/{id}     // update\nDELETE /api/products/{id}     // delete\n\n// orders\nGET    /api/orders\nPOST   /api/orders\nGET    /api/orders/{id}\nPUT    /api/orders/{id}\nDELETE /api/orders/{id}",
      solutionLang: "text"},

    prev: { slug: 'laravel-container', title: 'Service Container' },
    next: { slug: 'api-http', title: 'HTTP Methods' }
  },

  'api-http': {
    id: 'api-http',
    section: 'REST APIs',
    level: '06',
    title: 'HTTP Methods',
    time: '25 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 6 · HTTP',

    intro: 'GET, POST, PUT, PATCH, DELETE. Five verbs, one language, an entire industry. If you understand which verb to use and when, you understand how the whole web talks.',

    whyMatters: 'The method tells the server what <em>intent</em> the request has. Every framework (Laravel included) routes on this. Use the wrong verb and you either hide actions behind GET or you make DELETE feel like an accident. This is the vocabulary of API design.',

    explanation: [
      { tag: 'heading', text: 'The main five' },
      { tag: 'text', text: '<strong>GET</strong> — fetch data, never change anything (safe & idempotent). <strong>POST</strong> — create something new. <strong>PUT</strong> — replace a record entirely (idempotent: same call twice = same result). <strong>PATCH</strong> — update only part of a record. <strong>DELETE</strong> — remove it.' },
      { tag: 'heading', text: 'Idempotent means what?' },
      { tag: 'text', text: 'A request is <strong>idempotent</strong> if calling it 1 time or 100 times gives the same result. GET, PUT, DELETE are idempotent. POST is not — every POST creates a new record, so calling it twice creates two records.' },
      { tag: 'heading', text: 'GET is not for changing things' },
      { tag: 'text', text: 'Browsers, caches, and crawlers assume GET is safe. If your GET route deletes a user, your site can be killed by a pre-fetching browser tab or a link scraper. Verbs are not suggestions — they are safety guarantees.' }
    ],

    code: [
      {
        lang: 'php',
        label: 'Same resource, five different verbs',
        code: 'Route::get("/products", [ProductController::class, "index"]);       // list\n' +
              'Route::post("/products", [ProductController::class, "store"]);      // create\n' +
              'Route::get("/products/{id}", [ProductController::class, "show"]);   // one\n' +
              'Route::put("/products/{id}", [ProductController::class, "update"]); // replace\n' +
              'Route::patch("/products/{id}", [ProductController::class, "patch"]);// partial\n' +
              'Route::delete("/products/{id}", [ProductController::class, "destroy"]);'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'The URL is <em>the same resource</em> every time. Only the verb changes intent. Laravel\'s <span class="inline-code">Route::apiResource("products", ProductController::class)</span> generates all of these for you automatically — but you must understand what it generates.' }
    ],

    mistakes: [
      'POSTing when you mean PUT or vice versa. POST = create new, PUT = replace existing by id.',
      'Deleting on a GET route because "it was easier to link to". It becomes a time bomb the second a crawler or preload hits it.',
      'Forgetting that PATCH is partial and PUT is full replacement — mixing them up in your API docs confuses every client.'
    ],

    proTip: 'Memorize this sentence: <em>GET reads, POST creates, PUT replaces, PATCH edits, DELETE removes.</em> Five words of intent that never change.',

    quiz: {
      cat: 'HTTP Methods',
      question: 'Which method should you use to update only the "bio" field of a user?',
      options: [
        'POST',
        'PUT',
        'PATCH',
        'DELETE'
      ],
      correct: 2,
      feedback: { correct: 'PATCH updates part of a resource. PUT would replace the whole record; POST would create a new one.', wrong: 'Nope. PATCH is for partial updates. PUT replaces the entire resource.' }
    },

    challenge: {
      lang: 'text',
      text: 'For each scenario, pick the right HTTP method: (1) log in, (2) fetch the 10 latest posts, (3) update just the price of a product, (4) remove an old comment, (5) register a new account.',
      hint: 'Create = POST. Read = GET. Partial update = PATCH. Delete = DELETE.'
    ,
      solution: "1) log in                     → POST   (create a session)\n2) fetch the 10 latest posts → GET    (read/list)\n3) update just the price     → PATCH  (partial update)\n4) remove an old comment     → DELETE\n5) register a new account    → POST   (create a resource)",
      solutionLang: "text"},

    prev: { slug: 'api-what', title: 'What is an API?' },
    next: { slug: 'api-routes', title: 'Building API Routes' }
  },

  'api-routes': {
    id: 'api-routes',
    section: 'REST APIs',
    level: '06',
    title: 'Building API Routes',
    time: '30 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 6 · Routing',

    intro: 'Routes are the front door of your API. Every request walks in through a route and is handed to a controller like a guest being introduced to the owner. Get the doors right and everything inside feels sane.',

    whyMatters: 'In Laravel, API routes live in <span class="inline-code">routes/api.php</span> and are automatically prefixed with <span class="inline-code">/api</span>. Learning to declare them well — including grouped and resource routes — is the difference between tidy architecture and a route file that looks like a ransom note.',

    explanation: [
      { tag: 'heading', text: 'api.php vs web.php' },
      { tag: 'text', text: 'Web routes (<span class="inline-code">routes/web.php</span>) serve pages and have session & CSRF middleware. API routes (<span class="inline-code">routes/api.php</span>) serve data behind <span class="inline-code">/api</span> and skip the session boilerplate — they use tokens instead.' },
      { tag: 'heading', text: 'The apiResource shortcut' },
      { tag: 'text', text: 'One line generates the seven standard REST routes for a controller: index, store, show, update, destroy, edit, create (the last two are web-only and are skipped for APIs). If you want only the five, use <span class="inline-code">->only([..."])</span>.' },
      { tag: 'heading', text: 'Route parameters' },
      { tag: 'text', text: '<span class="inline-code">{id}</span> captures a value into a variable. Add <span class="inline-code">->whereNumber("id")</span> or bind a model type directly (<span class="inline-code">{user}</span>) to get Laravel to fetch the record for you — that is <strong>implicit route model binding</strong>.' }
    ],

    code: [
      {
        lang: 'php',
        label: 'routes/api.php — clean and grouped',
        code: 'Route::apiResource("posts", PostController::class)->only([\n' +
              '  "index", "store", "show", "update", "destroy"\n' +
              ']);\n' +
              '\n' +
              'Route::prefix("blog")->group(function () {\n' +
              '  Route::get("stats", [PostController::class, "stats"]);\n' +
              '  Route::post("{post}/favorite", [PostController::class, "favorite"]);\n' +
              '});'
      }
    ],

    codeExplained: [
      { tag: 'text', text: '<span class="inline-code">apiResource</span> creates list, create, show, update, patch, delete, edit routes. <span class="inline-code">->only([...])</span> keeps just the API-appropriate five. The <span class="inline-code">prefix("blog")</span> group puts sub-routes under <span class="inline-code">/api/blog/...</span> without repeating the prefix.' }
    ],

    mistakes: [
      'Putting API routes in web.php "because it worked" — you get session + CSRF overhead and URLs that clash with pages.',
      'Forgetting the <span class="inline-code">/api</span> prefix and wondering why your routes "404" — Laravel adds it automatically in api.php, so define URLs without it.',
      'Copying the same resource routes into 5 route files instead of using apiResource once.'
    ],

    proTip: 'Run <span class="inline-code">php artisan route:list</span> anytime to see every route, its middleware, and its URI in one table. It is the fastest way to understand any Laravel app you inherit.',

    quiz: {
      cat: 'Routing',
      question: 'Where do API routes live, and what prefix do they get automatically?',
      options: [
        'routes/api.php, prefixed with /api',
        'routes/web.php, prefixed with /ajax',
        'routes/api.php, no prefix',
        'routes/web.php, prefixed with /api'
      ],
      correct: 0,
      feedback: { correct: 'Correct. routes/api.php + automatic /api prefix. Web routes own the pages, API routes own the data.', wrong: 'Nope. It is routes/api.php, and Laravel prefixes them with /api for you.' }
    },

    challenge: {
      lang: 'php',
      text: 'Create the full API route set for a <strong>comments</strong> resource with only the five API methods, and add a custom route to toggle a comment\'s "is_pinned" flag under the api prefix group.',
      code: 'Route::apiResource("comments", ...)\n       ->only([...]);\n\nRoute::prefix("comments")->group(function () {\n  // toggle pinned here\n});',
      hint: 'apiResource("comments", CommentController::class), then ->only with index/store/show/update/destroy. Custom: Route::post("{comment}/pin", ...).'
    ,
      solution: "Route::apiResource(\"comments\", CommentController::class)\n    ->only([\"index\", \"store\", \"show\", \"update\", \"destroy\"]);\n\nRoute::prefix(\"comments\")->group(function () {\n    Route::post(\"{comment}/pin\", [CommentController::class, \"pin\"])\n        ->name(\"comments.pin\");\n});"},

    prev: { slug: 'api-http', title: 'HTTP Methods' },
    next: { slug: 'api-resources', title: 'API Resources' }
  },

  'api-resources': {
    id: 'api-resources',
    section: 'REST APIs',
    level: '06',
    title: 'API Resources',
    time: '30 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 6 · Resources',

    intro: 'An API Resource is a polite translator. Your database row knows how to be a model; your API needs it to be JSON. The resource decides what the outside world sees — and, more importantly, what it does not see.',

    whyMatters: 'You almost never want to return a raw model. Raw models leak passwords, internal IDs, and "updated_at" noise to every client. Resources are the public face: they shape data, hide secrets, rename fields, and keep your API predictable.',

    explanation: [
      { tag: 'heading', text: 'The public face' },
      { tag: 'text', text: 'A resource is a class that takes a model and returns a clean, written-by-you array. When Laravel serializes that array to JSON, the client sees exactly your field names and nothing else.' },
      { tag: 'heading', text: 'Naming conventions' },
      { tag: 'text', text: 'Laravel ships both <strong>Resource</strong> (single item) and <strong>ResourceCollection</strong> (list) versions. Convention: a <span class="inline-code">UserResource</span> for one user. For a list you can return a collection resource and Laravel wraps it in <span class="inline-code">{"data": [...]}</span>.' },
      { tag: 'heading', text: 'Only, whenever, with' },
      { tag: 'text', text: 'Resources give you the tools to add fields conditionally: <span class="inline-code">when(...)</span> includes a field only if true, <span class="inline-code">whenLoaded(...)</span> includes a relation only if it was eager-loaded, and <span class="inline-code">with(...)</span> adds extra top-level keys.' }
    ],

    code: [
      {
        lang: 'php',
        label: 'php artisan make:resource UserResource',
        code: 'class UserResource extends JsonResource\n' +
              '{\n' +
              '    public function toArray(Request $request): array\n' +
              '    {\n' +
              '        return [\n' +
              '            "id" => $this->id,\n' +
              '            "name" => $this->name,\n' +
              '            "email" => $this->email,\n' +
              '            "avatar" => $this->when($this->avatar, $this->avatar),\n' +
              '            "created_at" => $this->created_at->format("Y-m-d"),\n' +
              '        ];\n' +
              '    }\n' +
              '}'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'Note what is NOT in the array: <span class="inline-code">password</span>, <span class="inline-code">remember_token</span>, internal columns. <span class="inline-code">when($this->avatar, ...)</span> only includes avatar if the user has one. Every field is intentional.' }
    ],

    mistakes: [
      'Returning <span class="inline-code">$user</span> directly from a controller and letting the model’s hidden list do the censoring — one developer earlier in the queue will have defined "hidden" badly, or not at all.',
      'Forgetting <span class="inline-code">whenLoaded</span> for relations and triggering N+1 queries (one query per item per relation).',
      'Putting raw, unformatted timestamps into the API and letting every client guess the timezone.'
    ],

    proTip: 'Design your API responses around the <em>client’s needs</em>, not your table’s columns. The frontend team wants "created_at" formatted and "profile_url" — give them that, not your raw migration.',

    quiz: {
      cat: 'API Resources',
      question: 'What is the main job of an API Resource?',
      options: [
        'To define how a model is turned into safe, shaped JSON for outside clients',
        'To write the SQL queries for the controller',
        'To handle authentication',
        'To generate the migration files'
      ],
      correct: 0,
      feedback: { correct: 'Exactly. Resources are the public face of your data — they shape it and hide secrets.', wrong: 'Nope. A Resource translates a model into a clean JSON array; it doesn\'t do SQL, auth, or migrations.' }
    },

    challenge: {
      lang: 'php',
      text: 'Create a <strong>PostResource</strong> that returns: id, title, short excerpt (first 80 chars of body), author name (relation "author"), and a "comments_count" only if the count was loaded. Use whenLoaded everywhere a relation appears.',
      code: 'class PostResource extends JsonResource { ... }',
      hint: '$this->author->name for the relation, $this->whenLoaded("comments_count") or Str::limit($this->body, 80) for the excerpt.'
    ,
      solution: "class PostResource extends JsonResource\n{\n    public function toArray(Request $request): array\n    {\n        return [\n            \"id\" => $this->id,\n            \"title\" => $this->title,\n            \"excerpt\" => Str::limit($this->body, 80),\n            \"author\" => $this->whenLoaded(\"author\", fn () => $this->author->name),\n            \"comments_count\" => $this->whenCounted(\"comments\"),\n        ];\n    }\n}"},

    prev: { slug: 'api-routes', title: 'Building API Routes' },
    next: { slug: 'api-status', title: 'Status Codes' }
  },

  'api-status': {
    id: 'api-status',
    section: 'REST APIs',
    level: '06',
    title: 'Status Codes',
    time: '25 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 6 · Status Codes',

    intro: 'Every API response whispers a status code before it says anything else. 200 means "all good". 404 means "I have no idea what you are talking about". 500 means "I am on fire but trying to be professional about it".',

    whyMatters: 'Status codes are the API\'s single-chapter autobiography. Frontend code branches on them, monitoring alerts on them, and your most annoying bug will eventually turn out to be a response returning 200 with an error body. Learn to speak them fluently.',

    explanation: [
      { tag: 'heading', text: 'The families' },
      { tag: 'text', text: '<strong>2xx</strong> — worked. 200 OK, 201 Created (after a POST), 204 No Content (after a DELETE). <strong>3xx</strong> — redirects. <strong>4xx</strong> — your fault: 400 Bad Request, 401 Unauthenticated, 403 Forbidden, 404 Not Found, 422 Unprocessable Content (validation failed). <strong>5xx</strong> — server\'s fault: 500, 502, 503, 504.' },
      { tag: 'heading', text: '401 vs 403 (everyone mixes these up)' },
      { tag: 'text', text: '401 = "who are you?" (not authenticated — no valid token). 403 = "I know who you are, and you can\'t." (authenticated but not allowed). The distinction is gold when debugging.' },
      { tag: 'heading', text: 'Laravel helpers' },
      { tag: 'text', text: 'Laravel gives you helper methods: <span class="inline-code">abort(404)</span>, <span class="inline-code">abort_if(...)</span>, <span class="inline-code">response()->json(...)</span>, and for validation failures it returns 422 straight out of the box with the errors in the body.' }
    ],

    code: [
      {
        lang: 'php',
        label: 'Returning the right code',
        code: '// After creating something — 201, not 200\n' +
              'return (new UserResource($user))->response()->setStatusCode(201);\n' +
              '\n' +
              '// Model not found — 404\n' +
              'abort(404, "User not found");\n' +
              '\n' +
              '// Authorization failed — 403\n' +
              'abort_unless($request->user()->can("delete", $post), 403);'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'The code follows the outcome. Created something? 201. Asked for something that does not exist? 404. Tried something you may not do? 403. Choosing the correct code is a courtesy to every developer who consumes your API — including your future self.' }
    ],

    mistakes: [
      'Returning 200 for validation errors with a "success: false" body — every client framework assumes 2xx means success and will swallow your error.',
      'Not distinguishing 401 vs 403. Your frontend will lo-o-o-ove showing "please log in" to a user who is perfectly logged in.',
      'Returning 500 for client mistakes. Validation failures and missing resources are 4xx, not "the server exploded".'
    ],

    proTip: 'If a route "works" but the client misbehaves, mouse hover the network tab: the status code is the first symptom. 422 → fix the payload. 401/403 → fix the auth. 404 → fix the URL.',

    quiz: {
      cat: 'Status Codes',
      question: 'What is the difference between 401 and 403?',
      options: [
        '401 = not authenticated; 403 = authenticated but not allowed',
        '401 = not found; 403 = bad request',
        '401 = server error; 403 = client error',
        'They are synonyms'
      ],
      correct: 0,
      feedback: { correct: 'Exactly. 401 asks "who are you?" and 403 answers "you can\'t do that".', wrong: 'Nope. 401 is unauthenticated (no/wrong token). 403 is authenticated but forbidden.' }
    },

    challenge: {
      lang: 'text',
      text: 'Match each scenario to the right code: (1) POST /posts succeeds → ?, (2) GET /posts/999 (doesn\'t exist) → ?, (3) DELETE /posts/5 while not logged in → ?, (4) POST /posts with an empty title → ?, (5) You reload and the post loads → ?',
      hint: '201, 404, 401, 422, 200. Exactly one of each family shows up.'
    ,
      solution: "1) POST /posts succeeds    → 201 Created\n2) GET /posts/999 (missing) → 404 Not Found\n3) DELETE /posts/5 no login → 401 Unauthorized\n4) POST /posts empty title  → 422 Unprocessable Content (validation)\n5) reload, post loads       → 200 OK",
      solutionLang: "text"},

    prev: { slug: 'api-resources', title: 'API Resources' },
    next: { slug: 'api-postman', title: 'Postman Testing' }
  },

  'api-postman': {
    id: 'api-postman',
    section: 'REST APIs',
    level: '06',
    title: 'Postman Testing',
    time: '40 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 6 · Testing',

    intro: 'Postman is your API\'s gym mirror: you get to see exactly how your routes look to the outside world, poke them with requests, and break them on purpose — safely, before a real user does it at the worst moment.',

    whyMatters: 'You should never "test" your API by typing URLs in a browser and squinting. Postman gives you full control: method, headers, body, auth tokens, and — best of all — same-request replay for whatever bug you are chasing. It is the debugging tool you will use hourly.',

    explanation: [
      { tag: 'heading', text: 'Collections are your app\'s album' },
      { tag: 'text', text: 'A <strong>collection</strong> is an organized folder of requests. Name it after your API ("Chango API"), group requests by resource, and save every request with its body and headers. Your entire API becomes shareable and repeatable.' },
      { tag: 'heading', text: 'Variables beat copy-paste' },
      { tag: 'text', text: 'Define variables like <span class="inline-code">baseUrl</span> and <span class="inline-code">token</span> once. Reference them as <span class="inline-code">{{baseUrl}}</span>. When the server URL changes, you update one place, not a hundred requests.' },
      { tag: 'heading', text: 'The auth flow loop' },
      { tag: 'text', text: 'Before you can hit protected routes, you need a token. Postman flow: call the login route → grab the token from the JSON response → store it in a variable → attach it as a Bearer header. Do that and your whole collection works.' }
    ],

    code: [
      {
        lang: 'json',
        label: 'What a login response gives you (for your auth setup)',
        code: '{\n' +
              '  "token": "1|Kla3d9fLKJh3k2l1Z0x9c8v7b6n5m4q",\n' +
              '  "user": {\n' +
              '    "id": 1,\n' +
              '    "name": "Sara"\n' +
              '  }\n' +
              '}'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'In Postman you would write Test scripts like <span class="inline-code">pm.collectionVariables.set("token", pm.response.json().token)</span> in the login request. Every later request adds a header: <span class="inline-code">Authorization: Bearer {{token}}</span>.' }
    ],

    mistakes: [
      'Tapping in the whole URL/env with each request instead of using a saved baseUrl variable — switch environments and everything breaks.',
      'Forgetting to save requests to a collection and losing the exact body that reproduced a bug.',
      'Sharing a collection that contains real secrets in the Authorization header — export with the "remove sensitive data" option or use variables.'
    ],

    proTip: 'Learn the keyboard muscle memory: Ctrl+Enter sends, Ctrl+S saves. After 10 requests it is automatic and you\'ll wonder how you ever tested APIs any other way.',

    quiz: {
      cat: 'Postman',
      question: 'Why use a baseUrl variable instead of hardcoding the URL in every request?',
      options: [
        'So you can switch environments (local/staging/production) by changing one value',
        'Because Postman forbids hardcoded URLs',
        'It makes requests faster',
        'It hides the URL from the server'
      ],
      correct: 0,
      feedback: { correct: 'Correct. One variable, many requests, instant environment switching.', wrong: 'Nope. Variables let you swap environments without touching a hundred requests. That\'s the whole point.' }
    },

    challenge: {
      lang: 'json',
      text: 'In Postman, create a collection called "Todo API". Add a POST login request, write a test that grabs <strong>token</strong> from the response and stores it as a collection variable, then add a GET /api/todos request with a Bearer token header using {{token}}.',
      hint: 'Test script: pm.collectionVariables.set("token", pm.response.json().token);'
    ,
      solution: "// POST {{baseUrl}}/api/login\n// Body: { \"email\": \"...\", \"password\": \"...\" }\n// Tests tab:\npm.collectionVariables.set(\"token\", pm.response.json().token);\n\n// GET {{baseUrl}}/api/todos\n// Headers tab:\n//   Authorization: Bearer {{token}}",
      solutionLang: "javascript"},

    prev: { slug: 'api-status', title: 'Status Codes' },
    next: { slug: 'api-pagination', title: 'Pagination' }
  },

  'api-pagination': {
    id: 'api-pagination',
    section: 'REST APIs',
    level: '06',
    title: 'Pagination',
    time: '30 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 6 · Pagination',

    intro: 'Never, ever return 10,000 posts in one JSON response. It will be slow, memory-heavy, and your frontend will render a web page so tall the scrollbar becomes fiction. Pagination is how APIs say "here is page one; the rest exists — for a price."',

    whyMatters: 'Real APIs paginate everything. Laravel makes it almost free: one call to <span class="inline-code">paginate()</span> and you share a paginated shape any frontend can loop through. Clients ask for <span class="inline-code">?page=2</span>, you hand them the next slice.',

    explanation: [
      { tag: 'heading', text: 'The classic shape' },
      { tag: 'text', text: 'A paginated response contains <span class="inline-code">current_page</span>, <span class="inline-code">data</span>, <span class="inline-code">first_page_url</span>, <span class="inline-code">last_page</span>, <span class="inline-code">next_page_url</span>, <span class="inline-code">per_page</span>, <span class="inline-code">total</span>. Frontends use <span class="inline-code">next_page_url</span> to load more and <span class="inline-code">total</span> to render "1 — 20 of 300".' },
      { tag: 'heading', text: 'Client controls size and page' },
      { tag: 'text', text: 'Laravel lets clients send <span class="inline-code">?page=2</span> and <span class="inline-code">?per_page=20</span>. Cap <span class="inline-code">per_page</span> (say max 50) so nobody requests 10,000 records at once and melts your database.' },
      { tag: 'heading', text: 'Cursor pagination for the big leagues' },
      { tag: 'text', text: 'For millions of rows, offset pagination (page 999,999) gets slow because the database must skip all previous rows. <span class="inline-code">cursorPaginate()</span> uses a token and stays fast at any depth — this is what modern APIs prefer.' }
    ],

    code: [
      {
        lang: 'php',
        label: 'Pagination that respects client wish but stays sane',
        code: 'class PostController extends Controller\n' +
              '{\n' +
              '    public function index(Request $request)\n' +
              '    {\n' +
              '        $perPage = min($request->integer("per_page", 15), 50);\n' +
              '\n' +
              '        return PostResource::collection(\n' +
              '            Post::latest()->paginate($perPage)\n' +
              '        );\n' +
              '    }\n' +
              '}'
      }
    ],

    codeExplained: [
      { tag: 'text', text: '<span class="inline-code">$request->integer("per_page", 15)</span> reads ?per_page or defaults to 15. <span class="inline-code">min(..., 50)</span> caps it. <span class="inline-code">paginate($perPage)</span> returns a length-aware paginator, and wrapping it in a resource collection keeps the clean <span class="inline-code">data</span> shape plus pagination meta.' }
    ],

    mistakes: [
      'Returning <span class="inline-code">Model::all()</span> "because the app is small" — it is small until it isn\'t, and then every page of the site dies together.',
      'Letting clients set per_page to 1000000 — always cap it.',
      'Using paginate() on relations without care: eager-load relations or accept the N+1 tax.'
    ],

    proTip: 'Return the paginator meta to the client AND include a "next_page_url". Infinite-scroll frontends that parse the URL are happier than ones that guess i = page * limit on their own.',

    quiz: {
      cat: 'Pagination',
      question: 'Why should you cap the per_page parameter?',
      options: [
        'Because clients could request an enormous page and crush the database',
        'Because per_page is always a string',
        'Because pagination stops working above 50',
        'You shouldn\'t — let clients decide'
      ],
      correct: 0,
      feedback: { correct: 'Correct. A cap protects your DB from a single greedy request.', wrong: 'Nope. Unbounded per_page lets one request pull your whole table. Always cap it.' }
    },

    challenge: {
      lang: 'php',
      text: 'Update a <strong>products</strong> index endpoint to: read per_page from the request (default 12), cap it at 40, order products newest-first, and paginate the result through a ProductResource collection.',
      code: 'public function index(Request $request) { ... }',
      hint: '$perPage = min($request->integer("per_page", 12), 40); return ProductResource::collection(Product::latest()->paginate($perPage));'
    ,
      solution: "public function index(Request $request)\n{\n    $perPage = min($request->integer(\"per_page\", 12), 40);\n\n    return ProductResource::collection(\n        Product::latest()->paginate($perPage)\n    );\n}"},

    prev: { slug: 'api-postman', title: 'Postman Testing' },
    next: { slug: 'api-search', title: 'Filtering & Search' }
  },

  'api-search': {
    id: 'api-search',
    section: 'REST APIs',
    level: '06',
    title: 'Filtering & Search',
    time: '35 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 6 · Search',

    intro: 'Every user narr falls in love with the search box and then breaks it by typing something weird like "prodct". Filtering is the art of letting clients narrow the data river without letting them write SQL for you.',

    whyMatters: 'Search and filters are what turn a read-only API into a tool. <strong>But</strong>: accepting raw input and pasting it into SQL is how SQL injection happens. The safe path: whitelist filterable columns, bind parameters, and never concatenate user input into SQL.',

    explanation: [
      { tag: 'heading', text: 'Query parameters are your API\'s filters' },
      { tag: 'text', text: 'Clients pass <span class="inline-code">?category=books&price_min=10</span>. Your controller reads them, validates, and builds the query. The parameters are a whitelisted contract — anything else is ignored.' },
      { tag: 'heading', text: 'The contains vs exact trap' },
      { tag: 'text', text: 'A search box wants <span class="inline-code">LIKE %term%</span>. A filter dropdown wants exact equality (<span class="inline-code">WHERE category = ?</span>). Mix them up and either searches are too strict or filters are too fuzzy. Decide per field.' },
      { tag: 'heading', text: 'Always bind' },
      { tag: 'text', text: 'Model scopes with <span class="inline-code">where()</span> bind values automatically — the database treats them as data, never as code. The moment you start building query strings with <span class="inline-code">->whereRaw("title = \'" . $q . "\'")</span>, an attacker owns your table.' }
    ],

    code: [
      {
        lang: 'php',
        label: 'A safe, flexible filter in Laravel',
        code: '$query = Post::query();\n' +
              '\n' +
              'if ($request->filled("search")) {\n' +
              '    $query->where("title", "like", "%".$request->search."%");\n' +
              '}\n' +
              '\n' +
              'if ($request->filled("category")) {\n' +
              '    $query->where("category", $request->category);\n' +
              '}\n' +
              'if ($request->filled("min_price")) {\n' +
              '    $query->where("price", ">=", $request->min_price);\n' +
              '}\n' +
              '\n' +
              'return PostResource::collection($query->paginate(15));'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'Every condition is guarded by <span class="inline-code">filled()</span> so empty params don\'t corrupt the query. Every value goes through the query builder, which binds it safely. Searching, category, and price range compose on top of the same paginated base query.' }
    ],

    mistakes: [
      'Concatenating user input into SQL strings — the one-way ticket to SQL injection town.',
      'Applying filters unconditionally: <span class="inline-code">where("category", $request->category)</span> with no category present filters against null and returns nothing.',
      'Forgetting that <span class="inline-code">%</span> wildcards in LIKE can be expensive on big tables — index the column and cap the results.'
    ],

    proTip: 'Keep filters as a function or a small "query builder class" (or Laravel\'s Query Object). A controller with 15 inline ifs works, but your future self will thank you when the 16th filter arrives.',

    quiz: {
      cat: 'Search',
      question: 'Why should all user-supplied filter values go through the Laravel query builder instead of raw SQL concatenation?',
      options: [
        'Because the query builder binds values as data, preventing SQL injection',
        'Because raw SQL is not allowed in Laravel',
        'Because concatenation is slower',
        'Because the query builder returns JSON'
      ],
      correct: 0,
      feedback: { correct: 'Correct. Values stay data, never code. The query builder binds parameters safely.', wrong: 'Nope. Binding through the query builder keeps user input as data, which is exactly what blocks SQL injection.' }
    },

    challenge: {
      lang: 'php',
      text: 'Build a <strong>products</strong> index that supports: ?search= (fuzzy title match), ?category= (exact), ?in_stock=1 (only where stock > 0), combined, all safe, paginated.',
      code: '$query = Product::query();\n// your filters here',
      hint: 'Guard each with filled(). in_stock → $query->where("stock", ">", 0).'
    ,
      solution: "$query = Product::query();\n\nif ($request->filled(\"search\")) {\n    $query->where(\"title\", \"like\", \"%\" . $request->string(\"search\") . \"%\");\n}\n\nif ($request->filled(\"category\")) {\n    $query->where(\"category\", $request->string(\"category\"));\n}\n\nif ($request->filled(\"in_stock\")) {\n    $query->where(\"stock\", \">\", 0);\n}\n\nreturn ProductResource::collection($query->paginate(12));"},

    prev: { slug: 'api-pagination', title: 'Pagination' },
    next: { slug: 'security-hashing', title: 'Password Hashing' }
  }

});