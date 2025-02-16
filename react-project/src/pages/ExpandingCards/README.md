# **01 - ExpandingCards**

![](../../images/ExpandingCard.png)

## **主題**

這段程式碼實現了一個 **展開式卡片（Expanding Cards)** 的 UI 組件。它展示了一組圖片，每張圖片作為一個「卡片」，當點擊某張卡片時，它會展開變大，其他卡片會縮小。這種交互式動畫通常用於圖片展示或 UI 設計展示。

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

```jsx
const [activeIndex, setActiveIndex] = useState(0);
```

- `useState(0)`：定義 `activeIndex`，初始值為 `0`（第一張卡片展開）。
- `setActiveIndex(index)`：當使用者點擊卡片時，`activeIndex` 會更新，重新渲染畫面。

2. 透過 `.map()` 動態渲染

```jsx
{
  panelsData.map((panel, index) => (
    <div
      key={index}
      className={`relative flex-1 m-2 h-[80vh] rounded-2xl bg-cover bg-center bg-no-repeat cursor-pointer transition-all duration-700 ease-in-out ${
        activeIndex === index ? " flex-[5]" : "flex-[0.5]"
      }`}
      style={{ backgroundImage: `url(${panel.image})` }}
      onClick={() => setActiveIndex(index)}
    >
      <h3
        className={`text-white text-2xl font-semibold absolute bottom-5 left-5 transition-opacity duration-300 ease-in-out ${
          activeIndex === index ? "opacity-100" : "opacity-0"
        }`}
      >
        {panel.title}
      </h3>
    </div>
  ));
}
```

- 使用 `.map()` 遍歷 `panelsData` 陣列，動態生成 `<div>` 元素。 -`className` 內使用 條件判斷 (`activeIndex === index ? " flex-[5]" : "flex-[0.5]"`)，來控制展開效果。
- `onClick={() => setActiveIndex(index)}`：點擊時更新 `activeIndex`，讓該卡片變大。

3. Tailwind CSS 的 `className` 條件設定

```jsx
className={`relative flex-1 m-2 h-[80vh] rounded-2xl bg-cover bg-center bg-no-repeat cursor-pointer transition-all duration-700 ease-in-out ${
  activeIndex === index ? " flex-[5]" : "flex-[0.5]"
}`}

```

- flex-[5]：當 activeIndex === index 時，該卡片變大。
- flex-[0.5]：未選中的卡片縮小。

4. 探索: 新增功能

- 自動輪播功能 (Auto-Slideshow)：每隔幾秒自動切換到下一張卡片。

實作功能: 自動輪播

- 這個功能會讓卡片每隔 3 秒自動切換到下一張。

```jsx

export default function ExpandingCards() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % panelsData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

```

新功能解釋

- `useEffect`：
  - 透過 `setInterval` 每 3 秒執行一次 `setActiveIndex`，讓 `activeIndex` 變成下一個索引值。
  - 當 `activeIndex` 達到最後一張時，重新回到第一張 `(prevIndex + 1) % panelsData.length`。
  - 使用 `clearInterval` 來清除計時器，避免記憶體洩漏。
