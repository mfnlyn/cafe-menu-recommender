// ===== 메뉴 데이터 (15개) =====
// type: 메뉴 종류(coffee 에스프레소 커피 / coldbrew 콜드브루 / latte 논커피 라떼 / tea 차 / ade 에이드)
// temps: 제공 가능한 온도, sweet: 단맛, caffeine: 카페인, milk: 우유 포함 여부
// flavors: 맛 계열(coffee 커피 / fruit 상큼한 과일 / nutty 고소·부드러움 / tea 차), heavy: 든든한 음료인지
const MENUS = [
  { name: "아메리카노", emoji: "☕", type: "coffee", temps: ["hot", "ice"], sweet: false, caffeine: true, milk: false,
    flavors: ["coffee"], heavy: false,
    desc: "에스프레소에 물을 더해 깔끔하고 쌉싸름한 커피 본연의 맛을 느낄 수 있어요." },
  { name: "콜드브루", emoji: "🧊", type: "coldbrew", temps: ["ice"], sweet: false, caffeine: true, milk: false,
    flavors: ["coffee"], heavy: false,
    desc: "찬물로 오랜 시간 우려내 쓴맛이 적고 부드러우면서도 향이 진해요." },
  { name: "꿀 아메리카노", emoji: "🍯", type: "coffee", temps: ["hot", "ice"], sweet: true, caffeine: true, milk: false,
    flavors: ["coffee"], heavy: false,
    desc: "아메리카노에 꿀을 더해 은은하게 달콤하면서도 우유 없이 가볍게 즐길 수 있어요." },
  { name: "복숭아 아이스티", emoji: "🍑", type: "tea", temps: ["ice"], sweet: true, caffeine: true, milk: false,
    flavors: ["fruit", "tea"], heavy: false,
    desc: "홍차 베이스에 상큼한 복숭아 맛이 더해져 시원하고 달콤해요. 커피가 부담될 때 좋아요." },
  { name: "카페라떼", emoji: "🥛", type: "coffee", temps: ["hot", "ice"], sweet: false, caffeine: true, milk: true,
    flavors: ["coffee", "nutty"], heavy: false,
    desc: "에스프레소와 우유가 어우러져 고소하고 부드러운, 달지 않은 기본 라떼예요." },
  { name: "바닐라라떼", emoji: "🍦", type: "coffee", temps: ["hot", "ice"], sweet: true, caffeine: true, milk: true,
    flavors: ["coffee", "nutty"], heavy: true,
    desc: "바닐라 시럽의 달콤한 향이 라떼의 고소함과 잘 어울리는 인기 메뉴예요." },
  { name: "카라멜 마키아토", emoji: "🍮", type: "coffee", temps: ["hot", "ice"], sweet: true, caffeine: true, milk: true,
    flavors: ["coffee"], heavy: true,
    desc: "우유 위에 에스프레소와 카라멜 드리즐을 올려 진한 단맛과 커피 향을 함께 즐길 수 있어요." },
  { name: "카페모카", emoji: "🍫", type: "coffee", temps: ["hot", "ice"], sweet: true, caffeine: true, milk: true,
    flavors: ["coffee"], heavy: true,
    desc: "초콜릿과 에스프레소, 우유가 만나 달콤 쌉싸름한 맛이 나요. 당 충전이 필요할 때 추천해요." },
  { name: "녹차라떼", emoji: "🍵", type: "latte", temps: ["hot", "ice"], sweet: true, caffeine: true, milk: true,
    flavors: ["tea", "nutty"], heavy: true,
    desc: "말차의 쌉싸름함과 우유의 고소함, 은은한 단맛이 어우러진 커피 대신 메뉴예요." },
  { name: "디카페인 라떼", emoji: "🌙", type: "coffee", temps: ["hot", "ice"], sweet: false, caffeine: false, milk: true,
    flavors: ["coffee", "nutty"], heavy: false,
    desc: "카페인을 뺀 원두로 만들어 늦은 시간에도 부담 없이 고소한 라떼를 즐길 수 있어요." },
  { name: "딸기 라떼", emoji: "🍓", type: "latte", temps: ["ice"], sweet: true, caffeine: false, milk: true,
    flavors: ["fruit"], heavy: true,
    desc: "새콤달콤한 딸기청과 우유가 어우러진 카페인 없는 달콤한 음료예요." },
  { name: "고구마 라떼", emoji: "🍠", type: "latte", temps: ["hot", "ice"], sweet: true, caffeine: false, milk: true,
    flavors: ["nutty"], heavy: true,
    desc: "달콤하고 든든한 고구마와 우유로 만들어 따뜻하게 마시면 특히 포근해요." },
  { name: "자몽 에이드", emoji: "🍊", type: "ade", temps: ["ice"], sweet: true, caffeine: false, milk: false,
    flavors: ["fruit"], heavy: false,
    desc: "톡 쏘는 탄산과 새콤달콤한 자몽이 만나 기분까지 상쾌해지는 음료예요." },
  { name: "유자차", emoji: "🍋", type: "tea", temps: ["hot", "ice"], sweet: true, caffeine: false, milk: false,
    flavors: ["fruit", "tea"], heavy: false,
    desc: "향긋한 유자청으로 만들어 달콤하고 상큼해요. 따뜻하게 마시면 몸이 녹아요." },
  { name: "캐모마일 티", emoji: "🌼", type: "tea", temps: ["hot", "ice"], sweet: false, caffeine: false, milk: false,
    flavors: ["tea"], heavy: false,
    desc: "꽃향이 은은한 허브티로 달지 않고 카페인도 없어 편안하게 쉬고 싶을 때 좋아요." },
];

