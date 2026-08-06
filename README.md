# 飞象 AI 题库首页 Demo

面向教师的本地优质题单资源广场 Demo。

## 本地运行

```bash
npm install
npm run dev
```

## 线上访问（推荐）

GitHub Pages 的 **Deploy to GitHub Pages** 步骤长期失败，CDN 一直停留在旧版本（没有 `detail-ai.html`）。

### 方案 A：Netlify（推荐，约 2 分钟）

1. 打开 https://app.netlify.com/start
2. 用 GitHub 登录，导入仓库 `Liweimian/AIQuestion0806`
3. Build command 留空，Publish directory 填 **`.`**
4. Deploy

Netlify 会给一个 `https://xxx.netlify.app` 地址，内容与本地一致。

### 方案 B：jsDelivr 临时预览（立即可用）

- 首页：https://cdn.jsdelivr.net/gh/Liweimian/AIQuestion0806@gh-pages/index.html
- AI 详情：https://cdn.jsdelivr.net/gh/Liweimian/AIQuestion0806@gh-pages/detail-ai.html?topic=t2&context=paper

### 方案 C：继续用 GitHub Pages

必须同时满足：

1. **Settings → Pages → Source = GitHub Actions**（不能选 Deploy from a branch）
2. **Settings → Actions → General → Workflow permissions = Read and write**
3. Actions 里手动运行 **Deploy to GitHub Pages**

若 `pages build and deployment` 的 deploy 步骤一直失败，请改用 Netlify。

## 生产构建

```bash
npm run build
```
