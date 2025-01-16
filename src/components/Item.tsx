import React from "react";

interface TaskItem {
  id: number;
  name: string;
  description: string;
  is_completed: boolean;
  created_at: string;
  updated_at: string;
}

interface ItemProps {
  task: TaskItem;
  index: number;
  onEdit: () => void;
  onRemove: () => void;
}

const Item: React.FC<ItemProps> = ({ task, index, onEdit, onRemove }) => {
  return (
    <div className='flex flex-col gap-2 p-2 rounded border-solid border-[1px] border-black'>
      <div className='flex items-center justify-between'>
        <div className='text-lg'>{task.name}</div>
        <div>
          {task.is_completed ? (
            <span className='text-green-500'>DONE &#10003;</span>
          ) : (
            <span className='text-red-500'>UNDO &#10060;</span>
          )}
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <div>{task.description}</div>
        <div>
          <button
            type='button'
            className='inline-block text-blue-400 hover:underline mr-4'
            onClick={() => onEdit()}
          >
            修改
          </button>
          <button
            type='button'
            className='inline-block text-red-400 hover:underline'
            onClick={() => onRemove()}
          >
            刪除
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
