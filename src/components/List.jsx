import React,{useContext} from 'react'
import {ListUserContext} from './../Context/ListUserContest';
const List = () => {
  const {list} =useContext(ListUserContext);
  return (
    <>
            {list.map((user,index)=>{
            return <div key={`user-${index}`}>
                <h3>{user.email}</h3>
            </div>
        })}
    </>
  )
}

export default List;