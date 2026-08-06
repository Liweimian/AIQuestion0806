const topicCatalog = {
  t8: { title:"正数与负数概念巩固题单", focus:"理解实际意义，准确判断", reason:"适合当前教学进度", questions:16, minutes:20, difficulty:"简单", source:"龙岗区教研精选", usage:762 },
  t9: { title:"有理数运算基础过关配套题单", focus:"贴近教材知识链与能力层级", reason:"来自你常用的训练系列", questions:20, minutes:25, difficulty:"中等", source:"本地能力过关系列", usage:1143 },
  t15: { title:"坂田片区课堂小测精选题单", focus:"课堂检测，及时巩固", reason:"本地老师正在使用", questions:12, minutes:15, difficulty:"简单", source:"黄老师 · 坂田实验学校", usage:512, teacher:"黄" },
  t25: { title:"2025 深圳中考数学基础题单", focus:"近年真题中的基础得分点", reason:"深圳真题新整理", questions:20, minutes:30, difficulty:"中等", source:"深圳中考试卷", usage:1458 },
  t31: { title:"代数式实际意义专项题单", focus:"由情境列式并解释代数式", reason:"知识点专项", questions:13, minutes:18, difficulty:"中等", source:"平湖片区教研", usage:692 }
};

const directories = {
  chapter: {
    kicker:"教材目录", title:"人教版 · 七年级上册", summary:"共 6 章 · 326 份同步题单",
    breadcrumb:["人教版七年级上册","第一章 有理数"],
    groups:[
      ["第一章 有理数",["正数和负数","有理数","有理数的加减法","有理数的乘除法","有理数的乘方"]],
      ["第二章 整式的加减",["整式","整式的加减"]],
      ["第三章 一元一次方程",["从算式到方程","解一元一次方程","实际问题与一元一次方程"]],
      ["第四章 几何图形初步",["几何图形","直线、射线、线段","角"]]
    ],
    active:"正数和负数"
  },
  series: {
    kicker:"练习册目录", title:"多维导学案 · 七年级上册", summary:"共 6 章 · 36 课时",
    breadcrumb:["多维导学案","第一章 丰富的图形世界"],
    workbook: true,
    chapters:[
      {
        id:"407962", title:"第一章 丰富的图形世界", expanded:true,
        lessons:[
          { title:"第 1 课时 生活中的立体图形（1）" },
          { title:"第 2 课时 生活中的立体图形（2）" },
          { title:"第 3 课时 从立体图形到平面图形（1）——正方体的展开与折叠" },
          { title:"第 4 课时 从立体图形到平面图形（2）——柱体、锥体的展开与折叠", active:true },
          { title:"第 5 课时 从立体图形到平面图形（3）——截一个几何体" },
          { title:"第 6 课时 从三个方向看物体的形状" }
        ]
      },
      { id:"407963", title:"第二章 有理数及其运算", expanded:false, lessons:[] },
      { id:"407964", title:"第三章 整式及其加减", expanded:false, lessons:[] },
      { id:"407965", title:"第四章 基本平面图形", expanded:false, lessons:[] },
      { id:"407966", title:"第五章 一元一次方程", expanded:false, lessons:[] },
      { id:"407967", title:"第六章 数据的收集与整理", expanded:false, lessons:[] }
    ],
    groups:[
      ["七上 · 有理数",["概念基础过关","运算基础过关","有理数单元检测"]],
      ["七上 · 整式",["整式同步巩固","整式易错专项"]],
      ["七上 · 方程",["解方程基础训练","方程应用检测"]],
      ["阶段检测",["期中基础卷","期末综合卷"]]
    ],
    active:"运算基础过关"
  },
  knowledge: {
    kicker:"知识点目录", title:"数与式 · 专项练习", summary:"5 个模块 · 418 份专项题单",
    breadcrumb:["专项练习","数与式"],
    groups:[
      ["有理数",["正负数意义","数轴与相反数","绝对值","有理数运算"]],
      ["整式",["代数式的意义","合并同类项","去括号"]],
      ["易错类型",["符号判断","计算顺序","分类讨论"]]
    ],
    active:"代数式的意义"
  },
  special: {
    standalone: true,
    breadcrumb:["专项练习","专题训练"]
  },
  paper: {
    standalone: true,
    breadcrumb:["试卷","七年级数学"]
  }
};

