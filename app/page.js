import Image from 'next/image'
import Category from './components/Category'
import Card from './components/Card'
import axios from 'axios'

export default async function Home() {
  // let catCalling = await axios("http://127.0.0.1:3000/api/category/all")
  let catCalling = await fetch("http://127.0.0.1:3000/api/category/all")
  catCalling = await catCalling.json()
  console.log(catCalling)
  let getData  =await fetch(process.env.PRODUCT_URL,{cache:"no-store"})
  getData = await getData.json()

  return (
   <div className='flex w-full'>
    <div className='w-2/12'>
      <Category  data={catCalling}/>
    </div>
    <div className='w-10/12 px-4 my-3'>
      <Card data = {getData} />
    </div>
   </div>
  )
}
