const topics = [
  { id:"t1", title:"龙岗易错二练：有理数符号与运算", focus:"错因诊断、针对变式、二次过关", reason:"龙岗易错二练", questions:15, minutes:20, difficulty:"中等", source:"龙岗区易错专题", usage:386, tag:"special", tone:"sage" },
  { id:"t2", title:"2026 深圳南山区初一上期末数学真题", focus:"本地命题风格与阶段难度参考", reason:"深圳区级真题", highlight:"精品", questions:22, minutes:40, difficulty:"中等", source:"南山区初一上期末真题", usage:1206, tag:"paper", tone:"cream" },
  { id:"t3", title:"深圳情境数学：代数式建模专项题单", focus:"深圳真实情境改编，考点不变、题面更新", reason:"深圳情境题", highlight:"名师推荐", questions:12, minutes:25, difficulty:"中等", source:"深圳情境题专题", usage:842, tag:"special", tone:"lilac" },
  { id:"t4", title:"2024—2026 深圳期末真题汇编：轴对称", focus:"把分散真题整理成可直接使用的课内专题", reason:"真题汇编", highlight:"精品", questions:24, minutes:35, difficulty:"较难", source:"深圳初一下期末真题", usage:1532, tag:"paper", tone:"mist" },
  { id:"t5", title:"2025—2026 深圳期末真题汇编：全等三角形", focus:"按考点重组近两年深圳区级真题", reason:"真题汇编", highlight:"精品", questions:18, minutes:30, difficulty:"中等", source:"深圳初一下期末真题", usage:613, tag:"special", tone:"sage" },
  { id:"t6", title:"初一期末高频易错周测题单", focus:"名校周测，适合分层选题与命题参考", reason:"名校资源", highlight:"精品", questions:18, minutes:30, difficulty:"较难", source:"深圳外国语学校龙岗学校", usage:1089, tag:"paper", tone:"cream" },
  { id:"t7", title:"整式运算高频易错巩固题单", focus:"整式运算常见错误归纳", reason:"热门系列", questions:14, minutes:20, difficulty:"中等", source:"全品学练考", usage:522, tag:"workbook", tone:"lilac" },
  { id:"t8", title:"七上正负数与数轴：概念理解过关题单", focus:"理解实际意义，准确判断", reason:"七上第1章", questions:16, minutes:20, difficulty:"简单", source:"区教研精选", usage:762, tag:"chapter", tone:"sage" },
  { id:"t9", title:"有理数运算基础过关与易错自测", focus:"贴近教材知识链与能力层级", reason:"本地教辅", highlight:"精品", questions:20, minutes:25, difficulty:"中等", source:"多维导学案", usage:1143, tag:"workbook", tone:"cream" },
  { id:"t10", title:"整式加减高频易错：去括号与合并同类项", focus:"合并同类项与化简", reason:"七上第3章", questions:18, minutes:20, difficulty:"简单", source:"龙岗区教研室", usage:908, tag:"chapter", tone:"lilac" },
  { id:"t11", title:"一元一次方程应用：审题建模专项", focus:"顺序解题方法与实际应用", reason:"本校老师共建", questions:22, minutes:25, difficulty:"中等", source:"启航实验学校数学组", author:{ name:"李老师", school:"启航实验学校", tone:"amber" }, usage:1221, tag:"school", tone:"mist" },
  { id:"t12", title:"几何初步：图形语言与概念辨析", focus:"直线、射线和线段", reason:"七上第4章", questions:14, minutes:15, difficulty:"简单", source:"龙岗区实验学校", author:{ name:"赵老师", school:"龙岗区实验学校", tone:"mint" }, usage:669, tag:"school", tone:"sage" },
  { id:"t13", title:"有理数混合运算：方法进阶与提速", focus:"综合运算与技巧提升", reason:"七上第5章", questions:20, minutes:25, difficulty:"中等", source:"区教研精选", usage:1015, tag:"chapter", tone:"cream" },
  { id:"t14", title:"2026 深圳福田区初一下期中数学真题", focus:"深圳真实阶段性考试，适合校准教学进度与难度", reason:"深圳区级真题", highlight:"最新", questions:20, minutes:35, difficulty:"较难", source:"福田区初一下期中真题", usage:984, tag:"paper", tone:"sage" },
  { id:"t15", title:"坂田片区七上课堂小测：整式加减", focus:"课堂检测，及时巩固", reason:"课堂小测", highlight:"最新", questions:12, minutes:15, difficulty:"简单", source:"坂田片区教研", author:{ name:"黄老师", school:"坂田实验学校", tone:"amber" }, usage:512, tag:"chapter", tone:"cream" },
  { id:"t16", title:"月考前查漏补缺：七上核心考点精选", focus:"月考精选，重点突破", reason:"月考精选", questions:18, minutes:25, difficulty:"中等", source:"龙岗区实验学校", author:{ name:"赵老师", school:"龙岗区实验学校", tone:"mint" }, usage:1266, tag:"school", tone:"lilac" },
  { id:"t17", title:"七上易错题二次过关：概念到变式", focus:"教研共建，优质共享", reason:"教研共建", highlight:"最新", questions:16, minutes:20, difficulty:"中等", source:"平湖片区教研", author:{ name:"刘老师", school:"平湖外国语学校", tone:"violet" }, usage:698, tag:"school", tone:"mist" },
  { id:"t18", title:"深圳中考衔接：数与式思维进阶题单", focus:"教材变式、探究题与优生挑战", reason:"巩固复习", highlight:"名师推荐", questions:22, minutes:35, difficulty:"较难", source:"深圳中考专题", usage:1374, tag:"special", tone:"sage" },
  { id:"t19", title:"课内基础到探究题：进阶提升题单", focus:"从课内基础过渡到探究与培优", reason:"提优配套", questions:18, minutes:30, difficulty:"中等", source:"常用提优训练系列", usage:831, tag:"workbook", tone:"cream" },
  { id:"t20", title:"典型错法拆解：有理数与方程方法点拨", focus:"归纳典型错法并配套针对变式", reason:"老师收藏较多", questions:16, minutes:25, difficulty:"中等", source:"易错方法系列", usage:742, tag:"workbook", tone:"lilac" },
  { id:"t21", title:"期中错题重组：三个班高频失分题", focus:"基于三个班真实易错题", reason:"本校老师共建", questions:15, minutes:22, difficulty:"中等", source:"启航实验学校数学组", author:{ name:"陈老师", school:"启航实验学校", tone:"blue" }, usage:96, tag:"school", tone:"mist" },
  { id:"t22", title:"有理数课堂诊断：概念掌握过关题单", focus:"当堂检测概念掌握情况", reason:"课堂小测", questions:8, minutes:5, difficulty:"简单", source:"龙城初级中学", author:{ name:"周老师", school:"龙城初级中学", tone:"rose" }, usage:728, tag:"chapter", tone:"sage" },
  { id:"t23", title:"一元一次方程移项与符号易错专练", focus:"集中突破移项与符号错误", reason:"高频易错", questions:14, minutes:18, difficulty:"中等", source:"区教研精选", usage:1186, tag:"chapter", tone:"cream" },
  { id:"t24", title:"线段与角：易混概念辨析与规范表达", focus:"易混概念判断与规范表达", reason:"概念辨析", questions:12, minutes:15, difficulty:"简单", source:"龙岗区实验学校", usage:635, tag:"chapter", tone:"lilac" },
  { id:"t25", title:"2026 深圳罗湖区初一下期末数学真题", focus:"深圳真实阶段性考试，反映本地命题风格", reason:"深圳区级真题", highlight:"最新", questions:20, minutes:30, difficulty:"中等", source:"罗湖区初一下期末真题", usage:1458, tag:"paper", tone:"mist" },
  { id:"t26", title:"整式运算同步精练：基础到综合", focus:"同步巩固整式化简方法", reason:"热门系列", questions:18, minutes:25, difficulty:"中等", source:"原创新课堂", usage:884, tag:"workbook", tone:"sage" },
  { id:"t27", title:"期末选择题高频考法：审题与快速提分", focus:"高频选择题与排除方法", reason:"本周热门", questions:16, minutes:20, difficulty:"中等", source:"龙岗区教研室", usage:1328, tag:"paper", tone:"cream" },
  { id:"t28", title:"数学阅读理解：真实情境信息提取", focus:"从真实情境中提取数量关系", reason:"情境专项", questions:10, minutes:22, difficulty:"较难", source:"区教研精选", usage:576, tag:"special", tone:"lilac" },
  { id:"t29", title:"周末分层作业 A：基础巩固与补弱", focus:"面向基础薄弱学生巩固", reason:"基础巩固", questions:15, minutes:20, difficulty:"简单", source:"启航实验学校数学组", author:{ name:"陈老师", school:"启航实验学校", tone:"blue" }, usage:168, tag:"school", tone:"mist" },
  { id:"t30", title:"周末分层作业 B：综合应用与提升", focus:"基础巩固后的综合应用", reason:"综合应用", questions:18, minutes:28, difficulty:"中等", source:"启航实验学校数学组", author:{ name:"陈老师", school:"启航实验学校", tone:"blue" }, usage:152, tag:"school", tone:"sage" },
  { id:"t31", title:"代数式建模：真实情境列式专项", focus:"由情境列式并解释代数式", reason:"方法专项", questions:13, minutes:18, difficulty:"中等", source:"平湖片区教研", usage:692, tag:"special", tone:"cream" },
  { id:"t32", title:"几何语言：符号转换与规范书写专项", focus:"训练符号语言与文字表达", reason:"规范表达专项", questions:12, minutes:20, difficulty:"中等", source:"龙岗区教研室", usage:804, tag:"special", tone:"lilac" },
  { id:"t33", title:"期中压轴题：关键步骤分层拆解", focus:"按关键步骤拆解综合题", reason:"名校共建", questions:9, minutes:30, difficulty:"较难", source:"龙岗区四中联考", usage:1036, tag:"paper", tone:"mist" },
  { id:"t34", title:"一元一次方程：典型题型与变式突破", focus:"典型方程题型与变式训练", reason:"热门系列", questions:20, minutes:30, difficulty:"中等", source:"多维导学案", usage:916, tag:"workbook", tone:"sage" },
  { id:"t35", title:"月考前查漏补缺：本月高频易错", focus:"快速覆盖本月教学重点", reason:"查漏补缺", highlight:"最新", questions:14, minutes:20, difficulty:"中等", source:"坂田片区教研", usage:1274, tag:"chapter", tone:"cream" },
  { id:"t36", title:"七上有理数方法：公开课配套小测", focus:"从概念辨析到方法迁移的课堂练习", reason:"名校公开交流", highlight:"精品", questions:12, minutes:18, difficulty:"中等", source:"深圳中学龙岗学校", usage:1682, tag:"school", tone:"sage" },
  { id:"t37", title:"期中压轴题：关键步骤与分层选题", focus:"按关键步骤拆分综合题，适合分层使用", reason:"名校教研共建", highlight:"精品", questions:10, minutes:28, difficulty:"较难", source:"龙岗区实验学校", usage:1436, tag:"school", tone:"cream" },
  { id:"t38", title:"数学阅读与真实情境建模题单", focus:"从真实语境中提取数量关系与条件", reason:"名校公开交流", highlight:"精品", questions:14, minutes:25, difficulty:"中等", source:"龙岗区外国语学校", usage:1298, tag:"school", tone:"lilac" },
  { id:"t39", title:"几何语言规范与推理进阶题单", focus:"强化图形语言、推理步骤与规范书写", reason:"名校教研共建", highlight:"精品", questions:16, minutes:24, difficulty:"中等", source:"龙城初级中学", usage:1184, tag:"school", tone:"mist" },
  { id:"t40", title:"有理数概念：数轴、相反数与绝对值过关", focus:"概念辨析、数轴表示与相反数", reason:"同步巩固", questions:16, minutes:20, difficulty:"简单", source:"多维导学案", usage:968, tag:"workbook", tone:"sage" },
  { id:"t41", title:"有理数单元检测：运算、应用与探究", focus:"覆盖运算法则、混合运算与实际应用", reason:"单元检测", highlight:"精品", questions:22, minutes:35, difficulty:"中等", source:"多维导学案", usage:1046, tag:"workbook", tone:"mist" },
  { id:"t42", title:"整式加减课时精练：去括号与合并同类项", focus:"合并同类项与去括号课时训练", reason:"热门系列", questions:14, minutes:18, difficulty:"简单", source:"全品学练考", usage:786, tag:"workbook", tone:"cream" },
  { id:"t43", title:"一元一次方程同步检测：解法与应用", focus:"从解方程到实际问题的阶段检测", reason:"热门系列", questions:20, minutes:30, difficulty:"中等", source:"全品学练考", usage:852, tag:"workbook", tone:"lilac" },
  { id:"t44", title:"有理数规律探究与思维进阶", focus:"从基础运算过渡到规律探究", reason:"能力提高", questions:15, minutes:28, difficulty:"较难", source:"常用提优训练系列", usage:734, tag:"workbook", tone:"sage" },
  { id:"t45", title:"方程应用培优：复杂数量关系建模", focus:"复杂数量关系与多步骤建模", reason:"培优专题", questions:12, minutes:30, difficulty:"较难", source:"常用提优训练系列", usage:698, tag:"workbook", tone:"cream" },
  { id:"t46", title:"有理数符号易错二练：错因到变式", focus:"定位符号错误并完成针对变式", reason:"易错二练", questions:16, minutes:22, difficulty:"中等", source:"易错方法系列", usage:824, tag:"workbook", tone:"lilac" },
  { id:"t47", title:"方程移项、去分母与检验错法点拨", focus:"集中解决移项、去分母与检验问题", reason:"错法点拨", questions:14, minutes:24, difficulty:"中等", source:"易错方法系列", usage:778, tag:"workbook", tone:"mist" },
  { id:"t48", title:"整式加减同步方法：易错点与变式", focus:"围绕课时重点进行方法归纳", reason:"热门系列", questions:15, minutes:20, difficulty:"中等", source:"原创新课堂", usage:812, tag:"workbook", tone:"sage" },
  { id:"t49", title:"几何初步同步方法：图形语言与推理", focus:"直线、射线、线段与角的规范表达", reason:"热门系列", questions:16, minutes:22, difficulty:"中等", source:"原创新课堂", usage:744, tag:"workbook", tone:"cream" },
  { id:"t50", title:"一元一次方程题型突破：解法到应用", focus:"分类掌握方程典型题型和变式", reason:"热门系列", questions:18, minutes:28, difficulty:"中等", source:"多维导学案", usage:936, tag:"workbook", tone:"lilac" },
  { id:"t51", title:"几何语言专题：读图、转换与规范表达", focus:"训练几何语言转换与推理书写", reason:"热门系列", questions:14, minutes:24, difficulty:"中等", source:"多维导学案", usage:868, tag:"workbook", tone:"mist" }
];

