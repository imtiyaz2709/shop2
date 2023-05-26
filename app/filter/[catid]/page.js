import Image from 'next/image'
import Card from '@/app/components/Card'
import Category from '@/app/components/Category'

export default async function Filter({params}) {
  let catCalling = await fetch("http://127.0.0.1:3000/api/category/all")
  catCalling = await catCalling.json()

  let getData  =await fetch(`http://127.0.0.1:3000/api/filter-product/${params.catid}`)
  getData = await getData.json()
  
  return (
   <div className='flex w-full'>
    <div className='w-2/12'>
      <Category  data={catCalling}/>
    </div>
    <div className='w-10/12 px-4 my-3'>
      {
        (getData?.getData?.length >0)?<Card data ={getData} />:<h1 className='text-2xl font-bold'>Product not Found</h1>
      }
      
    </div>
   </div>
  )
}
