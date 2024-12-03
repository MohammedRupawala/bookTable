import React, { useState } from 'react'
import { Card } from '../components/card';
import { useSearch } from '../utils/utils';
import { dataType } from '../types/types';

const data : dataType[] = [
    {
      inviteId : 2000,
      name : "mohammed",
      tableNumber : 52
      
    },
    {
      inviteId : 2001,
      name : "vedant",
      tableNumber : 51
      
    },
    {
      inviteId : 2002,
      name : "mrunal",
      tableNumber : 53
      
    },
    {
      inviteId : 2003,
      name : "taher",
      tableNumber : 54   
    },
    {
      inviteId : 2000,
      name : "mohammed",
      tableNumber : 52
      
    },
    {
      inviteId : 2001,
      name : "vedant",
      tableNumber : 51
      
    },
    {
      inviteId : 2002,
      name : "mrunal",
      tableNumber : 53
      
    },
    {
      inviteId : 2000,
      name : "mohammed",
      tableNumber : 52
      
    },
    {
      inviteId : 2001,
      name : "vedant",
      tableNumber : 51
      
    },
    {
      inviteId : 2002,
      name : "mrunal",
      tableNumber : 53
      
    },
    {
      inviteId : 2000,
      name : "mohammed",
      tableNumber : 52
      
    },
    {
      inviteId : 2001,
      name : "Vedant",
      tableNumber : 51
      
    },
    {
      inviteId : 2002,
      name : "mrunal",
      tableNumber : 53
      
    },
  ]
const AllTables = () => {

    const {
        searchQuery,
        searchType,
        filterData,
        changeSearchType,
        handleSearchChange,
        resetSearch
      } = useSearch(data);

    return (
        <section>
            <aside>
                <section className="flex flex-col items-center p-4 space-y-4">
                    <div className="w-full max-w-md relative">
                        <input
                            className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white p-3 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Search ..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        {searchQuery && (
                            <button 
                                onClick={resetSearch}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
                            >
                                ✕
                            </button>
                        )}
                    </div>

                    <div className="flex space-x-4">
                        {(['id', 'name', 'table'] as const).map((type) => (
                            <button
                                key={type}
                                className={`
                                    p-2 rounded-md shadow-md transition duration-300
                                    ${searchType === type 
                                        ? 'bg-blue-700 text-white' 
                                        : 'bg-blue-500 text-white hover:bg-blue-600'}
                                `}
                                onClick={() => changeSearchType(type)}
                            >
                                BY {type.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    {filterData.length === 0 && searchQuery && (
                        <p className="text-red-500">No results found</p>
                    )}
                </section>
            </aside>

<div className='flex flex-wrap justify-center min-h-screen'>
     {filterData.map((entry,index) => (
      <div   key={`${entry.inviteId}-${index}`}  className="w-1/4 p-2">
        <Card
        inviteId={entry.inviteId}
        name={entry.name}
        tableNumber={entry.tableNumber}
      />
        </div>
    ))}
  </div>
    </section>
);
}

export default AllTables;