// ===== 질문 데이터 (6개) =====
const QUESTIONS = [
  {
    key: "temp",
    text: "따뜻한 음료가 좋아요, 시원한 음료가 좋아요?",
    options: [
      { label: "따뜻하게", emoji: "🔥", value: "hot" },
      { label: "시원하게", emoji: "🧊", value: "ice" },
    ],
  },
  {
    key: "flavor",
    text: "어떤 맛이 끌려요?",
    options: [
      { label: "커피 맛", emoji: "☕", value: "coffee" },
      { label: "상큼한 과일 맛", emoji: "🍋", value: "fruit" },
      { label: "고소하고 부드러운 맛", emoji: "🌰", value: "nutty" },
      { label: "은은한 차 맛", emoji: "🍵", value: "tea" },
    ],
  },
  {
    key: "sweet",
    text: "달콤한 맛이 당기나요?",
    options: [
      { label: "달콤한 게 좋아요", emoji: "🍬", value: true },
      { label: "달지 않은 게 좋아요", emoji: "🌿", value: false },
    ],
  },
  {
    key: "caffeine",
    text: "카페인이 필요하신가요?",
    options: [
      { label: "네, 잠을 깨워야 해요", emoji: "⚡", value: true },
      { label: "아니요, 카페인 없이", emoji: "😴", value: false },
    ],
  },
  {
    key: "milk",
    text: "우유가 들어간 음료는 어때요?",
    options: [
      { label: "부드럽게 우유 넣어서", emoji: "🥛", value: true },
      { label: "우유 없이 깔끔하게", emoji: "💧", value: false },
    ],
  },
  {
    key: "heavy",
    text: "지금 배고픈 정도는 어때요?",
    options: [
      { label: "가볍게 마시고 싶어요", emoji: "🪶", value: false },
      { label: "든든하게 채우고 싶어요", emoji: "🍠", value: true },
    ],
  },
];

// ===== 커스텀 옵션 (6종) =====
// show: 이 메뉴·온도에서 보여줄지 여부, multi: 여러 개 고를 수 있는지
const OPTION_GROUPS = [
  { key: "size", title: "사이즈", choices: ["S", "M", "L"], default: "M",
    show: () => true },
  { key: "shot", title: "샷", choices: ["연하게", "기본", "추가"], default: "기본",
    show: (menu) => menu.type === "coffee" },
  { key: "syrup", title: "시럽", choices: ["없음", "바닐라", "카라멜", "헤이즐넛"], default: "없음",
    show: (menu) => ["coffee", "coldbrew", "latte"].includes(menu.type) },
  { key: "milk", title: "우유 변경", choices: ["일반 우유", "저지방 우유", "두유", "오트 우유"], default: "일반 우유",
    show: (menu) => menu.milk },
  { key: "ice", title: "얼음 양", choices: ["적게", "보통", "많이"], default: "보통",
    show: (_menu, temp) => temp === "ice" },
  { key: "topping", title: "토핑", choices: toppingChoices, default: [], multi: true,
    show: (menu) => toppingChoices(menu).length > 0 },
];

