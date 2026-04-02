# 紫微斗數學習平台

一個結構化、系統化的紫微斗數入門學習網站。

## 專案簡介

本網站為紫微斗數初學者提供清晰、有邏輯的學習路徑。從基礎概念到解盤實戰，循序漸進地引導學習者建立正確的命理觀念。

**特色：**
- 結構化的課程設計
- 清晰的概念解釋，避免迷信語調
- 豐富的視覺圖表與互動元件
- 繁體中文內容

## 技術堆疊

- **框架**: Next.js 16 (App Router)
- **語言**: TypeScript
- **樣式**: Tailwind CSS v4
- **圖示**: Lucide React

## 安裝與執行

### 前置需求
- Node.js 18+
- npm

### 安裝相依套件

```bash
npm install
```

### 本地開發

```bash
npm run dev
```

瀏覽 [http://localhost:3000](http://localhost:3000) 查看網站。

### 建置正式版本

```bash
npm run build
```

### 啟動正式版本

```bash
npm start
```

## 專案結構

```
ziwei-learning-site/
├── src/
│   ├── app/                    # 頁面路由
│   │   ├── page.tsx            # 首頁
│   │   └── (learn)/            # 學習頁面群組
│   │       ├── layout.tsx      # 學習頁面共用版面
│   │       ├── getting-started/
│   │       ├── foundations/
│   │       ├── palaces/        # 十二宮
│   │       │   └── [slug]/
│   │       ├── stars/          # 十四主星
│   │       │   └── [slug]/
│   │       ├── supporting-stars/
│   │       ├── four-transformations/
│   │       │   └── [slug]/
│   │       ├── chart-reading/
│   │       ├── examples/
│   │       ├── glossary/
│   │       ├── faq/
│   │       └── about/
│   ├── components/
│   │   ├── ui/                 # 通用 UI 元件
│   │   ├── layout/             # 版面元件
│   │   └── diagrams/           # 視覺圖表元件
│   └── lib/                    # 資料與工具函式
│       ├── navigation.ts       # 導覽結構
│       └── glossary.ts         # 詞彙表資料
├── PROJECT_PLAN.md
├── CONTENT_GUIDE.md
├── FUTURE_IDEAS.md
└── README.md
```

## 如何擴充內容

請參閱 [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) 了解如何新增或修改教學內容。

## 未來計畫

請參閱 [FUTURE_IDEAS.md](./FUTURE_IDEAS.md) 了解規劃中的功能。
