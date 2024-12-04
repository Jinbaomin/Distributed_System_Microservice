import React from 'react'
import { CiUser } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { asset } from '../../assets/asset';
import { Link, useNavigate } from 'react-router-dom';
import { CiLogout } from "react-icons/ci";
import { Dropdown, Space } from 'antd';
import { TbUserEdit } from 'react-icons/tb';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { useLogout } from '../../features/authentication/useLogout';
import { log } from 'console';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { useUser } from '../../features/authentication/userUser';
import FullPage from '../../ui/FullPage';
import Spinner from '../../ui/Spinner';

const ItemNofication = [
  {
    key: '1',
    label: (
      <p>Content 1</p>
    )
  },
  {
    key: '2',
    label: (
      <p>Content 2</p>
    )
  },
  {
    key: '3',
    label: (
      <p>Content 3</p>
    )
  }
]

const navigation = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: "Product",
    path: '/product'
  },
  {
    title: 'Contact',
    path: '/contact'
  },
  {
    title: 'Blog',
    path: '/blog'
  }
]

const Header: React.FC = () => {
  // const [authenticated, setAuthenticated] = React.useState(true);
  const navigate = useNavigate();

  // const { data, isFetching } = useUser();
  const { logout, isPending } = useLogout();

  const handleLogOut = (e?: Event) => {
    // e?.preventDefault();
    logout();
  }

  const ItemUser = [
    {
      key: '1',
      label: (
        <Link className='flex gap-2 items-center' to={'/profile'}>
          <TbUserEdit className='w-4 h-4 object-cover hover:cursor-pointer' />
          Profile
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link onClick={(e?: any) => handleLogOut(e)} className='flex gap-2 items-center' to={'/login'}>
          <CiLogout className='w-4 h-4 object-cover hover:cursor-pointer' />
          <p>Log out</p>
        </Link>
      )
    },
  ];

  return (
    <div className='py-4 flex flex-col items-center justify-center border-b border-slate-400 gap-2'>
      <h1 className='font-bold text-4xl'>Hệ thống quản lí sách</h1>
      {/* <p>{data?.data.name}</p> */}
      {/* <div className='w-20 flex items-center gap-3 hover:cursor-pointer' onClick={() => navigate('/')}>
        <img src={asset.logo} className='h-8 w-8 object-cover' />
        <h1 className='font-extrabold text-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>TECH4</h1>
      </div> */}
      {/* <div className='flex gap-7'>
        {navigation.map((item, index) => (
          <Link to={item.path} key={index} className='hover:cursor-pointer relative overflow-hidden group'>
            <p className='text-base group-hover:-translate-y-1 transition-all'>{item.title}</p>
            <span className='h-[1px] w-100% block bg-slate-500 translate-y-2 group-hover:-translate-y-1 transition-all duration-[0.9s]'></span>
          </Link>
        ))}
      </div> */}
      <div className='flex items-center gap-6'>
        {/* <CiSearch className='w-6 h-6 object-cover hover:cursor-pointer' />
        <div onClick={() => navigate('/cart')} className='relative'>
          <BsCart2 className='w-6 h-6 object-cover hover:cursor-pointer' />
          <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full'>
            {0 > 9 ? '9+' : 0}
          </span>
        </div>
        <div>
          <Dropdown
            menu={{
              items: ItemNofication,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <IoMdNotificationsOutline className='w-6 h-6 object-cover hover:cursor-pointer' />
              </Space>
            </a>
          </Dropdown>
        </div> */}
        {/* {
          data?.data?.user.roles.includes('ADMIN') && (
            <Link to={'/admin'}>
              <MdOutlineAdminPanelSettings className='w-6 h-6 object-cover hover:cursor-pointer' />
            </Link>
          )
        }
        <Dropdown
          menu={{
            items: ItemUser,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <CiUser className='w-6 h-6 object-cover hover:cursor-pointer' />
            </Space>
          </a>
        </Dropdown> */}
      </div>
    </div>
  )
}

export default Header;
