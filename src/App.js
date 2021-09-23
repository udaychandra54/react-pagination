
import './App.css';
import { useEffect, useState } from 'react';
import Pagination from './Pagination';
import axios from 'axios';

function App() {
  const [posts,setPosts]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
  const [currentPage,setCurrentPage]=useState(1);
  const [postsPerPage,setPostsPerPage]=useState(10);
  useEffect(()=>{
    const fetchPosts = async()=>{
      setIsLoading(true)
   const res = await  axios.get('https://jsonplaceholder.typicode.com/posts')
   setPosts(res.data)
 
      setIsLoading(false)
    }
     fetchPosts();
      
  },[]);
  const indexOfLastPost = currentPage*postsPerPage;
  const indexOfFirstPost = indexOfLastPost-postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);
  console.log(indexOfFirstPost,indexOfLastPost)
  const paginate=(number)=>setCurrentPage(number)
  return (
    <div className="App">
     <div className="container">
     
     {!isLoading && currentPosts.map(item=>{
      return(
       <div className='border mt-2' key={item.id}>
         {item.title}
       </div>
      )
    })}
    {isLoading && <p>Loading...</p>}
    <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
</div>

    </div>
  );
}

export default App;
