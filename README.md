# 飞象 AI 题库首页 Demo

面向教师的本地优质题单资源广场 Demo，重点呈现：

- 有推荐依据的个性化题单、本周榜单与资源更新规模
- 教材章节、知识点专项、考试场景、配套系列与本区本校资源
- HOT / NEW、使用人数、题量、时长、难度与来源
- 题单预览、收藏、分类筛选与 AI 生成完整题单

## 本地运行

```bash
npm install
npm run dev
```

## 生产构建

```bash
npm run build
```

## GitHub Pages 部署

访问地址：https://liweimian.github.io/AIQuestion0806/

### 推荐设置（Settings → Pages）

1. **Source** 选 **GitHub Actions**（不要选 Deploy from a branch）
2. Push `main` 后运行 workflow：**Deploy to GitHub Pages**
3. 等 Actions 全部打绿勾，再强制刷新页面（Cmd+Shift+R）

### 备用设置（若 Actions 部署仍失败）

1. **Source** 选 **Deploy from a branch**
2. Branch 选 **main**，文件夹选 **/docs**
3. `docs/` 目录已包含完整静态站点（含 `detail-ai.html`）
