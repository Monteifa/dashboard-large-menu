'use client';
import { Data } from '@/types/data.types';
import { MdEdit } from 'react-icons/md';
import { format } from '@/utils/formatCurrency';

import './Item.css';

interface ItemProps {
  data: Array<Data>;
  index?: number;
  style: object;
  selectedItem: Data | undefined;
  setSelectedItem: (item: Data) => void;
}

const Item = ({
  data,
  index,
  style,
  selectedItem,
  setSelectedItem,
}: ItemProps) => {
  if (index === undefined || index === null || !data) {
    return null;
  }

  const item = data[index];

  return (
    <div
      style={style}
      className={`item_container ${selectedItem?.id === item.id && 'selected'}`}
    >
      <span>{item?.name}</span>

      <span>{format(item?.price)}</span>

      <div className='actions_container'>
        <MdEdit
          className='icon_edit'
          onClick={() => setSelectedItem({ ...item, index })}
        />
      </div>
    </div>
  );
};

export { Item };
