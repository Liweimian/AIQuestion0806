const params = new URLSearchParams(location.search);
const topicId = params.get("topic") || "t15";
const contextName = params.get("context") || "series";

const topicTitles = {
  t8: "正数与负数概念巩固题单",
  t9: "有理数运算基础过关配套题单",
  t15: "坂田片区课堂小测精选题单",
  t25: "2025 深圳中考数学基础题单",
  t31: "代数式实际意义专项题单"
};

const questions = [
  { id:"q1", section:"基础提优题", text:"如果向东走 3 米记作 +3 米，那么向西走 5 米应记作（　　）。", options:["A. +5 米","B. −5 米","C. +3 米","D. −3 米"], answer:"B", path:"初中 / 数学 / 正负数 / 较易", tags:["正负数意义","基础题"], explanation:"规定向东为正，向西就用负数表示，所以应记作 −5 米。" },
  { id:"q2", section:"基础提优题", text:"若 |−m| = |− 1/2|，则 m 的值为（　　）。", options:["A. ±2","B. −1/2 或 1/2","C. 1/2","D. −1/2"], answer:"B", path:"初中 / 数学 / 绝对值 / 较易", tags:["绝对值","基础题"], explanation:"由绝对值的定义可知，|m| = 1/2，因此 m = ±1/2。" },
  { id:"q3", section:"基础提优题", text:"下列各组数中，互为相反数是（　　）。", options:["A. |a| 与 −a","B. |a| 与 a","C. |−1/2| 与 −1/2","D. |1/2| 与 1/2"], answer:"C", path:"初中 / 数学 / 相反数 / 较易", tags:["相反数","易错题"], explanation:"互为相反数的两个数符号相反、绝对值相等，选项 C 符合。" },
  { id:"q4", section:"基础提优题", text:"如图，四个有理数 m、n、p、q 在数轴上对应的点分别为 M、N、P、Q，若 n + q = 0，则绝对值最小的一个数所对应的点是______。", options:[], answer:"N", path:"初中 / 数学 / 数轴 / 中等", tags:["数轴","综合判断"], explanation:"结合数轴上各点的位置和 n、q 互为相反数的条件判断即可。" },
  { id:"q5", section:"基础提优题", text:"已知 a 为整数。（1）|a| 能取最大值还是最小值？值是多少？（2）|a| + 2 能取最大值还是最小值？", options:[], answer:"最小值", path:"初中 / 数学 / 绝对值 / 中等", tags:["绝对值","综合应用"], explanation:"整数集合没有最大值，但 |a| 的最小值为 0。" },
  { id:"q6", section:"基础提优题", text:"使等式 |−8 + a| = |−8| + |a| 成立的 a 为（　　）。", options:["A. 任意正数","B. 任意负数","C. a≤0","D. a≥0"], answer:"C", path:"初中 / 数学 / 有理数运算 / 中等", tags:["绝对值","运算"], explanation:"根据绝对值三角不等式取等条件可知，−8 与 a 同号或其中一个为 0。" },
  { id:"q7", section:"基础提优题", text:"数轴上点 A 表示 −3，点 B 表示 2，则 A、B 两点之间的距离是（　　）。", options:["A. 1","B. 5","C. −1","D. −5"], answer:"B", path:"初中 / 数学 / 数轴 / 较易", tags:["数轴","距离"], explanation:"两点间距离等于它们所表示的数之差的绝对值：|2−(−3)|=5。" },
  { id:"q8", section:"基础提优题", text:"下列说法正确的是（　　）。", options:["A. 0 是正数","B. 0 是负数","C. 0 既不是正数也不是负数","D. 0 是最小的正数"], answer:"C", path:"初中 / 数学 / 正负数 / 较易", tags:["概念判断","基础题"], explanation:"0 既不是正数，也不是负数。" },
  { id:"q9", section:"综合应用题", text:"某食品包装袋上标有“净含量 500±5 g”。抽检 5 袋食品的质量分别为 497 g、503 g、506 g、500 g、495 g。请用正负数表示它们相对于标准质量的偏差。", options:[], answer:"−3、+3、+6、0、−5", path:"初中 / 数学 / 正负数 / 中等", tags:["情境应用","综合题"], explanation:"以 500 g 为标准，实际质量减去标准质量即可得到偏差。" },
  { id:"q10", section:"综合应用题", text:"周末小明从学校出发，沿东西方向的道路行走。规定向东为正，记录依次为 +2 km、−1.5 km、+0.5 km、−3 km。请判断他最后的位置。", options:[], answer:"学校西侧 2 km", path:"初中 / 数学 / 有理数运算 / 中等", tags:["情境应用","综合题"], explanation:"将各次位移相加：2−1.5+0.5−3=−2，因此在学校西侧 2 km。" }
];

