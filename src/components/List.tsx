import React from "react";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  loading?: boolean;
  emptyMessage?: string;
  error?: string;
}

const List = <T,>({
  items,
  renderItem,
  loading = false,
  emptyMessage = "No data exist!",
  error,
}: ListProps<T>) => {
  if (loading) {
    return <p className='px-4 py-2'>Loading...</p>;
  }

  if (error) {
    return <p className='px-4 py-2'>Error: Something wrong!</p>;
  }

  if (items.length === 0) {
    return <p className='px-4 py-2'>{emptyMessage}</p>;
  }

  return (
    <ul className='flex flex-col items-start gap-4'>
      {items.map((item, i) => {
        return (
          <li key={i} className='w-full'>
            {renderItem(item, i)}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
