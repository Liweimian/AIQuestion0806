const paperCatalog = {
  t2: {
    title: "2026 深圳南山区初一上期末数学真题",
    shortTitle: "南山区期末卷",
    focus: "本地命题风格与阶段难度参考",
    reason: "深圳区级真题",
    region: "南山区",
    grade: "七年级上册",
    examType: "期末",
    questionCount: 7,
    difficulty: "中等",
    usage: 1206
  },
  t14: {
    title: "2026 深圳福田区初一下期中数学真题",
    shortTitle: "福田区期中卷",
    focus: "深圳真实阶段性考试，适合校准教学进度与难度",
    reason: "深圳区级真题",
    region: "福田区",
    grade: "七年级下册",
    examType: "期中",
    questionCount: 6,
    difficulty: "中等",
    usage: 984
  },
  t25: {
    title: "2026 深圳罗湖区初一下期末数学真题",
    shortTitle: "罗湖区期末卷",
    focus: "深圳真实阶段性考试，反映本地命题风格",
    reason: "深圳区级真题",
    region: "罗湖区",
    grade: "七年级下册",
    examType: "期末",
    questionCount: 4,
    difficulty: "中等",
    usage: 1458
  }
};

const paperQuestions = {
  t2: [
    { id:"1", num:1, section:"一、单项选择题", type:"选择题", difficulty:"较易", knowledge:"正负数意义", minutes:1, competency:"运算能力", badges:["AI 批改","AI 赋分"], stem:"如果向东走 3 米记作 +3 米，那么向西走 5 米应记作（　　）。", options:["A. +5 米","B. −5 米","C. +3 米","D. −3 米"], answer:"B", analysis:"向西与向东相反，应记作负数。" },
    { id:"2", num:2, section:"一、单项选择题", type:"选择题", difficulty:"较易", knowledge:"相反意义的量", minutes:1, competency:"抽象能力", badges:["创新题"], stem:"下列各组量中，具有相反意义的量是（　　）。", options:["A. 上升 5 米与向东 5 米","B. 收入 80 元与支出 50 元","C. 长大 2 岁与减少 2 千克","D. 购进 10 件与卖出 8 元"], answer:"B", analysis:"收入与支出具有相反意义。" },
    { id:"3", num:3, section:"一、单项选择题", type:"选择题", difficulty:"中等", knowledge:"负数概念", stem:"在 −3、0、2.5、−1/2 四个数中，负数共有（　　）。", options:["A. 1 个","B. 2 个","C. 3 个","D. 4 个"], answer:"B", analysis:"−3 和 −1/2 为负数。" },
    { id:"4", num:4, section:"一、单项选择题", type:"选择题", difficulty:"简单", knowledge:"温差计算", stem:"某天深圳的最高气温为 18 ℃，最低气温为 7 ℃，这一天的温差是（　　）。", options:["A. 25 ℃","B. −25 ℃","C. 11 ℃","D. −11 ℃"], answer:"C", analysis:"温差 = 最高温 − 最低温 = 11 ℃。" },
    { id:"5", num:5, section:"二、填空题", type:"填空题", difficulty:"简单", knowledge:"正负数应用", stem:"如果水库水位上升 0.8 米记作 +0.8 米，那么水位下降 0.5 米记作 ______ 米。", options:[], answer:"−0.5", analysis:"下降记为负。" },
    { id:"6", num:6, section:"二、填空题", type:"填空题", difficulty:"中等", knowledge:"数轴", stem:"数轴上与原点距离为 4 个单位长度的点表示的数是 ______。", options:[], answer:"4 或 −4", analysis:"距离原点 4 个单位长度有两个点。" },
    { id:"7", num:7, section:"三、解答题", type:"解答题", difficulty:"中等", knowledge:"正负数应用", stem:"某食品包装袋上标有“净含量 500±5 g”。抽检 5 袋食品的质量分别为 497 g、503 g、506 g、500 g、495 g。请用正负数表示它们相对于标准质量的偏差，并判断哪些产品合格。", options:[], answer:"497→−3，503→+3，506→+6，500→0，495→−5；497/503/500/495 合格", analysis:"合格范围为 −5 到 +5。" }
  ],
  t14: [
    { id:"1", num:1, section:"一、单项选择题", type:"选择题", difficulty:"中等", knowledge:"整式运算", stem:"下列运算正确的是（　　）。", options:["A. 3a + 2a = 5a²","B. −(−2) = 2","C. 2³ = 6","D. |−3| = −3"], answer:"B", analysis:"−(−2)=2。" },
    { id:"2", num:2, section:"一、单项选择题", type:"选择题", difficulty:"简单", knowledge:"代数式求值", stem:"若 x = −1，则 2x − 3 的值是（　　）。", options:["A. −5","B. −1","C. 1","D. 5"], answer:"A", analysis:"代入 x=−1 得 −5。" },
    { id:"3", num:3, section:"一、单项选择题", type:"选择题", difficulty:"简单", knowledge:"一元一次方程", stem:"下列方程中，是一元一次方程的是（　　）。", options:["A. x² = 4","B. 2x + 1 = 0","C. 1/x = 2","D. x + y = 1"], answer:"B", analysis:"2x+1=0 符合定义。" },
    { id:"4", num:4, section:"二、填空题", type:"填空题", difficulty:"简单", knowledge:"合并同类项", stem:"合并同类项：3x − 2x + 5 = ______。", options:[], answer:"x + 5", analysis:"3x−2x=x。" },
    { id:"5", num:5, section:"二、填空题", type:"填空题", difficulty:"中等", knowledge:"解方程", stem:"若 2x + 5 = 11，则 x = ______。", options:[], answer:"3", analysis:"2x=6，x=3。" },
    { id:"6", num:6, section:"三、解答题", type:"解答题", difficulty:"中等", knowledge:"解方程", stem:"解方程：3(x − 2) = 2x + 1，并写出检验过程。", options:[], answer:"x = 7", analysis:"展开移项求解。" }
  ],
  t25: [
    { id:"1", num:1, section:"一、单项选择题", type:"选择题", difficulty:"简单", knowledge:"轴对称", stem:"下列图形中，是轴对称图形的是（　　）。", options:["A. 平行四边形","B. 等腰三角形","C. 直角梯形","D. 任意三角形"], answer:"B", analysis:"等腰三角形是轴对称图形。" },
    { id:"2", num:2, section:"一、单项选择题", type:"选择题", difficulty:"中等", knowledge:"不等式性质", stem:"若 a < b，则下列结论一定正确的是（　　）。", options:["A. a + 1 > b + 1","B. −a > −b","C. 2a > 2b","D. a − 2 < b − 2"], answer:"D", analysis:"同减 2 不等号方向不变。" },
    { id:"3", num:3, section:"二、填空题", type:"填空题", difficulty:"简单", knowledge:"余角", stem:"一个角的余角是 35°，则这个角是 ______。", options:[], answer:"55°", analysis:"90°−35°=55°。" },
    { id:"4", num:4, section:"三、解答题", type:"解答题", difficulty:"中等", knowledge:"角平分线", stem:"如图，已知 ∠AOB = 80°，OC 平分 ∠AOB，求 ∠AOC 的度数，并说明理由。", options:[], answer:"40°", analysis:"角平分线将角分成两个相等的角。" }
  ]
};

