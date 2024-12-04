import React from 'react'
import { RxAvatar } from "react-icons/rx";
import { TbUserEdit } from "react-icons/tb";
import { BsBasket } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BrowserRouter, Link, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Profile_Info from './Profile_Info';
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoBookOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { GoGift } from "react-icons/go";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import Header from '../../../components/client/Header';
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { useUser } from '../../../features/authentication/userUser';
import { useLogout } from '../../../features/authentication/useLogout';

const styledIcon = 'w-6 h-6 object-contain';

const navigation = [
  {
    icon: <TbUserEdit className={styledIcon} />,
    title: 'Thông tin',
    path: 'personal-info'
  },
  {
    icon: <IoSettingsOutline className={styledIcon} />,
    title: 'Bảo mật',
    path: 'security'
  },
  {
    icon: <IoBookOutline className={styledIcon} />,
    title: 'Quản lí sách',
    path: 'books'
  },
  // {
  //   icon: <HiOutlinePencilSquare className={styledIcon} />,
  //   title: 'Đăng kí môn học',
  //   path: 'course'
  // },
  // {
  //   icon: <RiMoneyDollarCircleLine className={styledIcon} />,
  //   title: 'Payment',
  //   path: 'payment'
  // },
  // {
  //   icon: <BsBasket className={styledIcon} />,
  //   title: 'Order',
  //   path: 'order'
  // },
  // {
  //   icon: <FaRegHeart className={styledIcon} />,
  //   title: 'Wish List',
  //   path: 'wish-list'
  // },
  // {
  //   icon: <GoGift className={styledIcon} />,
  //   title: 'Discount',
  //   path: 'discount'
  // },
  // {
  //   icon: <IoSettingsOutline className={styledIcon} />,
  //   title: 'Setting',
  //   path: 'setting'
  // },
];


const Profile: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/')[2];
  // const { data } = useUser();
  const { logout } = useLogout();

  return (
    <>
      {/* <div className='flex flex-col min-h-screen'>
        <div className='px-[3vw] sm:px-[5vw] md:px-[7vw] lg:px-[9vw] flex-1'>
          <Header /> */}
      <div className='py-10'>
        <div className='flex flex-row gap-1 items-start'>
          <div className='px-3 py-4 bg-[#F9F9F9] border rounded-xl sticky top-3 min-w-[20%]'>
            <div className='flex gap-2 justify-center items-center mb-4'>
              <RxAvatar className='w-10 h-10 object-cover' />
              {/* <p>{data?.data.user.userName}</p> */}
            </div>
            <div className='flex flex-col gap-3'>
              {navigation.map((item, index) => (
                <Link to={item.path}>
                  <button key={index} className={`flex gap-2 items-center py-2 px-3 hover:cursor-pointer ${currentPath === item.path && 'bg-blue-300'} rounded-full w-full group`}>
                    {item.icon}
                    <p className={`text-sm font-light ${currentPath === item.path && 'font-medium'}`}>{item.title}</p>
                  </button>
                </Link>
              ))}
              <button onClick={() => logout()} className={`flex gap-2 items-center py-2 px-3 hover:cursor-pointer rounded-full w-full group`}>
                <CiLogout className={styledIcon} />
                <p className={`text-sm font-light`}>Log out</p>
              </button>
            </div>
          </div>
          <div className='p-4 flex-1'>
            <Outlet />
          </div>
        </div>
      </div>
      {/* </div>
      </div> */}
    </>
  )
}

export default Profile
