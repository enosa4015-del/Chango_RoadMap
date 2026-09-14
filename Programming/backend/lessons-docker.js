/* ========================================
   Chango — Backend Roadmap · Level 09: Docker (5 lessons)
   ======================================== */

Object.assign(LESSONS, {

  'docker-why': {
    id: 'docker-why',
    section: 'Docker',
    level: '09',
    title: 'Why Containers?',
    time: '25 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 9 · Intro',

    intro: '"But it works on my machine!" — the #1 sentence killing production environments. Docker packages your app with its entire universe (PHP version, extensions, config) so that "my machine" and "production" become the same machine.',

    whyMatters: 'Half of all deployment bugs are environment drift: different PHP version, missing extension, different MySQL collation. Containers freeze the environment into an immutable image. Same image, same behavior — everywhere, forever, cross-platform.',

    explanation: [
      { tag: 'heading', text: 'Container vs VM' },
      { tag: 'text', text: 'A <strong>VM</strong> emulates a whole computer (heavy: own OS, gigabytes). A <strong>container</strong> shares the host\'s Linux kernel but isolates its own filesystem, processes, and network. It boots in seconds and weighs megabytes instead of gigabytes — but it is still Linux under the hood.' },
      { tag: 'heading', text: 'The two artifacts' },
      { tag: 'text', text: '<strong>Image</strong> = the recipe, read-only, reusable (like a stamped blueprint). <strong>Container</strong> = a running instance of that image (the actual house built from the blueprint). You build an image once, then run containers from it.' },
      { tag: 'heading', text: 'Repeatable, shareable, disposable' },
      { tag: 'text', text: 'Images live in registries (Docker Hub, GHCR). Everyone pulls the same image, so onboarding a teammate = one file. And since containers are disposable, killing and recreating them is the normal workflow — no more "it accumulated state" mysteries.'
      }
    ],

    code: [
      {
        lang: 'bash',
        label: 'Feeling Docker before understanding it',
        code: 'docker run hello-world          # a test image says hello\n' +
              'docker ps                       # running containers\n' +
              'docker ps -a                    # every container ever\n' +
              'docker images                   # the images you have locally'
      }
    ],

    codeExplained: [
      { tag: 'text', text: '<span class="inline-code">docker run hello-world</span> downloads a tiny image and runs it — proof the machinery works end to end. Then <span class="inline-code">docker ps</span> becomes your new best friend: the answer to "is my app actually running?"' }
    ],

    mistakes: [
      'Installing stuff inside a running container instead of editing the image — the change evaporates when the container is recreated. Images are the source of truth.',
      'Treating a container like a permanent VM. It is temporary by design; state belongs in volumes and databases.',
      'Forgetting docker is Linux: a MySQL image on Windows is still Linux MySQL inside — expect POSIX paths, not C:\\.'
    ],

    proTip: 'Beginners should not memorize 40 Docker subcommands. Learn: run, ps, images, exec, logs, stop, rm. That\'s the daily 7. Everything else, <span class="inline-code">docker --help</span> will remind you.',

    quiz: {
      cat: 'Docker Basics',
      question: 'What is the difference between an image and a container?',
      options: [
        'Image = the readonly recipe; Container = a running instance of it',
        'They are the same thing',
        'Image = running; Container = saved',
        'Image is for PHP only'
      ],
      correct: 0,
      feedback: { correct: 'Correct. Blueprint vs building. The image is static, the container is alive.', wrong: 'Nope. An image is the immutable definition; a container is a running, mutable instance of that image.' }
    },

    challenge: {
      lang: 'bash',
      text: 'Install Docker Desktop (or dind on any Linux box), pull the nginx image, run nginx on port 8080, visit http://localhost:8080, then stop and remove the container. Leave zero containers running.',
      code: 'docker pull nginx\ndocker run -d -p 8080:80 --name webserver nginx\ndocker ps\n# open http://localhost:8080, then:\ndocker stop webserver\ndocker rm webserver\ndocker ps -a   # empty-ish now',
      hint: '-d runs detached, -p maps host port 8080 to container port 80.'
    ,
      solution: "docker pull nginx\ndocker run -d -p 8080:80 --name webserver nginx\ndocker ps                     # webserver listed\n\n# open http://localhost:8080  → the nginx welcome page\n\ndocker stop webserver\ndocker rm webserver\ndocker ps -a                  # container is gone, nothing running",
      solutionLang: "bash"},

    prev: { slug: 'linux-cron', title: 'Cron & Scheduling' },
    next: { slug: 'docker-images', title: 'Images & Containers' }
  },

  'docker-images': {
    id: 'docker-images',
    section: 'Docker',
    level: '09',
    title: 'Images & Containers',
    time: '35 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 9 · Images',

    intro: 'Images are like Git commits for whole operating systems: layered, cached, and stamped forever. Containers are the temporary tents you pitch from them. Understand the layers and the whole Docker universe clicks.',

    whyMatters: 'Pretty much every Docker mystery (why is it huge? why is rebuilding fast? why did my change vanish?) is answered by "because images are layered filesystems". This lesson is the decoder ring.',

    explanation: [
      { tag: 'heading', text: 'A cake made of layers' },
      { tag: 'text', text: 'An image is built from a stack of layers. Base OS layer, then PHP layer, then your app layer. Each <span class="inline-code">RUN</span> in a Dockerfile adds one layer. Layers are shared and cached — which is why builds reuse existing layers instead of starting over.' },
      { tag: 'heading', text: 'Running = a writable hat' },
      { tag: 'text', text: 'When you run a container, Docker puts a thin writable layer on top of the read-only image layers. All changes you make (installing packages, writing temp files) live there — and it is thrown away when the container is deleted. Persistent data must live in <strong>volumes</strong>.' },
      { tag: 'heading', text: 'Images get blocky' },
      { tag: 'text', text: 'Pull a specific image and Digest, or build with tags: <span class="inline-code">:latest</span> moves, <span class="inline-code">:1.2.3</span> is pinned forever. For production, pin versions instead of chasing latest.' }
    ],

    code: [
      {
        lang: 'bash',
        label: 'Inspecting your images',
        code: 'docker history php:8.3-cli    # the layers, top to bottom\n' +
              'docker inspect nginx          # a JSON autobiography of the image\n' +
              'docker logs myapp             # stdout of a running container\n' +
              'docker exec -it myapp bash    # open a shell inside the container'
      }
    ],

    codeExplained: [
      { tag: 'text', text: '<span class="inline-code">docker history</span> shows the build steps as layers — see how many steps your image has and how many could merge. <span class="inline-code">docker exec -it myapp bash</span> drops you inside a running container to poke around; it is the "SSH into the container" move.' }
    ],

    mistakes: [
      'Running a container with -it bash but forgetting it still needs to be "started" to serve traffic — containers exit when their main process exits.',
      'Wasting the writable layer: if your app writes logs inside the container, they vanish on rebuild unless you mount a volume.',
      'Using :latest everywhere and getting surprised when "updates" silently change behavior.'
    ],

    proTip: 'Keep images small on purpose: prefer alpine variants when your tooling supports it, combine RUN commands, and clean apt caches in the same layer. Your deploy pipeline downloads whatever size you allow.',

    quiz: {
      cat: 'Docker',
      question: 'Why do your changes to a container disappear after you recreate it?',
      options: [
        'Container changes live in a top writable layer that is discarded with the container',
        'Docker deletes everything on purpose',
        'Images are encrypted',
        'They are stored on the database'
      ],
      correct: 0,
      feedback: { correct: 'Correct. The writable layer is temporary. Persistent state belongs in volumes.', wrong: 'Nope. Each container gets a scratch writable layer that is thrown away when the container is recreated. Use volumes for persistence.' }
    },

    challenge: {
      lang: 'bash',
      text: 'Run an nginx container, docker exec into it, create a file at /tmp/i-was-here.txt, exit, then docker rm -f and recreate the same container. Confirm /tmp/i-was-here.txt is gone — proving containers are disposable.',
      code: 'docker run -d --name test nginx\ndocker exec -it test bash\nexit\ndocker rm -f test\ndocker run -d --name test nginx\ndocker exec test ls /tmp/i-was-here.txt   # No such file',
      hint: 'That is the exact behavior you want. When you need persistence, that\'s what a named volume is for.'
    ,
      solution: "docker run -d --name test nginx\n\ndocker exec -it test sh\ntouch /tmp/i-was-here.txt\nexit\n\ndocker rm -f test\ndocker run -d --name test nginx\ndocker exec test ls /tmp/i-was-here.txt   # No such file or directory\n\n# containers are disposable — that is the point. Use a named volume for persistence.",
      solutionLang: "bash"},

    prev: { slug: 'docker-why', title: 'Why Containers?' },
    next: { slug: 'dockerfile', title: 'Dockerfile' }
  },

  'dockerfile': {
    id: 'dockerfile',
    section: 'Docker',
    level: '09',
    title: 'Dockerfile',
    time: '40 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 9 · Dockerfile',

    intro: 'A Dockerfile is a recipe card for your environment: "start with PHP 8.3, add these extensions, copy my code here, expose port 80, done." Written once, reproducible forever. It is infrastructure as text you can read in a code review.',

    whyMatters: 'The Dockerfile is how your team documents "what our app needs to run" — unit by unit. The Laravel + PHP world runs on official php images and the official frameworks images. Knowing how to write one makes you the person who fixes other people\'s machines.',

    explanation: [
      { tag: 'heading', text: 'The core instructions' },
      { tag: 'text', text: '<strong>FROM</strong> — the starting image. <strong>WORKDIR</strong> — where commands run. <strong>COPY</strong> — copy files from your machine into the image. <strong>RUN</strong> — execute a command at build time (installing packages). <strong>EXPOSE</strong> — document the port (informational). <strong>CMD</strong> — the command that runs when the container starts.' },
      { tag: 'heading', text: 'Order matters for caching' },
      { tag: 'text', text: 'Docker caches each layer. Put <em>slow-changing</em> steps first (base image, composer.json copy) and <em>fast-changing</em> steps last (your code COPY). That way rebuilding after a code change reuses every layer except the last — seconds instead of minutes.' },
      { tag: 'heading', text: 'One process per container' },
      { tag: 'text', text: 'A container should run one main process. App containers run PHP-FPM; the web server (nginx) is usually a sibling container. Keep the "one thing, well" spirit.' }
    ],

    code: [
      {
        lang: 'docker',
        label: 'A small, cache-friendly PHP Dockerfile',
        code: 'FROM php:8.3-fpm\n' +
              '\n' +
              'WORKDIR /var/www\n' +
              '\n' +
              '# install needed extensions in ONE layer\n' +
              'RUN docker-php-ext-install pdo_mysql\n' +
              '\n' +
              '# deps first (changes rarely -> cached)\n' +
              'COPY composer.json composer.lock ./\n' +
              'RUN composer install --no-dev --no-scripts\n' +
              '\n' +
              '# app code last (changes often -> rebuilt often)\n' +
              'COPY . .\n' +
              '\n' +
              'EXPOSE 9000\n' +
              'CMD ["php-fpm"]'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'FROM pulls official PHP-FPM 8.3. RUN installs the MySQL driver needed by Laravel. COPY composer files first + composer install lets Docker cache the dependencies, so a code edit does not reinstall packages. CMD starts PHP-FPM — the actual server process.' }
    ],

    mistakes: [
      'Putting COPY . . before installing dependencies — every code change re-runs composer install from scratch.',
      'Running composer install without --no-dev in production images — dev dependencies leak and bloat.',
      'Needing a .dockerignore. Without it, node_modules, .git, storage caches and secrets get copied into the image — huge and dangerous.'
    ],

    proTip: 'Before building, ask "what changes most often?" and put that last. The Dockerfile is essentially a caching-strategy document.',

    quiz: {
      cat: 'Dockerfile',
      question: 'Why do "dependencies first, code last" in a Dockerfile?',
      options: [
        'Because Docker caches layers, and code changes should not rebuild all dependencies',
        'Because code cannot be copied before dependencies exist',
        'Because Docker forbids other orders',
        'There is no reason'
      ],
      correct: 0,
      feedback: { correct: 'Correct. Cache the slow layers behind infrequent changes; only the final layer rebuilds on code edits.', wrong: 'Nope. Layer caching means static layers (deps) should come first so code edits only rebuild the last layer.' }
    },

    challenge: {
      lang: 'docker',
      text: 'Write a Dockerfile for a small PHP 8.3-FPM app: base image, workdir /app, install pdo_mysql, copy composer files + composer install, copy the rest, expose 9000, cmd php-fpm. Add a .dockerignore listing .git, .env, node_modules.',
      code: 'FROM php:8.3-fpm\n\n# ... your recipe here',
      hint: 'Order: FROM → WORKDIR → installs → composer deps → COPY code → EXPOSE → CMD.'
    ,
      solution: "FROM php:8.3-fpm\n\nWORKDIR /app\n\nRUN docker-php-ext-install pdo_mysql\n\nCOPY composer.json composer.lock ./\nRUN composer install --no-dev --prefer-dist --no-interaction\n\nCOPY . .\n\nEXPOSE 9000\nCMD [\"php-fpm\"]\n\n# .dockerignore\n.git\n.env\nnode_modules\nvendor",
      solutionLang: "docker"},

    prev: { slug: 'docker-images', title: 'Images & Containers' },
    next: { slug: 'docker-compose', title: 'docker-compose' }
  },

  'docker-compose': {
    id: 'docker-compose',
    section: 'Docker',
    level: '09',
    title: 'docker-compose',
    time: '45 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 9 · Compose',

    intro: 'docker-compose is the group photo of your app: "this is Laravel, that is MySQL, over there sits nginx — they live together, talk on this network, and here are their moods (volumes)." One file, one command, whole stack running.',

    whyMatters: 'Real apps are not one container. Laravel + MySQL + nginx or Redis — that is a <em>stack</em>. Compose defines the stack as reproducible YAML so anyone (or any CI) can boot the entire environment with <span class="inline-code">docker compose up -d</span>.',

    explanation: [
      { tag: 'heading', text: 'Services, images, ports' },
      { tag: 'text', text: '<span class="inline-code">services</span> lists each container. Each service has an <strong>image or build</strong>, optional <strong>ports</strong> (host:container), <strong>environment</strong> variables, and <strong>volumes</strong>. Compose wires them all on one Docker network so they can reach each other by service name.' },
      { tag: 'heading', text: 'Volumes — state friends' },
      { tag: 'text', text: 'A <strong>named volume</strong> (like <span class="inline-code">db_data</span>) survives container recreation. Databases, uploaded files, and cache that must persist go here. Without volumes, "compose down" purges your data with it.' },
      { tag: 'heading', text: 'depends_on and health checks' },
      { tag: 'text', text: '<span class="inline-code">depends_on</span> starts services in order. But "started" ≠ "ready" — a DB container can be up while MySQL is still booting. Add <span class="inline-code">healthcheck</span> so dependent services wait for actual readiness.'
      }
    ],

    code: [
      {
        lang: 'yaml',
        label: 'A classic Laravel stack',
        code: 'services:\n' +
              '  app:\n' +
              '    build: .\n' +
              '    volumes:\n' +
              '      - ./:/var/www\n' +
              '    env_file: .env\n' +
              '\n' +
              '  db:\n' +
              '    image: mysql:8\n' +
              '    environment:\n' +
              '      MYSQL_DATABASE: laravel\n' +
              '      MYSQL_ROOT_PASSWORD: secret\n' +
              '    volumes:\n' +
              '      - db_data:/var/lib/mysql\n' +
              '    healthcheck:\n' +
              '      test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]\n' +
              '      interval: 5s\n' +
              '      retries: 10\n' +
              '\n' +
              'volumes:\n' +
              '  db_data:'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'The <span class="inline-code">app</span> service builds from the current folder\'s Dockerfile and mounts your code (<span class="inline-code">./:/var/www</span>) so edits apply without rebuilding the image. <span class="inline-code">db</span> persists its data in the named volume <span class="inline-code">db_data</span> and reports healthy once MySQL can ping itself.' }
    ],

    mistakes: [
      'Forgetting volumes and losing a week of database testing data on "compose down" — the most famous Docker tragedy.',
      'Using a bind mount (./:/var/www) without a .dockerignore matching it — your host node_modules gets mounted into the container.',
      'Relying on depends_on alone, then the app fails because MySQL wasn\'t ready yet. Health checks fix that race.'
    ],

    proTip: 'Make the DB folder a named volume (not a bind mount) unless you truly need to inspect its files from your host. Named volumes are faster and free of permission pain on Windows/Mac.',

    quiz: {
      cat: 'Compose',
      question: 'What is a named volume for?',
      options: [
        'Persisting data across container recreations (e.g., a database\'s files)',
        'Making the container run faster',
        'Hiding secrets from the container',
        'Defining container passwords'
      ],
      correct: 0,
      feedback: { correct: 'Correct. Named volumes survive compose down and rebuilding — the cold storage of the container world.', wrong: 'Nope. Named volumes persist data across container lifecycles, so DB files and uploads survive recreations.' }
    },

    challenge: {
      lang: 'yaml',
      text: 'Write a compose file with two services: an "app" that builds from ".", and "redis" using image redis:7, with healthcheck. Add an "init" service that runs a one-shot command (e.g. php artisan migrate) and depends_on a healthy db. Run compose config to validate.',
      code: 'services:\n  app:\n    build: .\n  redis:\n    image: redis:7\n  # add db + init yourself',
      hint: 'docker compose config validates your file without starting anything.'
    ,
      solution: "services:\n  app:\n    build: .\n    depends_on:\n      db:\n        condition: service_healthy\n\n  db:\n    image: mysql:8.0\n    environment:\n      MYSQL_DATABASE: myapp\n      MYSQL_USER: app\n      MYSQL_PASSWORD: secret\n      MYSQL_ROOT_PASSWORD: root\n    healthcheck:\n      test: [\"CMD\", \"mysqladmin\", \"ping\", \"-h\", \"localhost\"]\n      interval: 5s\n      timeout: 3s\n      retries: 10\n\n  redis:\n    image: redis:7\n    healthcheck:\n      test: [\"CMD\", \"redis-cli\", \"ping\"]\n      interval: 5s\n      timeout: 3s\n      retries: 5\n\n  init:\n    image: php:8.3-cli\n    working_dir: /var/www\n    volumes:\n      - .:/var/www\n    command: php artisan migrate --force\n    depends_on:\n      db:\n        condition: service_healthy\n\n# validate: docker compose config",
      solutionLang: "yaml"},

    prev: { slug: 'dockerfile', title: 'Dockerfile' },
    next: { slug: 'docker-laravel', title: 'Laravel + Docker' }
  },

  'docker-laravel': {
    id: 'docker-laravel',
    section: 'Docker',
    level: '09',
    title: 'Laravel + Docker',
    time: '50 min',
    difficulty: 'Intermediate',
    book: 'Book Chapter 9 · Laravel',

    intro: 'Now the whole thing comes together: a Laravel app in containers, nginx at the door, PHP-FPM cooking, MySQL storing, and your laptop no longer deciding what "production" means. The famous "it works on my machine" never survives this stack.',

    whyMatters: 'Dockerized Laravel is what modern teams run, and it is the safest way to develop without polluting your OS with PHP versions. Same compose file runs on every dev machine, in CI, and on a VPS. Learn it once, deploy anywhere.',

    explanation: [
      { tag: 'heading', text: 'The standard trio' },
      { tag: 'text', text: '<strong>app</strong> — PHP-FPM running your code. <strong>nginx</strong> — web server that receives HTTP and forwards PHP files to app. <strong>db</strong> — MySQL with a named volume. Sometimes redis joins as a fourth.' },
      { tag: 'heading', text: 'The framework commands' },
      { tag: 'text', text: 'Artisan and composer run inside the app container: <span class="inline-code">docker compose exec app php artisan migrate</span>, <span class="inline-code">docker compose run --rm app composer install</span>. Your host never needs MySQL client or composer — the containers own the toolchain.' },
      { tag: 'heading', text: 'Permission gotcha' },
      { tag: 'text', text: 'Container processes run as a user (often root inside the container). Bind-mounted files on the host can end up owned by root — annoying. Map the container user to your host UID (often via the Dockerfile USER directive or compose user:).'
      }
    ],

    code: [
      {
        lang: 'bash',
        label: 'From zero to running Laravel in containers',
        code: '# one-time setup\n' +
              'docker compose build\n' +
              'docker compose run --rm app composer install\n' +
              'docker compose run --rm app php artisan key:generate\n' +
              '\n' +
              '# every day\n' +
              'docker compose up -d\n' +
              'docker compose exec app php artisan migrate\n' +
              'docker compose logs -f app'
      }
    ],

    codeExplained: [
      { tag: 'text', text: 'The <span class="inline-code">run --rm</span> pattern runs a one-shot command in a throwaway container (safe for installs). <span class="inline-code">exec</span> runs a command inside the already-running app container — artisan, tests, tinker, all of it.' }
    ],

    mistakes: [
      'Running composer install on the host with a version mismatch, then wondering why the container breaks — run it inside the container.',
      'Forgetting to rebuild after changing composer.json — cached layers serve you the old dependencies.',
      'Serving Laravel without a storage symlink setup (<span class="inline-code">php artisan storage:link</span>) and seeing broken image URLs.'
    ],

    proTip: 'Put your whole dev toolbox in the box: alias short commands in your shell (<span class="inline-code">alias dc="docker compose"</span>, <span class="inline-code">alias art="dc exec app php artisan"</span>). You will type them hundreds of times.',

    quiz: {
      cat: 'Laravel + Docker',
      question: 'How do you run artisan migrate when your app lives in containers?',
      options: [
        'docker compose exec app php artisan migrate',
        'php artisan migrate on the host',
        'SSH into MySQL directly',
        'Restart the database container'
      ],
      correct: 0,
      feedback: { correct: 'Correct. exec runs the command inside the running app container, where PHP and your code live.', wrong: 'Nope. The host has no PHP in a containerized setup — use docker compose exec app php artisan ...' }
    },

    challenge: {
      lang: 'bash',
      text: 'Dockerize a real Laravel app: add the Dockerfile (php:8.3-fpm + pdo_mysql), compose with app/nginx/db, run migrations, seed the DB, and open the app in the browser. Break it on purpose (change DB env) and read the logs to diagnose.',
      code: 'docker compose up -d --build\ndocker compose exec app php artisan migrate --seed\ncurl -I http://localhost',
      hint: 'nginx service: image nginx:alpine, volumes ./:/var/www and ./docker/nginx:/etc/nginx/conf.d, ports "80:80", depends_on [app].'
    ,
      solution: "# Dockerfile\nFROM php:8.3-fpm\nWORKDIR /var/www\nRUN docker-php-ext-install pdo_mysql\nCOPY . /var/www\n# build fails on .env? add ./docker or .dockerignore then re-copy\n\n# docker-compose.yml:  app + nginx + db\n# nginx service:\n#   image: nginx:alpine\n#   volumes: [\"./:/var/www\", \"./docker/nginx:/etc/nginx/conf.d\"]\n#   ports: [\"80:80\"]\n#   depends_on: [app]\n# db: mysql:8.0 with MYSQL_DATABASE/USER/PASSWORD/ROOT_PASSWORD\n\ndocker compose up -d --build\ndocker compose exec app php artisan migrate --seed\ndocker compose exec app php artisan key:generate\n\ncurl -I http://localhost            # 200\n\n# break it: point DB_HOST at a wrong host, then:\ndocker compose logs app             # see the connection error",
      solutionLang: "bash"},

    prev: { slug: 'docker-compose', title: 'docker-compose' },
    next: { slug: 'deploy-hosting', title: 'Shared Hosting' }
  }

});