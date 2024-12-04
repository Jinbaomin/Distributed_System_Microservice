import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import { product } from '../../../assets/asset'

const Profile_WishList: React.FC = () => {
  return (
    <div>
      <div className='mb-5'>
        <p className='font-medium mb-2'>Wish List</p>
        <p className='font-light text-sm'>See your favorites list here</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3'>
        <div className='border hover:shadow-lg flex flex-col gap-2 rounded-xl'>
          <div className='flex justify-center items-center'>
            <img src={product.Iphone} alt='mobile' className='w-40 h-40 object-contain' />
          </div>
          <div className='flex justify-center'>
            <div className='border w-3/4 flex'></div>
          </div>
          <p className='text-xs text-center'>Iphone 12 Pro Max</p>
          <div className='flex items-center justify-between p-3'>
            <div className='flex gap-2 items-center border-2 border-blue-500 text-blue-500 py-[5px] px-[9px] rounded-xl hover:cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-500'>
              <FiShoppingCart className='w-5 h-5 object-cover hover:cursor-pointer' />
              <p className='text-xs'>Add to cart</p>
            </div>
            <GoTrash className='w-5 h-5 object-contain text-red-500 hover:cursor-pointer' />
          </div>
        </div>
        <div className='border hover:shadow-lg flex flex-col gap-2 rounded-xl'>
          <div className='flex justify-center items-center'>
            <img src={product.Iphone} alt='mobile' className='w-40 h-40 object-contain' />
          </div>
          <div className='flex justify-center'>
            <div className='border w-3/4 flex'></div>
          </div>
          <p className='text-xs text-center'>Iphone 12 Pro Max</p>
          <div className='flex items-center justify-between p-3'>
            <div className='flex gap-2 items-center border-2 border-blue-500 text-blue-500 py-[5px] px-[9px] rounded-xl hover:cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-500'>
              <FiShoppingCart className='w-5 h-5 object-cover hover:cursor-pointer' />
              <p className='text-xs'>Add to cart</p>
            </div>
            <GoTrash className='w-5 h-5 object-contain text-red-500 hover:cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile_WishList