const structuredActions = {
  delete: { label:"删题", build: ids => ids.length ? `删除第 ${ids.join("、")} 题` : "删除第 3 题" },
  add: { label:"加题", build: () => "在选择题末尾增加一道有理数运算选择题" },
  convert: { label:"改题型", build: ids => ids.length ? `把第 ${ids[0]} 题改成填空题` : "把第 1 题改成填空题" },
  "switch-paper": { label:"换卷", build: () => "打开福田区期中卷" },
  "lower-difficulty": { label:"降难度", build: ids => ids.length ? `将第 ${ids.join("、")} 题降低难度，保留考点` : "将整卷难度降低一档，保留核心考点" },
  "change-context": { label:"换情境", build: ids => ids.length ? `将第 ${ids.join("、")} 题改为深圳生活情境，考点不变` : "将整卷情境改为深圳本地场景" },
  "align-curriculum": { label:"对齐课标", build: ids => ids.length ? `检查第 ${ids.join("、")} 题是否对齐课标，并给出调整建议` : "检查整卷是否对齐七上有理数课标" },
  "match-region": { label:"对标区风格", build: ids => ids.length ? `将第 ${ids.join("、")} 题调整为南山区期末命题风格` : "将整卷调整为南山区期末命题风格" },
  "ai-adapt": { label:"AI 改编试卷", build: () => "将整卷改为深圳情境题，考点不变" },
  parallel: { label:"平行组卷", build: () => "生成一份考点一致的平行卷" },
  "paper-analysis": { label:"试卷分析", build: () => "分析本卷考点分布、难度结构和命题特点" }
};

const params = new URLSearchParams(location.search);
const contextName = params.get("context") || "paper";
const isWorkbook = contextName === "series";
const initialTopicId = params.get("topic") || (isWorkbook ? "t9" : "t2");
const STORAGE_KEY = `feixiang-ai-workspace-v4-${contextName}`;
const LEGACY_STORAGE_KEYS = [
  "feixiang-ai-workspace-v2",
  "feixiang-ai-workspace-v1"
];
try {
  sessionStorage.removeItem("feixiang-ai-workspace-v3");
} catch {}

const workbookCatalog = {
  t9: {
    title: "有理数运算基础过关配套题单",
    shortTitle: "有理数过关",
    source: "多维导学案",
    difficulty: "中等",
    questionCount: 20,
    usage: 1143
  },
  t7: {
    title: "整式运算高频易错巩固题单",
    shortTitle: "整式易错",
    source: "全品学练考",
    difficulty: "中等",
    questionCount: 14,
    usage: 522
  },
  t19: {
    title: "课内基础到探究题：进阶提升题单",
    shortTitle: "进阶提升",
    source: "常用提优训练系列",
    difficulty: "中等",
    questionCount: 18,
    usage: 831
  }
};

const workbookDirectory = {
  kicker: "练习册目录",
  title: "多维导学案 · 七年级上册",
  summary: "共 6 章 · 36 课时",
  breadcrumb: ["多维导学案", "第一章 丰富的图形世界"],
  chapters: [
    {
      id: "407962",
      title: "第一章 丰富的图形世界",
      expanded: false,
      lessons: [
        { title: "第 1 课时 生活中的立体图形（1）" },
        { title: "第 2 课时 生活中的立体图形（2）" },
        { title: "第 3 课时 从立体图形到平面图形（1）——正方体的展开与折叠" },
        { title: "第 4 课时 从立体图形到平面图形（2）——柱体、锥体的展开与折叠", active: true },
        { title: "第 5 课时 从立体图形到平面图形（3）——截一个几何体" },
        { title: "第 6 课时 从三个方向看物体的形状" }
      ]
    },
    { id: "407963", title: "第二章 有理数及其运算", expanded: false, lessons: [] },
    { id: "407964", title: "第三章 整式及其加减", expanded: false, lessons: [] },
    { id: "407965", title: "第四章 基本平面图形", expanded: false, lessons: [] },
    { id: "407966", title: "第五章 一元一次方程", expanded: false, lessons: [] },
    { id: "407967", title: "第六章 数据的收集与整理", expanded: false, lessons: [] }
  ]
};

let workspace = loadWorkspace();
let tabCounter = workspace.tabs.reduce((max, tab) => {
  const n = Number.parseInt(String(tab.id).replace("tab-", ""), 10);
  return Number.isFinite(n) ? Math.max(max, n) : max;
}, 0);
let basketCount = workspace.basketCount || 0;

function getBaseTopicId(topicId) {
  return String(topicId || "").replace(/-q\d+$/, "");
}

function tabIsWorkbook(tab) {
  return (tab?.context || contextName) === "series";
}

function getTabBaseTitle(tab) {
  if (tab?.meta?.title) return tab.meta.title;
  return String(tab?.title || "")
    .replace(/\s*·\s*第 \d+ 题(?:\s*·\s*第 \d+ 题)*$/g, "")
    .trim();
}

function loadWorkspace() {
  try {
    let saved = sessionStorage.getItem(STORAGE_KEY);
    if (!saved) {
      for (const legacyKey of LEGACY_STORAGE_KEYS) {
        saved = sessionStorage.getItem(legacyKey);
        if (saved) {
          sessionStorage.removeItem(legacyKey);
          break;
        }
      }
    }
    if (saved) {
      const parsed = JSON.parse(saved);
      delete parsed.aiPanelHidden;
      if (Array.isArray(parsed.tabs)) {
        parsed.tabs = parsed.tabs.map(tab => ({
          ...tab,
          context: tab.context || contextName,
          topicId: tab.fromQuestionId ? tab.topicId : getBaseTopicId(tab.topicId)
        }));
      }
      return {
        tabs: [],
        activeTabId: null,
        messages: [],
        basketCount: 0,
        showAnswers: false,
        paperFavorited: false,
        ...parsed
      };
    }
  } catch {}
  return { tabs: [], activeTabId: null, messages: [], basketCount: 0, showAnswers: false, paperFavorited: false };
}

function saveWorkspace() {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(workspace));
}

function getActiveTab() {
  return workspace.tabs.find(tab => tab.id === workspace.activeTabId) || workspace.tabs[0];
}

function getQuestions(topicId) {
  const baseId = getBaseTopicId(topicId);
  const questions = paperQuestions[baseId] || paperQuestions.t2;
  return questions.map(q => ({ ...q }));
}

function resolveTopicMeta(topicId, tabContext = contextName) {
  const baseId = getBaseTopicId(topicId);
  if (tabContext === "series") {
    const catalog = workbookCatalog[baseId];
    if (catalog) return { ...catalog };
    return {
      title: params.get("title") || "练习册题单",
      shortTitle: (params.get("title") || "题单").slice(0, 8),
      source: params.get("source") || "系列题单",
      difficulty: params.get("difficulty") || "中等",
      questionCount: Number(params.get("questions") || 0),
      usage: Number(params.get("usage") || 0)
    };
  }
  return paperCatalog[baseId] || {
    title: params.get("title") || "未命名试卷",
    shortTitle: "试卷",
    focus: params.get("focus") || "",
    reason: params.get("reason") || "试卷",
    region: "深圳",
    grade: "七年级",
    examType: "试卷",
    questionCount: 0,
    difficulty: "中等",
    usage: 0
  };
}

function favoriteResourceLabel(saved = false, tab = getActiveTab()) {
  const noun = tabIsWorkbook(tab) ? "题单" : "试卷";
  if (saved) return `<i class="ri-star-fill"></i><span>已收藏</span>`;
  return `<i class="ri-star-line"></i><span>收藏${noun}</span>`;
}

