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

推送 `main` 后会自动把静态文件发布到 `gh-pages` 分支。

**一次性设置（Settings → Pages）：**

- Source：**Deploy from a branch**
- Branch：**gh-pages** / **/(root)**

若 Actions 里 `deploy-pages` 一直卡在队列，用上面这种方式即可，不依赖慢速的 Pages 队列。