const byId = Object.fromEntries(topics.map(topic => [topic.id, topic]));
const toneMap = { sage:"var(--sage)", cream:"var(--cream)", lilac:"var(--lilac)", mist:"var(--mist)" };
const aiPlaceholder = "描述你想要的题单，例如：七上有理数易错题，15 题，中等难度";
let currentFilter = "all";
let currentQuery = "";
let aiDockObserver = null;
let aiModalOpen = false;
let hasUserScrolled = false;
let filterManuallyExpanded = false;
const feedFilterState = { type:"all", difficulty:"all", source:"all", feature:"all", sort:"default" };

const contentFeed = document.querySelector("#contentFeed");
const emptyState = document.querySelector("#emptyState");
const aiMask = document.querySelector("#aiMask");
const toast = document.querySelector("#toast");

function primaryTag(topic) {
  if (topic.highlight) return topic.highlight;
  if (topic.title.includes("真题")) return "真题汇编";
  if (topic.title.includes("易错")) return "高频易错";
  if (topic.author?.school && /深圳中学|龙岗区实验|龙岗区外国语|龙城初级|深圳外国语/.test(topic.author.school)) return "名校资源";
  if (topic.tag === "school") return "本地精选";
  if (topic.tag === "workbook") return "系列题单";
  if (topic.tag === "special") return "培优突破";
  return "基础巩固";
}