function createWelcomeMessages() {
  return [{
    role: "assistant",
    html: `
      <p>你好，我是飞象题库AI。</p>
        <p>· 悬浮题目可看到操作按钮（纠错 / 收藏 / 解析 / 加入对话）<br>· 点击题目可选中并加入 AI 对话<br>· 下方可使用 AI 改编、平行组卷、试卷分析等功能</p>
      <span class="chat-action-chip"><i class="ri-cursor-line"></i> 先点几道题试试</span>`
  }];
}

function createTab(topicId, tabContext = contextName) {
  tabCounter += 1;
  const meta = resolveTopicMeta(topicId, tabContext);
  const questions = getQuestions(topicId).map(q => ({ ...q }));
  return {
    id: `tab-${tabCounter}`,
    topicId: getBaseTopicId(topicId),
    context: tabContext,
    title: meta.title,
    shortTitle: meta.shortTitle || meta.title.slice(0, 10),
    meta,
    selectedQuestionIds: [],
    removedQuestionIds: [],
    modifiedQuestions: {},
    questions
  };
}

function refreshMainTabFromSource(tab) {
  if (!tab || tab.fromQuestionId || tab.isQuestionList) return;
  const baseId = getBaseTopicId(tab.topicId);
  const fresh = getQuestions(baseId);
  const meta = resolveTopicMeta(baseId, tab.context);
  tab.questions = fresh.map(q => ({ ...q }));
  tab.removedQuestionIds = [];
  tab.modifiedQuestions = {};
  tab.meta = meta;
  tab.title = meta.title;
  tab.shortTitle = meta.shortTitle || meta.title.slice(0, 10);
  tab.selectedQuestionIds = tab.selectedQuestionIds.filter(id => fresh.some(q => q.id === id));
}

function hasSingleChoiceSection(tab) {
  if (!tab) return false;
  return tab.questions.some(q =>
    !tab.removedQuestionIds.includes(q.id) && String(q.section || "").includes("单项选择")
  );
}

function formatQuestionListTitle() {
  const now = new Date();
  const pad = value => String(value).padStart(2, "0");
  return `${now.getFullYear()}.${pad(now.getMonth() + 1)}.${pad(now.getDate())}题单`;
}

function formatQuestionListShortTitle(title = formatQuestionListTitle()) {
  return title.replace(/题单$/, "");
}

function ensureInitialTab() {
  if (!workspace.messages.length) workspace.messages = createWelcomeMessages();

  const baseId = getBaseTopicId(initialTopicId);
  let mainTab = workspace.tabs.find(tab =>
    getBaseTopicId(tab.topicId) === baseId && !tab.fromQuestionId && !tab.isQuestionList
  );

  if (!mainTab) {
    mainTab = createTab(initialTopicId);
    workspace.tabs.push(mainTab);
  } else if (params.get("topic") || !hasSingleChoiceSection(mainTab)) {
    refreshMainTabFromSource(mainTab);
  }

  if (params.get("topic")) {
    workspace.activeTabId = mainTab.id;
  } else if (!workspace.activeTabId || !workspace.tabs.some(tab => tab.id === workspace.activeTabId)) {
    workspace.activeTabId = mainTab.id;
  }

  workspace.tabs = workspace.tabs.filter(tab => {
    if (tab.isQuestionList || tab.fromQuestionId) {
      return workspace.tabs.some(parent => parent.id === tab.fromTabId);
    }
    return true;
  });

  saveWorkspace();
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function diffBlock(summary, items) {
  return `
    <details class="chat-block" open>
      <summary><i class="ri-git-commit-line"></i> 变更摘要</summary>
      <div class="chat-block-body">
        <p>${escapeHtml(summary)}</p>
        <ul>${items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </div>
    </details>`;
}

function renderChat() {
  const thread = document.querySelector("#aiChatThread");
  if (!thread) return;
  thread.innerHTML = workspace.messages.map(message => {
    if (message.role === "user") {
      return `<article class="chat-message user"><div class="chat-bubble"><p>${escapeHtml(message.text)}</p></div></article>`;
    }
    return `
      <article class="chat-message assistant">
        <div class="chat-author">
          <span class="chat-author-avatar"><i class="ri-sparkling-2-fill"></i></span>
          <span>飞象题库AI</span>
        </div>
        <div class="chat-bubble">${message.html}</div>
      </article>`;
  }).join("");
  thread.scrollTop = thread.scrollHeight;
}

function renderMeta(tab) {
  const visibleCount = tab.questions.filter(q => !tab.removedQuestionIds.includes(q.id)).length;
  const displayTitle = tab.fromQuestionId
    ? `${getTabBaseTitle(tab)} · 第 ${tab.questions[0]?.num || ""} 题`
    : tab.title;
  document.querySelector("#topicTitle").textContent = displayTitle;

  if (tab.fromQuestionId) {
    const q = tab.questions[0];
    document.querySelector("#paperMetaStats").innerHTML = `
      <div><dt>题量</dt><dd>1 题</dd></div>
      <div><dt>题型</dt><dd>${escapeHtml(q?.type || "—")}</dd></div>
      <div><dt>难度</dt><dd>${escapeHtml(q?.difficulty || tab.meta.difficulty || "中等")}</dd></div>
      <div><dt>知识点</dt><dd>${escapeHtml(q?.knowledge || "—")}</dd></div>`;
    return;
  }

  if (tab.isQuestionList) {
    document.querySelector("#paperMetaStats").innerHTML = `
      <div><dt>题量</dt><dd>${visibleCount} 题</dd></div>
      <div><dt>难度</dt><dd>${escapeHtml(tab.meta.difficulty || "中等")}</dd></div>
      <div><dt>来源</dt><dd>${escapeHtml(tab.meta.source || "自定义题单")}</dd></div>
      <div><dt>创建时间</dt><dd>${escapeHtml(tab.meta.createdAt || "—")}</dd></div>`;
    return;
  }

  if (tabIsWorkbook(tab)) {
    document.querySelector("#paperMetaStats").innerHTML = `
      <div><dt>题量</dt><dd>${visibleCount || tab.meta.questionCount || 0} 题</dd></div>
      <div><dt>难度</dt><dd>${escapeHtml(tab.meta.difficulty || "中等")}</dd></div>
      <div><dt>来源</dt><dd>${escapeHtml(tab.meta.source || "系列题单")}</dd></div>
      <div><dt>使用量</dt><dd>${Number(tab.meta.usage || 0).toLocaleString()} 人</dd></div>`;
    return;
  }

  document.querySelector("#paperMetaStats").innerHTML = `
    <div><dt>地区</dt><dd>${escapeHtml(tab.meta.region)}</dd></div>
    <div><dt>年级</dt><dd>${escapeHtml(tab.meta.grade)}</dd></div>
    <div><dt>类型</dt><dd>${escapeHtml(tab.meta.examType)}</dd></div>
    <div><dt>题量</dt><dd>${visibleCount} 题</dd></div>
    <div><dt>难度</dt><dd>${escapeHtml(tab.meta.difficulty)}</dd></div>
    <div><dt>使用量</dt><dd>${Number(tab.meta.usage || 0).toLocaleString()} 人</dd></div>`;
}

function renderWorkbookDirectory() {
  const tree = document.querySelector("#directoryTree");
  if (!tree) return;
  tree.innerHTML = workbookDirectory.chapters.map(chapter => `
    <section class="tree-group workbook-chapter ${chapter.expanded ? "open" : ""}">
      <button type="button" class="chapter-row">
        <i class="ri-arrow-${chapter.expanded ? "down" : "right"}-s-line"></i>
        <span>${escapeHtml(chapter.title)}</span>
      </button>
      <div class="tree-leaves"${chapter.expanded ? "" : " hidden"}>
        ${chapter.lessons.map(lesson => `
          <button class="tree-lesson ${lesson.active ? "active" : ""}" type="button">
            <span class="lesson-title">${escapeHtml(lesson.title)}</span>
          </button>`).join("")}
      </div>
    </section>`).join("");
}

function setDirectoryOpen(open, mobile = false) {
  const directoryPanel = document.querySelector("#directoryPanel");
  const workspace = document.querySelector("#aiWorkspace");
  const directoryToggle = document.querySelector("#directoryToggle");
  const directoryMask = document.querySelector("#directoryMask");
  if (!directoryPanel || !workspace) return;
  directoryPanel.classList.toggle("open", open);
  workspace.classList.toggle("directory-open", open && !mobile);
  directoryToggle?.setAttribute("aria-expanded", String(open));
  if (directoryMask) directoryMask.hidden = !open || !mobile;
}

function bindDirectoryEvents() {
  if (!isWorkbook) return;

  document.querySelector("#directoryToggle")?.addEventListener("click", () => {
    const directoryPanel = document.querySelector("#directoryPanel");
    setDirectoryOpen(!directoryPanel?.classList.contains("open"));
  });

  document.querySelector("#mobileDirectory")?.addEventListener("click", () => {
    setDirectoryOpen(true, true);
  });

  document.querySelector("#directoryMask")?.addEventListener("click", () => {
    setDirectoryOpen(false, true);
  });

  document.querySelectorAll(".workbook-chapter > .chapter-row").forEach(button => {
    button.addEventListener("click", () => {
      const icon = button.querySelector("i");
      const leaves = button.nextElementSibling;
      if (!leaves) return;
      const open = leaves.hidden;
      leaves.hidden = !open;
      button.closest(".workbook-chapter")?.classList.toggle("open", open);
      if (icon) icon.className = open ? "ri-arrow-down-s-line" : "ri-arrow-right-s-line";
    });
  });

  document.querySelectorAll(".tree-lesson").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tree-lesson").forEach(item => item.classList.toggle("active", item === button));
      const label = button.querySelector(".lesson-title")?.textContent.trim() || button.textContent.trim();
      document.querySelector("#breadcrumbLeaf").textContent = label;
      showToast(`已切换到「${label}」`);
    });
  });
}

