/* ========================================
   Chango — Backend Roadmap · Level 12: Job Ready (5 lessons)
   ======================================== */

Object.assign(LESSONS, {

  'job-portfolio': {
    id: 'job-portfolio',
    section: 'Job Ready',
    level: '12',
    title: 'Your Portfolio',
    time: '3–4 days',
    difficulty: 'Career',
    book: 'Book Chapter 12 · Portfolio',

    intro: 'Recruiters will not read your soul — they will skim a URL for 90 seconds. A portfolio is not an album of everything; it is three carefully arranged exhibits that prove the sentence: "I build working backends."',

    whyMatters: 'You can be brilliant and invisible. A portfolio is your evidence pinned to the wall. For a backend developer, the portfolio is the riskiest place to under-invest because interviewers never "click" through your code — the live link does the talking before you say a word.',

    explanation: [
      { tag: 'heading', text: 'Quality over quantity, hard' },
      { tag: 'text', text: 'Three solid projects with purpose beat fourteen half-done tutorials. Each project needs: a one-line pitch, what problem it solves, the stack, your role (what YOU added), a live link, and a repo link. That shape is the whole portfolio.' },
      { tag: 'heading', text: 'Backend portfolios sell outcomes' },
      { tag: 'text', text: 'Show evidence of real backend skills: tests passing, API docs, rate limiting, auth, migrations. A screenshot of a POST response with a 201 is worth a paragraph. Make the proof visual — the reader is skimming.' },
      { tag: 'heading', text: 'Keep it running' },
      { tag: 'text', text: 'A broken link torpedoes credibility instantly. Put every project on HTTPS, keep a monitoring ping (Uptime Robot is free), and update the portfolio when you finish something better. A stale portfolio reads as a stale developer.'
      }
    ],

    code: [
      {
        lang: 'bash',
        label: 'A portfolio launch checklist (run before sharing the link)',
        code: 'curl -sI https://your-domain.com | head -n 1      # 200 OK?\n' +
              'curl -s https://your-domain.com/api/jobs?page=2 | jq . | head\n' +
              'php artisan test                                   # tests green?\n' +
              'git status                                         # nothing secret staged?\n' +
              '# then: post the URL on GitHub, LinkedIn, and your CV'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'Verify the site responds with 200, the API returns real JSON (not an error page), the tests pass, and nothing secret is about to be pushed. Five minutes of checks before you publicly bet your image on the link.' }
    ],

    mistakes: [
      'Linking a redeployed-but-broken project because "it worked last week" — one dead link and the whole portfolio is discounted.',
      'Showing only screenshots with no link — recruiters will not request access; they will move on.',
      'Calling every tutorial "my project" — fabricated projects smell; honest ones with rough edges trust.'
    ],

    proTip: 'Put the deployment date and "last checked" on each project card. It is a tiny honest signal that says "this is alive and I care", and it casually hints at upkeep — the skill employers actually worry about.',

    quiz: {
      cat: 'Portfolio',
      question: 'What should every portfolio project include, minimum?',
      options: [
        'Pitch, stack, your role, live link, repo link',
        'A logo and animation',
        'Fifty screenshots of code',
        'A full design system'
      ],
      correct: 0,
      feedback: { correct: 'Correct. Pitch/stack/role/links is the evidence package. Everything else is garnish.', wrong: 'Nope. The proof package is: pitch, stack, your contribution, a working link, and the repo. Visuals help, but the links are the evidence.' }
    },

    challenge: {
      lang: 'text',
      text: 'Audit your public portfolio URL today: run the launch checklist above on every project, fix the worst broken thing first, and ask one working developer to review it honestly. Include their one sentence of feedback in the next iteration.',
      hint: 'Ship imperfect. The most polished portfolio is the healthy portfolio that updates.'
    ,
      solution: "Launch checklist run on every project:\n- loads in under 3 seconds\t\t\t[DONE]\n- no console errors \t\t\t        [FIXED: undefined variable in JS]\n- works on phone + desktop\t\t\t[DONE]\n- demo account logins documented\t\t[ADDED README section]\n- HTTPS everywhere\t\t                [DONE]\n\nWorst broken thing fixed first: the product image 404s → now uploads to storage:link.\n\nReviewer feedback received: \"I couldn't tell what to click first.\"\nNext iteration: cut the hero copy in half and add one CTA above the fold.",
      solutionLang: "text"},

    prev: { slug: 'projects-portfolio', title: 'Portfolio Project' },
    next: { slug: 'job-github', title: 'GitHub Profile' }
  },

  'job-github': {
    id: 'job-github',
    section: 'Job Ready',
    level: '12',
    title: 'GitHub Profile',
    time: '1–2 days',
    difficulty: 'Career',
    book: 'Book Chapter 12 · GitHub',

    intro: 'Your GitHub profile is your code resume. When the interviewer says "show me your code", this is the drawer you open. A tidy, active profile with pinned projects beats a CV that promises skills nobody can see.',

    whyMatters: 'For juniors especially, the GitHub profile is where senior developers decide whether to believe you. They will read a README, look for tests, and check commit history. Boring is fine — consistent and real is the goal.',

    explanation: [
      { tag: 'heading', text: 'Pin the best three' },
      { tag: 'text', text: 'GitHub shows pinned repos first. Pin your three strongest projects — the marketplaces and e-commerce triumphs, not the "my-first-php" sandcastle. Each pinned repo needs a great README so the profile sells itself without a single click further.' },
      { tag: 'heading', text: 'The README is land' },
      { tag: 'text', text: 'A good project README says: name + one-line pitch, features, tech stack, setup (clone → composer install → migrate → serve), API endpoints table, screenshots, license, and links. A "no readme" repo reads as abandoned.' },
      { tag: 'heading', text: 'Habits that read as professional' },
      { tag: 'text', text: 'Meaningful commit messages, .gitignore correctness (no .env or vendor/ committed — reviewers check!), tests in the repo, and a CHANGELOG or issues to show you use GitHub like a human. Commit history says more about you than any claim.'
      }
    ],

    code: [
      {
        lang: 'bash',
        label: 'Audit your repo for the three red flags',
        code: 'git ls-files | grep -E "(^|/)\.env$"      # secret committed?\n' +
              'git ls-files | grep -E "(^|/)vendor/"    # vendor committed?\n' +
              'git log --oneline                        # are the messages honest?\n' +
              'ls README.md                              # does the repo explain itself?'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'These four lines simulate exactly what a senior does before calling you. Clean audits loop is a checklist: no secrets, no vendor bloat, sensible history, and a README. Fix findings before you ask anyone to look.' }
    ],

    mistakes: [
      'Committing .env with real database passwords "because it was faster" — delete and rotate immediately; assume leakage.',
      'Using huge auto-commits like "wip" or "stuff" as the entire history — history is a portfolio too.',
      'Letting GitHub contributions look dead because your best work stays on private repos or another account.'
    ],

    proTip: 'Do one small public commit several days a week (docs, tests, tiny fixes). A gentle activity graph says "consistent" without pretending to be Linus Torvalds. Consistency is what employers can\'t fake-check.',

    quiz: {
      cat: 'GitHub',
      question: 'A senior reviewer is most likely to judge a repo by:',
      options: [
        'README, tests, commit history, and the absence of committed secrets',
        'The number of stars',
        'The size of the codebase',
        'The name of the repository'
      ],
      correct: 0,
      feedback: { correct: 'Correct. Evidence of maintainability beats cosmetic signals every time.', wrong: 'Nope. Stars and size are vanity; seniors look for documentation, tests, history, and security hygiene.' }
    },

    challenge: {
      lang: 'bash',
      text: 'Run the four-line audit on your top three repos. Fix every red flag (destroy leaked keys if found), rewrite the weakest README, and pin exactly three strong projects. Take a screenshot of the finished profile.',
      hint: 'If a secret was committed, delete the repo if possible or rotate the key — and add the file to .gitignore forward.'
    ,
      solution: "Four-line audit per repo:\n1) README exists with what / why / how to run\t→ rewrote weakest one\n2) no secrets committed\t\t\t→ rotated the leaked key found\n3) live demo link present\t\t\t→ added\n4) pinned?\tn/a until final 3\n\nPinned exactly three: the e-commerce API, the blog API, and the job marketplace.\nScreenshot the finished profile for the portfolio doc.",
      solutionLang: "text"},

    prev: { slug: 'job-portfolio', title: 'Your Portfolio' },
    next: { slug: 'job-cv', title: 'CV & LinkedIn' }
  },

  'job-cv': {
    id: 'job-cv',
    section: 'Job Ready',
    level: '12',
    title: 'CV & LinkedIn',
    time: '3–5 days',
    difficulty: 'Career',
    book: 'Book Chapter 12 · CV',

    intro: 'Recruiters spend seconds on the first pass of a CV. The job is not to write everything you did; it is to make the relevant 10% unmissable in that window. Same game on LinkedIn: be skimmable in the direction of "backend".',

    whyMatters: 'Your CV is the ticket to the interview, not the job itself. One page of outcome-driven bullets, keyword-aligned with the job description, opens the door. LinkedIn is where recruiters find you before you apply — if your profile is coherent.',

    explanation: [
      { tag: 'heading', text: 'One page. Outcome bullets.' },
      { tag: 'text', text: 'Each job/project bullet starts with an action and contains an outcome: "Built a Laravel REST API with Sanctum auth, cutting login failures via rate limiting". Recruiters scan for: stack keywords, months/years, and results. Bullets like "responsibilities included..." are furniture.' },
      { tag: 'heading', text: 'Keyword honesty' },
      { tag: 'text', text: 'Mirror the job posting\'s wording ("REST APIs", "Laravel", "MySQL", "Docker", "performance") — but only what you genuinely did. ATS systems filter on keywords; lying survives filters and dies in interviews.' },
      { tag: 'heading', text: 'LinkedIn as a landing page' },
      { tag: 'text', text: 'Headline: "Backend Developer | PHP · Laravel · MySQL · REST APIs" — a headline is a search result. About section three paragraphs: who you are, what you build, proof (links). Projects section with the same three pinned projects. Open to work on.'
      }
    ],

    code: [
      {
        lang: 'text',
        label: 'The before/after of a bullet',
        code: 'BEFORE: "Responsible for backend development"\n\n' +
              'AFTER:   "Built a Laravel API with Sanctum token auth,\n' +
              '         reducing brute-force risk via rate limiting,\n' +
              '         with 40+ passing feature tests."'
      }
    ],

    codeExplained: [
      { tag: 'text', text: '"Responsible for" says nothing. "Built... reducing... with 40+ tests" says stack, outcome, and proof. Write every bullet in that shape and your CV becomes a procurement document rather than a list of chores.' }
    ],

    mistakes: [
      'Five pages documenting every course since 2015 — a 30-second skim should find the backend story, not excavate it.',
      'A generic headline like "Software Engineer" with no signal — recruiters search "PHP Laravel", not "engineer".',
      'Fabricating experience. ATSs catch phrasing inconsistencies, and interviews catch everything else.'
    ],

    proTip: 'Make a version of your CV tailored to each application focus and keep the general one. Rephrase the top 3 bullets to mirror the posting you are replying to — two minutes of work, noticeably better callback rates.',

    quiz: {
      cat: 'CV',
      question: 'What makes a CV bullet strong in a backend job application?',
      options: [
        'Action + stack keywords + measurable outcome, matching the posting',
        'A list of technologies with no context',
        'Job titles and dates only',
        'Every framework you have heard of'
      ],
      correct: 0,
      feedback: { correct: 'Correct. Outcome bullets survive the 30-second skim, with keywords that beat the ATS filter.', wrong: 'Nope. Recruiters skim for action + stack + result. Lists of tech with no context say nothing.' }
    },

    challenge: {
      lang: 'text',
      text: 'Rewrite a CV in one page: headline with backend stack, three outcome bullets for the marketplace project, a skills section ordered by what you actually used, and one page only. Then update LinkedIn headline + About to match. Send the CV to someone who hires and ask for the 30-second verdict.',
      hint: 'The 30-second verdict: would they interview you based on page one alone? That is the test.'
    ,
      solution: "# One page. Headline first:\n\"Backend Developer · PHP & Laravel · 5 APIs shipped\"\n\n# Three outcome bullets for the marketplace project:\n- Cut checkout stock loss to zero with lockForUpdate transactions\n- Added throttle + Sanctum auth; API gate: 401 before, 429 after 5 attempts\n- Wrote 60+ Feature tests; race test proves only one buyer wins the last item\n\n# Skills: order by actual use:\nLaravel · REST APIs · MySQL · Docker basics · Test-Driven Development · git\n\n30-second verdict asked and answered honestly: \"You're hireable for junior back-end.\"",
      solutionLang: "text"},

    prev: { slug: 'job-github', title: 'GitHub Profile' },
    next: { slug: 'job-interview', title: 'Interview Questions' }
  },

  'job-interview': {
    id: 'job-interview',
    section: 'Job Ready',
    level: '12',
    title: 'Interview Questions',
    time: '1 week (practice)',
    difficulty: 'Career',
    book: 'Book Chapter 12 · Interviews',

    intro: 'Interviews are not trivia olympics. They are a conversation where they try to find out if you can build and think. But there ARE recurring questions, and rehairing your answer beats rehairing in the chair. Let\'s rehearse the backend set.',

    whyMatters: 'You have the skills. The interview is the last gap between your code and a salary. Practicing answers out loud — especially the ones you dread — converts performance anxiety into prepared confidence. It is the highest-ROI week of this roadmap.',

    explanation: [
      { tag: 'heading', text: 'The five that always come' },
      { tag: 'text', text: '1) What is the difference between GET and POST? 2) What is a REST API? 3) What is an ORM and why use it? 4) How does authentication work in a stateless API? 5) Tell me about a bug you actually solved. Five answers, five minutes each — cover them cold.' },
      { tag: 'heading', text: 'The method' },
      { tag: 'text', text: 'Answer in three beats: the WHAT (definition), the WHY (real reason it matters), the EVIDENCE (from your own project: "in my marketplace I..." ). Evidence transforms generic answers into senior-sounding ones.' },
      { tag: 'heading', text: 'What to prepare, not memorize' },
      { tag: 'text', text: 'Prepare your projects like talking points: the schema, the hardest bug, the choices (why Sanctum? why integer cents?). Interviews are not life-or-death — you are checking whether YOU like THEM as much as the reverse. That attitude calibrates your nerves.'
      }
    ],

    code: [
      {
        lang: 'text',
        label: 'The 3-beat answer template (practice this out loud)',
        code: 'Q: Why do we hash passwords?\n\n' +
              'WHAT:  Hashing is a one-way function; you can\'t recover the\n' +
              '       original password from the hash.\n' +
              'WHY:   If the database leaks, plain passwords leak with it.\n' +
              '       A hash is useless to the attacker.\n' +
              'EVIDENCE: In my auth API I use bcrypt via Laravel Hash::make,\n' +
              '       and I rate-limit the login route so brute-forcing a\n' +
              '       hash is not practical either.'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'Definitions alone sound like flashcards. Definitions + your project as proof sounds like an engineer. Every interview answer you rehearse should end by pointing at something you built.' }
    ],

    mistakes: [
      'Answering textbook-perfect but never once referencing your own code — interviewers hear Wikipedia and cannot test you on it.',
      'Claiming experience you do not have. Saying "I haven\'t done that yet, but here\'s how I\'d approach it" is relatable and honest.',
      'Stopping at the definition. Recruiters hire people who reach for WHY; that is what "senior scribbles" look like.'
    ],

    proTip: 'Do a mock interview with a friend or into a recorder. The first five minutes are awkward — that is the point. Practicing the awkward away now means the real chair is just another rehearsal.',

    quiz: {
      cat: 'Interview',
      question: 'What is the strongest way to answer a technical question in an interview?',
      options: [
        'Definition, then tie the answer to something from your own project',
        'The most minutes of theory you can deliver',
        'A yes/no answer and silence',
        'Reading the docs from memory'
      ],
      correct: 0,
      feedback: { correct: 'Correct. Evidence from your own code is what separates "knew the term" from "built with it".', wrong: 'Nope. Definition + personal evidence wins. Theory is cheap; your projects are the proof.' }
    },

    challenge: {
      lang: 'text',
      text: 'Pick the 5 questions you dread most, write a 3-beat answer for each, and record yourself answering all 5 out loud in under 20 minutes. Listen back. Rewrite only the two weakest answers. Repeat the recording once.',
      hint: 'Dreads are the highest-ROI rehearsal targets. Nobody got hired for nailing the question they already loved.'
    ,
      solution: "Pick the 5 most-dreaded questions, e.g.:\n1) \"Tell me about a time your code broke production\" → 3-beat: what / what I did / what I'd improve\n2) \"Why PHP, not [shinier language]?\" → pay-the-bills + honest ecosystem take\n3) \"What does a transaction do?\" → all-or-nothing, lockForUpdate example\n4) \"How do you keep a secret out of git?\" → .gitignore + rotate-then-delete story\n5) \"What would you do if a client's site got slow?\" → profile, logs, fix the hot path\n\nRecorded once (< 20 min), listened back, rewrote answers 2 and 4, recorded again.\nDreads rehearsed = interview nerves halved.",
      solutionLang: "text"},

    prev: { slug: 'job-cv', title: 'CV & LinkedIn' },
    next: { slug: 'job-first-job', title: 'First Job Tips' }
  },

  'job-first-job': {
    id: 'job-first-job',
    section: 'Job Ready',
    level: '12',
    title: 'First Job Tips',
    time: 'Ongoing',
    difficulty: 'Career',
    book: 'Book Chapter 12 · First Job',

    intro: 'You got the offer. Now the game changes from "learn to build" to "build for humans under deadlines". Your first job is where the roadmap ends and the real curriculum begins. A few principles make that transition painless-ish.',

    whyMatters: 'The first job teaches the things tutorials cannot: how production behaves, how teams review code, how features actually ship. Landing it right — and surviving your first weeks without a meltdown — is the final exam of this whole roadmap.',

    explanation: [
      { tag: 'heading', text: 'First week: observe, ask, deliver small' },
      { tag: 'text', text: 'Set up the project, run the tests, read the architecture README, and fix one small well-scoped bug so you have a shipped merge request. Asking "where do I start?" loudly is better than silently drifting.'
      },
      { tag: 'heading', text: 'Master the daily loop' },
      { tag: 'text', text: 'Pull latest → branch → small commits → PR with a description → wait for review → fix feedback → merge. Nobody expects your first PR to be perfect; they expect it to be reviewable. Reviewable beats impressive.' },
      { tag: 'heading', text: 'Ask the questions that age you fast' },
      { tag: 'text', text: 'Before asking for help, bring your findings: "I read X, tried Y, expected Z, got W." That one habit flips you from a burden to a colleague in weeks. Also: write down what you asked, so you never ask it twice.'
      }
    ],

    code: [
      {
        lang: 'text',
        label: 'Your first PR\'s description template',
        code: '## What\n' +
              'Fix: user could double-submit the checkout button.\n' +
              '\n' +
              '## How\n' +
              'Disabled the button after the first click + a debounce\n' +
              'on the JS side; added a Feature test for the endpoint.\n' +
              '\n' +
              '## Evidence\n' +
              '- php artisan test: 48 passing\n' +
              '- Manual: clicked fast, one order created'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'A PR description that says what/how/evidence is a gift to the reviewer. Reviewers read dozens of PRs; the easy-to-review ones get merged first and remembered kindly. That template costs two minutes and builds your reputation weekly.' }
    ],

    mistakes: [
      'Sitting silently for a week "trying to figure it out myself" — some things you cannot figure out; asking is the senior move.',
      'Rebasing to clean your terrible commit history instead of learning to make smaller commits — history hygiene is learned, not laundered.',
      'Treating every code review as criticism — reviews are about the code; skill is hearing them as tutoring.'
    ],

    proTip: 'Keep a running notes file (daily log): one line per day, what you did, what you learned, what you blocked on. At review season it becomes your self-documentation — and your memory six months later is exactly as unreliable as everyone else\'s.',

    quiz: {
      cat: 'Career',
      question: 'What makes a first-week junior get noticed (positively)?',
      options: [
        'Shipping one small well-scoped fix and asking good, informed questions',
        'Rewriting the entire codebase on day two',
        'Staying quiet until tested on everything',
        'Criticizing the team\'s stack immediately'
      ],
      correct: 0,
      feedback: { correct: 'Correct. A delivered small win plus curious, research-backed questions is the perfect opening.', wrong: 'Nope. Small shipped wins and informed questions read as "safe, useful, growing". Grand gestures and silence both backfire.' }
    },

    challenge: {
      lang: 'text',
      text: 'Before you start applying, prepare the "first job" layer of this whole roadmap: a daily-log template, the PR template above, and three review-ask questions you vow will never be asked twice. Consider this the end of Level 12 — your backend roadmap is complete. Go build.',
      hint: 'The roadmap ends here. What comes next is the real curriculum: production, teams, and the projects you never stop shipping.'
    ,
      solution: "1) Daily-log template (what I built / what I learned / what I'm stuck on)\n2) PR template I vow to use from day one:\n   - What changed\n   - How to test it\n   - Screenshots / expected output\n3) Three review questions I will ask, not the boss:\n   - \"What's the ugliest part of this PR?\"\n   - \"What broader thing should I learn next?\"\n   - \"What did the last good PR here do right?\"\n\nLevel 12 complete — the roadmap is finished. Go build.",
      solutionLang: "text"},

    prev: { slug: 'job-interview', title: 'Interview Questions' },
    next: null
  }

});