import React from "react";
import { TASK_STATUS } from "@/constants";

interface RadioButtonGroupProps {
  selected: string;
  onChange: (value: string) => void;
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  selected,
  onChange,
}) => {
  const options = [
    { label: "全部", value: "all" },
    { label: "已完成", value: "completed" },
    { label: "未完成", value: "not_completed" },
  ];

  return (
    <div className='flex gap-4 mb-4'>
      {options.map((option) => (
        <label
          key={option.value}
          className='flex items-center gap-2 cursor-pointer'
        >
          <input
            type='radio'
            name='taskStatus'
            value={option.value}
            checked={selected === option.value}
            onChange={() => onChange(option.value)}
            className='form-radio'
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioButtonGroup;