function topicTags(topic) {
  const tags = [];
  if (/期中/.test(topic.title)) tags.push("期中");
  else if (/期末/.test(topic.title)) tags.push("期末");
  else if (/月考/.test(topic.title)) tags.push("月考");
  if (/真题/.test(topic.title) || topic.tag === "paper") tags.push("真题");
  if (/压轴|提高|培优/.test(`${topic.title} ${topic.focus}`)) tags.push("压轴题");
  if (/教研|学校|校/.test(`${topic.source} ${topic.author?.school || ""}`)) tags.push("飞象教研");
  if (!tags.length) tags.push(topic.tag === "special" ? "专题练习" : "同步练习");
  return [...new Set(tags)].slice(0, 3);
}

function topicBrief(topic) {
  const briefs = {
    t36:"从概念辨析到方法迁移，适合公开课后的课堂巩固。",
    t37:"按关键步骤拆分综合题，方便课堂分层选题。",
    t4:"按考点重组深圳重点校真题，直观覆盖几何核心概念。",
    t18:"覆盖数与式多个单元，适合阶段复习与综合提升。"
  };
  return briefs[topic.id] || `${topic.focus}，共 ${topic.questions} 题，适合直接选用。`;
}

function isNamedExamPaper(topic) {
  return /期中|期末/.test(topic.title) && /真题|试卷|20\d{2}|学年/.test(topic.title);
}

function shouldOmitPaperIntro(topic, context = "feed") {
  if (context === "paper") return true;
  return isNamedExamPaper(topic);
}