const bankQuestions = [
  { id:"b1", text:"下列各数中，绝对值最小的是（　　）。", meta:"绝对值 · 较易 · 选择题", answer:"C" },
  { id:"b2", text:"若 a、b 互为相反数，则 |a| 与 |b| 的关系是（　　）。", meta:"相反数 · 较易 · 选择题", answer:"相等" },
  { id:"b3", text:"小明向东走 4 米，再向西走 7 米，他最后的位置是（　　）。", meta:"正负数 · 中等 · 应用题", answer:"西侧 3 米" },
  { id:"b4", text:"比较 −3/4、−2/3、0、1/2 的大小，并按从小到大排列。", meta:"有理数大小比较 · 中等 · 填空题", answer:"−3/4＜−2/3＜0＜1/2" },
  { id:"b5", text:"若 |x−2|=3，则 x 的值为（　　）。", meta:"绝对值 · 中等 · 选择题", answer:"−1 或 5" },
  { id:"b6", text:"某地一周最低气温为 −4℃，最高气温为 9℃，温差是多少？", meta:"情境应用 · 较易 · 解答题", answer:"13℃" }
];

let activeQuestions = questions.map(question => ({ ...question }));
let deletedQuestions = [];
let selectedId = activeQuestions[1].id;
let modalMode = "add";

const $ = selector => document.querySelector(selector);
const esc = value => String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[char]));

function renderOrder() {
  const sections = [...new Set(activeQuestions.map(question => question.section))];
  $("#orderList").innerHTML = sections.map(section => {
    const items = activeQuestions.filter(question => question.section === section);
    return `<section class="order-section"><h3>${section}</h3><div class="order-items">${items.map(question => {
      const number = activeQuestions.findIndex(item => item.id === question.id) + 1;
      return `<button class="order-item ${question.id === selectedId ? "active" : ""}" data-select-question="${question.id}" type="button">${number}</button>`;
    }).join("")}</div></section>`;
  }).join("");
  $("#questionTotal").textContent = `${activeQuestions.length} 题`;
}

function renderQuestionList() {
  $("#questionList").innerHTML = activeQuestions.map((question, index) => `
    <article class="question-card ${question.id === selectedId ? "selected" : ""}" data-question-id="${question.id}">
      <span class="question-number">${index + 1}.</span>
      ${question.id === selectedId ? `<div class="question-toolbar">
        <button class="replace-button" data-question-action="replace" type="button"><i class="ri-loop-left-line"></i>换题</button>
        <button data-question-action="up" type="button" aria-label="上移"><i class="ri-arrow-up-line"></i></button>
        <button data-question-action="down" type="button" aria-label="下移"><i class="ri-arrow-down-line"></i></button>
        <button data-question-action="delete" type="button" aria-label="删除"><i class="ri-delete-bin-line"></i></button>
      </div>` : ""}
      <p class="question-text">${esc(question.text)}</p>
      ${question.options.length ? `<div class="question-options">${question.options.map(option => `<span>${esc(option)}</span>`).join("")}</div>` : ""}
    </article>`).join("");
}

function renderInfo() {
  const question = activeQuestions.find(item => item.id === selectedId) || activeQuestions[0];
  if (!question) {
    $("#infoContent").innerHTML = "<p class=\"info-path\">题单中还没有题目</p>";
    return;
  }
  $("#infoContent").innerHTML = `
    <div class="info-path">${esc(question.path)}</div>
    <p class="info-label">知识点</p>
    <div class="info-tags">${question.tags.map(tag => `<span>${esc(tag)}</span>`).join("")}</div>
    <p class="info-label">答案</p>
    <div class="info-answer">${esc(question.answer)}</div>
    <p class="info-label">解析</p>
    <div class="info-explanation">${esc(question.explanation)}</div>`;
}

function renderAll() {
  renderOrder();
  renderQuestionList();
  renderInfo();
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1700);
}

function openModal(mode) {
  modalMode = mode;
  $("#modalLayer").hidden = false;
  $("#modalKicker").textContent = mode === "replace" ? "替换当前题目" : mode === "deleted" ? "回收站" : "题库";
  $("#modalTitle").textContent = mode === "replace" ? "换一道更合适的题" : mode === "deleted" ? "已删除题目" : "从题库添加题目";
  $("#bankSearch").value = "";
  renderBank();
  $("#bankSearch").focus();
}

function closeModal() {
  $("#modalLayer").hidden = true;
}

function renderBank() {
  const query = $("#bankSearch").value.trim().toLowerCase();
  if (modalMode === "deleted") {
    $("#bankList").innerHTML = deletedQuestions.length ? deletedQuestions.map(question => `
      <div class="bank-item"><div><h3>${esc(question.text)}</h3><p>原第 ${question.originalIndex} 题 · ${esc(question.path)}</p></div><button data-restore-question="${question.id}" type="button">恢复</button></div>`).join("") : `<p class="info-path">暂无已删除题目</p>`;
    return;
  }
  const list = bankQuestions.filter(question => !query || `${question.text}${question.meta}`.toLowerCase().includes(query));
  $("#bankList").innerHTML = list.map(question => `
    <div class="bank-item"><div><h3>${esc(question.text)}</h3><p>${esc(question.meta)} · 答案 ${esc(question.answer)}</p></div><button data-bank-question="${question.id}" type="button">${modalMode === "replace" ? "换成这道" : "添加"}</button></div>`).join("") || `<p class="info-path">没有找到匹配题目</p>`;
}

