import { Dispatch, SetStateAction } from "react"

export  type dataType = {
    inviteId : number,
    name : string,
    tableNumber : number
}

export type search =  '' | 'id' | 'table' | 'name'