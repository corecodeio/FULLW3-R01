import { createContext, useState} from 'react';

export const ItemContext = createContext();

export const ItemProvider = ({children})=>{
    const [listItem,setListItem]= useState([]);
    const value = {
        listItem,
        setListItem
    }
    return(
        <ItemContext.Provider value={value}>
            {children}
        </ItemContext.Provider>
    )
}