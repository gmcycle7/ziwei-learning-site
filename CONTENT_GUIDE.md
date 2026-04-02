# 內容編輯指南

## 教學內容組織方式

本站所有教學內容都以 React 元件的形式存在於 `src/app/(learn)/` 目錄下。每個主題對應一個資料夾，其中的 `page.tsx` 即為該頁面的內容。

## 內容撰寫原則

### 教學結構
每個主題頁面應遵循以下結構：

1. **概念** — 這是什麼？
2. **直覺** — 用生活化的方式理解
3. **範例** — 具體的應用場景
4. **常見錯誤** — 初學者容易犯的錯
5. **重點總結** — 記住什麼最重要

### 語調規範
- 使用繁體中文
- 保持冷靜、有邏輯的教學語調
- 避免迷信、絕對、誇張的措辭
- 用「傾向於」代替「一定會」
- 用「可能」代替「必然」
- 當不同門派有不同解釋時，明確說明

### 使用 UI 元件

#### Callout 提示框
```tsx
import Callout from '@/components/ui/Callout';

<Callout type="info" title="重點">
  這裡放重要概念
</Callout>

<Callout type="warning" title="初學者常犯錯誤">
  這裡放常見錯誤
</Callout>

<Callout type="tip" title="觀念提醒">
  這裡放提醒事項
</Callout>
```

#### 可展開區塊
```tsx
import Expandable from '@/components/ui/Expandable';

<Expandable title="進階說明">
  初學者可先跳過的內容
</Expandable>
```

#### 記憶卡
```tsx
import FlashCard from '@/components/ui/FlashCard';

<FlashCard front="化祿" back="代表順利、增加、福氣、收穫" />
```

## 如何新增頁面

### 新增宮位頁面
編輯 `src/app/(learn)/palaces/[slug]/page.tsx` 中的資料物件，新增對應的 slug 和內容。

### 新增星曜頁面
編輯 `src/app/(learn)/stars/[slug]/page.tsx` 中的資料物件。

### 新增四化頁面
編輯 `src/app/(learn)/four-transformations/[slug]/page.tsx` 中的資料物件。

## 詞彙表

詞彙表資料存放在 `src/lib/glossary.ts`。要新增詞彙，在 `glossaryData` 陣列中加入新的物件：

```ts
{
  term: '新詞彙',
  pinyin: 'xīn cí huì',
  definition: '定義說明',
  category: '基礎', // 基礎 | 宮位 | 主星 | 輔星 | 四化 | 關係 | 解盤
  related: ['相關詞彙'],
}
```

## 導覽結構

導覽結構定義在 `src/lib/navigation.ts`。要新增導覽項目，在 `navigation` 陣列中加入新的物件。上一課 / 下一課的順序由此陣列的順序決定。
