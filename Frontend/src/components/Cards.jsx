import React from "react";

function Cards({ item }) {
  // console.log(item);

  return (
    <>
      <div className="p-3 my-3 mt-10 ">
        <div className="duration-200 border shadow-xl h-[420px] card bg-base-100 w-92 hover:scale-105 dark:bg-slate-900 dark:text-white dark:border">
          <figure >
            <img src={item.image} alt="Shoes"  />
          </figure>
          <hr />
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="p-3 text-white bg-pink-500 badge badge-secondary">
                {item.category}
              </div>
            </h2>
            <p>{item.title}</p>
            <div className="justify-between card-actions">
              <div className="p-4 border-[2px] rounded-full cursor-pointer bord hover:bg-black badge badge-outline hover:text-white dark:hover:bg-pink-500">
                ${item.price}
              </div>
              <div className="p-4 border-[2px] rounded-full cursor-pointer bord hover:bg-black badge badge-outline hover:text-white dark:hover:bg-pink-500">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