function applyPageMode() {
  const workspace = document.querySelector("#aiWorkspace");
  const directoryPanel = document.querySelector("#directoryPanel");
  const mobileDirectory = document.querySelector("#mobileDirectory");
  const docTabs = document.querySelector("#docTabs");
  const favoriteLabel = document.querySelector("#favoritePaperLabel");

  if (!isWorkbook) {
    document.body.classList.remove("ai-workbook-page");
    workspace?.classList.remove("workbook-mode", "directory-open");
    directoryPanel?.setAttribute("hidden", "");
    mobileDirectory?.setAttribute("hidden", "");
    document.querySelector("#directoryMask")?.setAttribute("hidden", "");
    document.querySelector("#breadcrumbContext").textContent = "试卷";
    document.querySelector("#breadcrumbLeaf").textContent = "试卷详情";
    if (favoriteLabel) favoriteLabel.textContent = "收藏试卷";
    if (docTabs) docTabs.setAttribute("aria-label", "已打开的试卷");
    return;
  }

  document.body.classList.add("ai-workbook-page");
  workspace?.classList.add("workbook-mode");
  directoryPanel?.removeAttribute("hidden");
  mobileDirectory?.removeAttribute("hidden");

  document.querySelector("#breadcrumbContext").textContent = workbookDirectory.breadcrumb[0];
  document.querySelector("#breadcrumbLeaf").textContent = workbookDirectory.breadcrumb[1];
  document.querySelector("#directoryKicker").textContent = workbookDirectory.kicker;
  document.querySelector("#directoryTitle").textContent = workbookDirectory.title;
  document.querySelector("#directorySummary").textContent = workbookDirectory.summary;
  if (favoriteLabel) favoriteLabel.textContent = "收藏题单";
  if (docTabs) docTabs.setAttribute("aria-label", "已打开的题单");

  renderWorkbookDirectory();
  setDirectoryOpen(false);
}

function questionDefaults(q) {
  return {
    minutes: q.minutes || (q.type === "解答题" ? 5 : q.type === "填空题" ? 2 : 1),
    competency: q.competency || "运算能力",
    badges: q.badges || []
  };
}

function questionCardHtml(q, tab) {
  const removed = tab.removedQuestionIds.includes(q.id);
  const selected = tab.selectedQuestionIds.includes(q.id);
  const modified = tab.modifiedQuestions[q.id];
  const stem = modified?.stem || q.stem;
  const type = modified?.type || q.type;
  const difficulty = modified?.difficulty || q.difficulty;
  const meta = questionDefaults(q);
  const options = q.options.length
    ? `<div class="q-options">${q.options.map(opt => `<span>${escapeHtml(opt)}</span>`).join("")}</div>`
    : "";
  const badges = meta.badges.map(label => `<span class="q-badge ${label.includes("创新") ? "hot" : "ai"}">${escapeHtml(label)}</span>`).join("");
  return `
    <article class="question-item ${removed ? "removed" : ""} ${selected ? "selected" : ""} ${modified ? "modified" : ""}"
      data-q="${q.id}" tabindex="0" aria-label="第 ${q.num} 题">
      <div class="q-card-top">
        <div class="q-badges">${badges}</div>
        <p class="q-trail">初中 / 数学 / ${escapeHtml(type)} / ${escapeHtml(difficulty)} / ${meta.minutes} 分钟</p>
      </div>
      <div class="q-body">
        <p class="q-stem"><b>${q.num}.</b> ${escapeHtml(stem)}</p>
        ${options}
      </div>
      <div class="q-answer-panel">
        <div class="q-inline-answer"><em>答案</em>${escapeHtml(q.answer)}</div>
        <div class="q-inline-analysis"><em>解析</em>${escapeHtml(q.analysis)}</div>
      </div>
      <footer class="q-card-foot">
        <span class="q-knowledge-foot">知识点：${escapeHtml(q.knowledge)} / 核心素养：${escapeHtml(meta.competency)}</span>
      </footer>
      <div class="q-card-actions">
        <button type="button" data-card-action="add-after" data-q="${q.id}"><i class="ri-add-line"></i> 加题</button>
        <button type="button" data-card-action="delete" data-q="${q.id}"><i class="ri-delete-bin-line"></i> 删题</button>
        <button type="button" data-card-action="fix" data-q="${q.id}"><i class="ri-error-warning-line"></i> 纠错</button>
        <button type="button" data-card-action="favorite" data-q="${q.id}"><i class="ri-star-line"></i> 收藏</button>
        <button type="button" data-card-action="analysis" data-q="${q.id}"><i class="ri-file-text-line"></i> 解析</button>
        <button type="button" data-card-action="similar" data-q="${q.id}"><i class="ri-stack-line"></i> 相似题</button>
        <button type="button" class="q-chat-btn" data-card-action="chat" data-q="${q.id}"><i class="ri-chat-3-line"></i> 加入对话</button>
      </div>
    </article>`;
}