function sourceMarkup(topic) {
  if (topic.author) {
    return `<div class="teacher-source"><span class="teacher-avatar ${topic.author.tone || ""}">${topic.author.name.slice(0, 1)}</span><span><b>${topic.author.name}</b><small>${topic.author.school}</small></span></div>`;
  }
  const icon = topic.tag === "workbook" ? "ri-book-2-line" : topic.tag === "paper" ? "ri-file-paper-2-line" : "ri-community-line";
  return `<div class="resource-source"><span class="source-type-icon"><i class="${icon}"></i></span><span><b>${topic.source}</b></span></div>`;
}

function topicCard(topic, options = "default") {
  const variant = typeof options === "string" ? options : options.variant || "default";
  const context = typeof options === "string" ? "feed" : options.context || "feed";
  const omitIntro = shouldOmitPaperIntro(topic, context);
  const examClass = omitIntro ? " exam-paper-card" : "";
  return `
    <article class="topic-card${variant === "featured" ? " featured-topic-card" : ""}${examClass}" data-topic="${topic.id}" data-source-name="${topic.source}" tabindex="0" role="button" aria-label="查看${topic.title}" style="--tone:${toneMap[topic.tone] || "var(--sage)"}">
      <div class="card-cover">
        <div class="card-signals"><span class="card-reason">${primaryTag(topic)}</span><span class="card-tag-list">${topicTags(topic).map(tag => `<em>${tag}</em>`).join("")}</span></div>
        <h3>${topic.title}</h3>
        ${omitIntro ? "" : `<p class="topic-brief">${topicBrief(topic)}</p>`}
        ${variant === "featured" ? `<p class="featured-topic-focus">${topic.focus}</p>` : ""}
      </div>
      <div class="card-body">
        <div class="card-meta"><span>${topic.questions} 题</span>${omitIntro ? "" : `<span>${topic.difficulty}</span>`}</div>
        <div class="card-footer">
          ${sourceMarkup(topic)}
          <span class="card-usage">${topic.usage.toLocaleString()} 人使用</span>
          <button class="bookmark" data-bookmark aria-label="收藏题单"><i class="ri-bookmark-line"></i></button>
        </div>
      </div>
    </article>`;
}

function homepageSeriesSection() {
  return `
    <section class="resource-showcase" aria-label="备课资源推荐">
      <div class="resource-showcase-grid">
        <article class="resource-lane sync-lane">
          <button class="book-resource" data-topic="t9">
            <span class="sync-resource-mark">
              <span class="sync-mark-top"><i class="ri-layout-4-line"></i><em>01</em></span>
              <b>七年级上册</b>
              <strong>同步练习资源</strong>
              <small>当前章节 · 有理数</small>
              <span class="sync-progress"><i></i></span>
            </span>
            <span class="book-detail">
              <span class="book-detail-heading"><span><b>有理数同步精练</b></span></span>
              <span class="book-topic-list">
                <span><i>01</i><span><b>有理数运算基础过关与易错自测</b><small>20 题 · 中等</small></span><strong>1,143 人使用</strong></span>
                <span><i>02</i><span><b>有理数概念：数轴、相反数与绝对值过关</b><small>16 题 · 基础</small></span><strong>968 人使用</strong></span>
                <span><i>03</i><span><b>有理数单元检测：运算、应用与探究</b><small>22 题 · 中等</small></span><strong>1,046 人使用</strong></span>
              </span>
            </span>
          </button>
          <div class="classification-resources">
            <div class="classification-heading"><span class="resource-type-tag">真题分类汇编</span></div>
            <button class="resource-list-item" data-topic="t4"><span><b>2023—2025 深圳重点校初一（上）期中数学汇编：直线、射线、线段</b><small>图形初步认识 · 24 题</small></span><i class="ri-arrow-right-s-line"></i></button>
            <button class="resource-list-item" data-topic="t23"><span><b>2023—2025 深圳各区初一（上）期末数学汇编：一元一次方程</b><small>高频考点 · 26 题</small></span><i class="ri-arrow-right-s-line"></i></button>
            <button class="resource-list-item" data-topic="t1"><span><b>2023—2025 深圳各区初一（上）期中数学汇编：有理数运算</b><small>易错题分类 · 28 题</small></span><i class="ri-arrow-right-s-line"></i></button>
            <button class="resource-list-item" data-topic="t10"><span><b>2023—2025 深圳重点校初一（上）期中数学汇编：整式的加减</b><small>核心题型 · 22 题</small></span><i class="ri-arrow-right-s-line"></i></button>
          </div>
          <button class="module-more" data-open-filter="workbook">查看更多同步资源 <i class="ri-arrow-right-s-line"></i></button>
        </article>

        <article class="resource-lane paper-lane">
          <div class="paper-card-grid">
            <article class="paper-feature" data-topic="t2" tabindex="0" role="button" aria-label="查看南山区七年级上期末数学试卷">
              <span class="paper-kicker"><i class="ri-thumb-up-line"></i> 本周首选 · 推荐给你 <em class="exam-tag">期末</em></span>
              <b>2025—2026 学年广东省深圳市南山区七年级（上）期末数学试卷</b>
              <p class="paper-match-reason"><i class="ri-equalizer-2-line" aria-label="推荐依据"></i><span>教学进度一致，题型结构相似，与本校近三次考试难度偏差小于 8%</span></p>
              <footer class="paper-metrics"><span><i class="ri-eye-line"></i>8,642 浏览</span><span><i class="ri-download-line"></i>1,206 下载</span></footer>
            </article>
            <article class="paper-mini-card peer-card" data-topic="t39" tabindex="0" role="button"><div class="mini-card-top"><span><em>同层次校</em><em class="exam-tag">期中</em></span></div><b>2025—2026 学年广东省深圳市龙岗区实验学校七年级（上）期中数学试卷</b><span><small><i class="ri-eye-line"></i>3,286 浏览</small><small><i class="ri-download-line"></i>684 下载</small></span></article>
            <button class="paper-mini-card regional-card" data-topic="t14"><span class="mini-card-top"><em>区统考</em><em class="exam-tag">期中</em></span><b>2025—2026 学年广东省深圳市福田区七年级（上）期中数学试卷</b><span><small><i class="ri-eye-line"></i>5,462 浏览</small><small><i class="ri-download-line"></i>932 下载</small></span></button>
            <button class="paper-mini-card group-card" data-topic="t37"><span class="mini-card-top"><em>集团联考</em><em class="exam-tag">期中</em></span><b>2025—2026 学年广东省深圳市龙华区实验教育集团七年级（上）期中数学试卷</b><span><small><i class="ri-eye-line"></i>4,108 浏览</small><small><i class="ri-download-line"></i>756 下载</small></span></button>
            <button class="paper-mini-card famous-card" data-topic="t36"><span class="mini-card-top"><em>名校试卷</em><em class="exam-tag">期中</em></span><b>2025—2026 学年广东省深圳中学七年级（上）期中数学试卷</b><span><small><i class="ri-eye-line"></i>6,735 浏览</small><small><i class="ri-download-line"></i>1,184 下载</small></span></button>
          </div>
          <button class="module-more" data-open-filter="paper">查看更多试卷 <i class="ri-arrow-right-s-line"></i></button>
          <div class="paper-special-strip">
            <div class="paper-special-grid">
              <button data-topic="t18"><span class="special-card-tags"><em>跨单元专题</em><em>阶段复习</em></span><b>数与式综合：有理数、整式与一元一次方程</b><p>串联三个核心单元，适合期中前整体查漏补缺。</p><small>3 个单元 · 中等—提高 · 22 题</small></button>
              <button data-topic="t3"><span class="special-card-tags"><em>深圳情境题</em><em>建模方法</em></span><b>真实情境中的代数式建模</b><p>用深圳生活情境训练列式、解释和迁移能力。</p><small>情境应用 · 中等 · 12 题</small></button>
              <button data-topic="t32"><span class="special-card-tags"><em>方法专题</em><em>规范表达</em></span><b>几何语言转换与规范表达</b><p>强化读图、符号转换和几何推理书写。</p><small>图形与几何 · 基础—中等 · 12 题</small></button>
            </div>
            <button class="special-more-button" data-open-filter="special">更多专题 <i class="ri-arrow-right-s-line"></i></button>
          </div>
        </article>
      </div>
    </section>`;
}

