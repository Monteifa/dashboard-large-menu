'use client';
import { AiOutlineSearch } from 'react-icons/ai';

import './SearchBar.css';

const SearchBar = ({ setSearch }: { setSearch: (value: string) => void }) => {
  return (
    <div className='search_bar_container'>
      <div className='search_bar'>
        <AiOutlineSearch width={24} height={24} />

        <input
          type='text'
          placeholder='Search items'
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export { SearchBar };
