// Blog posts data
const blogPosts = [
    {
        id: 1,
        title: "Settlement Edge Bot: Как я зарабатываю на arbitrage на Drift Protocol",
        category: "drift",
        date: "2026-03-22",
        excerpt: "Запустил Settlement Edge Bot который ловит спреды между orderbook и AMM на Drift Protocol. За первую неделю: +$250 на счете с начальным балансом $565.67. Вот как это работает...",
        content: "Drift Protocol имеет встроенный AMM который часто отклоняется от справедливой цены. Settlement Edge Bot автоматически находит эти различия и выполняет arbitrage.\n\nСистема:\n1. Мониторит цены на SOL-PERP, ETH-PERP, BTC-PERP\n2. Ловит разницу между AMM price и oracle price\n3. Открывает позицию когда спред > 0.5%\n4. Закрывает позицию когда спред сходит\n5. Повторяет каждые 5 минут\n\nРез: 1-2 успешных trades в час, 0.3-0.5% прибыли за сделку = $2-5 в день"
    },
    {
        id: 2,
        title: "Grid Trading на Drift: Автоматический доход из волатильности",
        category: "drift",
        date: "2026-03-21",
        excerpt: "Grid Trading это стратегия где я создаю сетку buy/sell ордеров вокруг текущей цены. Когда цена колебется вверх-вниз - автоматически ловлю прибыль на каждом движении...",
        content: "Grid Trading работает лучше всего когда цена движется в диапазоне (не тренд). Я использую 5 уровней buy и 5 уровней sell.\n\nПримеры:\n- SOL торгуется $180-200: размещу сетку с шагом в 1%\n- Каждый раз когда цена упадет - автоматически покупаю\n- Когда цена вырастет - автоматически продаю\n- За день может быть 20-30 сделок\n- Прибыль на сделку: 0.2-0.3%\n\nРиск контролирую через stop-loss на -2% от начальной цены."
    },
    {
        id: 3,
        title: "Agent Economy — Почему это революция больше чем AI",
        category: "agents",
        date: "2026-03-20",
        excerpt: "Agent Economy это не просто про боты. Это про экономику где агенты (автоматические системы) могут зарабатывать, инвестировать и создавать ценность без участия людей...",
        content: "Традиционная экономика требует людей для каждого действия. Agent Economy меняет это:\n\n1. ТОРГОВЛЯ: Мой Settlement Edge Bot торгует без моего участия. Зарабатывает деньги самостоятельно.\n\n2. ИНВЕСТИЦИИ: Агенты могут анализировать проекты и инвестировать в лучшие из них.\n\n3. УПРАВЛЕНИЕ: Zero Human Company где все операции выполняет агент. Люди только одобряют большие решения.\n\n4. КРЕАТИВНОСТЬ: AI агенты пишут контент, создают дизайн, генерируют идеи.\n\nЭто создает новый слой экономики. Вместо 1 человека = 1 заработок, 1 агент может работать на 100+ людей одновременно."
    },
    {
        id: 4,
        title: "Как я инвестирую в Agent Economy",
        category: "agents",
        date: "2026-03-19",
        excerpt: "Agent Economy может вырасти в триллион долларов индустрию за 5 лет. Я инвестирую в лучшие проекты которые строят инфраструктуру для этого будущего...",
        content: "Мой инвестиционный тезис простой:\n\n1. TIMING: Agent Economy еще в самом начале (как интернет в 1990х)\n\n2. ИНФРАСТРУКТУРА НУЖНА:\n- Платформы для создания агентов\n- Базы данных для обучения\n- Марктеты где агенты торгуют услугами\n- Платежные системы между агентами\n\n3. ПРИМЕРЫ:\n- Questflow (платформа для создания агентов) — раннесценическая + огромный потенциал\n- AI trading infrastructure — я в этом пространстве, вижу спрос\n- On-chain agent execution — блокчейн дает прозрачность и доверие\n\n4. МОЯ РОЛЬ:\n- Я не просто инвестор\n- Я юзер своих инвестиций\n- Я вижу боли и возможности изнутри\n- Это дает мне unfair advantage в выборе проектов\n\nМоя стратегия: инвестировать в проекты которые я сам использую и в которых вижу реальный потенциал."
    },
    {
        id: 5,
        title: "Zero Human Company — Компания без людей. Реально?",
        category: "insights",
        date: "2026-03-18",
        excerpt: "Я строю Zero Human Company — компанию управляемую полностью AI агентами без участия людей в операционной деятельности. Это возможно прямо сейчас...",
        content: "Zero Human Company (ZHC) это компания где:\n\n1. ОПЕРАЦИИ выполняют агенты (не люди)\n- Trading боты\n- Customer service агенты\n- Content creation агенты\n- Research агенты\n\n2. ЛЮДИ задают НАПРАВЛЕНИЕ\n- Стратегия\n- Целевые показатели\n- Правила и лимиты\n- Периодические reviews\n\n3. ПРЕИМУЩЕСТВА:\n- 24/7 работа без усталости\n- Нет ошибок от эмоций\n- Можно масштабировать без найма\n- Полная прозрачность (все действия логируются)\n- Меньше затрат на зарплаты и управление\n\n4. МОИ ПРОЕКТЫ ZHC:\n- Settlement Edge Bot — зарабатывает $25-55/день\n- Агент для Research & Analysis\n- Агент для Content Creation\n- В план: Trading hedge fund управляемый агентом\n\nЭто не фантастика. Это работает прямо сейчас."
    },
    {
        id: 6,
        title: "DeFi Стратегии: Arbitrage vs Liquidity Providing vs Lending",
        category: "defi",
        date: "2026-03-17",
        excerpt: "Есть 3 основных способа зарабатывать на DeFi. Я пробую все три и поделюсь что лучше работает в текущем маркете...",
        content: "1. ARBITRAGE (Моя основная стратегия)\nЛовлю разницу в цене между разными маркетплейсами/протоколами\n- Pros: Низкий риск, не требует lockup, быстрый результат\n- Cons: Требует быстрой реакции, иногда спреды очень маленькие\n- ROI: 0.5-2% в день если хорошее спреда есть\n\n2. LIQUIDITY PROVIDING\nДаю деньги в пулы и зарабатываю на комиссиях\n- Pros: Пассивный доход, иногда награды в токенах\n- Cons: Impermanent loss если цена сильно упадет\n- ROI: 10-50% в год в зависимости от пула\n\n3. LENDING\nДаю деньги в протоколы типа Aave/Compound\n- Pros: Стабильный доход, низкий риск\n- Cons: Зависит от спроса, часто низкие ставки\n- ROI: 5-15% в год в USDC\n\nМОЙ ВЫБОР: Комбинация. Арбитраж дает быстрый доход, а часть денег в lending для стабильности."
    },
    {
        id: 7,
        title: "Market Analysis: Почему Drift Protocol будет новым Dydx",
        category: "market",
        date: "2026-03-16",
        excerpt: "Drift Protocol сейчас на ранней стадии но имеет все признаки проекта который может доминировать в derivatives trading. Вот мой анализ...",
        content: "Drift Protocol vs конкуренты (Dydx, Hyperliquid, Vertex):\n\nВЫШИБАЮЩИЕ ФАКТОРЫ:\n1. AMM дизайн более эффективный чем orderbook\n2. Комиссии ниже чем на Dydx\n3. Запуск на Solana (не Ethereum) = дешевле транзакции\n4. Ликвидность растет 20% в месяц\n5. Бот фреймворк позволяет создавать стратегии\n\nВЫЗОВЫ:\n1. Конкуренция от Hyperliquid (хороший UX)\n2. Нужна более высокая TVL для глубины\n3. Управление рисками нужно улучшить\n\nМОЙ ПРОГНОЗ:\n- Drift займет 20-30% рынка derivatives за 2 года\n- DRIFT токен может вырасти в 5-10x\n- Лучшие стратегии будут заработывать 50%+ в год на Drift\n\nЧем я делаю: зарабатываю на самом протоколе через торговлю, не спекулирую на токене."
    },
    {
        id: 8,
        title: "Questflow: Платформа для создания агентов как конструктор Lego",
        category: "tools",
        date: "2026-03-15",
        excerpt: "Questflow это платформа где я могу создавать сложных AI агентов без кодирования. Вот что я думаю о будущем этого инструмента...",
        content: "Questflow это game-changer для Agent Economy:\n\nЧТО ЭТО:\n- No-code платформа для создания AI агентов\n- Интеграция с 100+ APIs\n- Визуальный редактор (drag-and-drop)\n- Развертывание одной кнопкой\n\nПРИМЕРЫ АГЕНТОВ ЧТО Я СОЗДАВАЛ:\n1. Агент который читает новости о крипто и находит торговые сигналы\n2. Агент который мониторит Drift Pool и оптимизирует мой capital allocation\n3. Агент для research который собирает информацию о новых проектах\n\nПОЧЕМУ ЭТО ВАЖНО:\n- Раньше нужен был developer для каждого агента\n- Теперь может создать любой человек\n- Это демократизирует Agent Economy\n\nВИДЕНИЕ:\n- Questflow может стать \"Figma\" для агентов\n- Марктейс где люди продают готовые агенты\n- Индустрия в миллиарды долларов\n\nМОЯ ИНВЕСТИЦИЯ: Да, я инвестирую потому что видю невероятный потенциал."
    },
    {
        id: 9,
        title: "Как я отслеживаю $565 на Drift и готовлюсь к 2x за месяц",
        category: "drift",
        date: "2026-03-14",
        excerpt: "У меня есть $565.67 на Drift. Цель: удвоить деньги за месяц используя две стратегии. Вот математика и план...",
        content: "НАЧАЛЬНЫЙ КАПИТАЛ: $565.67\nЦЕЛЬ: $1131.34 за 30 дней\nНУЖНО: +99.3% ROI = 3.3% в день\n\nСТРАТЕГИЯ:\n\n1. SETTLEMENT EDGE BOT (основная)\n- Зарабатывает: $25-30 в день\n- Риск: Низкий (арбитраж)\n- Месячный результат: +$750-900\n\n2. GRID TRADING (дополнительно)\n- Зарабатывает: $10-25 в день\n- Риск: Средний (зависит от волатильности)\n- Месячный результат: +$300-750\n\nКОМБИНЕД: $25-55 в день = $750-1650 в месяц\n\nСЦЕНАРИИ:\n- Консервативный: 2x за 25 дней\n- Хороший: 2x за 15 дней\n- Отличный: 3x за 30 дней\n\nСТОП ЛОСС: -10% = $509\nЕсли упаду ниже этого - стираю все позиции и переходить на консервативную стратегию\n\nМОНИТОРИНГ: Каждые 4 часа проверяю баланс и логи"
    },
    {
        id: 10,
        title: "Почему я веду публичный блог о своей торговле и инвестициях",
        category: "insights",
        date: "2026-03-13",
        excerpt: "Многие спрашивают почему я делюсь своими стратегиями и результатами публично. Вот мои причины...",
        content: "ПРИЧИНЫ ПИСАТЬ ПУБЛИЧНО:\n\n1. ACCOUNTABILIY\n- Если я говорю что заработаю $1000, мне нужно действительно это сделать\n- Публичность дает мне мотивацию\n- Мои читатели будут видеть правда ли я прав\n\n2. РАСПРЕДЕЛЕНИЕ ИДЕЙ\n- Лучшие идеи становятся лучше когда их много людей используют\n- Если я вижу способ заработать - это нормально что другие тоже заработают\n- Это создает конкуренцию которая улучшает индустрию\n\n3. ПОСТРОЕНИЕ СООБЩЕСТВА\n- Вокруг моего блога собирается сообщество интересующихся Agent Economy\n- Сообщество помогает находить новые идеи и ошибки\n- Это моя сеть\n\n4. ВЛИЯНИЕ\n- Я пишу про Agent Economy и Zero Human Company\n- Это влияет на людей которые потом инвестируют в эту сферу\n- Я помогаю создавать будущее которое представляю\n\n5. НИКОМУ НЕ ВРЕДИТ\n- Я не конкурирую с читателями (разные капиталы, разные подходы)\n- Арбитраж не исчезнет если еще кто-то знает как его ловить\n- На рынке достаточно для всех\n\nВЫВОД: Публичность это мой режим по умолчанию. Я верю в прозрачность и сообщество."
    },
    {
        id: 11,
        title: "Что следующее: Марктейс для AI агентов и будущее торговли",
        category: "agents",
        date: "2026-03-12",
        excerpt: "Я вижу где находится Agent Economy за 3 года. Вот мой прогноз и план как я туда попаду...",
        content: "VISION 2029:\n\n1. АГЕНТ МАРКЕТПЛЕЙС\n- Платформа типа Fiverr но для AI агентов\n- Люди продают готовые агенты (trading боты, research агенты, customer service)\n- Валовый объем: $50 млрд в год\n- Я инвестирую в лучшие из них\n\n2. АГЕНТНЫЙ КАПИТАЛ\n- Фонды которые инвестируют в агент стартапы\n- По типу Y Combinator но для агентов\n- Это будет одна из главных индустрий\n\n3. ФИНАНСОВЫЕ АГЕНТЫ\n- Каждый трейдер будет иметь собственного персонального AI трейдера\n- Общее управляемых активов: $1+ триллион\n- AUM в руках агентов будет больше чем у людей\n\n4. ZERO HUMAN COMPANIES\n- 1000+ компаний без сотрудников\n- Управляемых полностью AI\n- Люди только стратегия\n- Это новая норма\n\nМОЙ ПУТЬ:\n- Масштабировать текущие боты из $500 в $50 млн\n- Создать 5-10 успешных Zero Human Companies\n- Инвестировать в инфраструктуру для Agent Economy\n- Быть в топ 100 людей которые построили это будущее\n\nЭто не мечта. Это план на 3 года."
    },
    {
        id: 12,
        title: "Техдиги: Как устроен Settlement Edge Bot изнутри",
        category: "tools",
        date: "2026-03-11",
        excerpt: "Для технических читателей: вот как я построил Settlement Edge Bot на JavaScript + Drift SDK. Архитектура, оптимизация, ошибки...",
        content: "АРХИТЕКТУРА:\n\n```\n┌─────────────────┐\n│  Drift SDK      │ (Подключение к протоколу)\n└────────┬────────┘\n         │\n┌────────▼────────┐\n│ Price Monitor   │ (Мониторит цены каждые 5 сек)\n└────────┬────────┘\n         │\n┌────────▼────────┐\n│ Edge Detector   │ (Находит спреды > 0.5%)\n└────────┬────────┘\n         │\n┌────────▼────────┐\n│ Order Manager   │ (Открывает/закрывает позиции)\n└────────┬────────┘\n         │\n┌────────▼────────┐\n│ Risk Manager    │ (Контролирует stop loss)\n└────────┬────────┘\n         │\n┌────────▼────────┐\n│ Telegram Alerts │ (Отправляет обновления)\n└─────────────────┘\n```\n\nКЛЮЧОВЫЕ ОПТИМИЗАЦИИ:\n1. Кешировать цены в памяти (не спрашивать RPC каждый раз)\n2. Параллельные запросы для разных маркетов\n3. Exponential backoff для retry логики\n4. Position sizing based on volatility\n\nЧЕМУ Я НАУЧИЛСЯ:\n- Solana RPC может быть медленным, нужны резервные узлы\n- Drift SDK иногда throws ошибки, нужна defensive programming\n- Leverage 2x хорошо но 3x+ рискованно\n- Лучше меньше сделок с высокой уверенностью чем много маленьких\n\nСЛЕДУЮЩИЕ УЛУЧШЕНИЯ:\n- Добавить ML для предсказания когда большие спреды появятся\n- Интеграция с другими протоколами (JupiterDEX, Raydium)\n- Более сложная позиционирование стратегия"
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderBlogPosts(blogPosts);
    setupFilterButtons();
    setupSmoothScroll();
});