const feedTopicIds = ["t36","t37","t4","t6","t25","t41","t9","t18","t1","t16","t14","t35","t11","t23","t40","t3","t38","t39","t21","t2","t27","t10","t17","t33","t5","t8","t13","t15","t19","t20","t22","t24","t26","t28","t29","t30","t31","t32","t34","t42","t43","t44","t45","t46","t47","t48","t49","t50","t51"];

function infiniteFeedMarkup() {
  return `
    <section id="squareSection" class="endless-batch" data-square-section>
      <div class="square-filter-collapsed" data-filter-collapsed aria-hidden="false">
        <div class="square-filter-toolbar" data-filter-toolbar>
          <button class="filter-trigger" type="button" data-filter-toggle aria-expanded="false">
            <i class="ri-equalizer-3-line"></i><span>筛选</span><b data-filter-count hidden>0</b><i class="ri-arrow-down-s-line"></i>
          </button>
          <div class="active-filter-chips" data-active-filter-chips></div>
          <div class="sort-control">${filterButton("sort", "default", "推荐", true)}${filterButton("sort", "latest", "最新")}${filterButton("sort", "usage", "使用量")}</div>
        </div>
      </div>
      <div class="square-filter-panel" aria-label="题单广场筛选">
        <div class="square-filter-row"><span>难度</span><div>${filterButton("difficulty", "all", "不限", true)}${filterButton("difficulty", "简单", "基础")}${filterButton("difficulty", "中等", "中等")}${filterButton("difficulty", "较难", "提高")}</div></div>
        <div class="square-filter-row"><span>来源</span><div>${filterButton("source", "all", "全部", true)}${filterButton("source", "local", "本地资源")}${filterButton("source", "famous", "名校资源")}${filterButton("source", "school", "本校共享")}${filterButton("source", "series", "系列题单")}</div></div>
        <div class="square-filter-row"><span>特色</span><div>${filterButton("feature", "all", "全部", true)}${filterButton("feature", "精品", "精品")}${filterButton("feature", "名师推荐", "名师推荐")}${filterButton("feature", "真题汇编", "真题汇编")}${filterButton("feature", "最新", "最新")}</div></div>
        <div class="filter-panel-footer"><span>可组合多个条件筛选题单</span><button type="button" data-filter-reset>重置筛选</button></div>
      </div>
      <div class="flat-resource-grid" data-endless-grid></div>
      <div class="square-empty" data-feed-empty hidden>暂时没有符合全部条件的题单，减少一个筛选条件试试。</div>
    </section>`;
}

function filterButton(key, value, label, active = false) {
  return `<button class="${active ? "active" : ""}" data-feed-key="${key}" data-feed-value="${value}">${label}</button>`;
}

const filterSummaryLabels = {
  type: { all:"全部", sync:"同步练习", special:"专项练习", paper:"试卷" },
  difficulty: { all:"不限", 简单:"基础", 中等:"中等", 较难:"提高" },
  source: { all:"全部", local:"本地资源", famous:"名校资源", school:"本校共享", series:"系列题单" },
  feature: { all:"全部", 精品:"精品", 名师推荐:"名师推荐", 真题汇编:"真题汇编", 最新:"最新" },
  sort: { default:"推荐", usage:"使用量", latest:"最新" }
};

function updateFilterSummary() {
  const section = document.querySelector("[data-square-section]");
  if (!section) return;
  const activeKeys = ["difficulty", "source", "feature"].filter(key => feedFilterState[key] !== "all");
  const chipBox = section.querySelector("[data-active-filter-chips]");
  chipBox.innerHTML = activeKeys.length
    ? activeKeys.map(key => `<button class="active-filter-chip" type="button" data-clear-filter="${key}">${filterSummaryLabels[key][feedFilterState[key]]}<i class="ri-close-line"></i></button>`).join("")
    : "";
  const count = section.querySelector("[data-filter-count]");
  count.hidden = activeKeys.length === 0;
  count.textContent = String(activeKeys.length);
  const sortButton = section.querySelector(`.sort-control [data-feed-key="sort"].active`);
  if (sortButton) sortButton.setAttribute("aria-label", `当前选择：${filterSummaryLabels.sort[feedFilterState.sort]}`);
}