const related = [
  { id:"t9", tag:"同步巩固", title:"有理数运算基础过关题单", meta:"20 题", usage:"1,143 位老师使用" },
  { id:"t31", tag:"方法专项", title:"代数式实际意义专项题单", meta:"13 题", usage:"692 位老师使用" },
  { id:"t15", tag:"本地共建", title:"坂田片区课堂小测精选题单", meta:"12 题", usage:"512 位老师使用" },
  { id:"t25", tag:"真题整理", title:"深圳中考数学基础题单", meta:"20 题", usage:"1,458 位老师使用" }
];

const params = new URLSearchParams(location.search);
const topicId = params.get("topic") || "t8";
const contextName = params.get("context") || "chapter";
const catalogTopic = topicCatalog[topicId] || topicCatalog.t8;
const topic = {
  ...catalogTopic,
  title: params.get("title") || catalogTopic.title,
  focus: params.get("focus") || catalogTopic.focus,
  reason: params.get("reason") || catalogTopic.reason,
  questions: Number(params.get("questions") || catalogTopic.questions),
  difficulty: params.get("difficulty") || catalogTopic.difficulty,
  source: params.get("source") || catalogTopic.source,
  usage: Number(params.get("usage") || catalogTopic.usage)
};
const context = directories[contextName] || directories.chapter;

function renderWorkbookDirectory() {
  document.querySelector("#directoryTree").innerHTML = context.chapters.map(chapter => `
    <section class="tree-group workbook-chapter ${chapter.expanded ? "open" : ""}">
      <button type="button" class="chapter-row">
        <i class="ri-arrow-${chapter.expanded ? "down" : "right"}-s-line"></i>
        <span>${chapter.title}</span>
      </button>
      <div class="tree-leaves"${chapter.expanded ? "" : " hidden"}>
        ${chapter.lessons.map(lesson => `
          <button class="tree-lesson ${lesson.active ? "active" : ""}" type="button">
            <span class="lesson-title">${lesson.title}</span>
          </button>`).join("")}
      </div>
    </section>`).join("");
}

function renderDirectory() {
  if (context.standalone) {
    document.querySelector("#breadcrumbContext").textContent = context.breadcrumb[0];
    document.querySelector("#breadcrumbLeaf").textContent = topic.title;
    return;
  }
  document.querySelector("#directoryKicker").textContent = context.kicker;
  document.querySelector("#directoryTitle").textContent = context.title;
  document.querySelector("#directorySummary").textContent = context.summary;
  document.querySelector("#breadcrumbContext").textContent = context.breadcrumb[0];
  document.querySelector("#breadcrumbLeaf").textContent = context.breadcrumb[1];
  if (context.workbook) {
    renderWorkbookDirectory();
    return;
  }
  document.querySelector("#directoryTree").innerHTML = context.groups.map(([group, leaves], groupIndex) => `
    <section class="tree-group">
      <button type="button"><i class="ri-arrow-${groupIndex === 0 ? "down" : "right"}-s-line"></i><span>${group}</span></button>
      <div class="tree-leaves">
        ${leaves.map(leaf => `<button class="tree-leaf ${leaf === context.active ? "active" : ""}" type="button">${leaf}</button>`).join("")}
      </div>
    </section>`).join("");
}

function renderTopic() {
  document.title = `${topic.title} · 飞象 AI 题库`;
  document.querySelector("#topicReason").textContent = topic.reason;
  document.querySelector("#topicTitle").textContent = topic.title;
  document.querySelector("#paperTitle").textContent = topic.title;
  document.querySelector("#topicFocus").textContent = topic.focus;
  document.querySelector("#questionCount").textContent = topic.questions;
  document.querySelector("#topicDifficulty").textContent = topic.difficulty;
  document.querySelector("#topicUsage").textContent = topic.usage.toLocaleString();
  document.querySelector("#topicSource").textContent = topic.source;
  if (topic.teacher) {
    document.querySelector("#sourceAvatar").textContent = topic.teacher;
    document.querySelector("#sourceDescription").textContent = "老师贡献 · 学校与身份已认证 · 支持调整后使用";
  }
}

