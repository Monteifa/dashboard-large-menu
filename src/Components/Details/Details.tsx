'use client';
import { useState } from 'react';
import { Data } from '../../types/data.types';
import Button from '../Button';
import Input from '../Input';
import InputGroup from '../InputGroup';

import './Details.css';

interface DetailsProps {
  data: Array<Data>;
  item: Data;
  setSelectedItem: (item?: Data) => void;
}

const Details = ({ data, item, setSelectedItem }: DetailsProps) => {
  const [detailsState, setDetailsState] = useState<Data>(item);

  const editItem = () => {
    data[item.index] = detailsState;
  };

  return (
    <div className='details_container'>
      <div className='details_header'>
        <div className='details_tab active'>
          <span>BASICS</span>
        </div>
        <div className='details_tab'>
          <span>IMAGE</span>
        </div>
        <div className='details_tab'>
          <span>LABELS</span>
        </div>
        <div className='details_tab'>
          <span>MORE...</span>
        </div>
      </div>

      <div className='details_content'>
        <InputGroup id='itemName' label='Item name'>
          <Input
            id='itemName'
            value={detailsState.internalName}
            onChange={(e) =>
              setDetailsState((state) => ({
                ...state,
                internalName: e.target.value,
              }))
            }
          />
        </InputGroup>

        <InputGroup id='itemDisplayName' label='Display name'>
          <Input
            type='text'
            id='itemDisplayName'
            value={detailsState.name}
            onChange={(e) =>
              setDetailsState((state) => ({
                ...state,
                name: e.target.value,
              }))
            }
          />
        </InputGroup>

        <InputGroup id='itemDescription' label='Description'>
          <Input
            type='text'
            id='itemDescription'
            value={detailsState.description}
            onChange={(e) =>
              setDetailsState((state) => ({
                ...state,
                description: e.target.value,
              }))
            }
          />
        </InputGroup>

        <InputGroup id='itemName' label='Price'>
          <Input
            type='number'
            id='itemName'
            value={detailsState.price}
            onChange={(e) =>
              setDetailsState((state) => ({
                ...state,
                price: Number(e.target.value),
              }))
            }
          />
        </InputGroup>
      </div>

      <div className='details_footer'>
        <Button variant='secondary' onClick={() => setSelectedItem(undefined)}>
          CANCEL
        </Button>
        <Button variant='primary' onClick={() => editItem()}>
          DONE
        </Button>
      </div>
    </div>
  );
};

export { Details };