function setSquareFilterCollapsed(collapsed) {
  const section = document.querySelector("[data-square-section]");
  if (!section) return;
  section.classList.toggle("is-filter-collapsed", collapsed);
  const summaryBar = section.querySelector("[data-filter-collapsed]");
  const toggle = section.querySelector("[data-filter-toggle]");
  summaryBar.setAttribute("aria-hidden", "false");
  toggle.setAttribute("aria-expanded", String(!collapsed));
  updateFilterSummary();
}

function homepageFeed() {
  return `${homepageSeriesSection()}${infiniteFeedMarkup()}`;
}

function categoryBrowserView(kind) {
  const config = {
    chapter: { label:"同步练习", navLabel:"教材章节", nav:["正数与负数","有理数及其运算","整式的加减","一元一次方程","图形初步认识"], topics:["t8","t9","t10","t11","t12","t13"], chips:["全部同步", "课时练习", "单元检测", "易错巩固"], selector:"人教版七上" },
    special: { label:"专项练习", navLabel:"知识领域", nav:["数与式","方程与不等式","函数","图形与几何","统计与概率"], topics:["t1","t3","t5","t23","t28","t31","t32"], chips:["全部专项", "易错巩固", "方法突破", "情境应用", "培优提高"], selector:"全部难度" },
    paper: { label:"试卷", navLabel:"考试类型", nav:["期末考试","期中考试","月考","单元测试","中考真题"], topics:["t2","t4","t6","t14","t25","t27","t33"], chips:["本地优先", "使用最多", "真题汇编"], selector:"深圳市 · 七年级数学" }
  }[kind];
  const list = config.topics.map(id => byId[id]).filter(Boolean);
  return `
    <section class="category-detail unified-category-view">
      <div class="resource-browser ${kind}-browser">
        <nav class="resource-tree ${kind === "chapter" ? "chapter-rail" : kind === "special" ? "knowledge-nav" : "paper-filters"}" aria-label="${config.navLabel}">
          ${config.nav.map((label, index) => `<button class="${index === 0 ? "active" : ""}" data-result-title="${label}"><b>${label}</b><small>${[36,82,64,71,48][index] || 24} 份</small></button>`).join("")}
        </nav>
        <div class="resource-browser-content">
          <div class="resource-browser-toolbar"><div class="resource-chip-group">${config.chips.map((chip, index) => `<button class="${index === 0 ? "active" : ""}">${chip}</button>`).join("")}</div><div class="resource-selector-group"><button>${config.selector} <i class="ri-arrow-down-s-line"></i></button></div></div>
          <header class="resource-result-heading"><b>${config.nav[0]}</b><em>${list.length} 份题单</em></header>
          <div class="resource-card-grid result-grid">${list.map(topic => topicCard(topic, { context: kind })).join("")}</div>
        </div>
      </div>
    </section>`;
}

function seriesCategoryView() {
  const seriesTopics = topics.filter(topic => topic.tag === "workbook");
  return `
    <section class="category-detail series-category-view">
      <div class="series-panel-heading"><div><b>先看题单，再进入系列</b><span>点击题单下方的系列名称，可查看该系列的全部题单</span></div><label class="series-search"><i class="ri-search-line"></i><input data-series-search placeholder="搜索系列或题单名称" /></label></div>
      <div class="series-quick-links"><button class="active" data-series-query="">全部系列</button><button data-series-query="全品学练考">全品学练考</button><button data-series-query="原创新课堂">原创新课堂</button><button data-series-query="多维导学案">多维导学案</button></div>
      <div class="series-topic-grid">${seriesTopics.map(topicCard).join("")}</div><div class="series-empty" hidden>没有找到这个系列，换个名称试试。</div>
    </section>`;
}

function render() {
  const defaultState = currentFilter === "all" && !currentQuery;
  contentFeed.innerHTML = defaultState ? homepageFeed() : currentFilter === "workbook" ? seriesCategoryView() : categoryBrowserView(currentFilter);
  emptyState.hidden = true;
  contentFeed.hidden = false;
  bindContentEvents();
  setupFeed(defaultState);
  setupAiDockObserver(defaultState);
  filterManuallyExpanded = false;
  setSquareFilterCollapsed(true);
}

function setupFeed(isHomepage) {
  const grid = document.querySelector("[data-endless-grid]");
  if (!grid || !isHomepage) return;
  grid.innerHTML = feedTopicIds.slice(0, 16).map(id => byId[id]).filter(Boolean).map(topicCard).join("");
  [...grid.children].forEach((card, index) => { card.dataset.feedOrder = String(index); });
  applyFeedFilters();
}

function topicMatchesFeedFilters(topic) {
  const typeMatch = feedFilterState.type === "all" || (feedFilterState.type === "sync" && ["chapter", "workbook"].includes(topic.tag)) || topic.tag === feedFilterState.type;
  const difficultyMatch = feedFilterState.difficulty === "all" || topic.difficulty === feedFilterState.difficulty;
  const sourceText = `${topic.source} ${topic.author?.school || ""}`;
  const sourceMatch = feedFilterState.source === "all"
    || (feedFilterState.source === "local" && /龙岗|坂田|平湖|龙城|深圳/.test(sourceText))
    || (feedFilterState.source === "famous" && /深圳中学|深圳实验|深圳外国语|龙岗区实验|龙岗区外国语|龙城初级/.test(sourceText))
    || (feedFilterState.source === "school" && Boolean(topic.author))
    || (feedFilterState.source === "series" && topic.tag === "workbook");
  const text = `${topic.title} ${topic.focus} ${topic.reason}`;
  const featureMatch = feedFilterState.feature === "all"
    || (feedFilterState.feature === "真题汇编" && /真题/.test(text))
    || (feedFilterState.feature === "高频易错" && /易错/.test(text))
    || feedFilterState.feature === primaryTag(topic);
  return typeMatch && difficultyMatch && sourceMatch && featureMatch;
}

