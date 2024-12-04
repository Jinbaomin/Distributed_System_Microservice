import React from 'react'
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

interface IStarProps {
  rating: number | undefined;
}

const Stars: React.FC<IStarProps> = ({ rating }) => {
  return (
    <div className='flex gap-2'>
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index}>
          {index < rating ? <FaStar className='text-yellow-400 w-4 h-4' /> : <CiStar className='w-4 h-4' />}
        </span>
      ))}
    </div>
  )
}

export default Stars
