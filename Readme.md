# VidSpark — AI 驱动的内容引擎

VidSpark 是一站式 AI 音视频理解与多平台内容创作平台。从视频理解到内容创作，一站式完成多平台内容生产：粘贴视频链接或上传文件，一键生成结构化总结、思维导图与精准转录；基于总结素材一键生成适配小红书、抖音、B站、微信公众号、YouTube 等平台的专业内容；输入简单剧情即可生成电影级分镜方案并推进高质量分镜视频创作。

> 本站点为纯静态前端演示工程（HTML + CSS + 原生 JS），所有页面截图资产存放于 [`readme-assets/`](./readme-assets) 目录（与项目根目录对齐）。

---

## 功能总览

| 功能模块 | 说明 | 对应页面 |
| --- | --- | --- |
| 音视频总结 | 精准转录 ASR、智能分段总结、思维导图生成、多语种互译 | `dashboard.html` |
| 内容创作 | 图文笔记 / 短视频脚本 / 长视频脚本 / AI 视频分镜，多平台策略适配 + SEO 优化 | `dashboard.html` |
| 分镜成片工作流 | 简单剧情输入 → 1-2 套电影级分镜方案 → 高质量分镜视频 | `storyboard-studio.html`、`workbench.html` |
| 视频分镜提示词 | 一句话生成导演级分镜提示词，适配即梦 Seedance、可灵、Runway、Sora | `docs-video-model-prompt-guide.html` |
| 平台策略引擎 | 内置小红书 / 抖音 / B站 / 微信公众号 / YouTube 推荐算法与爆款策略 | 首页 `#platforms` 区块 |
| 文档中心 | 分镜成片工作流使用文档、视频生成模型提示词指南 | `docs.html` 等 |
| 博客 | 官方博客与实战指南 | `blog.html`、`blog-article.html` |
| 账号与会员 | 登录 / 注册 / 会员定价 / 会员中心 / 支付 | `login.html` 等 |
| 管理后台 | 数据概览与运营管理 | `admin.html` |

---

## 一、首页

首页整页效果：

![首页整页](./readme-assets/index.png)

### 1.1 首屏：三大核心创作引擎

音视频总结、内容创作、分镜成片工作流三大引擎入口：

![首页首屏](./readme-assets/index-hero.png)

### 1.2 分镜成片工作流

简单剧情输入，先出方案，再出高质量分镜视频；镜头、节奏、风格高可控：

![分镜成片工作流](./readme-assets/index-storyboard-flow.png)

### 1.3 音视频总结

不只是转文字，是知识的结构化重构：精准转录 ASR、智能分段总结、思维导图生成、多语种互译：

![音视频总结](./readme-assets/index-video-summary.png)

### 1.4 内容创作

懂平台算法的创作系统：多平台策略适配、专业脚本生成、SEO 智能优化、智能工作流引擎：

![内容创作](./readme-assets/index-content-engine.png)

### 1.5 Seedance 2.0 视频分镜提示词

一句话生成导演级分镜，驾驭视效大模型；影视级画质控制、专业运镜语言、多套备选方案：

![视频分镜提示词](./readme-assets/index-prompt-engine.png)

### 1.6 分镜成片工作流示例

PixVerse-v6 与 Seedance2.0 参考图生视频的实际成片示例：

![分镜成片示例](./readme-assets/index-demo.png)

### 1.7 内容创作工作流

四种内容类型（图文笔记 / 短视频脚本 / 长视频脚本 / AI 视频分镜）：

![内容创作工作流](./readme-assets/index-content-creation.png)

五步智能流水线：上传素材 → AI 理解 → 策略注入 → 内容生成 → SEO 优化：

![智能工作流流水线](./readme-assets/index-workflow-pipeline.png)

### 1.8 高级平台策略

深度研究各平台推荐算法和爆款规律，内置小红书、抖音、B站、微信公众号、YouTube 专业运营策略：

![平台策略](./readme-assets/index-platforms.png)