function renderRecommendations() {
  document.querySelector("#recommendationList").innerHTML = related.map((item, index) => `
    <button class="recommendation-card ${item.id === topicId ? "current" : ""}" data-related="${item.id}" type="button">
      <span class="recommendation-index">${String(index + 1).padStart(2, "0")}</span>
      <span>
        <h3>${item.title}</h3>
        <p>${item.tag} · ${item.meta}</p>
        <strong>${item.usage}</strong>
      </span>
    </button>`).join("");
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1700);
}

const recommendationPanel = document.querySelector(".recommendation-panel");
const directoryPanel = document.querySelector("#directoryPanel");
const directoryMask = document.querySelector("#directoryMask");
const detailShell = document.querySelector(".detail-shell");
const directoryToggle = document.querySelector("#directoryToggle");

function setDirectoryOpen(open, mobile = false) {
  if (!directoryPanel) return;
  directoryPanel.classList.toggle("open", open);
  detailShell.classList.toggle("directory-open", open && !mobile);
  directoryToggle?.setAttribute("aria-expanded", String(open));
  directoryMask.hidden = !open || !mobile;
}

function applyPageLayout() {
  if (context.workbook) {
    document.body.classList.add("workbook-detail");
    detailShell?.classList.add("workbook-mode");
    if (recommendationPanel) recommendationPanel.hidden = true;
    setDirectoryOpen(true);
    return;
  }
  if (context.standalone) {
    document.body.classList.add("standalone-detail");
    detailShell?.classList.add("standalone-mode");
    if (directoryPanel) directoryPanel.hidden = true;
    if (recommendationPanel) recommendationPanel.hidden = true;
    document.querySelector("#mobileDirectory").hidden = true;
  }
}

renderDirectory();
renderTopic();
if (!context.standalone) renderRecommendations();
applyPageLayout();

document.querySelectorAll(".tree-group > button").forEach(button => button.addEventListener("click", () => {
  const icon = button.querySelector("i");
  const leaves = button.nextElementSibling;
  if (!leaves) return;
  const open = leaves.hidden;
  leaves.hidden = !open;
  button.closest(".tree-group")?.classList.toggle("open", open);
  if (icon) icon.className = open ? "ri-arrow-down-s-line" : "ri-arrow-right-s-line";
}));

document.querySelectorAll(".tree-leaf, .tree-lesson").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".tree-leaf, .tree-lesson").forEach(item => item.classList.toggle("active", item === button));
  showToast(`已切换到「${button.querySelector(".lesson-title")?.textContent.trim() || button.textContent.trim()}」的题单`);
}));

document.querySelector("#favoriteTopic").addEventListener("click", event => {
  const button = event.currentTarget;
  button.classList.toggle("saved");
  button.innerHTML = button.classList.contains("saved")
    ? '<i class="ri-bookmark-fill"></i><span>已收藏</span>'
    : '<i class="ri-bookmark-line"></i><span>收藏</span>';
});

document.querySelectorAll("[data-action]").forEach(button => button.addEventListener("click", () => {
  if (button.dataset.action === "edit") {
    location.href = `./editor.html?topic=${topicId}&context=${contextName}`;
    return;
  }
  const messages = { use:"已加入待布置，可继续选择班级", edit:"正在进入题单编辑", download:"正在生成可打印文件" };
  showToast(messages[button.dataset.action]);
}));

document.querySelectorAll("[data-neighbor]").forEach(button => button.addEventListener("click", () => showToast("已切换到相邻题单")));
document.querySelectorAll("[data-related]").forEach(button => button.addEventListener("click", () => {
  location.href = `./detail.html?topic=${button.dataset.related}&context=${contextName}`;
}));

directoryToggle?.addEventListener("click", () => {
  setDirectoryOpen(!directoryPanel.classList.contains("open"));
});
document.querySelector("#mobileDirectory")?.addEventListener("click", () => {
  setDirectoryOpen(true, true);
});
directoryMask.addEventListener("click", () => {
  setDirectoryOpen(false, true);
});
