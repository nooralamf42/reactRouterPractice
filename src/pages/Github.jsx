import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    let data = useLoaderData()
    console.log(data)
  return (
    <div className='mx-auto p-12 flex gap-12 items-center  justify-center'>
        <img src={data.avatar_url} className='rounded-full w-[150px]' alt="" srcset="" />
        <div>
            <h1 className='text-2xl'>Noor Alam</h1>
            <h1 className='text-gray-600'>{data.bio}</h1>
            <h1>Followers : {data.followers}</h1>
        </div>
    </div>
  )
}

export default Github

export const githubDataLoader = async()=>{
    let res = await fetch("https://api.github.com/users/nooralamf42")
    let resData = await res.json()
    return resData;
}