// 메뉴 종류에 맞는 토핑만 고를 수 있게 한다.
function toppingChoices(menu) {
  const list = [];
  if (menu.milk) list.push("휘핑크림", "카라멜 드리즐", "초코 드리즐");
  if (menu.type === "coffee" || menu.type === "coldbrew") list.push("시나몬 파우더");
  if (menu.type === "tea" || menu.type === "ade") list.push("과일 슬라이스");
  return list;
}

// ===== 상태 =====
let current = 0;
let answers = {};
let picked = null;  // 결과로 추천된 1등 메뉴
let custom = {};    // 고른 커스텀 옵션

// ===== DOM =====
const screens = {
  start: document.getElementById("start-screen"),
  question: document.getElementById("question-screen"),
  result: document.getElementById("result-screen"),
  custom: document.getElementById("custom-screen"),
  order: document.getElementById("order-screen"),
};
const chatLog = document.getElementById("chat-log");
const optionsBox = document.getElementById("options");
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");
const backBtn = document.getElementById("back-btn");

function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove("active"));
  screens[name].classList.add("active");
  window.scrollTo(0, 0);
}

// ===== 질문 화면: 바리스타와 대화 =====
const GREETING = "어서 오세요! 몇 가지만 여쭤보고 딱 맞는 한 잔 찾아드릴게요 ☕";
const TYPING_MS = 600;
let chatTimer = null;

function baristaMsg(html, isNew) {
  return `<div class="msg barista${isNew ? " new" : ""}"><div class="avatar">☕</div><div class="bubble">${html}</div></div>`;
}

function userMsg(text, isNew) {
  return `<div class="msg user${isNew ? " new" : ""}"><div class="bubble">${text}</div></div>`;
}

function questionHtml(i) {
  return `<span class="q-no">Q${i + 1}</span>${QUESTIONS[i].text}`;
}

function answerText(q) {
  const opt = q.options.find((o) => o.value === answers[q.key]);
  return `${opt.emoji} ${opt.label}`;
}

const TYPING = `<span class="typing"><i></i><i></i><i></i></span>`;

// 새 말풍선이 그려진 다음 프레임에 맨 아래로 스크롤한다.
function scrollChat() {
  requestAnimationFrame(() => {
    chatLog.scrollTop = chatLog.scrollHeight;
  });
}

// 지난 질문과 답은 그대로 두고, 바리스타가 잠깐 입력한 뒤 현재 질문을 보낸다.
// justAnswered: 방금 답한 말풍선에만 등장 효과를 준다.
function renderQuestion(justAnswered = false) {
  clearTimeout(chatTimer);
  const q = QUESTIONS[current];
  progressText.textContent = `Q${current + 1} / ${QUESTIONS.length}`;
  progressFill.style.width = `${(current / QUESTIONS.length) * 100}%`;
  backBtn.style.visibility = current === 0 ? "hidden" : "visible";

  let html = baristaMsg(GREETING, current === 0);
  for (let i = 0; i < current; i++) {
    html += baristaMsg(questionHtml(i)) + userMsg(answerText(QUESTIONS[i]), justAnswered && i === current - 1);
  }
  chatLog.innerHTML = html + baristaMsg(TYPING, true);
  optionsBox.innerHTML = "";
  scrollChat();

  chatTimer = setTimeout(() => {
    chatLog.lastElementChild.remove();
    chatLog.insertAdjacentHTML("beforeend", baristaMsg(questionHtml(current), true));
    renderReplies(q);
    scrollChat();
  }, TYPING_MS);
}

function renderReplies(q) {
  optionsBox.innerHTML = "";
  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "btn reply";
    btn.innerHTML = `<span class="emoji">${opt.emoji}</span><span>${opt.label}</span>`;
    btn.addEventListener("click", () => selectAnswer(q.key, opt.value));
    optionsBox.appendChild(btn);
  });
}

