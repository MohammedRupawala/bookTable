import { useMemo, useState } from "react";
import { dataType, search } from "../types/types";
export function useSearch<T extends{
    inviteId: number, 
  name: string, 
  tableNumber: number
}>(
    data : T[], 
){
    const [searchQuery,setSearchQuery] = useState<string>("");
    const [searchType,setSearchType] = useState<search>("")

    const filterData = useMemo(()=>{
        if(!searchQuery) return data

        else{
            return data.filter((item)=>{
                const query = searchQuery.trim().toLowerCase();
                switch(searchType){
                    case 'id' : 
                        return item.inviteId.toString().includes(query);
                    case 'name' : 
                        return item.name.toString().includes(query);
                    case 'table' : 
                        return item.tableNumber.toString().includes(query);
                    default : 
                    return (
                        item.inviteId.toString().includes(query) ||
                        item.name.toLowerCase().includes(query) ||
                        item.tableNumber.toString().includes(query)
                      );
                }

            })
        }

    },[data,searchQuery,searchType])


    const changeSearchType = (type: search) => {
        setSearchType(type);
      };
    
      const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
      };
    
      const resetSearch = () => {
        setSearchQuery('');
        setSearchType('');
      };
    
      return {
        searchQuery,
        searchType,
        filterData,
        changeSearchType,
        handleSearchChange,
        resetSearch
      };
    
}



