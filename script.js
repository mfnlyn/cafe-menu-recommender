// ===== 메뉴 데이터 (15개) =====
// temps: 제공 가능한 온도, sweet: 단맛, caffeine: 카페인, milk: 우유 포함 여부
const MENUS = [
  { name: "아메리카노", emoji: "☕", temps: ["hot", "ice"], sweet: false, caffeine: true, milk: false,
    desc: "에스프레소에 물을 더해 깔끔하고 쌉싸름한 커피 본연의 맛을 느낄 수 있어요." },
  { name: "콜드브루", emoji: "🧊", temps: ["ice"], sweet: false, caffeine: true, milk: false,
    desc: "찬물로 오랜 시간 우려내 쓴맛이 적고 부드러우면서도 향이 진해요." },
  { name: "꿀 아메리카노", emoji: "🍯", temps: ["hot", "ice"], sweet: true, caffeine: true, milk: false,
    desc: "아메리카노에 꿀을 더해 은은하게 달콤하면서도 우유 없이 가볍게 즐길 수 있어요." },
  { name: "복숭아 아이스티", emoji: "🍑", temps: ["ice"], sweet: true, caffeine: true, milk: false,
    desc: "홍차 베이스에 상큼한 복숭아 맛이 더해져 시원하고 달콤해요. 커피가 부담될 때 좋아요." },
  { name: "카페라떼", emoji: "🥛", temps: ["hot", "ice"], sweet: false, caffeine: true, milk: true,
    desc: "에스프레소와 우유가 어우러져 고소하고 부드러운, 달지 않은 기본 라떼예요." },
  { name: "바닐라라떼", emoji: "🍦", temps: ["hot", "ice"], sweet: true, caffeine: true, milk: true,
    desc: "바닐라 시럽의 달콤한 향이 라떼의 고소함과 잘 어울리는 인기 메뉴예요." },
  { name: "카라멜 마키아토", emoji: "🍮", temps: ["hot", "ice"], sweet: true, caffeine: true, milk: true,
    desc: "우유 위에 에스프레소와 카라멜 드리즐을 올려 진한 단맛과 커피 향을 함께 즐길 수 있어요." },
  { name: "카페모카", emoji: "🍫", temps: ["hot", "ice"], sweet: true, caffeine: true, milk: true,
    desc: "초콜릿과 에스프레소, 우유가 만나 달콤 쌉싸름한 맛이 나요. 당 충전이 필요할 때 추천해요." },
  { name: "녹차라떼", emoji: "🍵", temps: ["hot", "ice"], sweet: true, caffeine: true, milk: true,
    desc: "말차의 쌉싸름함과 우유의 고소함, 은은한 단맛이 어우러진 커피 대신 메뉴예요." },
  { name: "디카페인 라떼", emoji: "🌙", temps: ["hot", "ice"], sweet: false, caffeine: false, milk: true,
    desc: "카페인을 뺀 원두로 만들어 늦은 시간에도 부담 없이 고소한 라떼를 즐길 수 있어요." },
  { name: "딸기 라떼", emoji: "🍓", temps: ["ice"], sweet: true, caffeine: false, milk: true,
    desc: "새콤달콤한 딸기청과 우유가 어우러진 카페인 없는 달콤한 음료예요." },
  { name: "고구마 라떼", emoji: "🍠", temps: ["hot", "ice"], sweet: true, caffeine: false, milk: true,
    desc: "달콤하고 든든한 고구마와 우유로 만들어 따뜻하게 마시면 특히 포근해요." },
  { name: "자몽 에이드", emoji: "🍊", temps: ["ice"], sweet: true, caffeine: false, milk: false,
    desc: "톡 쏘는 탄산과 새콤달콤한 자몽이 만나 기분까지 상쾌해지는 음료예요." },
  { name: "유자차", emoji: "🍋", temps: ["hot", "ice"], sweet: true, caffeine: false, milk: false,
    desc: "향긋한 유자청으로 만들어 달콤하고 상큼해요. 따뜻하게 마시면 몸이 녹아요." },
  { name: "캐모마일 티", emoji: "🌼", temps: ["hot", "ice"], sweet: false, caffeine: false, milk: false,
    desc: "꽃향이 은은한 허브티로 달지 않고 카페인도 없어 편안하게 쉬고 싶을 때 좋아요." },
];

// ===== 질문 데이터 (4개) =====
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
];

// ===== 상태 =====
let current = 0;
let answers = {};

// ===== DOM =====
const screens = {
  start: document.getElementById("start-screen"),
  question: document.getElementById("question-screen"),
  result: document.getElementById("result-screen"),
};
const questionText = document.getElementById("question-text");
const optionsBox = document.getElementById("options");
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");
const backBtn = document.getElementById("back-btn");

function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove("active"));
  screens[name].classList.add("active");
}

// ===== 질문 화면 =====
function renderQuestion() {
  const q = QUESTIONS[current];
  questionText.textContent = q.text;
  progressText.textContent = `${current + 1} / ${QUESTIONS.length}`;
  progressFill.style.width = `${((current + 1) / QUESTIONS.length) * 100}%`;
  backBtn.style.visibility = current === 0 ? "hidden" : "visible";

  optionsBox.innerHTML = "";
  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "btn option";
    btn.innerHTML = `<span class="emoji">${opt.emoji}</span><span>${opt.label}</span>`;
    btn.addEventListener("click", () => selectAnswer(q.key, opt.value));
    optionsBox.appendChild(btn);
  });
}

function selectAnswer(key, value) {
  answers[key] = value;
  if (current < QUESTIONS.length - 1) {
    current++;
    renderQuestion();
  } else {
    showResult();
  }
}

// ===== 추천 로직 =====
// 조건이 많이 맞을수록 점수가 높고, 최고 점수 메뉴 중 하나를 고른다.
// (모든 조합에 완전히 맞는 메뉴가 있지만, 혹시 없어도 가장 가까운 메뉴가 나오므로 빈 결과가 없다)
function scoreMenu(menu, a) {
  let score = 0;
  if (menu.temps.includes(a.temp)) score++;
  if (menu.sweet === a.sweet) score++;
  if (menu.caffeine === a.caffeine) score++;
  if (menu.milk === a.milk) score++;
  return score;
}

function recommend(a) {
  const scored = MENUS.map((menu) => ({ menu, score: scoreMenu(menu, a) }));
  const best = Math.max(...scored.map((s) => s.score));
  const candidates = scored.filter((s) => s.score === best).map((s) => s.menu);
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function makeReason(menu, a) {
  const picks = [
    a.temp === "hot" ? "따뜻한" : "시원한",
    a.sweet ? "달콤한" : "달지 않은",
    a.caffeine ? "카페인이 있는" : "카페인 없는",
    a.milk ? "우유가 들어간" : "우유 없는",
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
  const menu = recommend(answers);
  document.getElementById("result-emoji").textContent = menu.emoji;
  document.getElementById("result-name").textContent =
    `${answers.temp === "hot" ? "따뜻한" : "아이스"} ${menu.name}`;
  document.getElementById("result-reason").textContent = makeReason(menu, answers);

  const tags = [
    answers.temp === "hot" ? "#따뜻하게" : "#시원하게",
    menu.sweet ? "#달콤" : "#달지않음",
    menu.caffeine ? "#카페인" : "#노카페인",
    menu.milk ? "#우유" : "#우유없음",
  ];
  document.getElementById("result-tags").innerHTML =
    tags.map((t) => `<span class="tag">${t}</span>`).join("");

  showScreen("result");
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
backBtn.addEventListener("click", () => {
  if (current > 0) {
    current--;
    renderQuestion();
  }
});