function selectAnswer(key, value) {
  answers[key] = value;
  if (current < QUESTIONS.length - 1) {
    current++;
    renderQuestion(true);
  } else {
    finishChat();
  }
}

// 마지막 답을 보낸 뒤, 바리스타가 메뉴를 고르는 동안 잠깐 기다렸다가 결과로 넘어간다.
function finishChat() {
  clearTimeout(chatTimer);
  optionsBox.innerHTML = "";
  backBtn.style.visibility = "hidden";
  progressFill.style.width = "100%";
  chatLog.insertAdjacentHTML("beforeend",
    userMsg(answerText(QUESTIONS[current]), true) +
    baristaMsg("좋아요! 딱 맞는 한 잔 고르는 중이에요… " + TYPING, true));
  scrollChat();
  chatTimer = setTimeout(showResult, 1300);
}

// ===== 추천 로직 =====
// 질문 6개 중 몇 개가 맞는지로 일치도(%)를 계산하고, 일치도가 높은 순으로 줄 세운다.
// 정확히 맞는 메뉴가 없어도 일치도가 가장 높은 메뉴가 1등이 되므로 빈 결과가 없다.
function matchRate(menu, a) {
  let score = 0;
  if (menu.temps.includes(a.temp)) score++;
  if (menu.flavors.includes(a.flavor)) score++;
  if (menu.sweet === a.sweet) score++;
  if (menu.caffeine === a.caffeine) score++;
  if (menu.milk === a.milk) score++;
  if (menu.heavy === a.heavy) score++;
  return Math.round((score / QUESTIONS.length) * 100);
}

// 일치도가 같은 메뉴끼리는 순서를 무작위로 섞어서, 다시 하면 다른 메뉴도 볼 수 있게 한다.
function rankMenus(a) {
  return MENUS
    .map((menu) => ({ menu, rate: matchRate(menu, a), tiebreak: Math.random() }))
    .sort((x, y) => y.rate - x.rate || x.tiebreak - y.tiebreak);
}

const FLAVOR_WORDS = {
  coffee: { reason: "커피 향 가득한", tag: "#커피" },
  fruit: { reason: "상큼한 과일 맛의", tag: "#상큼과일" },
  nutty: { reason: "고소하고 부드러운", tag: "#고소부드러움" },
  tea: { reason: "은은한 차 향의", tag: "#차" },
};

function makeReason(menu, a) {
  const picks = [
    a.temp === "hot" ? "따뜻한" : "시원한",
    FLAVOR_WORDS[a.flavor].reason,
    a.sweet ? "달콤한" : "달지 않은",
    a.caffeine ? "카페인이 있는" : "카페인 없는",
    a.milk ? "우유가 들어간" : "우유 없는",
    a.heavy ? "든든한" : "가벼운",
  ];
  return `${picks.join(", ")} 음료를 원하셨죠? ${menu.name}${topicParticle(menu.name)} ${menu.desc}`;
}

// 마지막 글자에 받침이 있으면 "은", 없으면 "는"
function topicParticle(word) {
  const code = word.charCodeAt(word.length - 1) - 0xac00;
  return code >= 0 && code % 28 !== 0 ? "은" : "는";
}

// ===== 결과 화면 =====
function showResult() {
  const ranked = rankMenus(answers);
  const { menu, rate } = ranked[0];
  picked = menu;
  document.getElementById("result-emoji").textContent = menu.emoji;
  document.getElementById("result-rate").textContent = `일치도 ${rate}%`;
  document.getElementById("result-name").textContent = displayName(menu);
  document.getElementById("result-reason").textContent = makeReason(menu, answers);

  const tags = [
    answers.temp === "hot" ? "#따뜻하게" : "#시원하게",
    FLAVOR_WORDS[menu.flavors.includes(answers.flavor) ? answers.flavor : menu.flavors[0]].tag,
    menu.sweet ? "#달콤" : "#달지않음",
    menu.caffeine ? "#카페인" : "#노카페인",
    menu.milk ? "#우유" : "#우유없음",
    menu.heavy ? "#든든" : "#가볍게",
  ];
  document.getElementById("result-tags").innerHTML =
    tags.map((t) => `<span class="tag">${t}</span>`).join("");

  // 이것도 좋아요: 2·3등 메뉴
  document.getElementById("alt-list").innerHTML = ranked
    .slice(1, 3)
    .map(({ menu: m, rate: r }) => `
      <div class="alt-card">
        <span class="alt-emoji">${m.emoji}</span>
        <span class="alt-name">${m.name}</span>
        <span class="alt-rate">일치도 ${r}%</span>
      </div>`)
    .join("");

  showScreen("result");
}

