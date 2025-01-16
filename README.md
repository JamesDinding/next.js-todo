1. 任務一，快速用了個 radio 按鈕來篩選狀態。就很單純呈現 Task List

2. 任務二，用了一個彈窗來顯示表單，useReducer 來處理欄位狀態。

3. 任務三，算是沒做

4. 任務四，就真的只是刪除，然後重拉一次列表

- 整體來說，很粗糙的做完了，UI 部分還有許多調整空間，也因為沒有特別規劃啥的，RWD 基本上也沒有特別需要調整的。

- 任務三則是沒看清楚需求，所以才只有弄了個表單就以為處理完了。

- 除了 UI 外，礙於時間，API 也相對沒有做太多處裡，包括 isPending 的畫面顯或者防抖節流之類的處理。

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
