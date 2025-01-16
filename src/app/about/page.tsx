import React from "react";

const About: React.FC = () => {
  return (
    <div className='p-10 flex flex-col gap-4 items-start'>
      Ding
      <div>任務一，快速用了個radio按鈕來篩選狀態。就很單純呈現Task List</div>
      <div>任務二，用了一個彈窗來顯示表單，useReducer來處理欄位狀態。</div>
      <div>任務三，算是沒做</div>
      <div>任務四，就真的只是刪除，然後重拉一次列表</div>
      <div>
        整體來說，很粗糙的做完了，UI部分還有許多調整空間，也因為沒有特別規劃版面啥的，RWD基本上也沒有特別需要調整的。
        <br />
        任務三則是沒看清楚需求，所以才只有弄了個表單就以為處理完了。
        <br />
        除了UI外，礙於時間，API也相對沒有做太多處裡，包括isPending的畫面顯示，或者防抖節流之類的處理。
      </div>
    </div>
  );
};

export default About;