// 답한 온도를 그 메뉴가 지원하지 않으면, 메뉴가 제공하는 온도로 낸다.
function servingTemp(menu) {
  return menu.temps.includes(answers.temp) ? answers.temp : menu.temps[0];
}

function displayName(menu) {
  return `${servingTemp(menu) === "hot" ? "따뜻한" : "아이스"} ${menu.name}`;
}

// ===== 커스텀 화면 =====
function visibleGroups(menu) {
  return OPTION_GROUPS.filter((g) => g.show(menu, servingTemp(menu)));
}

function choicesOf(group, menu) {
  return typeof group.choices === "function" ? group.choices(menu) : group.choices;
}

function openCustom() {
  custom = {};
  visibleGroups(picked).forEach((g) => {
    custom[g.key] = g.multi ? [...g.default] : g.default;
  });
  document.getElementById("custom-name").textContent = `${picked.emoji} ${displayName(picked)}`;
  renderCustom();
  showScreen("custom");
}

function renderCustom() {
  document.getElementById("custom-options").innerHTML = visibleGroups(picked)
    .map((g) => {
      const chips = choicesOf(g, picked)
        .map((c) => {
          const on = g.multi ? custom[g.key].includes(c) : custom[g.key] === c;
          return `<button class="btn chip${on ? " selected" : ""}" data-key="${g.key}" data-value="${c}">${c}</button>`;
        })
        .join("");
      const hint = g.multi ? `<span class="opt-hint">여러 개 선택 가능</span>` : "";
      return `<div class="opt-group"><h3>${g.title}${hint}</h3><div class="chips">${chips}</div></div>`;
    })
    .join("");
}

function selectOption(key, value) {
  const group = OPTION_GROUPS.find((g) => g.key === key);
  if (group.multi) {
    const list = custom[key];
    custom[key] = list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
  } else {
    custom[key] = value;
  }
  renderCustom();
}

// ===== 주문서 화면 =====
function showOrder() {
  document.getElementById("order-emoji").textContent = picked.emoji;
  document.getElementById("order-name").textContent = displayName(picked);
  document.getElementById("order-list").innerHTML = visibleGroups(picked)
    .map((g) => {
      const value = g.multi ? (custom[g.key].join(", ") || "없음") : custom[g.key];
      return `<li><span>${g.title}</span><i class="rc-dots"></i><strong>${value}</strong></li>`;
    })
    .join("");

  // 영수증 느낌을 위한 주문번호·일시·바코드 번호 (실제 주문과는 무관)
  const now = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  const orderNo = String(Math.floor(Math.random() * 9000) + 1000);
  document.getElementById("order-no").textContent = `#${orderNo}`;
  document.getElementById("order-date").textContent =
    `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
  document.getElementById("order-code").textContent =
    `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${orderNo}`;

  showScreen("order");
}

// ===== 이벤트 =====
function start() {
  current = 0;
  answers = {};
  renderQuestion();
  showScreen("question");
}

document.getElementById("start-btn").addEventListener("click", start);
document.getElementById("restart-btn").addEventListener("click", () => showScreen("start"));
document.getElementById("custom-btn").addEventListener("click", openCustom);
document.getElementById("custom-back-btn").addEventListener("click", () => showScreen("result"));
document.getElementById("custom-done-btn").addEventListener("click", showOrder);
document.getElementById("order-restart-btn").addEventListener("click", () => showScreen("start"));
document.getElementById("custom-options").addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (chip) selectOption(chip.dataset.key, chip.dataset.value);
});
backBtn.addEventListener("click", () => {
  if (current > 0) {
    current--;
    renderQuestion();
  }
});
