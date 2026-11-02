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
let current = 0;   // 지금 묻고 있는 질문 번호 (QUESTIONS 인덱스)
let asked = [];    // 실제로 물어본 질문 번호들 (건너뛴 질문은 빠짐)
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

// no: 화면에 보이는 질문 순번, qi: QUESTIONS 인덱스
function questionHtml(no, qi) {
  return `<span class="q-no">Q${no}</span>${QUESTIONS[qi].text}`;
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

// ===== 질문 흐름: 앞선 답에 맞춰 질문을 고른다 =====
function matches(menu, key, value) {
  if (key === "temp") return menu.temps.includes(value);
  if (key === "flavor") return menu.flavors.includes(value);
  return menu[key] === value;
}

// 지금까지의 답에 모두 맞는 메뉴
function remainingMenus() {
  return MENUS.filter((m) => Object.entries(answers).every(([k, v]) => matches(m, k, v)));
}

// 남은 메뉴로 나올 수 있는 선택지만 보여준다. (예: "우유 없이"를 고르면 "든든하게"는 사라짐)
function availableOptions(q) {
  const rest = remainingMenus();
  return q.options.filter((o) => rest.some((m) => matches(m, q.key, o.value)));
}

// from번 질문부터 살펴보고, 선택지가 하나뿐인 질문은 답을 자동으로 정한 뒤 건너뛴다.
// 물어볼 질문 번호를 돌려주고, 더 물어볼 게 없으면 -1을 돌려준다.
function findNextQuestion(from) {
  for (let i = from; i < QUESTIONS.length; i++) {
    const opts = availableOptions(QUESTIONS[i]);
    if (opts.length > 1) return i;
    answers[QUESTIONS[i].key] = opts[0].value;
  }
  return -1;
}

// 지난 질문과 답은 그대로 두고, 바리스타가 잠깐 입력한 뒤 현재 질문을 보낸다.
// justAnswered: 방금 답한 말풍선에만 등장 효과를 준다.
function renderQuestion(justAnswered = false) {
  clearTimeout(chatTimer);
  const q = QUESTIONS[current];
  const no = asked.length;
  progressText.textContent = `Q${no}`;
  progressFill.style.width = `${(current / QUESTIONS.length) * 100}%`;
  backBtn.style.visibility = no === 1 ? "hidden" : "visible";

  let html = baristaMsg(GREETING, no === 1);
  asked.slice(0, -1).forEach((qi, n) => {
    html += baristaMsg(questionHtml(n + 1, qi)) + userMsg(answerText(QUESTIONS[qi]), justAnswered && n === no - 2);
  });
  chatLog.innerHTML = html + baristaMsg(TYPING, true);
  optionsBox.innerHTML = "";
  scrollChat();

  chatTimer = setTimeout(() => {
    chatLog.lastElementChild.remove();
    chatLog.insertAdjacentHTML("beforeend", baristaMsg(questionHtml(no, current), true));
    renderReplies(q);
    scrollChat();
  }, TYPING_MS);
}

function renderReplies(q) {
  optionsBox.innerHTML = "";
  availableOptions(q).forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "btn reply";
    btn.innerHTML = `<span class="emoji">${opt.emoji}</span><span>${opt.label}</span>`;
    btn.addEventListener("click", () => selectAnswer(q.key, opt.value));
    optionsBox.appendChild(btn);
  });
}

