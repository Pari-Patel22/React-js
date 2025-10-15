import React from 'react'
import Cards from '../Components/Cards'

export default function Home() {
    const Products = [
        {
            id: 1,
            img: "/Img/img 1.jpg",
            title: "Morden Chair",
            rate: "3.5",
            price: "2,567",
        },
        {
            id: 2,
            img: "/Img/img 2.webp",
            title: "Morden Sofa",
            rate: "4.5",
            price: "2,220",
        },
        {
            id: 3,
            img: "/Img/img 3.webp",
            title: "Morden Bed",
            rate: "5.1",
            price: "5,500",
        },
         {
            id: 4,
            img: "/Img/img 4.jpg",
            title: "Morden dinning Table",
            rate: "6.9",
            price: "55,000",
        },
         {
            id: 5,
            img: "/Img/img 5.jpg",
            title: "TV Stand",
            rate: "8.0",
            price: "4,500",
        },
         {
            id: 6,
            img: "/Img/img 6.avif",
            title: "Flower Pot",
            rate: "5.0",
            price: "6,000",
        },
]
localStorage.setItem("products",JSON.stringify(Products))
  return (
    <div className='flex gap-10 flex-wrap mx-30 justify-center'>
    {
        Products.map((e,i)=>{
            return <Cards key={i} id={e.id} img={e.img} title={e.title} rate={e.rate} price={e.price} />
        })
    }
    </div>
  )
}