---

## 二、控制台（Dashboard）

控制台首页，聚合三大功能入口与历史任务列表：

![控制台](./readme-assets/dashboard.png)

### 2.1 新建任务 — 已有视频总结

从已有视频总结素材出发进行二次创作：

![新建任务-已有视频总结](./readme-assets/dashboard-new-task.png)

### 2.2 新建任务 — 文本/话题输入

输入简短关键词由 AI 自动扩展话题，或输入详细文本直接分析：

![文本话题输入](./readme-assets/dashboard-tab-text.png)

### 2.3 新建任务 — 视频链接输入

粘贴视频链接（支持抖音、B站、小红书、YouTube）一键解析：

![视频链接输入](./readme-assets/dashboard-tab-link.png)

---

## 三、分镜成片工作室

两阶段工作流（分镜方案 → 分镜成片）：创意简报输入、AI 创作模型选择、方案数量与视频总时长配置：

![分镜成片工作室](./readme-assets/storyboard-studio.png)

---

## 四、AI 视频生成工作台

分镜转视频工作流，将分镜方案推进为高质量分镜视频：

![视频生成工作台](./readme-assets/workbench.png)

---

## 五、文档中心

### 5.1 文档首页

![文档中心](./readme-assets/docs.png)

### 5.2 分镜成片工作流使用文档

从一句创意到分镜视频的完整工作流说明：

![分镜成片工作流使用文档](./readme-assets/docs-storyboard-workflow-guide.png)

### 5.3 视频生成模型提示词指南

面向即梦 Seedance、可灵、Runway、Sora 等模型的提示词实战指南：

![视频生成模型提示词指南](./readme-assets/docs-video-model-prompt-guide.png)

---

## 六、博客

### 6.1 博客列表

![博客列表](./readme-assets/blog.png)

### 6.2 博客文章详情

![博客文章](./readme-assets/blog-article.png)

---

## 七、账号体系

### 7.1 登录

![登录](./readme-assets/login.png)

### 7.2 注册

![注册](./readme-assets/register.png)

---

## 八、会员与支付

### 8.1 会员与定价

![会员与定价](./readme-assets/membership.png)

### 8.2 会员中心

![会员中心](./readme-assets/member-center.png)

### 8.3 支付

![支付](./readme-assets/payment.png)

---

## 九、管理后台

数据概览与运营管理：

![管理后台](./readme-assets/admin.png)

---

## 十、404 页面

![404](./readme-assets/404.png)

---

## 页面清单

| 文件 | 说明 |
| --- | --- |
| `index.html` | 官网首页 |
| `dashboard.html` | 控制台（音视频总结 / 内容创作入口、历史任务） |
| `storyboard-studio.html` | 分镜成片工作室 |
| `workbench.html` | AI 视频生成工作台 |
| `docs.html` | 文档中心 |
| `docs-storyboard-workflow-guide.html` | 分镜成片工作流使用文档 |
| `docs-video-model-prompt-guide.html` | 视频生成模型提示词指南 |
| `blog.html` | 博客列表 |
| `blog-article.html` | 博客文章详情 |
| `login.html` | 登录 |
| `register.html` | 注册 |
| `membership.html` | 会员与定价 |
| `member-center.html` | 会员中心 |
| `payment.html` | 支付 |
| `admin.html` | 管理后台 |
| `404.html` | 404 页面 |

## 本地运行

本站点为纯静态工程，任意静态服务器均可运行，例如：

```bash
# 方式一：VS Code Live Server（默认端口 5500）
# 方式二：Python
python -m http.server 5500
# 方式三：Node
npx serve -l 5500
```

然后访问 `http://localhost:5500/index.html`。

## 资产说明

- `readme-assets/`：本 Readme 引用的全站页面与功能截图（1440×900 视口采集）。
- `assets/`：站点样式、脚本与字体等静态资源。
- `guide-assets/`：分镜成片示例视频等演示素材。
