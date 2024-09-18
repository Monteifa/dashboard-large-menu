'use client';
import { useDeferredValue, useEffect, useState } from 'react';

import Details from '@/Components/Details';
import Item from '@/Components/Item';
import SearchBar from '@/Components/SearchBar';

import { Data } from '@/types/data.types';

import { FixedSizeList as List } from 'react-window';

import './page.css';

const Home = () => {
  const [data, setData] = useState<Array<Data>>();
  const [selectedItem, setSelectedItem] = useState<Data>();
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const debouncedSearch = useDeferredValue(search);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await fetch('api');

      const data = await response.json();

      setData(data);

      setLoading(false);
    };

    getData();
  }, []);

  const filteredItem = data?.filter((item) =>
    item.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div className='container'>
      <SearchBar setSearch={setSearch} />

      <div className='content_container'>
        {loading ? (
          <span>loading</span>
        ) : (
          <div className='list_container'>
            <List
              height={800}
              itemCount={filteredItem?.length || 0}
              itemSize={80}
              width={'100%'}
              itemData={filteredItem}
            >
              {({ index, style, data }) => (
                <Item
                  data={data}
                  index={index}
                  style={style}
                  selectedItem={selectedItem}
                  setSelectedItem={setSelectedItem}
                />
              )}
            </List>

            {selectedItem && data && (
              <Details
                key={selectedItem.id}
                data={data}
                item={selectedItem}
                setSelectedItem={setSelectedItem}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