function renderQuestionCards() {
  const tab = getActiveTab();
  if (!tab) return;
  document.title = `${tab.title} · AI 试卷工作台`;
  renderMeta(tab);

  const visible = tab.questions.filter(q => !tab.removedQuestionIds.includes(q.id));
  const sections = [...new Set(visible.map(q => q.section))];
  const board = document.querySelector("#questionCardBoard");
  board.classList.toggle("show-answers", workspace.showAnswers);
  board.innerHTML = sections.map(section => {
    const items = visible.filter(q => q.section === section);
    return `
      <section class="question-section">
        <header class="question-section-head"><h3>${escapeHtml(section)}</h3><span>${items.length} 题</span></header>
        <div class="paper-sheet">
          <div class="question-list-flow">${items.map(q => questionCardHtml(q, tab)).join("")}</div>
        </div>
      </section>`;
  }).join("");

  renderSelectedContext();
  bindQuestionCardEvents();
}

function renderSelectedContext() {
  const tab = getActiveTab();
  const wrap = document.querySelector("#aiSelectedContext");
  const chips = document.querySelector("#aiSelectedChips");
  if (!tab || !wrap || !chips) return;
  const selected = tab.questions.filter(q => tab.selectedQuestionIds.includes(q.id));
  wrap.hidden = !selected.length;
  wrap.classList.toggle("has-selection", selected.length > 0);
  chips.innerHTML = selected.map(q => `
    <span class="selected-chip" data-q="${q.id}">
      <span class="selected-chip-label">第 ${q.num} 题 · ${escapeHtml(q.type)}</span>
      <span class="selected-chip-close" role="button" tabindex="0" data-remove-q="${q.id}" aria-label="移出已选"><i class="ri-close-line"></i></span>
    </span>`).join("");

  wrap.onclick = event => {
    if (event.target.closest("#clearSelectedQuestions")) return;
    if (event.target.closest(".selected-chip-close")) return;
    if (!selected.length) return;
    openSelectedAsQuestionList();
  };

  chips.querySelectorAll("[data-remove-q]").forEach(button => {
    const remove = event => {
      event.stopPropagation();
      toggleQuestionSelection(button.dataset.removeQ, false);
    };
    button.addEventListener("click", remove);
    button.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        remove(event);
      }
    });
  });
}

