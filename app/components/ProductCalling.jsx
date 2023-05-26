"use client"
import React from 'react'

const ProductCalling = ({getData}) => {
    const handleDelete = async (id) =>{
        const data = await fetch(`http://127.0.0.1:3000/api/product/${id}`,
        {
            method:"DELETE",
            headers:{
                "content-type" : "application/json",
            },
        })
        alert("data deleted")
    }

  return (
    <table className='w-full border'>
    <thead>
        <tr>
            <th className='border'>Title</th>
            <th className='border'>Price</th>
            <th className='border'>Discount Price</th>
            <th className='border'>Brand</th>
            <th className='border'>Category</th>
            <th className='border'>Description</th>
            <th className='border'>Action</th>
            
        </tr>
    </thead>
    <tbody>
       {
        getData.getData.map((value,key) => (
            <tr key={key}>
            <td className='border'>{value.title}</td>
            <td className='border'>{value.price}</td>
            <td className='border'>{value.discount_price}</td>
            <td className='border'>{value.brand}</td>
            <td className='border'>{value.category.title}</td>
            <td className='border'>{value.description}</td>
            <td className='border'>
                <button type='submit'className='px-2 py-1 bg-red-700 text-white border rounded'onClick={()=> handleDelete(value._id)}>Delete</button>
            </td>
        </tr>
        ))
       }
    </tbody>
</table>
  )
}

export default ProductCalling