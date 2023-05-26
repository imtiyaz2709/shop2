"use client";
import React, { useState } from "react";

const InsertProductPage = ({categories}) => {
  const init = {
    title: "",
    price: "",
    discount_price: "",
    brand: "",
    category: "",
    description: "",
    status: "",
  };
  const [data, setData] = useState(init);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const insert = await fetch("http://127.0.0.1:3000/api/product/insert", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const record = await insert.json();

    setData(init);

    console.log(record.data);
  };

  return (
    <div className="w-full justify-center flex">
      <div className="w-full">
        <h1 className="text-2xl font-semibold">Insert Details Here</h1>
        <form method="post" onSubmit={handleSubmit}>
          <div className="flex w-full gap-5">
            <div className="flex flex-1 flex-col py-2">
              <label htmlFor="">Title</label>
              <input
                className="px-3 py-2 border rounded w-full"
                name="title"
                value={data.title}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-1 flex-col py-2">
              <label htmlFor="">Price</label>
              <input
                className="px-3 py-2 border rounded w-full"
                name="price"
                value={data.price}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex w-full gap-5">
            <div className="flex flex-col py-2 flex-1">
              <label htmlFor="">Discount Price</label>
              <input
                className="px-3 py-2 border rounded w-full"
                name="discount_price"
                value={data.discount_price}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col py-2 flex-1">
              <label htmlFor="">Brand</label>
              <input
                className="px-3 py-2 border rounded w-full"
                name="brand"
                value={data.brand}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col py-2">
            <label htmlFor="">Category</label>
            <select
              className="px-3 py-2 border rounded w-full"
              name="category"
              value={data.category}
              onChange={handleChange}
            >
                <option value="">Select Category</option>
                {
                    categories.callingData.map((value, key) => (
                        <option value={value._id} key={key}>{value.title}</option>
                    ))
                }
                </select>
          </div>
         <div className="flex w-full gap-5">
         <div className="flex flex-col py-2 flex-1">
            <label htmlFor="">Description</label>
            <input
              className="px-3 py-2 border rounded w-full"
              name="description"
              value={data.description}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col py-2 flex-1">
            <label htmlFor="">Status</label>
            <input
              className="px-3 py-2 border rounded w-full"
              name="status"
              value={data.status}
              onChange={handleChange}
            />
          </div>
         </div>
          <button
            type="submit"
            className="px-3 py-2 bg-teal-700 border rounded text-white w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default InsertProductPage;
