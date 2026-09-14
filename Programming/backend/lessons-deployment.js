/* ========================================
   Chango — Backend Roadmap · Level 10: Deployment (5 lessons)
   ======================================== */

Object.assign(LESSONS, {

  'deploy-hosting': {
    id: 'deploy-hosting',
    section: 'Deployment',
    level: '10',
    title: 'Shared Hosting',
    time: '40 min',
    difficulty: 'Advanced',
    book: 'Book Chapter 10 · Hosting',

    intro: 'Shared hosting is the budget apartment of the internet: cheap, somebody else fixes the building, but you have neighbors and the landlord decides the rules. For a first real deployment, it is completely valid — especially for PHP.',

    whyMatters: 'Shared hosting (cPanel-style) is where many real Laravel apps start, and it teaches you the full deploy flow without needing to babysit a server. If you understand what shared hosting can and cannot do, choosing the right host becomes easy.',

    explanation: [
      { tag: 'heading', text: 'The layout' },
      { tag: 'text', text: 'A cPanel host gives you <span class="inline-code">public_html/</span> for web files, a MySQL database you create from the panel, and (if the host allows) SSH access. You upload your app, point the document root at Laravel\'s <span class="inline-code">public/</span>, and configure the environment.'
      },
      { tag: 'heading', text: 'Pointing at public/' },
      { tag: 'text', text: 'A Laravel request must land in <span class="inline-code">public/index.php</span>. On shared hosting you typically upload the app (minus vendor) to a folder and either set the document root to <span class="inline-code">public/</span>, or put Laravel in <span class="inline-code">public_html/laravel</span> and copy <span class="inline-code">public/index.php</span> + <span class="inline-code">.htaccess</span> to <span class="inline-code">public_html</span>, adjusting the paths in index.php.'
      },
      { tag: 'heading', text: 'Shared hosting limits (be honest)' },
      { tag: 'text', text: 'No Docker, no custom nginx, limited (or no) SSH, and your neighbor\'s spike can slow you down. For serious apps this eventually gets painful — but for a portfolio/early product, it is a fast, safe way to be "online".' }
    ],

    code: [
      {
        lang: 'bash',
        label: 'Upload a Laravel app (via SSH, the clean way)',
        code: 'rsync -avz --exclude vendor --exclude .env --exclude .git ./ deploy@host:~/app/\n' +
              'ssh deploy@host "cd ~/app && composer install --no-dev --optimize-autoloader"\n' +
              'ssh deploy@host "cd ~/app && php artisan migrate --force "\n' +
              'ssh deploy@host "cd ~/app && php artisan config:cache"'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'Upload code without vendor and secrets, then run composer and migrations on the server itself so binaries and extensions match the server\'s PHP. <span class="inline-code">--force</span> is required for artisan in production (it skips the confirmation prompt).' }
    ],

    mistakes: [
      'Uploading .env or the whole .git folder — either leaks secrets or risks exposing the repo.',
      'Forgetting <span class="inline-code">php artisan storage:link</span> — uploaded avatars appear as broken images.',
      'Running artisan migrate on your local DB while production users write to the same table — never mix environments.'
    ],

    proTip: 'Before uploading, set up a deploys checklist: run <span class="inline-code">php artisan config:cache</span>, <span class="inline-code">php artisan route:cache</span>, and <span class="inline-code">optimize</span> after every deploy. Shared hosting hates uncached PHP.',

    quiz: {
      cat: 'Deployment',
      question: 'Why must Laravel requests land in public/index.php on shared hosting?',
      options: [
        'Because Laravel\'s web root is public/ and index.php bootstraps the app',
        'Because the .env file lives there',
        'Because MySQL requires it',
        'It doesn\'t matter where they land'
      ],
      correct: 0,
      feedback: { correct: 'Correct. Laravel separates code from the web root — everything touches the world through public/index.php.', wrong: 'Nope. The document root must point at Laravel\'s public/ folder; index.php is the single entry point.' }
    },

    challenge: {
      lang: 'bash',
      text: 'Deploy a small Laravel app to a shared host (free tier hosts exist) with a MySQL database created from the panel. Verify: the homepage loads, the migration created the table, and you can log in. Document every step you had to guess.',
      hint: 'Use .env.example → real .env locally, zip without vendor, upload, then composer install + migrate on the server.'
    ,
      solution: "1) Top .env-visible config into server-side env (never commit keys)\n2) Zip project WITHOUT vendor + node_modules\n3) Upload to shared host, extract into the app folder\n4) Set .env with your DB credentials, APP_KEY=base64:..., APP_ENV=production, APP_DEBUG=false\n5) If composer exists on the host: composer install --no-dev --optimize-autoloader\n   If not: install deps locally, upload vendor (acceptable on shared hosts)\n6) Database: create MySQL DB + user in the panel, put credentials in .env\n7) Run: php artisan key:generate, php artisan migrate --force, php artisan config:cache\n8) Verify: homepage loads, phpMyAdmin shows your tables, you can log in\n9) Document every guess so the next deploy is copy-paste",
      solutionLang: "text"},

    prev: { slug: 'docker-laravel', title: 'Laravel + Docker' },
    next: { slug: 'deploy-vps', title: 'VPS Basics' }
  },

  'deploy-vps': {
    id: 'deploy-vps',
    section: 'Deployment',
    level: '10',
    title: 'VPS Basics',
    time: '45 min',
    difficulty: 'Advanced',
    book: 'Book Chapter 10 · VPS',

    intro: 'A VPS is a whole server that is only yours. Windows, memory, disk, root access, and absolute power — which also means absolute responsibility. This is where "backend developer" stops being about code and starts being about custody.',

    whyMatters: 'Everything you learned in the Linux and Docker levels pays off here. A VPS runs real production apps, gives you freedom (any PHP version, any stack), and is the standard home of serious backends. Learn to stand one up without fear.',

    explanation: [
      { tag: 'heading', text: 'Buying and first login' },
      { tag: 'text', text: 'Any provider (DigitalOcean, Linode, Hetzner, Vultr) hands you an IP, login credentials as root, and usually an SSH key option. First steps are universal: update packages, create a non-root user with sudo, lock down SSH keys only, and set a hostname.' },
      { tag: 'heading', text: 'Minimal but critical packages' },
      { tag: 'text', text: '<span class="inline-code">nginx</span> (web server), <span class="inline-code">php-fpm + extensions</span>, <span class="inline-code">mysql-server or mariadb</span>, <span class="inline-code">git</span>, and <span class="inline-code">composer</span>. Also a firewall (<span class="inline-code">ufw allow OpenSSH</span> + 80/443) — default-deny for everything else.' },
      { tag: 'heading', text: 'The deploy-from-scratch loop' },
      { tag: 'text', text: 'clone/pull code → composer install → set .env → migrate → point nginx at public/ → reload. Doing it by hand the first time teaches you exactly what your future automation (CI/CD) is automating.' }
    ],

    code: [
      {
        lang: 'bash',
        label: 'First boot after you can log in',
        code: 'sudo apt update && sudo apt upgrade -y\n' +
              'adduser deploy\n' +
              'usermod -aG sudo deploy\n' +
              'sudo ufw allow OpenSSH\n' +
              'sudo ufw allow 80,443/tcp\n' +
              'sudo ufw enable\n' +
              '# now copy your SSH public key to deploy and disable root login'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'Updates first — a fresh VPS is already months behind. A sudo user instead of root, plus a firewall that only lets SSH and web traffic in. Good hygiene from minute one costs five minutes and prevents a world of pain.' }
    ],

    mistakes: [
      'Deploying directly as root because it is simpler — yes, and the moment a command goes wrong, the server is done.',
      'Skipping the firewall "because my host blocks everything anyway" — hosts filter the city, not your door.',
      'Not enabling unattended-upgrades and waking up to a public CVE using your old packages.'
    ],

    proTip: 'Take a snapshot after first setup. Now any mistake you make later — "sudo rm -rf /" energy — costs a restore, not a rebuild.',

    quiz: {
      cat: 'VPS',
      question: 'What should you do the very first time you log into a fresh VPS?',
      options: [
        'Update packages, add a sudo user, enable a firewall',
        'Immediately deploy your app',
        'Install a desktop environment',
        'Change the hostname and forget it'
      ],
      correct: 0,
      feedback: { correct: 'Correct. Patch, create a limited-wreckage user, and close the door before decorating.', wrong: 'Nope. First job is hygiene: update, non-root user, firewall. Deploying on an unloved server is building on sand.' }
    },

    challenge: {
      lang: 'bash',
      text: 'On your VPS (or a disposable test instance), do the first-boot loop: log in, update, create "deploy" with sudo, enable the firewall with ssh+80+443, and confirm root no longer can log in with a password.',
      hint: 'Settings live in sshd_config. Test root login from a SECOND terminal before closing your working session — never lock yourself out blind.'
    ,
      solution: "ssh root@<server-ip>\n\napt update && apt upgrade -y\nadduser deploy\nusermod -aG sudo deploy\n\n# firewall: allow ssh + web ports only, enable it\nufw allow OpenSSH\nufw allow 80/tcp\nufw allow 443/tcp\nufw enable\n\n# key login for deploy (from your machine):\nssh-keygen -t ed25519            # local\nssh-copy-id deploy@<server-ip>   # local\n\n# disable root password login:\nsudo nano /etc/ssh/sshd_config\n#   PermitRootLogin no\nsudo systemctl restart sshd\n\n# ALWAYS test in a second terminal first.",
      solutionLang: "bash"},

    prev: { slug: 'deploy-hosting', title: 'Shared Hosting' },
    next: { slug: 'deploy-nginx', title: 'Nginx Setup' }
  },

  'deploy-nginx': {
    id: 'deploy-nginx',
    section: 'Deployment',
    level: '10',
    title: 'Nginx Setup',
    time: '45 min',
    difficulty: 'Advanced',
    book: 'Book Chapter 10 · Nginx',

    intro: 'Nginx is the front-desk clerk of your server. It takes every visitor\'s request, decides which door (PHP-FPM? static file? 404?) to send them through, and keeps the building standing during traffic spikes.',

    whyMatters: 'Nginx serves hundreds of thousands of connections with modest memory, and it is the standard way to serve a PHP app in production. A correct nginx config means static assets are fast, PHP is processed by FPM, and errors never hit your users raw.',

    explanation: [
      { tag: 'heading', text: 'Server blocks (vhosts)' },
      { tag: 'text', text: 'Each site is a <strong>server block</strong> in <span class="inline-code">/etc/nginx/sites-available/</span>, then symlinked into <span class="inline-code">sites-enabled/</span>. It declares: listen on 80, the <span class="inline-code">server_name</span> (domain), and the <span class="inline-code">root</span> (Laravel\'s public/).' },
      { tag: 'heading', text: 'Passing PHP to FPM' },
      { tag: 'text', text: 'A <span class="inline-code">location ~ \\.php$</span> block forwards .php requests to <span class="inline-code">fastcgi_pass unix:/run/php/php8.3-fpm.sock</span> with a fastcgi_params file. Static assets are served by nginx directly — no PHP involved, which is why they are fast.' },
      { tag: 'heading', text: 'The Laravel flavor' },
      { tag: 'text', text: 'A typical Laravel block has a special <span class="inline-code">location /</span> with <span class="inline-code">try_files $uri $uri/ /index.php?$query_string</span> — that is what makes pretty URLs work: every route falls through to index.php without touching the filesystem.'
      }
    ],

    code: [
      {
        lang: 'nginx',
        label: 'The minimal, battle-tested Laravel server block',
        code: 'server {\n' +
              '    listen 80;\n' +
              '    server_name example.com;\n' +
              '    root /var/www/myapp/public;\n' +
              '    index index.php;\n' +
              '\n' +
              '    location / {\n' +
              '        try_files $uri $uri/ /index.php?$query_string;\n' +
              '    }\n' +
              '\n' +
              '    location ~ \\.php$ {\n' +
              '        include fastcgi_params;\n' +
              '        fastcgi_pass unix:/run/php/php8.3-fpm.sock;\n' +
              '        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n' +
              '    }\n' +
              '}'
      }
    ],

    codeExplained: [
      { tag: 'text', text: '<span class="inline-code">root</span> targets public/ so Laravel\'s single entry point handles routing. <span class="inline-code">try_files</span> rewrites pretty URLs to index.php (with original query). The PHP location hands actual .php files to FPM. After editing: <span class="inline-code">nginx -t</span> to test, then <span class="inline-code">systemctl reload nginx</span>.' }
    ],

    mistakes: [
      'Pointing root at the app folder instead of public/ — visitors download your source or hit an empty index.',
      'Skipping <span class="inline-code">nginx -t</span> before reload and killing nginx mid-flight with invalid syntax.',
      'Forgetting the apply: <span class="inline-code">systemctl reload nginx</span> (and <span class="inline-code">php-fpm</span> after its config changes).'
    ],

    proTip: 'Check the error log while debugging a 502: <span class="inline-code">tail -f /var/log/nginx/error.log</span>. A 502 is almost always "FPM is down or the socket path is wrong" — the log says which, instantly.',

    quiz: {
      cat: 'Nginx',
      question: 'What does "try_files $uri $uri/ /index.php?$query_string" do in a Laravel block?',
      options: [
        'Sends any request that matches no real file to Laravel\'s front controller',
        'Deletes requests that are not files',
        'Redirects all traffic to another server',
        'Blocks PHP files entirely'
      ],
      correct: 0,
      feedback: { correct: 'Correct. Real files are served; everything else falls through to index.php — pretty URLs everywhere.', wrong: 'Nope. try_files serves real files and forwards everything else to index.php, which is how Laravel\'s routing works.' }
    },

    challenge: {
      lang: 'nginx',
      text: 'Write a complete server block for a Laravel app served from /srv/laravel, PHP via php8.3-fpm socket, and pretty URLs. Test with nginx -t, reload, and confirm the homepage and a route (/login) both return 200.',
      hint: 'root = /srv/laravel/public. Use the exact try_files line from this lesson.'
    ,
      solution: "server {\n    listen 80;\n    server_name yourdomain.com;\n    root /srv/laravel/public;\n\n    add_header X-Frame-Options \"SAMEORIGIN\";\n    add_header X-Content-Type-Options \"nosniff\";\n\n    index index.php;\n\n    charset utf-8;\n\n    location / {\n        try_files $uri $uri/ /index.php?$query_string;\n    }\n\n    location = /favicon.ico { access_log off; log_not_found off; }\n    location = /robots.txt  { access_log off; log_not_found off; }\n\n    error_page 404 /index.php;\n\n    location ~ \\.php$ {\n        fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;\n        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;\n        include fastcgi_params;\n    }\n\n    location ~ /\\.(?!well-known).* {\n        deny all;\n    }\n}\n\n# nginx -t && systemctl reload nginx\n# curl -I http://yourdomain.com  → 200\n# curl -I http://yourdomain.com/login → 200",
      solutionLang: "nginx"},

    prev: { slug: 'deploy-vps', title: 'VPS Basics' },
    next: { slug: 'deploy-env', title: 'Environment Variables' }
  },

  'deploy-env': {
    id: 'deploy-env',
    section: 'Deployment',
    level: '10',
    title: 'Environment Variables',
    time: '25 min',
    difficulty: 'Advanced',
    book: 'Book Chapter 10 · Env',

    intro: 'A great app has zero secrets in its code. Database passwords, API keys, mail credentials — they all live outside the repo, in environment variables. The .env file is the server\'s little black book, and it never gets committed.',

    whyMatters: 'If credentials live in code, they end up on GitHub. Scrapers find leaked keys in minutes and turn your free API tier into their personal abusement park. Environment configuration is how real apps keep secrets secret while staying configurable.',

    explanation: [
      { tag: 'heading', text: 'The .env contract' },
      { tag: 'text', text: 'Laravel loads <span class="inline-code">.env</span> into environment variables via <span class="inline-code">env("DB_PASSWORD")</span>. The tracked file is <span class="inline-code">.env.example</span> — a template with empty/example values. Everyone copies it to their own .env with real values. Secrets live per-environment.' },
      { tag: 'heading', text: 'Why not hardcode' },
      { tag: 'text', text: 'Aside from leaking: environments differ. Local DB password, production DB password, CI test DB — the code is identical, the configuration must differ. Environment variables make that natural.' },
      { tag: 'heading', text: 'Cache carefully' },
      { tag: 'text', text: '<span class="inline-code">php artisan config:cache</span> bundles config into a single cached file — great for speed. But then changes to .env require re-caching to apply. Remember that order and "why is my .env change not working" disappears.'
      }
    ],

    code: [
      {
        lang: 'ini',
        label: '.env.example — safe to commit',
        code: 'APP_ENV=local\n' +
              'APP_DEBUG=true\n' +
              'APP_KEY=\n' +
              'APP_URL=http://localhost\n' +
              '\n' +
              'DB_CONNECTION=mysql\n' +
              'DB_HOST=127.0.0.1\n' +
              'DB_DATABASE=chango\n' +
              'DB_USERNAME=root\n' +
              'DB_PASSWORD='
      },
      {
        lang: 'bash',
        label: 'Real .env on the server (never committed)',
        code: 'cp .env.example .env\n' +
              'php artisan key:generate      # fills APP_KEY, a real secret\n' +
              'nano .env                      # put the real DB credentials in'
      }
    ],

    codeExplained: [
      { tag: 'text', text: '.env.example is the public contract; .env is the private reality. <span class="inline-code">php artisan key:generate</span> creates APP_KEY — the secret used for encrypting sessions and cookies — which must be unique per environment. Keep it out of git.gitignore already excludes .env.' }
    ],

    mistakes: [
      'Committing .env once "by accident" — even if you delete it later, the damage is in history. Rotate those keys. Tools like git-filter-repo only rescue you retroactively.',
      'Hardcoding a fallback: <span class="inline-code">env("DB_PASSWORD", "secret")</span> ships the fallback key everywhere.',
      'Editing .env but not re-caching after running config:cache, then debugging "why nothing changed".'
    ],

    proTip: 'Different environments = different .env == the same code. Practice by using APP_URL per environment and notice every generated link, mail URL, and asset path respect it such that staging barely differs from production.',

    quiz: {
      cat: 'Environment',
      question: 'What is the point of .env.example in a repository?',
      options: [
        'A safe template showing which variables an environment must define',
        'The real production configuration',
        'A decoy file to confuse attackers',
        'Laravel ignores it'
      ],
      correct: 0,
      feedback: { correct: 'Correct. It is the contract: "define these variables". Real secrets never appear there.', wrong: 'Nope. .env.example is the public template of required variables; real values live only in private .env files.' }
    },

    challenge: {
      lang: 'ini',
      text: 'Create a proper .env.example for an app that uses: mail (SMTP), a payment gateway key, and an S3-like storage (disk, bucket, region, access key). Then ask yourself: which of these values would ever be safe to hardcode? (Answer: none.)',
      hint: 'Write placeholders like MAIL_PASSWORD= and PAYMENT_SECRET= — never values.'
    ,
      solution: "MAIL_MAILER=smtp\nMAIL_HOST=smtp.example.com\nMAIL_PORT=587\nMAIL_USERNAME=\nMAIL_PASSWORD=\nMAIL_FROM_ADDRESS=no-reply@example.com\nMAIL_ENCRYPTION=tls\n\nPAYMENT_GATEWAY_KEY=\nPAYMENT_GATEWAY_SECRET=\n\nS3_DISK=s3\nS3_BUCKET=\nS3_REGION=\nS3_ACCESS_KEY_ID=\nS3_SECRET_ACCESS_KEY=\n\n# hardcode these? None. Every one changes by environment.",
      solutionLang: "ini"},

    prev: { slug: 'deploy-nginx', title: 'Nginx Setup' },
    next: { slug: 'deploy-https', title: 'HTTPS & Domains' }
  },

  'deploy-https': {
    id: 'deploy-https',
    section: 'Deployment',
    level: '10',
    title: 'HTTPS & Domains',
    time: '35 min',
    difficulty: 'Advanced',
    book: 'Book Chapter 10 · HTTPS',

    intro: 'Your site should be HTTPS, full stop, no excuses, no "it\'s just a portfolio". The padlock is the web\'s seatbelt, and thanks to Let\'s Encrypt it is also free. Domain + cert + one redirect, and you can stop explaining why your forms got flagged.',

    whyMatters: 'Browsers mark plain HTTP with frightening red warnings, passwords over HTTP are readable by anyone on the network, and search engines quietly rank secure sites higher. HTTPS is not a feature — it is the baseline of trust.',

    explanation: [
      { tag: 'heading', text: 'Domain → DNS' },
      { tag: 'text', text: 'Buy a domain anywhere; point its DNS (an A record) at your server\'s IP. Then your server may respond to it. DNS changes can take minutes-to-hours to propagate — a normal waiting period, not a bug.' },
      { tag: 'heading', text: 'Certificates that are free' },
      { tag: 'text', text: '<strong>Certbot</strong> (Let\'s Encrypt client) does everything: prove you own the domain, issue a certificate, configure nginx, and set up auto-renewal. <span class="inline-code">apt install certbot python3-certbot-nginx</span> + <span class="inline-code">certbot --nginx -d example.com</span> is the whole miracle.'
      },
      { tag: 'heading', text: 'Force the padlock' },
      { tag: 'text', text: 'Certbot sets up the HTTPS server block; then a permanent redirect (<span class="inline-code">return 301 https://$host$request_uri;</span>) in the HTTP block guarantees every visitor lands on the secure version. Also set <span class="inline-code">APP_URL=https://example.com</span> so generated links are HTTPS.'
      }
    ],

    code: [
      {
        lang: 'bash',
        label: 'HTTPS on nginx in three commands',
        code: 'sudo apt install -y certbot python3-certbot-nginx\n' +
              'sudo certbot --nginx -d example.com -d www.example.com\n' +
              'sudo certbot renew --dry-run   # confirm auto-renewal works'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'Certbot edits your server block, installs the cert, and redirects HTTP to HTTPS automatically. <span class="inline-code">renew --dry-run</span> verifies the renewal machinery so your certificate never silently expires (Let\'s Encrypt certs live only ~90 days).' }
    ],

    mistakes: [
      'Redeploying to HTTP because "it worked in the browser" — check the padlock and the address bar; the padlock is the truth.',
      'Forgetting to renew — Let\'s Encrypt certs are short-lived on purpose. The <span class="inline-code">certbot.timer</span> usually handles it; verify with dry-run.',
      'Using your IP instead of the domain in certs — Let\'s Encrypt will not issue for IP addresses. You need a real domain.'
    ],

    proTip: 'After going HTTPS, purge old caches and update every hardcoded http:// link in emails and stored assets. Mixed content (HTTPS page loading HTTP asset) is blocked by browsers and looks broken.',

    quiz: {
      cat: 'HTTPS',
      question: 'Why does Let\'s Encrypt make certificates so short-lived (~90 days)?',
      options: [
        'Short-lived certs force automation, making expiry failures rare and revocation fast',
        'It is cheaper to generate short certs',
        'Browsers demand it',
        'Short certs are stronger cryptography'
      ],
      correct: 0,
      feedback: { correct: 'Correct. Automation-based renewal beats remember-to-renew. The 90-day lifecycle keeps the ecosystem healthy.', wrong: 'Nope. Short lifetimes mean certificates get rotated automatically and revoked keys die quickly — better security by design.' }
    },

    challenge: {
      lang: 'bash',
      text: 'On a domain you own, point DNS to your VPS, run certbot --nginx, confirm https, set APP_URL to the https domain, add the HTTP→HTTPS redirect, and verify a sample form submit over the padlock.',
      hint: 'certbot --nginx -d yourdomain.com. After that, check https://yourdomain.com manually.'
    ,
      solution: "# 1) DNS: add an A record pointing your domain at the VPS IP,\n#    wait for propagation (dig +short yourdomain.com)\n\n# 2) install and run certbot (auto-writes HTTPS + redirect)\napt install certbot python3-certbot-nginx\ncertbot --nginx -d yourdomain.com\n\n# 3) .env\nAPP_URL=https://yourdomain.com\n\n# 4) reload and test\nsystemctl reload nginx\ncurl -I https://yourdomain.com            # 200 over TLS\ncurl -I http://yourdomain.com             # 301 → https\n# submit a form in the browser and check the padlock",
      solutionLang: "bash"},

    prev: { slug: 'deploy-env', title: 'Environment Variables' },
    next: { slug: 'projects-todo', title: 'Todo API' }
  }

});