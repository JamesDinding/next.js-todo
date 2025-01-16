import React, { useReducer, useState } from "react";

interface FormState {
  name: string;
  description: string;
  is_completed: boolean;
  id?: number;
}

type FormAction =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_DESCRIPTION"; payload: string }
  | { type: "SET_IS_COMPLETED"; payload: boolean }
  | { type: "RESET_FORM"; payload?: FormState };

interface FormProps {
  initialData: FormState;
  onSubmit: (data: FormState) => void;
  isEdit: boolean;
}

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_DESCRIPTION":
      return { ...state, description: action.payload };
    case "SET_IS_COMPLETED":
      return { ...state, is_completed: action.payload };
    case "RESET_FORM":
      return (
        action.payload || {
          name: "",
          description: "",
          is_completed: false,
        }
      );
    default:
      return state;
  }
};

const Form: React.FC<FormProps> = ({
  initialData,
  onSubmit,
  isEdit = false,
}) => {
  const [state, dispatch] = useReducer(formReducer, {
    id: initialData.id,
    name: initialData.name,
    description: initialData?.description,
    is_completed: initialData?.is_completed,
  });

  const [nameErr, setNameErr] = useState(false);
  const [descriptionErr, setDescriptionErr] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(state); // 將表單資料提交到父層
    dispatch({ type: "RESET_FORM" }); // 重置表單
  };

  const isFormValid =
    state.name.trim() !== "" && state.description.trim() !== "";

  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-md mx-auto p-4 bg-gray-100 rounded'
    >
      <h2 className='text-lg font-bold mb-4'>
        {initialData ? "Edit Task" : "Create Task"}
      </h2>

      {/* name */}
      <div className='mb-4'>
        <label htmlFor='name' className='block mb-1 font-medium'>
          Name
        </label>
        <input
          disabled={isEdit}
          id='name'
          type='text'
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "SET_NAME", payload: e.target.value })
          }
          onBlur={(e) => {
            setNameErr(() => (e.target.value.trim() === "" ? true : false));
          }}
          className='w-full p-2 border border-gray-300 rounded disabled:cursor-not-allowed'
          placeholder='Enter task name'
        />
        {nameErr && <span className='text-sm text-red-400'>不可為空</span>}
      </div>

      {/* description */}
      <div className='mb-4'>
        <label htmlFor='description' className='block mb-1 font-medium'>
          Description
        </label>
        <input
          disabled={isEdit}
          id='description'
          type='text'
          value={state.description}
          onChange={(e) =>
            dispatch({ type: "SET_DESCRIPTION", payload: e.target.value })
          }
          onBlur={(e) => {
            setDescriptionErr(() =>
              e.target.value.trim() === "" ? true : false
            );
          }}
          className='w-full p-2 border border-gray-300 rounded disabled:cursor-not-allowed'
          placeholder='Enter task description'
        />
        {descriptionErr && (
          <span className='text-sm text-red-400'>不可為空</span>
        )}
      </div>

      {/* is_completed */}
      <div className='mb-4'>
        <label className='block mb-1 font-medium'>Is Completed</label>
        <div className='flex items-center gap-4'>
          <label className='flex items-center'>
            <input
              type='radio'
              name='is_completed'
              value='true'
              checked={state.is_completed === true}
              onChange={() =>
                dispatch({ type: "SET_IS_COMPLETED", payload: true })
              }
              className='mr-2'
            />
            Yes
          </label>
          <label className='flex items-center'>
            <input
              type='radio'
              name='is_completed'
              value='false'
              checked={state.is_completed === false}
              onChange={() =>
                dispatch({ type: "SET_IS_COMPLETED", payload: false })
              }
              className='mr-2'
            />
            No
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type='submit'
        disabled={!isFormValid}
        className='w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed'
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
