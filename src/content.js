export const DOMAINS = [
  {
    code: "DEV",
    title: "Фулл-стек разработка",
    desc: "Проектирую продукты целиком: от схемы БД и API до интерфейса. Технологии — под задачу, а не наоборот.",
    points: ["Python / FastAPI / Django", "React, TypeScript, Node.js", "C++ для высоконагруженных модулей", "PostgreSQL, Redis, брокеры сообщений"],
  },
  {
    code: "OPS",
    title: "DevOps и инфраструктура",
    desc: "Автоматизирую путь кода до продакшена. Инфраструктура как код — воспроизводимая и наблюдаемая.",
    points: ["Docker, Kubernetes", "CI/CD: GitLab CI, GitHub Actions", "Terraform, Ansible", "Prometheus, Grafana, алертинг"],
  },
  {
    code: "SEC",
    title: "Информационная безопасность",
    desc: "Защищаю системы там, где цена ошибки максимальна — в финансовых структурах.",
    points: ["ИБ финансовых организаций", "Аудит и пентест инфраструктуры", "PCI DSS, 152-ФЗ, стандарты ЦБ", "SIEM, реагирование на инциденты"],
  },
  {
    code: "AI",
    title: "Нейросети в бизнесе",
    desc: "Встраиваю LLM и ML-модели в реальные процессы. Не хайп — измеримый результат.",
    points: ["Интеграция LLM в бизнес-процессы", "RAG-системы на своих данных", "Автоматизация рутинных операций", "ML-пайплайны и аналитика"],
  },
  {
    code: "1C",
    title: "1С и учётные системы",
    desc: "Дорабатываю и интегрирую 1С с внешним миром. Учёт перестаёт быть изолированным островом.",
    points: ["Разработка и доработка конфигураций", "Интеграции: HTTP-сервисы, шины", "Обмен с банками и маркетплейсами", "Оптимизация запросов"],
  },
  {
    code: "ARC",
    title: "Архитектура и аудит",
    desc: "Смотрю на систему целиком: узкие места, риски, стоимость владения.",
    points: ["Проектирование архитектуры", "Технический аудит проектов", "Код-ревью и наставничество", "Миграции легаси-систем"],
  },
  {
    code: "MOB",
    title: "Мобильная разработка",
    desc: "Нативные и кроссплатформенные приложения. От прототипа до публикации в App Store и Google Play.",
    points: ["iOS (Swift / SwiftUI)", "Android (Kotlin / Jetpack Compose)", "React Native, Flutter", "Desktop: Electron, Tauri"],
  },
  {
    code: "BOT",
    title: "Telegram-боты и MiniApp",
    desc: "Создаю ботов любой сложности — от простых уведомлялок до полноценных бизнес-инструментов.",
    points: ["aiogram / python-telegram-bot", "Telegraf (Node.js)", "Telegram MiniApp (Web App API)", "Интеграции с CRM, платёжными системами"],
  },
  {
    code: "BAS",
    title: "Парсеры и автоматизация",
    desc: "Разрабатываю парсеры любой сложности и автоматизирую браузерные сценарии.",
    points: ["BAS (Browser Automation Studio)", "Парсинг сайтов с защитой", "Selenium, Playwright, Puppeteer", "Массовые операции, мониторинг"],
  },
];

export const STACK_CATEGORIES = [
  {
    title: "Языки",
    tags: ["Python", "C++", "JavaScript", "TypeScript", "SQL", "1С", "Go"],
  },
  {
    title: "Frontend",
    tags: ["React", "Next.js", "Vue.js", "Nuxt", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    title: "Backend",
    tags: ["FastAPI", "Django", "Node.js", "Express", "GraphQL", "REST API"],
  },
  {
    title: "Базы данных",
    tags: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    title: "DevOps",
    tags: ["Docker", "Kubernetes", "Terraform", "Ansible", "Linux", "Bash", "GitHub Actions", "GitLab CI"],
  },
  {
    title: "Cloud",
    tags: ["AWS", "GCP", "Yandex Cloud"],
  },
  {
    title: "Безопасность",
    tags: ["Penetration Testing", "OWASP", "SIEM / SOC", "PCI DSS", "152-ФЗ"],
  },
  {
    title: "AI / ML",
    tags: ["LLM интеграция", "RAG", "TensorFlow", "PyTorch", "ML Ops"],
  },
  {
    title: "Инструменты",
    tags: ["Git", "WebSocket", "gRPC", "RabbitMQ", "Kafka", "Prometheus", "Grafana", "Vault", "JWT", "OAuth 2.0"],
  },
];

export const PRINCIPLES = [
  {
    num: "01",
    title: "Погружение",
    desc: "Разбираюсь в бизнесе, а не только в ТЗ. Половина дорогих ошибок закладывается до первой строчки кода.",
  },
  {
    num: "02",
    title: "Архитектура",
    desc: "Проектирую решение с учётом безопасности и нагрузки с первого дня — а не «прикрутим потом».",
  },
  {
    num: "03",
    title: "Реализация",
    desc: "Итерации с рабочими результатами каждую неделю. Код в репозитории, пайплайн собирает, стенд живёт.",
  },
  {
    num: "04",
    title: "Сопровождение",
    desc: "Мониторинг, алерты, документация. Система, которую можно передать команде, а не чёрный ящик.",
  },
];
