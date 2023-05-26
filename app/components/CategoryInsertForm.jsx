"use client"
import React, { useState } from 'react'

const CategoryInsertForm = () => {
    const [title, settitle ] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault();

        let data  = await fetch("http://127.0.0.1:3000/api/category/insert",{
            method:"POST",
            body:JSON.stringify({title}),
            headers:{
                "content-type":"application/json"
            }
        })
        data = await data.json()
        settitle("")



    }
  return (
    <form className="w-full p-5 flex flex-col gap-5 border shadow-lg" onSubmit={handleSubmit} method='post'>
            <h1>Insert Category Here</h1>
            <input type="text" className='border px-3 py-2 rounded w-full' value={title} onChange={(e) => settitle(e.target.value)}/>
            <input type="submit" className='bg-green-500 text-white px-3 py-2' value="Go"/>
        </form>
  )
}

export default CategoryInsertForm