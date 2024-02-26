import React from 'react';
import Product2 from '../assets/product2.png';
import Product02 from '../assets/1.png';

const ProductHome = () => {
  return (
    <>
    
<div class="grid-cols-1 sm:grid md:grid-cols-2 ">
  <div
    class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
   <div className="flex gap-4 p-4">
   <a href="#!"> 
      <img
        class="rounded-t-lg"
        src={Product2}
        alt="" />
    </a>
    <a href="#!">
      <img
        className="rounded-t-lg bg-gray-400"
        src={Product02}
        alt="Hollywood Sign on The Hill" />
    </a>
   </div>
    <div className="p-6">
      <h1
        className="mb-2 text-bold text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        CARBURATOR
      </h1>
      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 ">
       Professional choice in motorcycle spare parts.
       Everlasting spareparts that gives best services.
       Cheaper rate at quickly turnover with fastes delivery.
       Standard Organisation of Nigeria (SON) approval.
      </p>
    </div>
  </div>
  <div
    class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
    <a href="#!">
    <div className="flex gap-4 p-4">
   <a href="#!"> 
      <img
        class="rounded-t-lg"
        src={Product2}
        alt="" />
    </a>
    <a href="#!">
      <img
        className="rounded-t-lg bg-gray-400"
        src={Product02}
        alt="Hollywood Sign on The Hill" />
    </a>
   </div>
    </a>
    <div class="p-6">
      <h5
        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Card title
      </h5>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        This is a longer card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
      </p>
    </div>
  </div>
  <div
    class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
    <a href="#!">
    <div className="flex gap-4 p-4">
   <a href="#!"> 
      <img
        class="rounded-t-lg"
        src={Product2}
        alt="" />
    </a>
    <a href="#!">
      <img
        className="rounded-t-lg bg-gray-400"
        src={Product02}
        alt="Hollywood Sign on The Hill" />
    </a>
   </div>
    </a>
    <div class="p-6">
      <h5
        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Card title
      </h5>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        This is a longer card with supporting text below as a natural
        lead-in to additional content.
      </p>
    </div>
  </div>
  <div
    class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
    <a href="#!">
    <div className="flex gap-4 p-4">
   <a href="#!"> 
      <img
        class="rounded-t-lg"
        src={Product2}
        alt="" />
    </a>
    <a href="#!">
      <img
        className="rounded-t-lg bg-gray-400"
        src={Product02}
        alt="Hollywood Sign on The Hill" />
    </a>
   </div>
    </a>
    <div class="p-6">
      <h5
        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Card title
      </h5>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        This is a longer card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
      </p>
    </div>
  </div>
</div>
    </>
  )
}

export default ProductHome