function selectAnswer(key, value) {
  answers[key] = value;
  const next = findNextQuestion(current + 1);
  if (next === -1) {
    finishChat();
  } else {
    current = next;
    asked.push(next);
    renderQuestion(true);
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
// 질문 흐름이 모순된 답을 막아서 1등은 항상 100%이고, 혹시 맞는 메뉴가 없어도 가장 가까운 메뉴가 나온다.
function matchRate(menu, a) {
  const score = QUESTIONS.filter((q) => matches(menu, q.key, a[q.key])).length;
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
let ranking = [];  // 일치도 순으로 줄 세운 메뉴 (맨 앞이 지금 보여주는 추천 메뉴)

function showResult() {
  ranking = rankMenus(answers);
  renderResult();
}

// "이것도 좋아요" 카드를 누르면 그 메뉴를 맨 앞으로 옮겨 추천 메뉴로 보여준다.
function pickAlternative(i) {
  const [chosen] = ranking.splice(i, 1);
  ranking.unshift(chosen);
  renderResult();
}

function renderResult() {
  const { menu, rate } = ranking[0];
  picked = menu;
  document.getElementById("result-emoji").textContent = menu.emoji;
  document.getElementById("result-rate").textContent = `일치도 ${rate}%`;
  document.getElementById("result-name").textContent = displayName(menu);
  document.getElementById("result-reason").textContent = makeReason(menu, answers);

  const tags = [
    servingTemp(menu) === "hot" ? "#따뜻하게" : "#시원하게",
    FLAVOR_WORDS[menu.flavors.includes(answers.flavor) ? answers.flavor : menu.flavors[0]].tag,
    menu.sweet ? "#달콤" : "#달지않음",
    menu.caffeine ? "#카페인" : "#노카페인",
    menu.milk ? "#우유" : "#우유없음",
    menu.heavy ? "#든든" : "#가볍게",
  ];
  document.getElementById("result-tags").innerHTML =
    tags.map((t) => `<span class="tag">${t}</span>`).join("");

  // 이것도 좋아요: 2·3등 메뉴
  document.getElementById("alt-list").innerHTML = ranking
    .slice(1, 3)
    .map(({ menu: m, rate: r }, n) => `
      <button class="btn alt-card" data-index="${n + 1}">
        <span class="alt-emoji">${m.emoji}</span>
        <span class="alt-name">${m.name}</span>
        <span class="alt-rate">일치도 ${r}%</span>
      </button>`)
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
let lastOrder = null;  // 이미지로 저장할 때 쓰는 마지막 주문서 내용

function showOrder() {
  const rows = visibleGroups(picked).map((g) => [
    g.title,
    g.multi ? (custom[g.key].join(", ") || "없음") : custom[g.key],
  ]);

  // 영수증 느낌을 위한 주문번호·일시·바코드 번호 (실제 주문과는 무관)
  const now = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  const ymd = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}`;
  const orderNo = String(Math.floor(Math.random() * 9000) + 1000);
  lastOrder = {
    emoji: picked.emoji,
    name: displayName(picked),
    rows,
    orderNo: `#${orderNo}`,
    date: `${ymd.slice(0, 4)}-${ymd.slice(4, 6)}-${ymd.slice(6)} ${pad(now.getHours())}:${pad(now.getMinutes())}`,
    code: `${ymd}-${orderNo}`,
  };

  document.getElementById("order-emoji").textContent = lastOrder.emoji;
  document.getElementById("order-name").textContent = lastOrder.name;
  document.getElementById("order-list").innerHTML = rows
    .map(([title, value]) => `<li><span>${title}</span><i class="rc-dots"></i><strong>${value}</strong></li>`)
    .join("");
  document.getElementById("order-no").textContent = lastOrder.orderNo;
  document.getElementById("order-date").textContent = lastOrder.date;
  document.getElementById("order-code").textContent = lastOrder.code;
  document.getElementById("save-btn").textContent = SAVE_LABEL;

  showScreen("order");
}

// ===== 영수증 이미지로 저장 =====
// 화면의 영수증과 같은 모양을 캔버스에 직접 그려서 PNG로 만든다. (외부 라이브러리 없음)
const SAVE_LABEL = "🧾 영수증 이미지로 저장";
const RC = {
  width: 360, pad: 22, margin: 20, tooth: 14,
  bg: "#efe0cc", paper: "#fffefb", ink: "#3b2a20", muted: "#8a7363", latte: "#c69c72", espresso: "#4a2c1d",
};
const MONO = '"Nanum Gothic Coding", monospace';
const SERIF = '"Gowun Batang", serif';

// 값이 길면 ", " 단위로 줄을 나눈다. (예: 토핑 여러 개)
function wrapText(ctx, str, maxWidth) {
  const lines = [];
  let line = "";
  str.split(", ").forEach((word) => {
    const next = line ? `${line}, ${word}` : word;
    if (line && ctx.measureText(next).width > maxWidth) {
      lines.push(line + ",");
      line = word;
    } else {
      line = next;
    }
  });
  lines.push(line);
  return lines;
}

// 영수증 내용을 그린다. draw가 false면 그리지 않고 높이만 계산한다. 종이 아래 끝 y를 돌려준다.
function paintReceipt(ctx, order, draw) {
  const left = RC.margin + RC.pad;
  const right = RC.margin + RC.width - RC.pad;
  const center = RC.margin + RC.width / 2;
  let y = RC.margin + 40;

  const text = (str, x, font, color, align = "left") => {
    if (!draw) return;
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.textAlign = align;
    ctx.fillText(str, x, y);
  };
  const line = (dash, color, alpha = 1, from = left, to = right, at = y) => {
    if (!draw || to <= from) return;
    ctx.save();
    ctx.strokeStyle = color;
    ctx.globalAlpha = alpha;
    ctx.lineWidth = 1.5;
    ctx.setLineDash(dash);
    ctx.beginPath();
    ctx.moveTo(from, at);
    ctx.lineTo(to, at);
    ctx.stroke();
    ctx.restore();
  };

  text("☕ 오늘의 한 잔", center, `700 20px ${SERIF}`, RC.espresso, "center");
  y += 20;
  text("O R D E R   R E C E I P T", center, `11px ${MONO}`, RC.muted, "center");
  y += 28;
  [["주문번호", order.orderNo], ["일시", order.date]].forEach(([k, v]) => {
    text(k, left, `12px ${MONO}`, RC.muted);
    text(v, right, `12px ${MONO}`, RC.muted, "right");
    y += 18;
  });
  line([4, 3], RC.ink, 0.5);
  y += 32;
  text(`${order.emoji} ${order.name}`, left, `700 16px ${MONO}`, RC.ink);
  text("x 1", right, `700 14px ${MONO}`, RC.ink, "right");
  y += 28;

  order.rows.forEach(([title, value]) => {
    const label = `- ${title}`;
    ctx.font = `14px ${MONO}`;
    const labelEnd = left + 10 + ctx.measureText(label).width + 6;
    ctx.font = `700 14px ${MONO}`;
    const lines = wrapText(ctx, value, (right - left) * 0.6);
    const valueStart = right - ctx.measureText(lines[0]).width - 6;
    text(label, left + 10, `14px ${MONO}`, RC.muted);
    line([1.5, 3], RC.latte, 1, labelEnd, valueStart, y - 4);
    lines.forEach((l, i) => {
      text(l, right, `700 14px ${MONO}`, RC.ink, "right");
      if (i < lines.length - 1) y += 20;
    });
    y += 26;
  });

  y -= 8;
  line([4, 3], RC.ink, 0.5);
  y += 4;
  line([4, 3], RC.ink, 0.5);
  y += 32;
  text("맛있게 준비해 드릴게요", center, `700 15px ${SERIF}`, RC.ink, "center");
  y += 18;
  text("THANK YOU · SEE YOU AGAIN", center, `10px ${MONO}`, RC.muted, "center");
  y += 14;
  if (draw) drawBarcode(ctx, left + 12, y, right - left - 24, 42);
  y += 42 + 18;
  text(order.code, center, `11px ${MONO}`, RC.muted, "center");
  return y + 24;
}

// 화면의 바코드와 같은 무늬 (16px마다 막대 4개 반복)
function drawBarcode(ctx, x, y, width, height) {
  const bars = [[0, 2], [4, 1], [8, 3], [12, 1]];
  ctx.fillStyle = RC.ink;
  for (let p = 0; p < width; p += 16) {
    bars.forEach(([offset, w]) => {
      if (p + offset + w <= width) ctx.fillRect(x + p + offset, y, w, height);
    });
  }
}

// 위아래가 지그재그인 영수증 종이 모양
function paperPath(ctx, x, top, width, bottom) {
  const count = Math.round(width / RC.tooth);
  const t = width / count;
  const depth = t / 2;
  ctx.beginPath();
  ctx.moveTo(x, top + depth);
  for (let i = 0; i < count; i++) {
    ctx.lineTo(x + i * t + t / 2, top);
    ctx.lineTo(x + (i + 1) * t, top + depth);
  }
  ctx.lineTo(x + width, bottom - depth);
  for (let i = count - 1; i >= 0; i--) {
    ctx.lineTo(x + i * t + t / 2, bottom);
    ctx.lineTo(x + i * t, bottom - depth);
  }
  ctx.closePath();
}

async function receiptCanvas(order) {
  await document.fonts.ready;
  const scale = 2;
  const paperBottom = paintReceipt(document.createElement("canvas").getContext("2d"), order, false);
  const width = RC.width + RC.margin * 2;
  const height = paperBottom + RC.margin;

  const canvas = document.createElement("canvas");
  canvas.width = width * scale;
  canvas.height = height * scale;
  const ctx = canvas.getContext("2d");
  ctx.scale(scale, scale);
  ctx.fillStyle = RC.bg;
  ctx.fillRect(0, 0, width, height);

  ctx.save();
  ctx.shadowColor = "rgba(74, 44, 29, 0.22)";
  ctx.shadowBlur = 12;
  ctx.shadowOffsetY = 6;
  paperPath(ctx, RC.margin, RC.margin, RC.width, paperBottom);
  ctx.fillStyle = RC.paper;
  ctx.fill();
  ctx.restore();

  paintReceipt(ctx, order, true);
  return canvas;
}

// 휴대폰에서는 공유 창(사진에 저장 등)을 띄우고, 컴퓨터에서는 파일로 내려받는다.
async function saveReceipt() {
  const btn = document.getElementById("save-btn");
  const canvas = await receiptCanvas(lastOrder);
  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  const name = `receipt-${lastOrder.code}.png`;
  const file = new File([blob], name, { type: "image/png" });

  const isPhone = matchMedia("(pointer: coarse)").matches;
  if (isPhone && navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({ files: [file], title: "카페 주문서" });
      return;
    } catch (e) {
      if (e.name === "AbortError") return;
    }
  }
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = name;
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  btn.textContent = "저장했어요! ✓";
}

// ===== 이벤트 =====
function start() {
  answers = {};
  current = findNextQuestion(0);
  asked = [current];
  renderQuestion();
  showScreen("question");
}

document.getElementById("start-btn").addEventListener("click", start);
document.getElementById("restart-btn").addEventListener("click", () => showScreen("start"));
document.getElementById("custom-btn").addEventListener("click", openCustom);
document.getElementById("custom-back-btn").addEventListener("click", () => showScreen("result"));
document.getElementById("custom-done-btn").addEventListener("click", showOrder);
document.getElementById("order-restart-btn").addEventListener("click", () => showScreen("start"));
document.getElementById("save-btn").addEventListener("click", saveReceipt);
document.getElementById("alt-list").addEventListener("click", (e) => {
  const card = e.target.closest(".alt-card");
  if (card) pickAlternative(Number(card.dataset.index));
});
document.getElementById("custom-options").addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (chip) selectOption(chip.dataset.key, chip.dataset.value);
});
// 바로 전에 물어본 질문으로 돌아가고, 그 질문부터의 답(자동으로 정해진 답 포함)은 지운다.
backBtn.addEventListener("click", () => {
  if (asked.length <= 1) return;
  asked.pop();
  current = asked[asked.length - 1];
  QUESTIONS.slice(current).forEach((q) => delete answers[q.key]);
  renderQuestion();
});
