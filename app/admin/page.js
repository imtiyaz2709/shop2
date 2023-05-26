import Link from "next/link";
import React from "react";

const page = async () => {
    let catCalling = await fetch("http://127.0.0.1:3000/api/category/all",{next:{revalidate:1}})
    catCalling = await catCalling.json()

    let categoryCount = catCalling.callingData.length
  
    let getData  =await fetch(process.env.PRODUCT_URL,{next:{revalidate:1}})
    getData = await getData.json()
    let productCount = getData.getData.length

  return (
    <main className="flex gap-5 w-full">
      <Link
        href="#"
        class="block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex-1 "
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {productCount}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          Total Products
        </p>
      </Link>
      <Link
        href="#"
        class="block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex-1"
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {categoryCount}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          Total Category
        </p>
      </Link>
    </main>
  );
};

export default page;
