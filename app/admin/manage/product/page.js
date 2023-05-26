import ProductCalling from '@/app/components/ProductCalling'
import Link from 'next/link'
import React from 'react'

const productTable = async() => {
    let getData = await fetch("http://127.0.0.1:3000/api/product/allProduct",{next:{revalidate:1}})
    getData = await getData.json()

    

  return (
    <div className='w-full flex flex-col'>
        <div className='flex justify-between items-center'>
            <div className='w-11/12'>
                <h1 className='font-black text-3xl'>Manage Products</h1>
            </div>
            <div className='w-1/12'>
            <Link href="admin/manage/product/insert" className='bg-green-800 px-2 py-1 border rounded text-white'>Insert</Link>
            </div>
        </div>
        <div className='w-full mt-5 text-center'>
           <ProductCalling getData={getData}/>
        </div>
    </div>
  )
}

export default productTable