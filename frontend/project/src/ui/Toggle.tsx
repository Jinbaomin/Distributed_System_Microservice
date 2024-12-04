import React from 'react'

interface ToggleProps {
  order?: number
}

const Toggle: React.FC<ToggleProps> = (props) => {
  return (
    // <div className='w-[100%] h-screen flex justify-center items-center'>
    <>
      <input className='peer hidden' id={`toggle${props.order}`} type='checkbox' />
      <label htmlFor={`toggle${props.order}`} className='w-[40px] h-[20px] relative bg-slate-200 rounded-full before:content-[""] before:absolute before:top-[2px] before:left-[2px] before:w-[15px] before:h-[15px] before:rounded-full before:bg-white peer-checked:bg-blue-600 peer-checked:before:translate-x-[20px] transition-all duration-500'></label>
    </>
    // </div>
  )
}

export default Toggle;
