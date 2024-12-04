import React from 'react'
import { asset } from '../../assets/asset'
import { useNavigate } from 'react-router'

const categories = [
  {
    icon: asset.mobile,
    title: 'Mobile',
    param: 'mobile'
  },
  {
    icon: asset.computer,
    title: 'Computer',
    param: 'computer'
  },
  {
    icon: asset.tablet,
    title: 'Tablet',
    param: 'tablet'
  },
  {
    icon: asset.game,
    title: 'Gaming',
    param: 'gaming'
  },
  {
    icon: asset.monitor,
    title: 'Monitor',
    param: 'monitor'
  },
  {
    icon: asset.devices,
    title: 'Accessories',
    param: 'accesories'
  }
]

const Product: React.FC = () => {
  const navigate = useNavigate();
  const handleSearchByParam = (param: string) => {
    navigate(`/product?category=${param}`);
  }

  return (
    <div className='py-10'>
      <div className='flex flex-row gap-2 justify-evenly items-center'>
        {categories.map((category, index) => (
          <div key={index} onClick={() => handleSearchByParam(category.param)} className='flex flex-col gap-1 items-center p-4 border rounded-lg hover:cursor-pointer shadow-md hover:bg-blue-200'>
            <img src={category.icon} alt={category.title} className='w-8 h-8 object-cover' />
            <p className='text-sm'>{category.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product
