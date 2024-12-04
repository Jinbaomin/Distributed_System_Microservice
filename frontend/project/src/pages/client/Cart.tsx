import React from 'react'
import { cart } from '../../assets/asset'
import { GoTrash } from "react-icons/go";
import { useNavigate } from 'react-router';

const Cart: React.FC = () => {
  const [amount, setAmount] = React.useState(1);
  const navigate = useNavigate();

  return (
    <div className='py-20'>
      <div className='grid grid-cols-[2fr_1fr] gap-40 items-start'>
        <div className='flex flex-col gap-4'>
          <div className='grid grid-cols-[auto_1fr] gap-5 shadow-md border rounded-lg p-3'>
            <img className='w-36 h-36' src={cart.imgCart} />
            <div className='flex flex-col justify-between'>
              <p className='text-sm font-medium'>MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch</p>
              <div className='flex flex-col gap-1'>
                <div className='flex gap-2 items-center'>
                  <img src={cart.truck} className='w-4 h-4' />
                  <p className='text-xs font-light'>Free Delivery</p>
                </div>
                <div className='flex gap-2 items-center'>
                  <img src={cart.verify} className='w-4 h-4' />
                  <p className='text-xs font-light'>Guaranteed</p>
                </div>
                <div className='flex gap-2 items-center'>
                  <img src={cart.instock} className='w-4 h-4' />
                  <p className='text-xs font-light'>In stock</p>
                </div>
              </div>
              <div className='flex flex-row justify-between'>
                <p className='text-sm font-normal'>$433.00</p>
                <div className='flex gap-3'>
                  <button className='hover:cursor-pointer'>
                    <GoTrash className='text-red-500' />
                  </button>
                  <div className='flex gap-3'>
                    <button className='hover:cursor-pointer' onClick={() => setAmount(amount > 1 ? amount - 1 : amount)}>-</button>
                    <span>{amount}</span>
                    <button className='hover:cursor-pointer' onClick={() => setAmount(amount + 1)} >+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-[auto_1fr] gap-5 shadow-md border rounded-lg p-3'>
            <img className='w-36 h-36' src={cart.img1Cart} />
            <div className='flex flex-col justify-between'>
              <p className='text-sm font-medium'>Laptop Privacy Screen for 13 inch MacBook Pro & MacBook Air</p>
              <div className='flex flex-col gap-1'>
                <div className='flex gap-2 items-center'>
                  <img src={cart.truck} className='w-4 h-4' />
                  <p className='text-xs font-light'>Free Delivery</p>
                </div>
                <div className='flex gap-2 items-center'>
                  <img src={cart.verify} className='w-4 h-4' />
                  <p className='text-xs font-light'>Guaranteed</p>
                </div>
              </div>
              <div className='flex flex-row justify-between'>
                <p className='text-sm font-normal'>$433.00</p>
                <div className='flex gap-3'>
                  <button className='hover:cursor-pointer'>
                    <GoTrash className='text-red-500' />
                  </button>
                  <div className='flex gap-3'>
                    <button className='hover:cursor-pointer' onClick={() => setAmount(amount > 1 ? amount - 1 : amount)}>-</button>
                    <span>{amount}</span>
                    <button className='hover:cursor-pointer' onClick={() => setAmount(amount + 1)} >+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='p-3 border flex-1 bg-[#F9F9F9] flex flex-col gap-4 rounded-lg'>
          <p className='text-lg font-medium'>Payment Details</p>
          <div className='space-y-3 text-sm'>
            <div>
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
          <button onClick={() => navigate('/checkout')} className='bg-blue-600 px-3 py-2 rounded-lg text-white text-base'>Check Out</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
