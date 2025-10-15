import React from 'react'
import { useQuery } from '@tanstack/react-query';

const fetchData = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
}

function PostsComponent() {

const{data,isloading,error, isFetching,refetch} = useQuery({
    queryKey:['fetchData'],
    queryFn: fetchData,
    staleTime: 1000 * 60 * 5,
    catchTime: 1000 * 60 * 10
    
})

if(isloading) return <div>Loading...</div>

if (error) return <div>Error loading data</div>
console.log(data)

  return (
    <div>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? 'Refreshing...' : 'Refetch Posts'}
      </button>

      {data && data.length > 0 && (
        data.map((item) =>(
            <div key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
            </div>
        ))
      )}  
    </div>
  )
}

export default PostsComponent;