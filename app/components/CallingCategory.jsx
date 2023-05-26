"use client"

import React from 'react'

const CallingCategory = ({data}) => {
    const handleDelete = async(id) => {
        alert("data deleted successfully")

        let data = await fetch(`http://127.0.0.1:3000/api/category/${id}`,{
            method:"DELETE",
            headers:{
                "content-type":"application/json"
            }
        })

        data = await data.json()
    }
  
  return (
    <table className='w-full border'>
            <thead>
                <tr>
                    <th className='border p-2'>id</th>
                    <th className='border p-2'>title</th>
                    <th className='border p-2'>action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((value, index) => (
                        <tr key={index}>
                            <td className="border p-2">{index+1}</td>
                            <td className="border p-2">{value.title}</td>
                            <td className="border p-2">
                                <button type="button" className="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-800" onClick={() => handleDelete(value._id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody> 
        </table>
  )
}

export default CallingCategory