function selectQuestion(id, shouldScroll = false) {
  if (!activeQuestions.some(question => question.id === id)) return;
  selectedId = id;
  renderAll();
  if (shouldScroll) $("[data-question-id=\"${id}\"]")?.scrollIntoView({ behavior:"smooth", block:"center" });
}

function moveQuestion(direction) {
  const index = activeQuestions.findIndex(question => question.id === selectedId);
  const nextIndex = index + direction;
  if (index < 0 || nextIndex < 0 || nextIndex >= activeQuestions.length) {
    showToast(direction < 0 ? "已经是第一道题" : "已经是最后一道题");
    return;
  }
  [activeQuestions[index], activeQuestions[nextIndex]] = [activeQuestions[nextIndex], activeQuestions[index]];
  renderAll();
  showToast(direction < 0 ? "题目已上移" : "题目已下移");
}

function deleteQuestion() {
  const index = activeQuestions.findIndex(question => question.id === selectedId);
  if (index < 0) return;
  const [removed] = activeQuestions.splice(index, 1);
  deletedQuestions.push({ ...removed, originalIndex: index + 1 });
  selectedId = activeQuestions[Math.min(index, activeQuestions.length - 1)]?.id;
  renderAll();
  showToast("题目已移入已删除题目");
}

function addBankQuestion(id) {
  const source = bankQuestions.find(question => question.id === id);
  if (!source) return;
  const question = {
    id: `q-${Date.now()}`,
    section: "基础提优题",
    text: source.text,
    options: [],
    answer: source.answer,
    path: `初中 / 数学 / ${source.meta.split(" · ")[0]}`,
    tags: [source.meta.split(" · ")[0], "题库精选"],
    explanation: `这道题来自题库精选，答案为${source.answer}，可继续调整后使用。`
  };
  const insertIndex = activeQuestions.findIndex(item => item.id === selectedId);
  activeQuestions.splice(insertIndex < 0 ? activeQuestions.length : insertIndex + 1, 0, question);
  selectedId = question.id;
  closeModal();
  renderAll();
  showToast("题目已添加到题单");
}

function replaceQuestion(id) {
  const source = bankQuestions.find(question => question.id === id);
  const index = activeQuestions.findIndex(question => question.id === selectedId);
  if (!source || index < 0) return;
  activeQuestions[index] = {
    id: activeQuestions[index].id,
    section: activeQuestions[index].section,
    text: source.text,
    options: [],
    answer: source.answer,
    path: `初中 / 数学 / ${source.meta.split(" · ")[0]}`,
    tags: [source.meta.split(" · ")[0], "题库精选"],
    explanation: `已用题库中的相近题目替换，答案为${source.answer}。`
  };
  closeModal();
  renderAll();
  showToast("题目已替换");
}

$("#editorTitle").textContent = topicTitles[topicId] || topicTitles.t15;
$("#workbenchTitle").textContent = topicTitles[topicId] || topicTitles.t15;
$(".editor-breadcrumb").href = `./detail.html?topic=${topicId}&context=${contextName}`;
renderAll();

$("#orderList").addEventListener("click", event => {
  const button = event.target.closest("[data-select-question]");
  if (button) selectQuestion(button.dataset.selectQuestion, true);
});

$("#questionList").addEventListener("click", event => {
  const card = event.target.closest("[data-question-id]");
  if (!card) return;
  const action = event.target.closest("[data-question-action]")?.dataset.questionAction;
  if (!action) return selectQuestion(card.dataset.questionId);
  selectedId = card.dataset.questionId;
  if (action === "replace") openModal("replace");
  if (action === "up") moveQuestion(-1);
  if (action === "down") moveQuestion(1);
  if (action === "delete") deleteQuestion();
});

document.querySelectorAll('[data-editor-action="add"]').forEach(button => button.addEventListener("click", () => openModal("add")));
document.querySelector('[data-editor-action="deleted"]').addEventListener("click", () => openModal("deleted"));
document.querySelector('[data-editor-action="save-as"]').addEventListener("click", () => showToast("已另存为新的题单"));
document.querySelector('[data-editor-action="download"]').addEventListener("click", () => showToast("正在生成可打印文件"));

$("#bankList").addEventListener("click", event => {
  const bankButton = event.target.closest("[data-bank-question]");
  const restoreButton = event.target.closest("[data-restore-question]");
  if (bankButton) {
    if (modalMode === "replace") replaceQuestion(bankButton.dataset.bankQuestion);
    else addBankQuestion(bankButton.dataset.bankQuestion);
  }
  if (restoreButton) {
    const index = deletedQuestions.findIndex(question => question.id === restoreButton.dataset.restoreQuestion);
    if (index < 0) return;
    const [restored] = deletedQuestions.splice(index, 1);
    delete restored.originalIndex;
    activeQuestions.push(restored);
    selectedId = restored.id;
    renderAll();
    renderBank();
    showToast("题目已恢复");
  }
});

$("#bankSearch").addEventListener("input", renderBank);
document.querySelectorAll("[data-close-modal]").forEach(element => element.addEventListener("click", closeModal));
