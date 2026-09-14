/* ========================================
   Chango — Backend Roadmap · Level 08: Linux (5 lessons)
   ======================================== */

Object.assign(LESSONS, {

  'linux-terminal': {
    id: 'linux-terminal',
    section: 'Linux',
    level: '08',
    title: 'The Terminal',
    time: '30 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 8 · Terminal',

    intro: 'In production there is no Start menu, no double-click, and no "undo with your feelings". The terminal is where servers live, and the good news is: it rewards you instantly. Type the right thing and the machine obeys like a well-trained dog.',

    whyMatters: 'Every backend developer eventually manages a server over SSH — a black window and a cursor. If the terminal scares you, your career will tiptoe around it. The fastest way to feel powerful as a backend dev is to stop fearing that cursor.',

    explanation: [
      { tag: 'heading', text: 'The anatomy of a command' },
      { tag: 'text', text: '<span class="inline-code">ls -la /var/www</span> = <strong>command</strong> (ls), <strong>options</strong> (-la), <strong>argument</strong> (/var/www). Spaces separate them. Options usually appear as <span class="inline-code">-x</span> (short) or <span class="inline-code">--long</span>.' },
      { tag: 'heading', text: 'Navigating and looking around' },
      { tag: 'text', text: '<span class="inline-code">pwd</span> prints where you are. <span class="inline-code">cd folder</span> moves, <span class="inline-code">cd ..</span> goes up, <span class="inline-code">ls</span> lists. That is the whole daily core plus <span class="inline-code">clear</span> and the up-arrow for history.' },
      { tag: 'heading', text: 'Help is built in' },
      { tag: 'text', text: '<span class="inline-code">man ls</span> opens the manual. <span class="inline-code">ls --help</span> is the fast version. When you are lost, the manual is not cheating — it is the job.' }
    ],

    code: [
      {
        lang: 'bash',
        label: 'The daily loop',
        code: 'pwd                 # where am I?\n' +
              'ls -la              # list everything, including hidden, with details\n' +
              'cd /var/www/html    # go to the app folder\n' +
              'touch notes.txt     # create an empty file\n' +
              'cat notes.txt       # print a file to the screen\n' +
              'clear               # fresh screen, same problems'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'Feels basic, and it is — but production debugging is 90% these five commands with <span class="inline-code">grep</span> and <span class="inline-code">tail</span> in the mix. The terminal is not a fighter jet; it is a bicycle. Wobbly on day one, automatic by day ten.' }
    ],

    mistakes: [
      'Typing <span class="inline-code">foulder</span> and fighting backspace instead of using Tab autocomplete — Tab is your best friend; your typing accuracy is not.',
      'Running <span class="inline-code">sudo</span> "just because it worked before" when you don\'t need elevated rights — sudo makes mistakes louder than they needed to be.',
      'Fear of the terminal pushing you to GUI file managers on a server. There is no GUI on a server. That cursor is the cockpit.'
    ],

    proTip: 'The up arrow recalls commands. Press Tab to autocomplete. Press Ctrl+L to clear instead of typing clear. Three habits, zero learning cost, and you will look twice as fast.',

    quiz: {
      cat: 'Terminal',
      question: 'What does the command "ls -la /var/www" tell the shell?',
      options: [
        'Run ls with options -la on the folder /var/www',
        'Delete everything in /var/www',
        'Open the /var/www folder in a text editor',
        'Print the current directory'
      ],
      correct: 0,
      feedback: { correct: 'Correct. Command + options + argument. ls -la lists with details and hidden files.', wrong: 'Nope. ls lists; -la adds detail/hidden files; /var/www is the target folder.' }
    },

    challenge: {
      lang: 'bash',
      text: 'On any Linux machine (or WSL): navigate to your home folder, create a folder called "practice", cd into it, create a file, list it with details, then go back home. Do it all without the mouse.',
      code: 'cd ~\nmkdir practice\ncd practice\ntouch file.txt\nls -la\ncd ~',
      hint: 'cd ~ is your home directory. cd .. goes up one level.'
    ,
      solution: "cd ~\nmkdir practice\ncd practice\ntouch file.txt\nls -la             # details of file.txt\ncd ~               # back home",
      solutionLang: "bash"},

    prev: { slug: 'security-checklist', title: 'Security Checklist' },
    next: { slug: 'linux-files', title: 'Files & Permissions' }
  },

  'linux-files': {
    id: 'linux-files',
    section: 'Linux',
    level: '08',
    title: 'Files & Permissions',
    time: '40 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 8 · Permissions',

    intro: 'In Linux, everything is a file — and every file has an attitude problem expressed in ten characters: rwxr-xr-x. Learn to read that line and you will understand why Laravel keeps yelling about "permission denied".',

    whyMatters: 'Web servers run as low-privilege users (www-data) and need to read your code but not your secrets. Permission errors are the #1 beginner deploy complaint. Reading and fixing permission bits is a core sysadmin superpower.',

    explanation: [
      { tag: 'heading', text: 'Reading the permission line' },
      { tag: 'text', text: '<span class="inline-code">-rwxr-xr--</span>: the first char is type (<span class="inline-code">-</span> file, <span class="inline-code">d</span> directory). Then three trios: <strong>owner</strong>, <strong>group</strong>, <strong>others</strong>. Each trio has r (read=4), w (write=2), x (execute=1).' },
      { tag: 'heading', text: 'The magic numbers' },
      { tag: 'text', text: 'Every trio is a sum: rw- = 4+2+0 = 6; r-x = 4+0+1 = 5; r-- = 4. So <span class="inline-code">chmod 755</span> means owner=rwx, group=r-x, others=r-x. <span class="inline-code">chmod 600</span> = owner rw-, nobody else gets anything (perfect for private keys and .env).' },
      { tag: 'heading', text: 'Ownership' },
      { tag: 'text', text: 'A file has an <strong>owner</strong> and a <strong>group</strong>. <span class="inline-code">chown user:group file</span> changes them. If your Laravel app says "permission denied" writing to storage, it is almost always an ownership or write-bit mismatch, not a conspiracy.' }
    ],

    code: [
      {
        lang: 'bash',
        label: 'The standard Laravel folder permissions',
        code: 'sudo chown -R www-data:www-data storage bootstrap/cache\n' +
              'sudo chmod -R 775 storage bootstrap/cache\n' +
              '\n' +
              '# the classic secure key file:\n' +
              'chmod 600 ~/.ssh/id_rsa'
      }
    ],

    codeExplained: [
      { tag: 'text', text: '<span class="inline-code">www-data</span> is the web server user. Giving it write access to the folders that need to change (logs, cache, uploads) makes the framework happy without giving ownership of the whole app. The SSH private key at 600 means only you can read it — otherwise ssh refuses to work.' }
    ],

    mistakes: [
      'chmod 777 on everything "to make it work" — it works because it disabled permissions entirely; it is also an open door for any local attacker.',
      'Running the whole app as root because permission errors are annoying — root trusts nothing and expects nothing from you, including permissions.',
      'Confusing chmod (permission bits) with chown (ownership). Both cause permission denied, differently.'
    ],

    proTip: 'Memorize 644 for files, 755 for folders — the web-friendly defaults. Private stuff (.env, keys) gets 600. That covers 95% of real servers.',

    quiz: {
      cat: 'Permissions',
      question: 'What does chmod 644 do?',
      options: [
        'Owner rw-, group r--, others r--',
        'Everyone gets rwx',
        'Owner rwx, group rwx, others r--',
        'Nothing — invalid number'
      ],
      correct: 0,
      feedback: { correct: 'Correct. 6=rw, 4=r. The owner can read/write, everyone else just reads.', wrong: 'Nope. 644 = 6 (rw-) for owner, 4 (r--) for group and others.' }
    },

    challenge: {
      lang: 'bash',
      text: 'Recreate the classic headache: create a file owned by you, chmod 600 it, then try to read it as another user (sudo -u nobody cat file.txt). Observe the deny. Then chmod 644 and read again.',
      code: 'echo "secret" > memo.txt\nchmod 600 memo.txt\nsudo -u nobody cat memo.txt   # permission denied\nchmod 644 memo.txt\nsudo -u nobody cat memo.txt   # works',
      hint: '600 says "only the owner". nobody is not the owner, so it is denied — that is the system doing its job.'
    ,
      solution: "echo \"secret\" > memo.txt\nchmod 600 memo.txt\nsudo -u nobody cat memo.txt   # permission denied\n\nchmod 644 memo.txt\nsudo -u nobody cat memo.txt   # \"secret\" — readable again",
      solutionLang: "bash"},

    prev: { slug: 'linux-terminal', title: 'The Terminal' },
    next: { slug: 'linux-processes', title: 'Processes' }
  },

  'linux-processes': {
    id: 'linux-processes',
    section: 'Linux',
    level: '08',
    title: 'Processes',
    time: '30 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 8 · Processes',

    intro: 'Every running thing on a server is a process: your PHP app, MySQL, that one cron job you forgot about. When the server feels slow or a port is taken, processes are the crime scene. Learn to look at them without flinching.',

    whyMatters: '"Port 80 is already in use" and "something is eating the RAM" are process mysteries. Debugging them is: list processes, find the culprit, inspect or kill it. Three commands. No guillotine required.',

    explanation: [
      { tag: 'heading', text: 'Seeing the running world' },
      { tag: 'text', text: '<span class="inline-code">ps aux</span> lists every process with its user, CPU, memory, and command. <span class="inline-code">top</span> (or <span class="inline-code">htop</span>) is the live, refreshing dashboard. <span class="inline-code">pgrep -f php</span> finds processes by name pattern.' },
      { tag: 'heading', text: 'Ports — the apartments of the internet' },
      { tag: 'text', text: 'Each service listens on a port: web on 80/443, MySQL on 3306, MariaDB 3306, Postgres 5432. <span class="inline-code">ss -tlnp</span> shows what is listening and which process owns it. Mystery solved: "nginx is already on 80" is one command away.' },
      { tag: 'heading', text: 'Signals: talking to processes' },
      { tag: 'text', text: '<span class="inline-code">kill PID</span> asks nicely (<span class="inline-code">SIGTERM</span>). <span class="inline-code">kill -9 PID</span> is the polite request ending in a wrecking ball (<span class="inline-code">SIGKILL</span>, no cleanup). Graceful first, -9 as the last resort.' }
    ],

    code: [
      {
        lang: 'bash',
        label: 'The process detective kit',
        code: 'ps aux | grep php        # who are all these PHP processes?\n' +
              'ss -tlnp                # what is listening on which port?\n' +
              'top -o %MEM             # live view, sorted by memory\n' +
              'kill 18273              # ask that process to stop\n' +
              'kill -9 18273           # that process REALLY needs to stop'
      }
    ],

    codeExplained: [
      { tag: 'text', text: '<span class="inline-code">ps aux | grep php</span> pipes process data into grep to filter lines matching "php" — you will use this pipe pattern to filter everything. <span class="inline-code">ss -tlnp</span> (socket statistics) is the modern replacement for the old netstat.' }
    ],

    mistakes: [
      'Killing a process by pattern instead of PID: <span class="inline-code">pkill -9 php</span> might kill your whole PHP-FPM pool, taking the site down with it.',
      'Killing processes inside a container directly — the container supervisor (like docker) restarts them, which is usually wanted but surprising the first time.',
      'Panicking and rebooting the server instead of reading <span class="inline-code">ps aux</span> first. The evidence is usually still there afterwards.'
    ],

    proTip: 'If a port is "already in use", never ask "why". Run <span class="inline-code">ss -tlnp | grep :80</span> and the command column hands you the culprit on a plate.',

    quiz: {
      cat: 'Processes',
      question: 'What is the difference between kill PID and kill -9 PID?',
      options: [
        'kill is a graceful SIGTERM; kill -9 is a forced SIGKILL with no cleanup',
        'kill -9 is gentler',
        'They are identical',
        'kill -9 only works for PHP'
      ],
      correct: 0,
      feedback: { correct: 'Correct. SIGTERM lets the process clean up; SIGKILL just deletes it from existence.', wrong: 'Nope. kill = graceful (SIGTERM). kill -9 = forced (SIGKILL), no chance to clean up.' }
    },

    challenge: {
      lang: 'bash',
      text: 'Start two background sleep processes (sleep 999 &), list them with ps aux | grep sleep, note their PIDs and memory, then kill them gracefully one by one. Confirm they are gone.',
      code: 'sleep 999 &\nsleep 999 &\nps aux | grep sleep\nkill <PID1>\nkill <PID2>\nps aux | grep sleep  # empty now',
      hint: 'grep sleep also matches your own grep line — use grep "[s]leep" to exclude the grep itself.'
    ,
      solution: "sleep 999 &\nsleep 999 &\nps aux | grep \"[s]leep\"     # grab the two PIDs\n\nkill <PID1>\nkill <PID2>\nps aux | grep \"[s]leep\"     # empty — both gone",
      solutionLang: "bash"},

    prev: { slug: 'linux-files', title: 'Files & Permissions' },
    next: { slug: 'linux-ssh', title: 'SSH & Servers' }
  },

  'linux-ssh': {
    id: 'linux-ssh',
    section: 'Linux',
    level: '08',
    title: 'SSH & Servers',
    time: '45 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 8 · SSH',

    intro: 'SSH is the secret tunnel that lets you drive any server on the internet as if it were sitting in your lap. One command, a key instead of a password, and suddenly the whole planet is your office.',

    whyMatters: 'Deploying, debugging, and managing production all happen over SSH. Even tools that look magical (Docker, CI, panel UIs) are just typing SSH commands under the hood. Master the tunnel and the server is yours.',

    explanation: [
      { tag: 'heading', text: 'The connection' },
      { tag: 'text', text: '<span class="inline-code">ssh user@server_ip</span> opens a shell on the remote machine. Add <span class="inline-code">-p 2222</span> for non-default ports (common on cheap VPSes for security theater) and you are in. Everything you type now runs on that server.' },
      { tag: 'heading', text: 'Keys beat passwords' },
      { tag: 'text', text: 'Generate a keypair once: <span class="inline-code">ssh-keygen -t ed25519</span>. You keep the private key (<span class="inline-code">~/.ssh/id_ed25519</span>), the server gets the public half appended to <span class="inline-code">~/.ssh/authorized_keys</span>. Copy it with <span class="inline-code">ssh-copy-id user@server</span>. Passwordless login, machine-grade.' },
      { tag: 'heading', text: 'Say no to password auth' },
      { tag: 'text', text: 'In <span class="inline-code">/etc/ssh/sshd_config</span>, set <span class="inline-code">PasswordAuthentication no</span> and <span class="inline-code">PermitRootLogin no</span>, then <span class="inline-code">sudo systemctl restart sshd</span>. Password guessing bots instantly become a non-problem.'
      }
    ],

    code: [
      {
        lang: 'bash',
        label: 'First steps from your machine',
        code: 'ssh-keygen -t ed25519 -C "me@example.com"   # one-time keypair\n' +
              'ssh-copy-id deploy@203.0.113.42            # install the public key\n' +
              'ssh deploy@203.0.113.42                    # in, no password\n' +
              'sudo visudo                                # edit sudo config safely'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'After these, <span class="inline-code">ssh deploy@...</span> just works. A truly locked-down host has an ordinary user (not root), key-only login, and the root account reachable only via <span class="inline-code">sudo</span> — the standard for every serious server.' }
    ],

    mistakes: [
      'Keeping root password login enabled "for convenience" — bots find it in minutes. That convenience is a service for attackers.',
      'Leaving the private key readable (permissions should be 600) — ssh will refuse to run, and if another user can read it, the key is compromised.',
      'Copy-pasting whole setup commands you don\'t understand — you are granting root access and should know what the command does to get it.'
    ],

    proTip: 'Add a config entry in ~/.ssh/config for each server (Host my-server / User deploy / HostName 203.0.113.42). Then just "ssh my-server" and the world feels small.',

    quiz: {
      cat: 'SSH',
      question: 'Why disable PasswordAuthentication and log in with keys instead?',
      options: [
        'Keys are unguessable machine secrets; passwords get brute-forced by bots',
        'Keys are shorter to type',
        'Passwords are slower than keys',
        'The VPS provider requires it'
      ],
      correct: 0,
      feedback: { correct: 'Correct. A key is a 255-or-4096-bit secret that cannot be guessed; a password can be brute-forced at machine speed.', wrong: 'Nope. Keys are cryptographically strong and unguessable, which is exactly what password-guessing bots cannot beat.' }
    },

    challenge: {
      lang: 'bash',
      text: 'Spin up a cheap VPS (any provider) or a local VM. Create a non-root user "deploy", set up key-only SSH from your machine, disable password and root login, and confirm you can log in with no prompt.',
      code: 'ssh-keygen -t ed25519\nssh-copy-id deploy@<host>\n# then on the server:\nsudo sed -i "s/^#PasswordAuthentication.*/PasswordAuthentication no/" /etc/ssh/sshd_config\nsudo systemctl restart sshd',
      hint: 'Make sure your deploy user can sudo, or you will lock yourself out of editing sshd_config. Test in a NEW terminal before closing the current one.'
    ,
      solution: "# local machine\nssh-keygen -t ed25519\nssh-copy-id deploy@<host>\n\n# server\nsudo apt update && sudo apt install -y openssh-server\nsudo adduser deploy                       # give it sudo: usermod -aG sudo deploy\n\nsudo nano /etc/ssh/sshd_config\n#   PermitRootLogin no\n#   PasswordAuthentication no\nsudo systemctl restart sshd\n\n# NEW terminal first: ssh deploy@<host> should work with NO password prompt.\n# Old terminal gets the final reboot, not your only way back in.",
      solutionLang: "bash"},

    prev: { slug: 'linux-processes', title: 'Processes' },
    next: { slug: 'linux-cron', title: 'Cron & Scheduling' }
  },

  'linux-cron': {
    id: 'linux-cron',
    section: 'Linux',
    level: '08',
    title: 'Cron & Scheduling',
    time: '30 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 8 · Cron',

    intro: 'Cron is the server\'s alarm clock. It wakes up at specific times and runs whatever you told it: clean old logs, send report emails, refresh caches at 3am while nobody is looking. Your backend\'s tireless night shift.',

    whyMatters: 'Jobs that must happen "regularly" — daily backups, hourly syncs, session cleanup — should not depend on someone remembering or on a website visitor. Cron makes the server its own manager. If you build backends, you will schedule something.',

    explanation: [
      { tag: 'heading', text: 'The five stars' },
      { tag: 'text', text: 'A cron line is: <strong>minute hour day-of-month month day-of-week command</strong>. So <span class="inline-code">30 3 * * * backup.sh</span> runs at 03:30 every day.<span class="inline-code">*</span> means "every". <span class="inline-code">*/15</span> means "every 15".' },
      { tag: 'heading', text: 'Where they live' },
      { tag: 'text', text: '<span class="inline-code">crontab -e</span> edits <em>your</em> user\'s schedule. System jobs live in <span class="inline-code">/etc/crontab</span> and <span class="inline-code">/etc/cron.d/</span>. The crontab you manage per user is the everyday one.' },
      { tag: 'heading', text: 'Laravel\'s own scheduler' },
      { tag: 'text', text: 'Instead of raw cron lines, Laravel has a scheduler in <span class="inline-code">routes/console.php</span>. You register <span class="inline-code">Artisan::command(...)</span> or <span class="inline-code">->daily()</span> tasks, and then a single cron line runs every minute: <span class="inline-code">* * * * * php /path/artisan schedule:run</span>. Laravel decides what actually runs.' }
    ],

    code: [
      {
        lang: 'bash',
        label: 'The one line that runs Laravel\'s whole scheduler',
        code: '* * * * * cd /var/www/myapp && php artisan schedule:run >> /dev/null 2>&1'
      },
      {
        lang: 'php',
        label: 'Registering tasks inside routes/console.php',
        code: 'Schedule::command("email:weekly-digest")\n' +
              '          ->weekly()\n' +
              '          ->mondays()\n' +
              '          ->at("09:00");\n' +
              '\n' +
              'Schedule::job(new CleanOldLogs)->dailyAt("03:00");'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'Every minute the cron wakes Laravel\'s scheduler, which checks its list and runs whatever is due now. <span class="inline-code">>> /dev/null 2>&1</span> keeps cron\'s email from flooding you. All scheduling logic lives in readable PHP instead of cryptic star-fields.' }
    ],

    mistakes: [
      'Writing the cron time fields backwards (minute/hour positions swapped) — the classic "ran at the wrong time" bug.',
      'Forgetting the PHP binary path or using <span class="inline-code">~</span> in a cron line — cron has a minimal environment and no login shell tricks.',
      'Assuming cron runs; it fails silently. After adding a job, check <span class="inline-code">grep CRON /var/log/syslog</span> or pipe output to a log file.'
    ],

    proTip: 'During development, run <span class="inline-code">php artisan schedule:test</span> and <span class="inline-code">php artisan schedule:list</span> to preview exactly when each task will fire — before you trust it in production.',

    quiz: {
      cat: 'Cron',
      question: 'What does the cron expression "0 4 * * 1" mean?',
      options: [
        'At 04:00 every Monday',
        'At 4 minutes past every hour on day 1',
        'Every minute on day 4 of month 1',
        'At 04:00 on the 1st of every month'
      ],
      correct: 0,
      feedback: { correct: 'Correct. Five fields: minute=0, hour=4, day-of-month=*, month=*, day-of-week=1 (Monday). 04:00 Mondays.', wrong: 'Nope. Fields are minute hour day-of-month month day-of-week: 0 (minute) 4 (hour) * * 1 (Monday) = 04:00 every Monday.' }
    },

    challenge: {
      lang: 'bash',
      text: 'Add a cron job (your own user) that appends the current time to ~/cron-test.log every minute. Wait three minutes, confirm three entries, then remove the job. Bonus: write the equivalent in Laravel\'s scheduler with ->everyMinute().',
      code: 'crontab -e\n# add this line:\n* * * * * date >> /home/<user>/cron-test.log\n# save, wait, then:\ncrontab -r   # remove all your cron jobs',
      hint: 'crontab -l lists yours. crontab -r removes them. Watch the file grow with: tail -f ~/cron-test.log'
    ,
      solution: "crontab -e\n# add this line:\n* * * * * date >> /home/<user>/cron-test.log\n\n# wait 3 minutes, then:\ncat ~/cron-test.log        # three timestamped lines\n\ncrontab -r                 # clean up: removes all your cron jobs\n\n# Laravel equivalent (App\\Console\\Kernel):\n$schedule->call(function () {\n    file_put_contents(storage_path(\"cron-test.log\"), now(), FILE_APPEND);\n})->everyMinute();",
      solutionLang: "bash"},

    prev: { slug: 'linux-ssh', title: 'SSH & Servers' },
    next: { slug: 'docker-why', title: 'Why Containers?' }
  }

});