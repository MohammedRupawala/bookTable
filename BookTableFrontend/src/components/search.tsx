import { useState } from "react"
import { searchType } from "../types/types";

const Search = ({searchQuery,setSearchQuery,setSearchType}: searchType) => {
   
    const changeType = (type : string)=>{
        setSearchType(type);
    }
    const searchChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
        setSearchQuery(e.target.value)
    }
  return (
    <section className="flex flex-col items-center p-4 space-y-4">
    <div className="w-full max-w-md">
      <input
        className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white p-3 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search ..."
        value={searchQuery}
        onChange={searchChange}
      />
    </div>
    <div className="flex space-x-4">
      <button
        className="bg-blue-500 text-white p-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
        onClick={() => changeType("id")}
      >
        BY ID
      </button>
      <button
        className="bg-blue-500 text-white p-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
        onClick={() => changeType("name")}
      >
        BY NAME
      </button>
      <button
        className="bg-blue-500 text-white p-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
        onClick={() => changeType("table")}
      >
        BY TABLE NUMBER
      </button>
    </div>
  </section>  
  )
}

export default Search