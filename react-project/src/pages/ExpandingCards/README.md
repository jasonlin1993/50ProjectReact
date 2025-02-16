# **01 - ExpandingCards**

![](../../images/ExpandingCard.png)

## **主題**

這段程式碼實現了一個**展開式卡片（Expanding Cards）**的 UI 組件。它展示了一組圖片，每張圖片作為一個「卡片」，當點擊某張卡片時，它會展開變大，其他卡片會縮小。這種交互式動畫通常用於圖片展示或 UI 設計展示。
[[DEMO]](https://64864a83.50projectreact.pages.dev/ExpandingCards)

## **步驟**

#### Step1. 定義圖片資料(panelsData)

- 這是一個包含圖片和標題的陣列，每個物件 `({ title, image })` 代表一張卡片的內容。

#### Step2. 建立 React 組件 (ExpandingCards)

- 使用 `useState(0)` 來追蹤當前被點選的卡片索引 (`activeIndex`)。
- 回傳一個 `div` 容器，作為所有卡片的父元素。

#### Step3. 遍歷 panelsData 並渲染卡片

- `map()` 遍歷 `panelsData`，為每張圖片生成一個 `div`。
- 設定 `key={index}` 來確保每個 `div` 都有唯一的 key。

#### Step4. 動態樣式調整

- `className` 內部使用三元運算子 (`activeIndex === index ? "flex-[5]" : "flex-[0.5]"`)
  - 被點擊的卡片會變大（`flex-[5]`）。
  - 其他未選中的卡片會縮小（`flex-[0.5]`）。
- `backgroundImage` 設定圖片背景。

#### Step5. 點擊事件 (onClick)

- 當使用者點擊卡片時，透過 `setActiveIndex(index)` 更新 `activeIndex`，使被點擊的卡片變大。

#### Step6. 標題顯示與動畫

- 標題 (`h3`) 只有當卡片被點選時才會顯示 (`opacity-100`)，未選擇時則隱藏 (`opacity-0`)。

## **程式碼撰寫的 React / JSX 語法&備註**

1. `useState` 的使用

```js
const [activeIndex, setActiveIndex] = useState(0);
```
