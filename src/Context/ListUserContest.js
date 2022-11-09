import { createContext, useState} from 'react';

export const ListUserContext = createContext();

export const ListUserProvider = ({children})=>{
    const [list,setList]= useState([]);
    const value = {
        list,
        setList
    }
    return(
        <ListUserContext.Provider value={value}>
            {children}
        </ListUserContext.Provider>
    )
}