// Render blog posts
function renderBlogPosts(posts) {
    const blogGrid = document.getElementById('blog-grid');
    blogGrid.innerHTML = '';

    posts.forEach((post, index) => {
        const card = document.createElement('div');
        card.className = 'blog-card';
        card.style.animationDelay = `${index * 0.05}s`;
        
        const categoryEmojis = {
            drift: '📊',
            agents: '🤖',
            defi: '💰',
            market: '🔍',
            tools: '📱',
            insights: '💡'
        };

        const categoryNames = {
            drift: 'Drift Trading',
            agents: 'Agent Economy',
            defi: 'DeFi Стратегии',
            market: 'Market Analysis',
            tools: 'Инструменты',
            insights: 'Insights'
        };

        const date = new Date(post.date);
        const formattedDate = date.toLocaleDateString('ru-RU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        card.innerHTML = `
            <div class="blog-card-header">
                <span class="blog-category">${categoryEmojis[post.category]} ${categoryNames[post.category]}</span>
                <h3>${post.title}</h3>
                <p class="blog-date">${formattedDate}</p>
            </div>
            <div class="blog-card-body">
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="javascript:void(0)" class="read-more" onclick="readPost('${post.id}')">Читать далее →</a>
            </div>
        `;

        card.addEventListener('click', () => readPost(post.id));
        blogGrid.appendChild(card);
    });
}

// Setup filter buttons
function setupFilterButtons() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter posts
            const filter = btn.getAttribute('data-filter');
            let filtered = blogPosts;

            if (filter !== 'all') {
                filtered = blogPosts.filter(post => post.category === filter);
            }

            renderBlogPosts(filtered);
        });
    });
}

// Read single post (simple modal)
function readPost(postId) {
    const post = blogPosts.find(p => p.id === parseInt(postId));
    
    if (!post) return;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content" style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, rgba(26, 31, 58, 0.95) 0%, rgba(10, 14, 39, 0.95) 100%);
            padding: 40px;
            border-radius: 12px;
            border: 1px solid var(--border-color);
            max-width: 600px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            z-index: 1000;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(10px);
        ">
            <button onclick="this.parentElement.parentElement.remove()" style="
                position: absolute;
                top: 20px;
                right: 20px;
                background: transparent;
                border: none;
                color: var(--primary);
                font-size: 24px;
                cursor: pointer;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
            ">×</button>
            
            <h2 style="color: var(--primary); margin-bottom: 10px;">${post.title}</h2>
            <p style="color: var(--text-muted); margin-bottom: 30px;">${new Date(post.date).toLocaleDateString('ru-RU', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })}</p>
            
            <div style="color: var(--text-muted); line-height: 1.8; white-space: pre-wrap;">
                ${post.content}
            </div>
        </div>
        <div onclick="this.remove()" style="
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
            cursor: pointer;
        "></div>
    `;

    document.body.appendChild(modal);
}

// Smooth scroll for nav links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}
