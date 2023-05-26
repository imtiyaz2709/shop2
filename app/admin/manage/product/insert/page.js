import InsertProductPage from '@/app/components/ProductCreate'
import React from 'react'

const page = async() => {
    let callingCategory = await fetch("http://127.0.0.1:3000/api/category/all")
    callingCategory = await callingCategory.json()
  return (
        <InsertProductPage categories={callingCategory}/>
  )
}

export default page