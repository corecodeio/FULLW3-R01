import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';

const Profile = () => {
  const [posts,setPosts]=useState([]);
  const { id } = useParams();

  const cargarDatos = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const responseJson = await response.json();
    //console.log(responseJson);
    setPosts(responseJson);
  }
  useEffect(()=>{
    cargarDatos();
  },[]);

  return (
    <div>{posts.map((post,index)=>{
      return <p key={`post-${index}`}> {post.title}</p>
    })}</div>
  )
}

export default Profile;