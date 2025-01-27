# **01 - ExpandingCards**

![](../../images/ExpandingCard.png)

## **主題**

透過點擊圖片，展開不同背景圖片樣式
[[DEMO]](https://50-project-react.vercel.app/ExpandingCards)

## **步驟**

#### Step1. 建立圖片以及名稱物件

先將圖片資料以及名稱用`物件 (Object)`方式寫。
每個物件包含了 `title` 與 `image` 屬性。
程式碼透過 `const` 宣告一個不可變常數變數`panelsData`，並同時直接給它賦予「陣列物件」的值。

語法結構可以分成:

1. 陣列: 用 `[ ]` 建立陣列。
2. 物件: 用 `{ }` 表示一個物件。裡面是 `key:value` 配對的形式。
