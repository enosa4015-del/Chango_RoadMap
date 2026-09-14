/* ========================================
   Chango — Backend Roadmap · Level 03: Git & GitHub (5 lessons)
   ======================================== */

Object.assign(LESSONS, {

  'git-why': {
    id: 'git-why',
    section: 'Git & GitHub',
    level: '03',
    title: 'Why Git?',
    time: '20 min',
    difficulty: 'Beginner',
    book: 'Book Chapter 3 · Intro',

    intro: 'Let me guess your current versioning system: project_final.zip, project_final_v2.zip, project_final_REAL.zip, and the one you still regret, project_actual_final_USE_THIS.zip. Git ends that saga forever.',

    whyMatters: 'Every real project runs on Git. Every team, every open-source repo, every interview. Git is version control — a time machine that records every change, lets you experiment on a branch, and merge it back when it works.',

    explanation: [
      { tag: 'heading', text: 'The three states' },
      { tag: 'text', text: 'A file lives in three zones: <strong>working directory</strong> (your edits), <strong>staging area</strong> (files you told Git "watch these"), and the <strong>repository</strong> (the saved snapshots, aka commits).' },
      { tag: 'heading', text: 'Git ≠ GitHub' },
      { tag: 'text', text: 'Git is the tool on your machine. GitHub is a website that hosts copies of your Git repos. Git works offline; GitHub works online. You push commits to GitHub so your work is safe and shareable.' },
      { tag: 'heading', text: 'What a commit is' },
      { tag: 'text', text: 'A commit is a snapshot: who changed what, when, and a message explaining why. This is the memo your future self leaves for their confused past self.' }
    ],

    code: [
      {
        lang: 'bash',
        label: 'The hero journey in 3 commands',
        code: 'git init              # turn this folder into a repo\n' +
              'git add .             # stage everything\n' +
              'git commit -m "First real commit, no more ZIP files"'
      },
      {
        lang: 'bash',
        label: 'The everyday loop (from now on)',
        code: 'git add index.php\n' +
              'git commit -m "Fix the bug where users vanished"\n' +
              'git status            # what is going on right now\n' +
              'git log --oneline     # your history as a tidy list'
      }
    ],

    codeExplained: [
      { tag: 'text', text: '<span class="inline-code">git init</span> happens once per project. <span class="inline-code">git add</span> moves edits into the staging area, <span class="inline-code">git commit</span> saves a permanent snapshot with your message. The loop of add → commit becomes your muscle memory.' },
      { tag: 'text', text: '<span class="inline-code">git status</span> tells you exactly what changed, what is staged, and what is untracked. When debugging Git confusion, status is your map. You will run it 10x/hour. That is normal.' }
    ],

    mistakes: [
      'Committing giant secrets (API keys, .env) into the repo then pushing to GitHub — once published, assume compromised. Rotate the key, and add a .gitignore immediately.',
      'Writing commit messages like "stuff" or "updated" — six months later nobody knows what "updated" means.',
      'Committing node_modules or vendor folders — they contain thousands of files and are re-downloadable. Exclude them with .gitignore.'
    ],

    proTip: 'Commit small and often: one commit = one logical change. "Add user login" and "Fix typo in login title" are separate commits. Small commits make history readable and bugs easy to hunt.'

    ,

    quiz: {
      cat: 'Git Basics',
      question: 'What is the difference between Git and GitHub?',
      options: [
        'Git is the local tool; GitHub is an online platform that hosts repos',
        'They are the same thing',
        'Git is a website; GitHub is the terminal tool',
        'Git is only for Windows'
      ],
      correct: 0,
      feedback: { correct: 'Exactly. Git on your machine, GitHub on the internet. Together they are the industry standard.', wrong: 'Nope. Git is the version-control tool; GitHub is its most famous online home.' }
    },

    challenge: {
      lang: 'bash',
      text: 'In a disposable test folder, run <strong>git init</strong>, create a file, <strong>git add</strong> it, and commit with an honest message. Then run <strong>git log --oneline</strong> and show your one-line history.',
      code: 'git init\n' +
            'echo "hello" > hello.txt\n' +
            'git add .\n',
      hint: 'Your history should show exactly one commit: your very first.'
    ,
      solution: "git init\necho \"hello\" > hello.txt\ngit add hello.txt\ngit commit -m \"First commit: hello\"\n\ngit log --oneline\n# exactly one line of history",
      solutionLang: "bash"},

    prev: { slug: 'php-mysql', title: 'MySQL Connection' },
    next: { slug: 'git-commits', title: 'Commits & History' }
  },

  'git-commits': {
    id: 'git-commits',
    section: 'Git & GitHub',
    level: '03',
    title: 'Commits & History',
    time: '30 min',
    difficulty: 'Beginner',
    book: 'Book Chapter 3 · Commits',

    intro: 'Commits are save points for humans who actually plan their stories: "1. build login, 2. fix it, 3. pretend the fix was never needed." Git will keep the receipts.',

    whyMatters: 'When the production app explodes, the question is never "what happened?" — it\'s "which commit broke it?" Reading & navigating history is the difference between a day of debugging and five minutes with git log.',

    explanation: [
      { tag: 'heading', text: 'git log is a history book' },
      { tag: 'text', text: 'Plain <span class="inline-code">git log</span> shows the full story. Add <span class="inline-code">--oneline</span> for one line each. Add <span class="inline-code">--graph</span> to see how branches forked and merged.' },
      { tag: 'heading', text: 'Go back in time' },
      { tag: 'text', text: '<span class="inline-code">git diff</span> shows unstaged changes (work in progress). <span class="inline-code">git show HEAD</span> shows the last commit\'s full detail. Use <span class="inline-code">git checkout -- file</span> to discard local edits to one file.' },
      { tag: 'heading', text: 'The golden rule of rewriting' },
      { tag: 'text', text: 'Never rewrite history that has been pushed to a shared branch. Other people built on it. Rewrite only your own unpublished commits.' }
    ],

    code: [
      {
        lang: 'bash',
        label: 'Reading your story',
        code: 'git log --oneline --graph\n' +
              'git show HEAD --stat\n' +
              'git diff              # current edits, not yet committed'
      },
      {
        lang: 'bash',
        label: 'Undo patterns (the safe ones)',
        code: 'git checkout -- README.md    # discard uncommitted edits\n' +
              'git reset --hard HEAD        # throw away uncommitted changes\n' +
              'git revert <commit-hash>     # NEW commit that undoes an old one'
      }
    ],

    codeExplained: [
      { tag: 'text', text: '<span class="inline-code">git show HEAD --stat</span> opens the latest commit: files touched, lines added/removed. This is how a code review reads a change.' },
      { tag: 'text', text: 'Think of the difference: <span class="inline-code">reset</span> moves you back in time (dangerous — deletes commits), <span class="inline-code">revert</span> adds a new "undo" commit (safe — history stays intact for everyone else). Revert in shared branches, always.' }
    ],

    mistakes: [
      'Using git reset --hard on a pushed branch — your teammates now have a completely different history and Git will stage a coup.',
      'Committing immediately after "it stopped working" — debug first, then commit. Messages like "fix" are a crime against your future self.',
      'Forgetting git add before commit — the commit silently saves an older version. Check git status first, always.'
    ],

    proTip: 'Write commit messages with a short subject line and, when needed, a body explaining the <em>why</em>: "Fix login — password check was run before the attempt counter incremented, so brute force never locked the account."'

    ,

    quiz: {
      cat: 'History',
      question: 'You broke a feature 3 commits ago on a shared (pushed) branch. The safest fix using history is:',
      options: [
        'git revert <commit-hash>',
        'git reset --hard HEAD~3',
        'git checkout -- .',
        'Delete the broken files manually'
      ],
      correct: 0,
      feedback: { correct: 'revert adds a clean "undo" commit — shared history stays intact. Others\' clones stay happy.', wrong: 'Nope. On a pushed branch, revert (a new undo commit) is the safe move. reset rewrites history and breaks collaborators.' }
    },

    challenge: {
      lang: 'bash',
      text: 'Make 3 small commits ("add header", "add footer", "fix footer bug"). Then use <strong>git log --oneline</strong> to show all three, and spot which one is the bug fix by its message.',
      hint: 'Three separate commits, three clear messages. This is the workflow interviewers are looking for.'
    ,
      solution: "git add header.html && git commit -m \"add header\"\ngit add footer.html && git commit -m \"add footer\"\ngit add footer.html && git commit -m \"fix footer bug\"\n\ngit log --oneline\n# \"fix footer bug\" is the one at the top of the list",
      solutionLang: "bash"},

    prev: { slug: 'git-why', title: 'Why Git?' },
    next: { slug: 'git-branches', title: 'Branches & Merge' }
  },

  'git-branches': {
    id: 'git-branches',
    section: 'Git & GitHub',
    level: '03',
    title: 'Branches & Merge',
    time: '35 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 3 · Branches',

    intro: 'A branch is a parallel universe where you can break everything, decide you loved the old world, and return untouched. The main timeline (main) stays healthy while you experiment in feature-land.',

    whyMatters: 'Teams ship features without breaking the main branch precisely because of branches: you build in isolation, merge when safe. Every interview mentions branches; every real project uses them hourly.',

    explanation: [
      { tag: 'heading', text: 'Creating & switching' },
      { tag: 'text', text: '<span class="inline-code">git branch feature</span> creates a new pointer. <span class="inline-code">git checkout feature</span> moves you onto it. Shortcut: <span class="inline-code">git checkout -b feature</span> creates + switches in one command.' },
      { tag: 'heading', text: 'Merging' },
      { tag: 'text', text: 'When the feature is finished: switch back to main and <span class="inline-code">git merge feature</span>. Git brings the commits over. If both branches changed the same lines differently, you get a <strong>merge conflict</strong> — the one moment Git asks you to decide.' },
      { tag: 'heading', text: 'Conflicts are not failures' },
      { tag: 'text', text: 'Conflicts mean Git needs you to pick the correct final code. It marks the lines with <span class="inline-code">&lt;&lt;&lt;&lt;&lt;&lt;&lt;</span> and <span class="inline-code">&gt;&gt;&gt;&gt;&gt;&gt;&gt;</span>; you edit, keep the good parts, then <span class="inline-code">git add</span> and commit the resolution.' }
    ],

    code: [
      {
        lang: 'bash',
        label: 'Build a feature in isolation',
        code: 'git checkout -b feature/payment     # new branch, hop on\n' +
              'git add .\n' +
              'git commit -m "Add payment gateway"\n' +
              'git checkout main                   # back to safe zone\n' +
              'git merge feature/payment           # bring it home'
      },
      {
        lang: 'bash',
        label: 'During a conflict',
        code: '# file shows:\n' +
              '<<<<<<< HEAD\n' +
              'echo "v1: username"\n' +
              '=======\n' +
              'echo "v2: email"\n' +
              '>>>>>>> feature/login\n' +
              '# you fix it, keep the good line, then:\n' +
              'git add forgot-file.php\n' +
              'git commit -m "Resolve merge conflict in greeting"'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'The convention <span class="inline-code">feature/whatever</span> is a naming habit teams use — the branch name tells you its purpose at a glance. main always stays stable.' },
      { tag: 'text', text: 'A conflict block literally shows both versions divided by <span class="inline-code">=======</span>. You delete the markers, keep the lines that are right, add, and commit. That is the whole secret of conflicts.' }
    ],

    mistakes: [
      'Deleting the branch before merging — there goes your work. Check with git branch --merged before cleanup.',
      'Fighting conflicts by restarting — Git is asking YOU to decide; there is no shortcut. Resolve carefully.',
      'Merging half-finished features into main "to test quickly" — now everybody has your broken half.'
    ],

    proTip: 'Keep branches small and short: one feature (or bug) per branch, merged and deleted. Long-lived branches become merging nightmares that recruiters ask about in interviews.'

    ,

    quiz: {
      cat: 'Branches',
      question: 'You are on main and want a new branch AND to switch to it. One command?',
      options: [
        'git checkout -b feature',
        'git branch feature',
        'git merge feature',
        'git checkout feature'
      ],
      correct: 0,
      feedback: { correct: 'checkout -b creates and switches. One keystroke fewer, one mistake less.', wrong: 'Nope. git checkout -b FEATURE does both: create the branch and move onto it.' }
    },

    challenge: {
      lang: 'bash',
      text: 'From main, create <strong>feature/about</strong>, add an about.txt file, commit it, switch back to main, and merge the feature branch. Confirm the file exists on main after the merge.',
      hint: 'git checkout -b feature/about → commit → git checkout main → git merge feature/about.'
    ,
      solution: "git checkout -b feature/about\necho \"about us\" > about.txt\ngit add about.txt && git commit -m \"add about page\"\n\ngit checkout main\ngit merge feature/about\n\nls    # about.txt exists on main now",
      solutionLang: "bash"},

    prev: { slug: 'git-commits', title: 'Commits & History' },
    next: { slug: 'git-github', title: 'GitHub' }
  },

  'git-github': {
    id: 'git-github',
    section: 'Git & GitHub',
    level: '03',
    title: 'GitHub',
    time: '30 min',
    difficulty: 'Beginner',
    book: 'Book Chapter 3 · GitHub',

    intro: 'GitHub is where Git goes to show off: a cloud home for your repos, plus the professional vanity mirror interviewers check before you even arrive at the interview room.',

    whyMatters: 'Employers read your GitHub profile. Open-source contributions there are a CV that cannot lie. And it is your backup: push early, push often — laptop stolen or dropped in a lake, your code survives.',

    explanation: [
      { tag: 'heading', text: 'remote — the link' },
      { tag: 'text', text: 'A remote is a URL where your repo lives online. <span class="inline-code">git remote add origin <url></span> links them. origin is the conventional name for "the main remote".' },
      { tag: 'heading', text: 'Push, fetch, pull' },
      { tag: 'text', text: '<span class="inline-code">push</span> uploads commits. <span class="inline-code">fetch</span> downloads (without merging). <span class="inline-code">pull</span> = fetch + merge, i.e., "get the latest". Before pushing to a shared branch, pull first to avoid conflicts.' },
      { tag: 'heading', text: '.gitignore is your lawyer' },
      { tag: 'text', text: 'The .gitignore file tells Git which files to ignore: .env with secrets, vendor/, node_modules/, logs. Your secrets and giant folders never make it up.' }
    ],

    code: [
      {
        lang: 'bash',
        label: 'First push',
        code: 'git remote add origin https://github.com/you/chango-app.git\n' +
              'git branch -M main\n' +
              'git push -u origin main'
      },
      {
        lang: 'bash',
        label: 'Daily sync',
        code: 'git pull            # get latest first\n' +
              'git add .\n' +
              'git commit -m "Add search endpoint"\n' +
              'git push            # now everyone can see it'
      }
    ],

    codeExplained: [
      { tag: 'text', text: '<span class="inline-code">-u</span> (upstream) remembers that main tracks origin/main, so future commands can just be <span class="inline-code">git push</span> / <span class="inline-code">git pull</span> without repeating the remote name.' },
      { tag: 'text', text: 'Pull → work → push. Teams repeat this loop dozens of times a day. If pull refuses due to a conflict, resolve it locally, then push your resolved state.' }
    ],

    mistakes: [
      'Pushing a repo containing .env or config/keys — your production secrets now belong to the internet. Rotate them.',
      'Using git push -f on a shared branch to "fix" something — force-push rewrites history and gives teammates a mystery.',
      'Never pulling before pushing — merge conflicts move from "easy to fix" to "why is GitHub blocking my push".'
    ],

    proTip: 'A README.md at your repo root is not decoration: it communicates what the project is, how to install it, and how to run it. Recruiters open your repo — make the README the polite doorman.'

    ,

    quiz: {
      cat: 'GitHub',
      question: 'What does a .gitignore file do?',
      options: [
        'Tells Git which files/folders to NOT track',
        'Deletes ignored files from the disk',
        'Makes ignored files invisible to you',
        'Stores your password'
      ],
      correct: 0,
      feedback: { correct: 'Exactly: secrets, vendor/, node_modules/ never even get tracked.', wrong: 'Nope. .gitignore lists paths Git should not track — it removes nothing from disk.' }
    },

    challenge: {
      lang: 'bash',
      text: 'Create a .gitignore that ignores <strong>.env</strong>, the <strong>vendor</strong> folder, and <strong>logs/</strong>. Then run <strong>git status</strong> after creating a dummy .env — it should NOT appear as untracked.',
      hint: 'One entry per line: .env, vendor/, logs/. Confirm with git status that .env is absent from the untracked list.'
    ,
      solution: "# .gitignore\n.env\nvendor/\nlogs/\n\necho \"DB_PASSWORD=secret\" > .env\n\ngit status\n# .env is NOT in the untracked list — ignored correctly\n\ngit check-ignore .env    # echoes .env → confirmed",
      solutionLang: "bash"},

    prev: { slug: 'git-branches', title: 'Branches & Merge' },
    next: { slug: 'git-prs', title: 'Pull Requests' }
  },

  'git-prs': {
    id: 'git-prs',
    section: 'Git & GitHub',
    level: '03',
    title: 'Pull Requests',
    time: '30 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 3 · Pull Requests',

    intro: 'A pull request (PR) is the most polite way to say: "I built this. Please review it before it touches everyone else\'s life." Teams do this constantly. Learn it and you immediately sound employable.',

    whyMatters: 'Real teams do NOT push directly to main. They branch, push the branch, and open a PR. Reviewers comment, you fix, and GitHub merges. It is the pipeline for code that must not embarrass anyone.',

    explanation: [
      { tag: 'heading', text: 'The PR workflow' },
      { tag: 'text', text: '1. Branch from main. 2. Build & commit. 3. <span class="inline-code">git push origin <branch></span>. 4. On GitHub, open a pull request with a clear title and description. 5. Discuss, fix, and merge.' },
      { tag: 'heading', text: 'The rules of a good PR' },
      { tag: 'text', text: 'Small and focused ("add email validation", not "rewrite everything"). Clear description: what changed, why, how tested. Friendly tone in comments: you review code, not people.' },
      { tag: 'heading', text: 'Review like a professional' },
      { tag: 'text', text: 'Read the diff (<span class="inline-code">git diff</span> locally or the GitHub "Files changed" tab). Ask <em>why</em>. Approve or request changes — then merge and delete the branch. Tidiness matters.' }
    ],

    code: [
      {
        lang: 'bash',
        label: 'Feature branch → PR → merge',
        code: 'git checkout -b feature/email-validation\n' +
              'git add . && git commit -m "Validate email format"\n' +
              'git push -u origin feature/email-validation\n' +
              '# open the PR on GitHub UI → review → Merge\n' +
              'git checkout main\n' +
              'git pull\n' +
              'git branch -d feature/email-validation'
      }
    ],

    codeExplained: [
      { tag: 'text', text: '<span class="inline-code">git push -u</span> links your local branch to its remote twin so GitHub can open the PR from it. After merging, return to main, pull the updated history, and delete the local feature branch — it served its purpose.' },
      { tag: 'text', text: 'Your PR description becomes part of history. A description like "Adds email validation to meet our auth spec. Tested with 20 invalid addresses." is a gift to every future reader.' }
    ],

    mistakes: [
      'One PR that changes 40 files — reviewers cannot safely review it, and risky code slips through. Splitting error messages is not a separate PR, but 40 unrelated files is.',
      'Ignoring review comments or fighting them — reviews improve code; respond with a fix or a clear reason.',
      'Merging your own PR instantly without review on a team project — on small solo repos fine, on teams it destroys trust.'
    ],

    proTip: 'Write the PR title as if it were a commit subject: "Add email validation", never "fixed stuff #3". For team work, tie PRs to issues/tickets like "Closes #142" so the system links them automatically.'

    ,

    quiz: {
      cat: 'PRs',
      question: 'In a typical team workflow, what happens BEFORE a code change reaches main?',
      options: [
        'A pull request is opened and reviewed by at least another developer',
        'Everyone pushes directly to main',
        'The branch is force-pushed over main',
        'Nothing — main updates itself'
      ],
      correct: 0,
      feedback: { correct: 'PR + review is the quality door. Changes enter main through that door only.', wrong: 'Nope. Teams isolate work on a branch, open a PR, get it reviewed, then merge.' }
    },

    challenge: {
      lang: 'bash',
      text: 'Simulate the workflow on a test repo: create feature branch "feature/docs", add a README, push it (or just commit locally). Then check out main and confirm the feature branch is listed via <strong>git branch</strong>. Optionally open a real PR if you have a GitHub account.',
      hint: 'git branch (no args) lists local branches. The * marks the one you are on.'
    ,
      solution: "git checkout -b feature/docs\necho \"# Docs\" > README.md\ngit add README.md && git commit -m \"add README\"\ngit push -u origin feature/docs    # optional\n\ngit checkout main\ngit branch               # feature/docs is listed, * marks main\n\n# if on GitHub, the push shows \"Compare & pull request\" → open a PR",
      solutionLang: "bash"},

    prev: { slug: 'git-github', title: 'GitHub' },
    next: { slug: 'sql-what', title: 'What is a Database?' }
  }

});