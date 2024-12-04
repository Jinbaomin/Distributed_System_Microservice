import React from 'react'
import { asset } from '../../../assets/asset';

const Profile_Order: React.FC = () => {
  return (
    <div>
      <div className='mb-5'>
        <p className='font-medium mb-2'>Order History</p>
        <p className='font-light text-sm'>Track, return or purchase items</p>
      </div>

      <div className='flex flex-col gap-3'>
        <div className='p-2 space-y-2 border rounded-xl'>
          <div className='bg-[#F9F9F9] text-sm flex flex-row gap-2 items-center justify-evenly px-2 py-3 rounded-xl border'>
            <div className='flex flex-col items-center'>
              <p className='font-medium'>Order code</p>
              <p className='font-light'>#896756</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='font-medium'>Placed on</p>
              <p className='font-light'>2023/08/20</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='font-medium'>Total</p>
              <p className='font-light'>$10,998</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='font-medium'>Deliverd</p>
              <p className='font-light'>2023/08/22</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='font-medium'>Status</p>
              <p className='font-light px-2 py-1 bg-red-500 rounded-full text-white '>Pending</p>
            </div>
          </div>
          <div className='flex flex-row gap-3 py-2 px-4'>
            <img src={asset.IMac} className='w-20 h-20 object-cover' />
            <img src={asset.Iphone} className='w-20 h-20 object-cover' />
            <img src={asset.Ipad} className='w-20 h-20 object-cover' />
            <img src={asset.Ipod} className='w-20 h-20 object-cover' />
          </div>
        </div>
        <div className='p-2 space-y-2 border rounded-xl'>
          <div className='bg-[#F9F9F9] text-sm flex flex-row gap-2 items-center justify-evenly px-2 py-3 rounded-xl border'>
            <div className='flex flex-col items-center'>
              <p className='font-medium'>Order code</p>
              <p className='font-light'>#896756</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='font-medium'>Placed on</p>
              <p className='font-light'>2023/08/20</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='font-medium'>Total</p>
              <p className='font-light'>$10,998</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='font-medium'>Deliverd</p>
              <p className='font-light'>2023/08/22</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='font-medium'>Status</p>
              <p className='font-light px-2 py-1 bg-green-500 rounded-full text-white '>Delivered</p>
            </div>
          </div>
          <div className='flex flex-row gap-3 py-2 px-4'>
            <img src={asset.IMac} className='w-20 h-20 object-cover' />
            <img src={asset.Iphone} className='w-20 h-20 object-cover' />
            <img src={asset.Ipad} className='w-20 h-20 object-cover' />
            <img src={asset.Ipod} className='w-20 h-20 object-cover' />
          </div>
        </div>
        <div className='p-2 space-y-2 border rounded-xl'>
          <div className='bg-[#F9F9F9] text-sm flex flex-row gap-2 items-center justify-evenly px-2 py-3 rounded-xl border'>
            <div className='flex flex-col items-center'>
              <p className='font-medium'>Order code</p>
              <p className='font-light'>#896756</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='font-medium'>Placed on</p>
              <p className='font-light'>2023/08/20</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='font-medium'>Total</p>
              <p className='font-light'>$10,998</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='font-medium'>Deliverd</p>
              <p className='font-light'>2023/08/22</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='font-medium'>Status</p>
              <p className='font-light px-2 py-1 bg-green-500 rounded-full text-white '>Delivered</p>
            </div>
          </div>
          <div className='flex flex-row gap-3 py-2 px-4'>
            <img src={asset.IMac} className='w-20 h-20 object-cover' />
            <img src={asset.Iphone} className='w-20 h-20 object-cover' />
            <img src={asset.Ipad} className='w-20 h-20 object-cover' />
            <img src={asset.Ipod} className='w-20 h-20 object-cover' />
          </div>
        </div>
        <div className='p-2 space-y-2 border rounded-xl'>
          <div className='bg-[#F9F9F9] text-sm flex flex-row gap-2 items-center justify-evenly px-2 py-3 rounded-xl border'>
            <div className='flex flex-col items-center'>
              <p className='font-medium'>Order code</p>
              <p className='font-light'>#896756</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='font-medium'>Placed on</p>
              <p className='font-light'>2023/08/20</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='font-medium'>Total</p>
              <p className='font-light'>$10,998</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='font-medium'>Deliverd</p>
              <p className='font-light'>2023/08/22</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='font-medium'>Status</p>
              <p className='font-light px-2 py-1 bg-green-500 rounded-full text-white '>Delivered</p>
            </div>
          </div>
          <div className='flex flex-row gap-3 py-2 px-4'>
            <img src={asset.IMac} className='w-20 h-20 object-cover' />
            <img src={asset.Iphone} className='w-20 h-20 object-cover' />
            <img src={asset.Ipad} className='w-20 h-20 object-cover' />
            <img src={asset.Ipod} className='w-20 h-20 object-cover' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile_Order;
