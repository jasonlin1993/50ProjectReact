# **01 - ExpandingCards**

![](../../images/ExpandingCard.png)

## **主題**

透過點擊圖片，展開不同背景圖片樣式
[[DEMO]](https://64864a83.50projectreact.pages.dev/ExpandingCards)

## **步驟**

#### Step1. 建立圖片以及名稱物件

先將圖片資料以及名稱用`物件 (Object)`方式寫。
每個物件包含了 `title` 與 `image` 屬性。
程式碼透過 `const` 宣告一個不可變常數變數`panelsData`，並同時直接給它賦予「陣列物件」的值。

語法結構可以分成:

1. 陣列: 用 `[ ]` 建立陣列。
2. 物件: 用 `{ }` 表示一個物件。裡面是 `key:value` 配對的形式。

#### Step2. 新增 useState 狀態管理

1. `activeIndex`: 紀錄目前被點擊、擴展的卡片索引。預設為 `0`，也就是第 1 張卡片。
2. `setActiveIndex`: 用來更新 `activeIndex`。
3. 點擊事件: 點擊卡片時，會將 `activeIndex` 更新為該卡片的索引。
   ```js
   onClick={() => setActiveIndex(index)}
   ```

#### Step3. 互動動畫

1. 當 `activeIndex` 等於當前 `index` 時，卡片的 `flex` 值變為 `5` (佔更大寬度)，否則變為 `0.5`(縮小)。
2. `transition-opacity duration-300 ease-in-out`: 當 activeIndex 等於目前索引時，標題淡入 (`opacity-100`)，否則淡出(`opacity-0`)。
