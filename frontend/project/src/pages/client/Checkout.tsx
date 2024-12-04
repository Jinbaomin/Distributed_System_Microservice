import React from 'react'
import { asset, cart } from '../../assets/asset'

const Checkout: React.FC = () => {
  return (
    <div className='py-20'>
      <div className='flex items-start gap-8'>
        <div className='space-y-6 px-4 flex-1 py-3 border rounded-lg'>
          <div className='flex flex-col gap-2'>
            <label className='text-lg font-medium pl-2'>User</label>
            <div className='relative'>
              <input type='text' className='bg-[#F6F6F6] focus:outline-none focus:ring-2 px-3 py-2 rounded-lg w-full' />
              <button className='hover:cursor-pointer'>
                <img src={asset.edit} className='w-5 h-5 object-cover outline-none focus:outline-none absolute top-2 right-2' />
              </button>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-lg font-medium pl-2'>Ship to</label>
            <div className='relative'>
              <input type='text' className='bg-[#F6F6F6] focus:outline-none focus:ring-2 px-3 py-2 rounded-lg w-full' />
              <button className='hover:cursor-pointer'>
                <img src={asset.edit} className='w-5 h-5 object-cover outline-none focus:outline-none absolute top-2 right-2' />
              </button>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-lg font-medium pl-2'>Ship Method</label>
            <div className='space-y-2'>
              <div className='bg-[#F9F9F9] flex items-center gap-3 rounded-lg py-2 px-3'>
                <input type='radio' id='method1' name='shippingmethod' value='Free Shipping' className='w-4 h-4' />
                <div className='flex flex-col gap-2 text-xs flex-1'>
                  <label htmlFor='method1' className='text-sm hover:cursor-pointer' >Free Shipping</label>
                  <div className='flex justify-between items-center font-light'>
                    <p>7-30 business days</p>
                    <p>0$</p>
                  </div>
                </div>
              </div>
              <div className='bg-[#F9F9F9] flex items-center gap-3 rounded-lg py-2 px-3'>
                <input type='radio' id='method2' name='shippingmethod' value='Free Shipping' className='w-4 h-4' />
                <div className='flex flex-col gap-2 text-xs flex-1'>
                  <label htmlFor='method2' className='text-sm hover:cursor-pointer' >Regular Shipping</label>
                  <div className='flex justify-between items-center font-light'>
                    <p>7-30 business days</p>
                    <p>0$</p>
                  </div>
                </div>
              </div>
              <div className='bg-[#F9F9F9] flex items-center gap-3 rounded-lg py-2 px-3'>
                <input type='radio' id='method3' name='shippingmethod' value='Free Shipping' className='w-4 h-4' />
                <div className='flex flex-col gap-2 text-xs flex-1'>
                  <label htmlFor='method3' className='text-sm hover:cursor-pointer' >Express Shipping</label>
                  <div className='flex justify-between items-center font-light'>
                    <p>7-30 business days</p>
                    <p>0$</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col px-4 py-3 border rounded-lg w-[38%] space-y-4'>
          <p className='text-lg font-medium'>Your Order</p>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <img src={cart.imgCart} className='w-16 h-16' />
              <div className='flex flex-col w-full truncate justify-between text-xs'>
                <p className='text-xs font-light'>MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch</p>
                <p>x1</p>
                <div className='flex justify-end'>
                  <p>$433.00</p>
                </div>
              </div>
            </div>
            <hr />
            <div className='flex items-center gap-2'>
              <img src={cart.img1Cart} className='w-16 h-16' />
              <div className='flex flex-col w-full truncate justify-between text-xs'>
                <p className='text-xs font-light'>Laptop Privacy Screen for 13 inch MacBook Pro & MacBook Air</p>
                <p>x1</p>
                <div className='flex justify-end'>
                  <p>$433.00</p>
                </div>
              </div>
            </div>
            <hr />
            <div className='flex items-center gap-2'>
              <img src={cart.img1Cart} className='w-16 h-16' />
              <div className='flex flex-col w-full truncate justify-between text-xs'>
                <p className='text-xs font-light'>Laptop Privacy Screen for 13 inch MacBook Pro & MacBook Air</p>
                <p>x1</p>
                <div className='flex justify-end'>
                  <p>$433.00</p>
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div className='flex items-center gap-2 my-3'>
            <input type='text' className='border text-sm px-3 py-2 focus:outline-none focus:ring-2 rounded-lg' placeholder='Discount Code' />
            <button className='px-3 py-2 text-blue-500 border w-full rounded-lg text-sm hover:text-white hover:bg-blue-400 transition-colors duration-[800]'>Apply</button>
          </div>
          <div className='space-y-3 text-xs font-light'>
            <div className='space-y-2'>
              <div className='flex justify-between items-center'>
                <p>Subtotal: </p>
                <p>$866.00</p>
              </div>
              <div className='flex justify-between items-center'>
                <p>Discount: </p>
                <p>$50.00</p>
              </div>
              <div className='flex justify-between items-center'>
                <p>Shipping: </p>
                <p>$10.00</p>
              </div>
            </div>
            <hr />
            <div className='font-medium flex justify-between items-center'>
              <p>Grand Total: </p>
              <p>$826.00</p>
            </div>
          </div>
          <button className='bg-blue-600 px-3 py-2 rounded-lg text-white text-base'>Place Order</button>
        </div>
      </div>
    </div>
  )
}

export default Checkout