function applyFeedFilters() {
  const grid = document.querySelector("[data-endless-grid]");
  if (!grid) return;
  const cards = [...grid.children];
  cards.sort((a, b) => {
    const aTopic = byId[a.dataset.topic];
    const bTopic = byId[b.dataset.topic];
    if (feedFilterState.sort === "usage") return bTopic.usage - aTopic.usage;
    if (feedFilterState.sort === "latest") return (bTopic.highlight === "最新" ? 1 : 0) - (aTopic.highlight === "最新" ? 1 : 0) || Number(a.dataset.feedOrder) - Number(b.dataset.feedOrder);
    return Number(a.dataset.feedOrder) - Number(b.dataset.feedOrder);
  });
  let visible = 0;
  cards.forEach(card => { card.hidden = !topicMatchesFeedFilters(byId[card.dataset.topic]); if (!card.hidden) visible += 1; grid.appendChild(card); });
  const empty = document.querySelector("[data-feed-empty]");
  if (empty) empty.hidden = visible > 0;
  const resultCount = document.querySelector("[data-filter-result-count]");
  if (resultCount) resultCount.textContent = `共 ${visible} 份`;
}

function bindContentEvents(root = document) {
  root.querySelectorAll("[data-topic]").forEach(element => {
    const open = () => openTopic(element.dataset.topic);
    element.addEventListener("click", event => { if (event.target.closest("[data-bookmark], [data-series]")) return; open(); });
    if (element.matches("[tabindex]")) element.addEventListener("keydown", event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); open(); } });
  });
  root.querySelectorAll("[data-bookmark]").forEach(button => button.addEventListener("click", event => { event.stopPropagation(); button.classList.toggle("saved"); button.innerHTML = button.classList.contains("saved") ? '<i class="ri-bookmark-fill"></i>' : '<i class="ri-bookmark-line"></i>'; showToast(button.classList.contains("saved") ? "已收藏到我的题单" : "已取消收藏"); }));
  root.querySelectorAll("[data-preview-topic]").forEach(button => button.addEventListener("click", event => { event.stopPropagation(); openTopic(button.dataset.previewTopic); }));
  root.querySelectorAll("[data-use-topic]").forEach(button => button.addEventListener("click", event => { event.stopPropagation(); location.href = `./editor.html?topic=${encodeURIComponent(button.dataset.useTopic)}`; }));
  root.querySelectorAll("[data-open-filter]").forEach(button => button.addEventListener("click", event => { event.stopPropagation(); setMainFilter(button.dataset.openFilter); window.scrollTo({ top: 0, behavior: "smooth" }); }));
  root.querySelectorAll("[data-series]").forEach(button => button.addEventListener("click", event => { event.stopPropagation(); openSeries(button.dataset.series); }));
  root.querySelectorAll("[data-author]").forEach(button => button.addEventListener("click", event => { event.stopPropagation(); showToast(`正在查看${button.dataset.author}发布的题单`); }));
  root.querySelectorAll("[data-feed-key]").forEach(button => button.addEventListener("click", () => { const { feedKey, feedValue } = button.dataset; feedFilterState[feedKey] = feedValue; document.querySelectorAll(`[data-feed-key="${feedKey}"]`).forEach(item => item.classList.toggle("active", item === button)); applyFeedFilters(); updateFilterSummary(); }));
  root.querySelectorAll("[data-filter-toggle]").forEach(button => button.addEventListener("click", () => { const section = button.closest("[data-square-section]"); const collapsed = section.classList.contains("is-filter-collapsed"); filterManuallyExpanded = collapsed; setSquareFilterCollapsed(!collapsed); }));
  root.querySelectorAll("[data-filter-reset]").forEach(button => button.addEventListener("click", () => {
    ["difficulty", "source", "feature"].forEach(key => { feedFilterState[key] = "all"; });
    feedFilterState.sort = "default";
    root.querySelectorAll("[data-feed-key]").forEach(item => item.classList.toggle("active", (item.dataset.feedKey === "difficulty" || item.dataset.feedKey === "source" || item.dataset.feedKey === "feature") ? item.dataset.feedValue === "all" : item.dataset.feedKey === "sort" && item.dataset.feedValue === "default"));
    applyFeedFilters();
    updateFilterSummary();
  }));
  root.querySelectorAll("[data-square-section]").forEach(section => section.addEventListener("click", event => {
    const button = event.target.closest("[data-clear-filter]");
    if (!button) return;
    const key = button.dataset.clearFilter;
    feedFilterState[key] = "all";
    section.querySelectorAll(`[data-feed-key="${key}"]`).forEach(item => item.classList.toggle("active", item.dataset.feedValue === "all"));
    applyFeedFilters();
    updateFilterSummary();
  }));
  root.querySelectorAll(".resource-tree button").forEach(button => button.addEventListener("click", () => { const browser = button.closest(".resource-browser"); button.parentElement.querySelectorAll("button").forEach(item => item.classList.toggle("active", item === button)); browser.querySelector(".resource-result-heading b").textContent = button.dataset.resultTitle || button.querySelector("b").textContent; }));
  root.querySelectorAll(".resource-chip-group button").forEach(button => button.addEventListener("click", () => { button.parentElement.querySelectorAll("button").forEach(item => item.classList.toggle("active", item === button)); }));
  root.querySelectorAll(".resource-selector-group button").forEach(button => button.addEventListener("click", () => showToast(`正在调整${button.textContent.trim()}`)));
  root.querySelectorAll("[data-series-search]").forEach(input => input.addEventListener("input", () => filterSeriesTopics(input.value)));
  root.querySelectorAll("[data-series-query]").forEach(button => button.addEventListener("click", () => { const input = button.closest(".series-category-view").querySelector("[data-series-search]"); input.value = button.dataset.seriesQuery; filterSeriesTopics(input.value); button.closest(".series-quick-links").querySelectorAll("button").forEach(item => item.classList.toggle("active", item === button)); }));
}

