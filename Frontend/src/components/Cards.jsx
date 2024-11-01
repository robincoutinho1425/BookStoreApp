import React from 'react'

function Cards({item}) {
    // console.log(item);
    
  
    
  return (
    <>
    <div className='p-3 my-3 mt-4 '>
    <div className="duration-200 border shadow-xl card bg-base-100 w-92 hover:scale-105">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="text-white bg-pink-500 badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="justify-between card-actions">
      <div className="p-4 border-[2px] rounded-full cursor-pointer bord hover:bg-pink-500 badge badge-outline hover:text-white">${item.price}</div>
      <div className="p-4 border-[2px] rounded-full cursor-pointer bord hover:bg-pink-500 badge badge-outline hover:text-white">Buy Now</div>
    </div>
  </div>
</div>
      
    </div>
    </>
  )
}

export default Cards