function openSelectedAsQuestionList() {
  const sourceTab = getActiveTab();
  if (!sourceTab?.selectedQuestionIds.length) {
    showToast("请先选择题目");
    return;
  }

  const selectedQuestions = sourceTab.questions.filter(q =>
    sourceTab.selectedQuestionIds.includes(q.id) && !sourceTab.removedQuestionIds.includes(q.id)
  );
  if (!selectedQuestions.length) return;

  const selectionKey = [...selectedQuestions.map(q => q.id)].sort().join(",");
  const existing = workspace.tabs.find(tab =>
    tab.isQuestionList && tab.fromTabId === sourceTab.id && tab.selectionKey === selectionKey
  );
  if (existing) {
    switchTab(existing.id);
    showToast(`已切换到「${existing.title}」`);
    return;
  }

  tabCounter += 1;
  const title = formatQuestionListTitle();
  const now = new Date();
  const pad = value => String(value).padStart(2, "0");
  const createdAt = `${now.getFullYear()}.${pad(now.getMonth() + 1)}.${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
  const questions = selectedQuestions.map((q, index) => ({
    ...q,
    id: `${q.id}-list-${tabCounter}-${index}`,
    num: index + 1
  }));

  const newTab = {
    id: `tab-${tabCounter}`,
    topicId: `list-${Date.now()}`,
    context: sourceTab.context || contextName,
    title,
    shortTitle: formatQuestionListShortTitle(title),
    meta: {
      title,
      shortTitle: formatQuestionListShortTitle(title),
      source: "自定义题单",
      difficulty: "中等",
      questionCount: questions.length,
      usage: 0,
      createdAt
    },
    selectedQuestionIds: questions.map(q => q.id),
    removedQuestionIds: [],
    modifiedQuestions: {},
    questions,
    fromTabId: sourceTab.id,
    isQuestionList: true,
    selectionKey
  };

  workspace.tabs.push(newTab);
  workspace.activeTabId = newTab.id;
  saveWorkspace();
  renderAll();
  showToast(`已创建「${title}」，共 ${questions.length} 题`);
}

function openQuestionInNewTab(qId) {
  const sourceTab = getActiveTab();
  if (!sourceTab) return;
  const q = sourceTab.questions.find(item => item.id === qId);
  if (!q) return;

  const existing = workspace.tabs.find(tab => tab.fromTabId === sourceTab.id && tab.fromQuestionId === qId);
  if (existing) {
    switchTab(existing.id);
    showToast(`已切换到第 ${q.num} 题标签页`);
    focusQuestionInView(existing.questions[0]?.id);
    return;
  }

  tabCounter += 1;
  const questionCopy = { ...q, id: `${q.id}-view-${tabCounter}` };
  const baseTitle = getTabBaseTitle(sourceTab);
  const newTab = {
    id: `tab-${tabCounter}`,
    topicId: `${getBaseTopicId(sourceTab.topicId)}-q${q.num}`,
    context: sourceTab.context || contextName,
    title: `${baseTitle} · 第 ${q.num} 题`,
    shortTitle: `第 ${q.num} 题`,
    meta: { ...sourceTab.meta, title: baseTitle, questionCount: 1 },
    selectedQuestionIds: [questionCopy.id],
    removedQuestionIds: [],
    modifiedQuestions: {},
    questions: [questionCopy],
    fromTabId: sourceTab.id,
    fromQuestionId: qId
  };

  workspace.tabs.push(newTab);
  workspace.activeTabId = newTab.id;
  saveWorkspace();
  renderAll();
  showToast(`已在新标签页打开第 ${q.num} 题`);
  focusQuestionInView(questionCopy.id);
}

function focusQuestionInView(qId) {
  if (!qId) return;
  requestAnimationFrame(() => {
    const node = document.querySelector(`.question-item[data-q="${qId}"]`);
    node?.scrollIntoView({ behavior: "smooth", block: "center" });
    node?.classList.add("focus-flash");
    setTimeout(() => node?.classList.remove("focus-flash"), 1200);
  });
}

function toggleQuestionSelection(qId, force) {
  const tab = getActiveTab();
  if (!tab) return;
  const has = tab.selectedQuestionIds.includes(qId);
  const next = typeof force === "boolean" ? force : !has;
  if (next && !has) tab.selectedQuestionIds.push(qId);
  if (!next) tab.selectedQuestionIds = tab.selectedQuestionIds.filter(id => id !== qId);
  saveWorkspace();
  renderQuestionCards();
}

function addToBasket(qId) {
  basketCount += 1;
  workspace.basketCount = basketCount;
  saveWorkspace();
  const q = getActiveTab()?.questions.find(item => item.id === qId);
  showToast(`第 ${q?.num || ""} 题已加入组卷（${basketCount}）`);
}

function addSelectedToChat() {
  const tab = getActiveTab();
  if (!tab?.selectedQuestionIds.length) return;
  const nums = tab.selectedQuestionIds
    .map(id => tab.questions.find(q => q.id === id)?.num)
    .filter(Boolean);
  pushAssistantMessage(`<p>已收到你选中的 ${nums.length} 道题（第 ${nums.join("、")} 题）。告诉我你想对它们做什么：删改、降难度、换情境都可以。</p>`);
}

function buildPaperAnalysisHtml(tab) {
  const visible = tab.questions.filter(q => !tab.removedQuestionIds.includes(q.id));
  const typeCount = visible.reduce((acc, q) => {
    acc[q.type] = (acc[q.type] || 0) + 1;
    return acc;
  }, {});
  const diffCount = visible.reduce((acc, q) => {
    const level = q.difficulty || "中等";
    acc[level] = (acc[level] || 0) + 1;
    return acc;
  }, {});
  const knowledge = [...new Set(visible.map(q => q.knowledge))];
  const typeLines = Object.entries(typeCount).map(([type, count]) => `${type} ${count} 题`);
  const diffLines = Object.entries(diffCount).map(([level, count]) => `${level} ${count} 题`);
  return `
    <p>已完成「${escapeHtml(tab.title)}」的试卷分析。</p>
    ${diffBlock("试卷分析", [
      `题型分布：${typeLines.join(" · ")}`,
      `难度分布：${diffLines.join(" · ")}`,
      `核心考点：${knowledge.slice(0, 5).join("、")}${knowledge.length > 5 ? " 等" : ""}`,
      `命题特点：选择偏概念辨析，填空/解答侧重应用与运算`,
      `建议：可结合 AI 改编或平行组卷生成同考点变式卷`
    ])}`;
}

function toggleShowAnswers() {
  workspace.showAnswers = !workspace.showAnswers;
  saveWorkspace();
  const btn = document.querySelector("#toggleShowAnswer");
  if (btn) {
    btn.innerHTML = workspace.showAnswers
      ? '<i class="ri-eye-off-line"></i><span>隐藏答案</span>'
      : '<i class="ri-eye-line"></i><span>显示答案</span>';
  }
  renderQuestionCards();
}

function renderTabs() {
  const bar = document.querySelector("#docTabs");
  if (!bar) return;
  bar.innerHTML = `
    ${workspace.tabs.map(tab => `
      <button class="doc-tab ${tab.id === workspace.activeTabId ? "active" : ""}" type="button" data-tab-id="${tab.id}">
        <i class="ri-file-list-3-line doc-tab-icon" aria-hidden="true"></i>
        <span class="doc-tab-label">${escapeHtml(tab.shortTitle)}</span>
        <span class="doc-tab-close" role="button" tabindex="0" data-close-tab="${tab.id}" aria-label="关闭 ${escapeHtml(tab.shortTitle)}"><i class="ri-close-line"></i></span>
      </button>`).join("")}
    <button class="doc-tab-add" type="button" id="docTabAdd" aria-label="打开新试卷"><i class="ri-add-line"></i></button>`;

  bar.querySelectorAll("[data-tab-id]").forEach(button => {
    button.addEventListener("click", event => {
      if (event.target.closest("[data-close-tab]")) return;
      switchTab(button.dataset.tabId);
    });
  });
  bar.querySelectorAll("[data-close-tab]").forEach(button => {
    const close = event => { event.stopPropagation(); closeTab(button.dataset.closeTab); };
    button.addEventListener("click", close);
  });
  document.querySelector("#docTabAdd")?.addEventListener("click", openPaperPicker);
}

function switchTab(tabId) {
  if (workspace.activeTabId === tabId) return;
  workspace.activeTabId = tabId;
  saveWorkspace();
  syncPageChromeForTab(getActiveTab());
  renderAll();
}

function syncPageChromeForTab(tab) {
  const favoriteLabel = document.querySelector("#favoritePaperLabel");
  if (!tab || !favoriteLabel) return;
  favoriteLabel.textContent = tabIsWorkbook(tab) ? "收藏题单" : "收藏试卷";
}

function closeTab(tabId) {
  if (workspace.tabs.length === 1) return showToast("至少保留一个试卷标签页");
  const index = workspace.tabs.findIndex(tab => tab.id === tabId);
  workspace.tabs.splice(index, 1);
  if (workspace.activeTabId === tabId) workspace.activeTabId = workspace.tabs[Math.max(0, index - 1)].id;
  saveWorkspace();
  renderAll();
}

function openTab(topicId) {
  const baseId = getBaseTopicId(topicId);
  const existing = workspace.tabs.find(tab =>
    getBaseTopicId(tab.topicId) === baseId && !tab.fromQuestionId && !tab.isQuestionList
  );
  if (existing) {
    switchTab(existing.id);
    pushAssistantMessage(`<p>已切换到「${existing.title}」。</p>`);
    return existing;
  }
  const tab = createTab(topicId);
  workspace.tabs.push(tab);
  workspace.activeTabId = tab.id;
  saveWorkspace();
  renderAll();
  pushAssistantMessage(`<p>已在新标签页打开「${tab.title}」，对话继续保留。</p>`);
  return tab;
}

function openPaperPicker() {
  const currentId = getBaseTopicId(getActiveTab()?.topicId);
  if (isWorkbook) {
    const nextId = ["t9", "t7", "t19"].find(id => id !== currentId) || "t9";
    openTab(nextId);
    return;
  }
  const nextId = ["t14", "t25", "t2"].find(id => id !== currentId) || "t14";
  openTab(nextId);
}

function pushUserMessage(text) {
  workspace.messages.push({ role: "user", text });
  saveWorkspace();
  renderChat();
}

function pushAssistantMessage(html) {
  workspace.messages.push({ role: "assistant", html });
  saveWorkspace();
  renderChat();
}

function showTyping() {
  const thread = document.querySelector("#aiChatThread");
  const node = document.createElement("article");
  node.className = "chat-message assistant typing";
  node.innerHTML = `
    <div class="chat-author"><span class="chat-author-avatar"><i class="ri-sparkling-2-fill"></i></span><span>飞象题库AI</span></div>
    <div class="chat-bubble"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></div>`;
  thread.appendChild(node);
  thread.scrollTop = thread.scrollHeight;
  return node;
}

function selectedNums(tab) {
  return tab.selectedQuestionIds
    .map(id => tab.questions.find(q => q.id === id)?.num)
    .filter(Boolean);
}

function runStructuredAction(actionKey) {
  const tab = getActiveTab();
  const action = structuredActions[actionKey];
  if (!action) return;
  const nums = selectedNums(tab);
  handleAiCommand(action.build(nums), actionKey);
}

function applyModification(tab, qId, patch, diffItems) {
  tab.modifiedQuestions[qId] = { ...tab.questions.find(q => q.id === qId), ...tab.modifiedQuestions[qId], ...patch };
  saveWorkspace();
  renderQuestionCards();
  return diffItems;
}

function handleAiCommand(text, actionKey = "") {
  const tab = getActiveTab();
  const normalized = text.trim();
  if (!normalized) return;

  pushUserMessage(normalized);
  const typing = showTyping();
  const targetMatch = normalized.match(/第?\s*(\d+)\s*题/);
  const targetIds = tab.selectedQuestionIds.length
    ? [...tab.selectedQuestionIds]
    : (targetMatch ? [tab.questions.find(q => String(q.num) === targetMatch[1])?.id].filter(Boolean) : []);

  setTimeout(() => {
    typing.remove();
    const nums = targetIds.map(id => tab.questions.find(q => q.id === id)?.num).filter(Boolean);
    const numLabel = nums.length ? `第 ${nums.join("、")} 题` : "整卷";

    if (/打开|换卷|福田|罗湖|南山/.test(normalized) && /打开|换|查看|福田|罗湖|南山/.test(normalized)) {
      const topicId = /福田/.test(normalized) ? "t14" : /罗湖/.test(normalized) ? "t25" : /南山/.test(normalized) ? "t2" : "t14";
      openTab(topicId);
      return;
    }

    if (/删/.test(normalized) || actionKey === "delete") {
      const ids = targetIds.length ? targetIds : [tab.questions.find(q => q.num === 3)?.id].filter(Boolean);
      ids.forEach(id => { if (!tab.removedQuestionIds.includes(id)) tab.removedQuestionIds.push(id); });
      pushAssistantMessage(`<p>已删除 ${ids.length ? `第 ${ids.map(id => tab.questions.find(q => q.id === id)?.num).join("、")} 题` : "指定题目"}。</p>${diffBlock("删题完成", ids.map(id => `移除第 ${tab.questions.find(q => q.id === id)?.num} 题（${tab.questions.find(q => q.id === id)?.type}）`))}`);
      saveWorkspace();
      renderQuestionCards();
      return;
    }

    if (/加题|增加|新增/.test(normalized) || actionKey === "add") {
      const newNum = tab.questions.length + 1;
      tab.questions.push({
        id:`new-${Date.now()}`, num:newNum, section:"一、单项选择题", type:"选择题", difficulty:"中等",
        knowledge:"有理数运算", stem:"（新增）计算：$(-2)+5-(-3)$ 的结果是（　　）。",
        options:["A. 0","B. 4","C. 6","D. 10"], answer:"C", analysis:"按法则计算得 6。"
      });
      pushAssistantMessage(`<p>已新增 1 道选择题。</p>${diffBlock("加题完成", ["在选择题末尾新增 1 道有理数运算题", "难度：中等 · 知识点：有理数运算"])}`);
      saveWorkspace();
      renderQuestionCards();
      return;
    }

    if (/改题型|改成填空|改为填空/.test(normalized) || actionKey === "convert") {
      const id = targetIds[0] || tab.questions[0]?.id;
      const q = tab.questions.find(item => item.id === id);
      if (q) {
        applyModification(tab, id, { type:"填空题", stem: q.stem.replace(/（　　）。?$/, " ______。") }, []);
        pushAssistantMessage(`<p>已将第 ${q.num} 题改为填空题。</p>${diffBlock("改题型", [`第 ${q.num} 题：选择题 → 填空题`, "选项已移除，保留原题干与考点"])}`);
      }
      return;
    }

    if (/降难度/.test(normalized) || actionKey === "lower-difficulty") {
      const ids = targetIds.length ? targetIds : tab.questions.map(q => q.id);
      const diff = ids.map(id => {
        const q = tab.questions.find(item => item.id === id);
        applyModification(tab, id, { difficulty:"较易" }, []);
        return `第 ${q.num} 题：${q.difficulty} → 较易`;
      });
      pushAssistantMessage(`<p>已对 ${numLabel} 降低难度，考点保留。</p>${diffBlock("降难度", diff)}`);
      return;
    }

    if (/换情境|情境/.test(normalized) || actionKey === "change-context") {
      const ids = targetIds.length ? targetIds : [tab.questions[0]?.id].filter(Boolean);
      const diff = ids.map(id => {
        const q = tab.questions.find(item => item.id === id);
        applyModification(tab, id, { stem:`【深圳情境】${q.stem.replace(/^.*?，/, "")}` }, []);
        return `第 ${q.num} 题：题干情境改为深圳本地场景`;
      });
      pushAssistantMessage(`<p>已将 ${numLabel} 改为深圳情境，考点不变。</p>${diffBlock("换情境", diff)}`);
      return;
    }

    if (/课标/.test(normalized) || actionKey === "align-curriculum") {
      pushAssistantMessage(`<p>已检查 ${numLabel} 与七年级上有理数课标对齐情况。</p>${diffBlock("对齐课标", ["考查点覆盖：正负数意义、数轴、有理数运算", "建议：第 6 题可补充数形结合表述"])}`);
      return;
    }

    if (/区风格|对标|风格/.test(normalized) || actionKey === "match-region") {
      pushAssistantMessage(`<p>已将 ${numLabel} 调整为南山区期末命题风格。</p>${diffBlock("对标区风格", ["选择题偏重概念辨析与应用", "解答题增加实际背景描述", "整体难度与区统考偏差 < 8%"])}`);
      return;
    }

    if (/改编|AI改编/.test(normalized) || actionKey === "ai-adapt") {
      tab.questions.forEach(q => {
        if (tab.removedQuestionIds.includes(q.id)) return;
        const stem = tab.modifiedQuestions[q.id]?.stem || q.stem;
        tab.modifiedQuestions[q.id] = {
          ...tab.modifiedQuestions[q.id],
          stem: `【深圳情境】${stem.replace(/^【深圳情境】/, "")}`
        };
      });
      saveWorkspace();
      renderQuestionCards();
      pushAssistantMessage(`<p>已完成整卷 AI 改编，考点保持不变。</p>${diffBlock("AI 改编试卷", ["情境统一为深圳本地场景", "题型与题量不变", "难度整体维持中等"])}`);
      return;
    }

    if (/平行组卷|平行卷/.test(normalized) || actionKey === "parallel") {
      pushAssistantMessage(`<p>正在基于当前试卷生成平行组卷…</p>${diffBlock("平行组卷", ["考点结构：与母卷一致", "题干表述：重新命制", "难度偏差：±5% 以内", "预计生成时间：约 30 秒（Demo）"])}`);
      showToast("正在生成平行组卷…");
      return;
    }

    if (/试卷分析|分析本卷|考点分布/.test(normalized) || actionKey === "paper-analysis") {
      pushAssistantMessage(buildPaperAnalysisHtml(tab));
      return;
    }

    pushAssistantMessage(`<p>收到：「${escapeHtml(normalized)}」</p><p>你可以先选中题目，再用上方按钮，或直接输入指令。</p>`);
    saveWorkspace();
  }, 650);
}

function deleteQuestionById(qId) {
  const tab = getActiveTab();
  if (!tab) return;
  const q = tab.questions.find(item => item.id === qId);
  if (!q || tab.removedQuestionIds.includes(qId)) return;
  tab.removedQuestionIds.push(qId);
  tab.selectedQuestionIds = tab.selectedQuestionIds.filter(id => id !== qId);
  saveWorkspace();
  renderQuestionCards();
  showToast(`已删除第 ${q.num} 题`);
}

function insertQuestionAfter(qId) {
  const tab = getActiveTab();
  if (!tab) return;
  const idx = tab.questions.findIndex(item => item.id === qId);
  if (idx < 0) return;
  const ref = tab.questions[idx];
  const newQ = {
    id: `new-${Date.now()}`,
    num: ref.num + 1,
    section: ref.section,
    type: ref.type,
    difficulty: ref.difficulty || "中等",
    knowledge: ref.knowledge || "待补充",
    minutes: ref.minutes || 2,
    competency: ref.competency || "运算能力",
    badges: [],
    stem: "（新增）请在此补充题目内容。",
    options: ref.type === "选择题" ? ["A. 待补充", "B. 待补充", "C. 待补充", "D. 待补充"] : [],
    answer: "待补充",
    analysis: "待补充"
  };
  tab.questions.splice(idx + 1, 0, newQ);
  tab.questions.forEach((item, i) => { item.num = i + 1; });
  saveWorkspace();
  renderQuestionCards();
  showToast(`已在第 ${ref.num} 题后新增加题`);
}

function bindQuestionCardEvents() {
  document.querySelectorAll(".question-item").forEach(card => {
    card.addEventListener("click", event => {
      if (event.target.closest("[data-card-action]")) return;
      toggleQuestionSelection(card.dataset.q);
    });
  });

  document.querySelectorAll("[data-card-action]").forEach(button => {
    button.addEventListener("click", event => {
      event.stopPropagation();
      const qId = button.dataset.q;
      const action = button.dataset.cardAction;
      const q = getActiveTab()?.questions.find(item => item.id === qId);
      if (action === "chat") {
        toggleQuestionSelection(qId, true);
        showToast(`第 ${q?.num} 题已加入对话`);
      }
      if (action === "add-after") insertQuestionAfter(qId);
      if (action === "delete") deleteQuestionById(qId);
      if (action === "fix") showToast(`已记录第 ${q?.num} 题纠错反馈`);
      if (action === "favorite") showToast(`已收藏第 ${q?.num} 题`);
      if (action === "similar") showToast(`正在查找第 ${q?.num} 题的相似题…`);
      if (action === "analysis") {
        toggleQuestionSelection(qId, true);
        pushAssistantMessage(`<p>第 ${q.num} 题解析：</p><p>${escapeHtml(q.analysis)}</p>`);
      }
    });
  });
}

function renderAll() {
  renderChat();
  renderQuestionCards();
  renderTabs();
  const favBtn = document.querySelector("#favoritePaper");
  if (favBtn && workspace.paperFavorited) {
    favBtn.classList.add("saved");
    favBtn.innerHTML = favoriteResourceLabel(true, getActiveTab());
  }
  syncPageChromeForTab(getActiveTab());
  const ansBtn = document.querySelector("#toggleShowAnswer");
  if (ansBtn && workspace.showAnswers) {
    ansBtn.innerHTML = '<i class="ri-eye-off-line"></i><span>隐藏答案</span>';
  }
}

function bindAiPanelControls() {
  const workspace = document.querySelector("#aiWorkspace");
  const panel = document.querySelector("#aiChatPanel");
  const collapseBtn = document.querySelector("#collapseAiPanel");
  const minimizeBtn = document.querySelector("#minimizeAiPanel");
  const restoreBtn = document.querySelector("#restoreAiPanel");
  const expandBtn = document.querySelector("#aiPanelExpand");
  const topbarExpandBtn = document.querySelector("#topbarExpandAi");
  const floatingBar = document.querySelector("#aiFloatingBar");

  const setMinimizeIcon = minimized => {
    if (!minimizeBtn) return;
    minimizeBtn.title = minimized ? "还原" : "缩小到左下角";
    minimizeBtn.setAttribute("aria-label", minimized ? "还原" : "缩小到左下角");
    const icon = minimizeBtn.querySelector("i");
    if (icon) icon.className = minimized ? "ri-layout-top-2-line" : "ri-picture-in-picture-line";
  };

  const setCollapsed = collapsed => {
    workspace?.classList.toggle("ai-panel-collapsed", collapsed);
    if (topbarExpandBtn) topbarExpandBtn.hidden = !collapsed;
  };

  const setMinimized = minimized => {
    document.body.classList.toggle("ai-composer-minimized", minimized);
    floatingBar?.toggleAttribute("hidden", !minimized);
    setMinimizeIcon(minimized);
    if (minimized) {
      setCollapsed(false);
      if (topbarExpandBtn) topbarExpandBtn.hidden = true;
    }
  };

  const expandPanel = () => {
    setCollapsed(false);
    setMinimized(false);
  };

  workspace?.classList.remove("ai-panel-collapsed");
  setMinimized(false);
  if (topbarExpandBtn) topbarExpandBtn.hidden = true;

  collapseBtn?.addEventListener("click", () => {
    setMinimized(false);
    setCollapsed(true);
  });

  expandBtn?.addEventListener("click", expandPanel);
  topbarExpandBtn?.addEventListener("click", expandPanel);
  restoreBtn?.addEventListener("click", expandPanel);

  panel?.addEventListener("click", event => {
    if (!workspace?.classList.contains("ai-panel-collapsed")) return;
    if (event.target.closest(".ai-panel-expand") || event.target === panel) expandPanel();
  });

  minimizeBtn?.addEventListener("click", () => {
    if (document.body.classList.contains("ai-composer-minimized")) {
      expandPanel();
      return;
    }
    setMinimized(true);
  });
}

function bindEvents() {
  const input = document.querySelector("#aiComposerInput");
  const send = () => {
    const text = input.value.trim();
    if (!text) return;
    input.value = "";
    handleAiCommand(text);
  };

  document.querySelector("#aiSendButton")?.addEventListener("click", send);
  input?.addEventListener("keydown", event => {
    if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); send(); }
  });

  document.querySelectorAll("[data-ai-action]").forEach(button => {
    button.addEventListener("click", () => runStructuredAction(button.dataset.aiAction));
  });

  document.querySelector("#clearSelectedQuestions")?.addEventListener("click", () => {
    const tab = getActiveTab();
    if (!tab) return;
    tab.selectedQuestionIds = [];
    saveWorkspace();
    renderQuestionCards();
  });

  document.querySelector("#toggleShowAnswer")?.addEventListener("click", toggleShowAnswers);

  document.querySelector("#toggleAiQuickMore")?.addEventListener("click", event => {
    const panel = document.querySelector("#aiQuickPanel");
    const extra = document.querySelector("#aiQuickExtra");
    const btn = event.currentTarget;
    const expanded = !panel?.classList.contains("expanded");
    panel?.classList.toggle("expanded", expanded);
    if (extra) extra.hidden = !expanded;
    btn.setAttribute("aria-expanded", String(expanded));
    btn.querySelector("span").textContent = expanded ? "收起" : "更多";
  });

  document.querySelector("#favoritePaper")?.addEventListener("click", event => {
    workspace.paperFavorited = !workspace.paperFavorited;
    saveWorkspace();
    const btn = event.currentTarget;
    btn.classList.toggle("saved", workspace.paperFavorited);
    btn.innerHTML = workspace.paperFavorited
      ? favoriteResourceLabel(true, getActiveTab())
      : favoriteResourceLabel(false, getActiveTab());
    showToast(workspace.paperFavorited ? `已收藏${tabIsWorkbook(getActiveTab()) ? "题单" : "试卷"}` : "已取消收藏");
  });

  document.querySelectorAll("[data-action]").forEach(button => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;
      const tab = getActiveTab();
      if (action === "edit") {
        const ctx = tab.context || contextName;
        const topic = getBaseTopicId(tab.topicId);
        const payload = {
          title: tab.title,
          isQuestionList: Boolean(tab.isQuestionList),
          context: ctx,
          topicId: topic,
          questions: tab.questions
            .filter(q => !tab.removedQuestionIds.includes(q.id))
            .map(q => ({
              id: q.id,
              section: q.section || "题单题目",
              text: q.stem,
              options: q.options || [],
              answer: q.answer,
              path: `初中 / 数学 / ${q.type || "选择题"} / ${q.difficulty || "中等"} / ${q.minutes || 1} 分钟`,
              tags: [q.knowledge].filter(Boolean),
              competency: q.competency || "运算能力",
              explanation: q.analysis || ""
            }))
        };
        try {
          sessionStorage.setItem("feixiang-editor-payload", JSON.stringify(payload));
        } catch {}
        location.href = `./editor.html?topic=${topic}&context=${ctx}&from=ai`;
      }
      if (action === "download") showToast("正在生成可打印文件…");
    });
  });
}

applyPageMode();
ensureInitialTab();
renderAll();
bindEvents();
bindAiPanelControls();
bindDirectoryEvents();