function filterSeriesTopics(query) {
  const panel = document.querySelector(".series-category-view");
  if (!panel) return;
  const keyword = query.trim().toLowerCase();
  let visible = 0;
  panel.querySelectorAll(".series-topic-grid .topic-card").forEach(card => { const matches = !keyword || card.dataset.sourceName.toLowerCase().includes(keyword) || card.querySelector("h3").textContent.toLowerCase().includes(keyword); card.hidden = !matches; if (matches) visible += 1; });
  panel.querySelector(".series-empty").hidden = visible > 0;
}

function setMainFilter(filter) {
  currentFilter = filter;
  currentQuery = "";
  document.querySelectorAll("[data-filter]").forEach(chip => { const active = chip.dataset.filter === filter; chip.classList.toggle("active", active); chip.setAttribute("aria-selected", String(active)); });
  render();
}

function openSeries(seriesName) {
  setMainFilter("workbook");
  const input = document.querySelector("[data-series-search]");
  if (input) { input.value = seriesName; filterSeriesTopics(seriesName); }
}

function openTopic(id) {
  const topic = byId[id];
  if (!topic) return;
  const context = topic.tag === "workbook" ? "series" : topic.tag === "paper" ? "paper" : topic.tag === "special" ? "knowledge" : "chapter";
  location.href = `./detail.html?topic=${encodeURIComponent(id)}&context=${context}`;
}

function showAiDock(visible) {
  const shouldShow = visible && !aiModalOpen;
  const dock = document.querySelector("#aiDock");
  dock.hidden = !shouldShow;
  dock.setAttribute("aria-hidden", String(!shouldShow));
  document.body.classList.toggle("has-ai-dock", shouldShow);
}

function setupAiDockObserver(isHomepage) {
  if (aiDockObserver) aiDockObserver.disconnect();
  showAiDock(false);
  if (!isHomepage) return;
  const square = document.querySelector("[data-square-section]");
  if (!square || !("IntersectionObserver" in window)) return;
  aiDockObserver = new IntersectionObserver(entries => {
    const inView = entries.some(entry => entry.isIntersecting && entry.boundingClientRect.top < window.innerHeight * .58);
    showAiDock(hasUserScrolled && inView);
  }, { threshold: 0, rootMargin: "0px" });
  aiDockObserver.observe(square);
}

function syncAiInputs(value, sourceId) {
  ["#aiStarterInput", "#aiQuickInput"].forEach(selector => { const input = document.querySelector(selector); if (input && input.id !== sourceId && input.value !== value) input.value = value; });
}

function openAi(prompt = "") {
  const value = prompt || document.querySelector("#aiStarterInput").value || document.querySelector("#aiQuickInput").value;
  if (value) syncAiInputs(value, "");
  document.querySelector("#aiForm").hidden = false;
  document.querySelector("#aiResult").hidden = true;
  if (value) document.querySelector(".prompt-box textarea").value = value;
  aiModalOpen = true;
  showAiDock(false);
  aiMask.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeAi() { aiModalOpen = false; aiMask.hidden = true; document.body.style.overflow = ""; const square = document.querySelector("[data-square-section]"); if (square && aiDockObserver) showAiDock(square.getBoundingClientRect().top < window.innerHeight && square.getBoundingClientRect().bottom > 0); }
function showToast(message) { toast.textContent = message; toast.classList.add("show"); setTimeout(() => toast.classList.remove("show"), 1700); }

render();

window.addEventListener("scroll", () => {
  hasUserScrolled = window.scrollY > 160;
  const square = document.querySelector("[data-square-section]");
  if (!square) return;
  const rect = square.getBoundingClientRect();
  if (aiDockObserver) showAiDock(hasUserScrolled && rect.top < window.innerHeight * .45 && rect.bottom > 0);
  if (window.scrollY < 80) {
    filterManuallyExpanded = false;
    setSquareFilterCollapsed(true);
  } else if (rect.top <= 120 && !filterManuallyExpanded && square.querySelector("[data-filter-toggle]")?.getAttribute("aria-expanded") !== "true") {
    setSquareFilterCollapsed(true);
  }
}, { passive: true });

document.querySelector("#filterChips").addEventListener("click", event => { const button = event.target.closest("[data-filter]"); if (button) setMainFilter(button.dataset.filter); });
document.querySelector("#resetFilter").addEventListener("click", () => setMainFilter("all"));

function bindAiForm(formSelector, inputSelector, addSelector, voiceSelector) {
  const form = document.querySelector(formSelector);
  const input = document.querySelector(inputSelector);
  form.addEventListener("submit", event => { event.preventDefault(); const value = input.value.trim(); if (!value) { input.focus(); showToast("先描述一下想要什么题单"); return; } syncAiInputs(value, input.id); openAi(value); });
  input.addEventListener("input", () => syncAiInputs(input.value, input.id));
  document.querySelector(addSelector).addEventListener("click", () => showToast("可以添加试卷、图片或资料作为参考"));
  document.querySelector(voiceSelector).addEventListener("click", event => { event.currentTarget.classList.toggle("active"); showToast(event.currentTarget.classList.contains("active") ? "正在听，请说出题单要求" : "已停止语音输入"); });
}

bindAiForm("#aiStarter", "#aiStarterInput", "#aiStarterAdd", "#aiStarterVoice");
bindAiForm("#aiDock", "#aiQuickInput", "#aiAdd", "#aiVoice");
document.querySelector("#closeAi").addEventListener("click", closeAi);
aiMask.addEventListener("click", event => { if (event.target === aiMask) closeAi(); });
document.querySelector("#generateList").addEventListener("click", event => { const button = event.currentTarget; button.disabled = true; button.querySelector("span").textContent = "正在生成题单结构…"; setTimeout(() => { document.querySelector("#aiForm").hidden = true; document.querySelector("#aiResult").hidden = false; button.disabled = false; button.querySelector("span").textContent = "生成完整题单"; }, 850); });
document.querySelector("#regenerate").addEventListener("click", () => { document.querySelector("#aiResult").hidden = true; document.querySelector("#aiForm").hidden = false; });
document.querySelector("#editGenerated").addEventListener("click", () => { closeAi(); showToast("AI 题单已生成，正在进入题单编辑"); });
document.addEventListener("keydown", event => { if (event.key === "Escape" && !aiMask.hidden) closeAi(); });
