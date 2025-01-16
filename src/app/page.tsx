"use client";
import React, { useEffect, useState, useMemo } from "react";
import List from "@/components/List";
import Item from "@/components/Item";
import Modal from "@/components/Modal";
import Form from "@/components/Form";
import RadioButtonGroup from "@/components/RadioButtonGroup";
import useFetch from "@/hooks/useFetch";
import { API_ROUTE, DEFAULT_FORMDATA, TASK_STATUS } from "@/constants";

interface TaskItem {
  id: number;
  name: string;
  description: string;
  is_completed: boolean;
  created_at: string;
  updated_at: string;
}

type Tasks = TaskItem[] | null;

export default function Home() {
  const { state: getTaskState, fetchData: getTask } = useFetch<Tasks>();

  const { state: postTaskState, fetchData: postTask } = useFetch<TaskItem>();

  const { state: putTaskState, fetchData: putTask } = useFetch<TaskItem>();
  const { state: deleteTaskState, fetchData: deleteTask } =
    useFetch<TaskItem>();

  const [selectData, setSelectData] = useState<TaskItem>(DEFAULT_FORMDATA);
  const [isEdit, setIsEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [selectStatus, setSelectStatus] = useState(TASK_STATUS.All);
  const changeHandler = (status: string) => setSelectStatus(status);

  const filterList = useMemo(() => {
    return getTaskState.data?.filter((el) => {
      if (selectStatus === TASK_STATUS.Completed) return el.is_completed;
      if (selectStatus === TASK_STATUS.UnCompleted) return !el.is_completed;
      return true;
    });
  }, [getTaskState, selectStatus]);

  useEffect(() => {
    getTask(API_ROUTE + "/task");
  }, []);

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div>
          <div className='text-xl font-bold mb-2'>
            {isEdit ? "編輯" : "新增"}
          </div>
          <Form
            isEdit={isEdit}
            initialData={
              isEdit
                ? selectData
                : { name: "", description: "", is_completed: false }
            }
            onSubmit={(payload) => {
              const callback = () => {
                // close modal & refresh
                setIsOpen(false);
                setSelectData(DEFAULT_FORMDATA);
                getTask(API_ROUTE + "/task");
              };
              if (isEdit) {
                putTask(
                  API_ROUTE + "/task/" + selectData.id,
                  {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                  },
                  callback
                );
              } else {
                postTask(
                  API_ROUTE + "/task",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                  },
                  callback
                );
              }
            }}
          />
        </div>
      </Modal>
      <div className='px-10 py-4'>
        <RadioButtonGroup selected={selectStatus} onChange={changeHandler} />
        <button
          type='button'
          className='mb-4 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 active:bg-green-700'
          onClick={() => {
            setIsEdit(false);
            setIsOpen(true);
            setSelectData(DEFAULT_FORMDATA);
          }}
        >
          新增
        </button>
        <div>
          <List
            items={filterList || []}
            renderItem={(task, index) => (
              <Item
                key={task.id}
                task={task}
                index={index}
                onEdit={() => {
                  setSelectData(task);
                  setIsEdit(true);
                  setIsOpen(true);
                }}
                onRemove={() =>
                  deleteTask(
                    API_ROUTE + "/task/" + task.id,
                    {
                      method: "DELETE",
                    },
                    () => {
                      getTask(API_ROUTE + "/task");
                    }
                  )
                }
              />
            )}
          />
        </div>
      </div>
    </>
  );
}
