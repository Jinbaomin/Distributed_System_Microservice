import React, { useEffect } from 'react'
import { FaRegUser } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import { PiHouseLineBold } from "react-icons/pi";
import { asset } from '../../../assets/asset';
import Modal from '../../../ui/Modal';
import { useUser } from '../../../features/authentication/userUser';
import { IAccount, IBackendResponse, IUser } from '../../../types/backend';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useUpdateUser } from '../../../features/user/useUpdateUser';
import { SiGoogleclassroom } from "react-icons/si";
import { MdOutlineClass } from "react-icons/md";
import { LiaUniversitySolid } from "react-icons/lia";
import { PiAddressBookLight } from "react-icons/pi";
import FullPage from '../../../ui/FullPage';
import Spinner from '../../../ui/Spinner';

export interface IFormInput {
  name: string;
  email: string;
  phone: string;
  address: string;
  classroom: string;
  faculty: string;
  university: string;
}

const classNameForIcon = 'w-5 h-5 object-cover';

const info = [
  {
    icon: <FaRegUser className={classNameForIcon} />,
    title: 'Họ và tên',
    key: 'name'
  },
  {
    icon: <TfiEmail className={classNameForIcon} />,
    title: 'Địa chỉ Email',
    key: 'email'
  },
  {
    icon: <FiPhone className={classNameForIcon} />,
    title: 'Số điện thoại',
    key: 'phone'
  },
  {
    icon: <PiHouseLineBold className={classNameForIcon} />,
    title: 'Địa chỉ',
    key: 'address'
  },
  // {
  //   icon: <SiGoogleclassroom className={classNameForIcon} />,
  //   title: 'Lớp',
  //   key: 'classroom'
  // },
  // {
  //   icon: <MdOutlineClass className={classNameForIcon} />,
  //   title: 'Khoa',
  //   key: 'faculty'
  // },
  // {
  //   icon: <LiaUniversitySolid className={classNameForIcon} />,
  //   title: 'Đại Học',
  //   key: 'university'
  // }
]

const Profile_Info: React.FC = () => {
  const [showModal, setShowModal] = React.useState(false);
  // const [fullName, setFullName] = React.useState('John Smith');
  // const [email, setEmail] = React.useState('Johnsmith@gmai.com');
  // const [phone, setPhone] = React.useState('+8468372938');

  const switchModal = () => setShowModal(!showModal);
  const { data, isFetching, isPendingUser } = useUser();

  // console.log(data);
  // const data = {
  //   data: {
  //     user: {
  //       userId: '1',
  //       fullName: 'Nguyễn Đoàn Tấn Minh',
  //       email: 'jinbaomin@gmail.com',
  //       phone: '+8468372938'
  //     }
  //   }
  // }

  const { updateUser, isPending, isSuccess } = useUpdateUser();

  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<IFormInput>({
    defaultValues: {
      name: data?.data.name,
      email: data?.data.email,
      phone: data?.data.phone,
      address: data?.data.address,
      classroom: data?.data.classroom,
      faculty: data?.data.faculty,
      university: data?.data.university
    }
  });

  useEffect(() => {
    if (isSuccess && !isPending && !isFetching) {
      reset({
        name: data?.data.name,
        email: data?.data.email,
        phone: data?.data.phone,
        address: data?.data.address
      });
      switchModal();
    }
  }, [isSuccess, isFetching]);

  const handleSubmitForm: SubmitHandler<IFormInput> = ({ name, email, phone, address, faculty, university, classroom }, e) => {
    // console.log({ name, email, phone, address, faculty, university, classroom });
    updateUser({ id: data?.data.id, name, email, phone, address, faculty, university, classroom });
  }

  // if(isPending) {
  //   return (
  //     <FullPage>
  //       <Spinner size={50} />
  //     </FullPage>
  //   )
  // }

  if (isPendingUser) return (
    <FullPage>
      <Spinner size={50} />
    </FullPage>
  )

  return (
    <div>
      <div className='mb-5'>
        <p className='font-medium mb-2'>Thông tin cá nhân</p>
        <p className='font-light text-sm'>Quản lí thông tin cá nhân</p>
      </div>

      <div>
        <div className='grid grid-cols-2 gap-4'>
          {info.map((item, index) => (
            <div key={index} className=''>
              <label className='text-sm font-medium pl-2'>{item.title}</label>
              <div className='flex justify-between items-center px-2 py-[10px] bg-[#F9F9F9] rounded-xl border'>
                <div className='flex items-center gap-2 flex-1'>
                  {item.icon}
                  <input type='text' value={data?.data[item.key as keyof IFormInput]} className='bg-[#F9F9F9] flex-1 focus:outline-none text-sm font-normal' readOnly />
                </div>
                <div>
                  <button onClick={switchModal} className='hover:cursor-pointer'>
                    <img src={asset.edit} className='w-5 h-5 object-cover outline-none focus:outline-none' />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <Modal onClose={switchModal}>
          <div className='py-4 px-2'>
            <div className='text-center'>
              <p className='font-semibold text-2xl mb-4'>Thay đổi thông tin các nhân</p>
            </div>
            <div className=''>
              <form onSubmit={handleSubmit(handleSubmitForm)} className='grid grid-cols-2 gap-3'>
                <div>
                  <label className='pl-3 text-sm mb-1'>Họ và tên</label>
                  <div className='relative'>
                    <input {...register('name')} value={watch('name')} type='text' placeholder='Full Name' className='h-10 bg-[#F6F6F6] rounded-lg focus:outline-none focus:ring-2 border pl-9 pe-3 py-3 text-xs w-full' />
                    <FaRegUser className='absolute top-3 left-3' />
                  </div>
                </div>
                <div>
                  <label className='pl-3 text-sm mb-1'>Email</label>
                  <div className='relative'>
                    <input {...register('email')} type='text' placeholder='Email' value={watch('email')} className='h-10 bg-[#F6F6F6] rounded-lg focus:outline-none focus:ring-2 border pl-9 pe-3 py-3 text-xs w-full' />
                    <TfiEmail className='absolute top-3 left-3' />
                  </div>
                </div>
                <div>
                  <label className='pl-3 text-sm mb-1'>Số điện thoại</label>
                  <div className='relative'>
                    <input {...register('phone')} type='text' placeholder='Phone' value={watch('phone')} className='h-10 bg-[#F6F6F6] rounded-lg focus:outline-none focus:ring-2 border pl-9 pe-3 py-3 text-xs w-full' />
                    <FiPhone className='absolute top-3 left-3' />
                  </div>
                </div>
                <div>
                  <label className='pl-3 text-sm mb-1'>Địa chỉ</label>
                  <div className='relative'>
                    <input {...register('address')} type='text' placeholder='Phone' value={watch('address')} className='h-10 bg-[#F6F6F6] rounded-lg focus:outline-none focus:ring-2 border pl-9 pe-3 py-3 text-xs w-full' />
                    <PiHouseLineBold className='absolute top-3 left-3' />
                  </div>
                </div>
                {/* <div>
                  <label className='pl-3 text-sm mb-1'>Lớp</label>
                  <div className='relative'>
                    <input {...register('classroom')} type='text' placeholder='Classroom' value={watch('classroom')} className='h-10 bg-[#F6F6F6] rounded-lg focus:outline-none focus:ring-2 border pl-9 pe-3 py-3 text-xs w-full' />
                    <SiGoogleclassroom className='absolute top-3 left-3' />
                  </div>
                </div>
                <div>
                  <label className='pl-3 text-sm mb-1'>Khoa</label>
                  <div className='relative'>
                    <input {...register('faculty')} type='text' placeholder='Faculty' value={watch('faculty')} className='h-10 bg-[#F6F6F6] rounded-lg focus:outline-none focus:ring-2 border pl-9 pe-3 py-3 text-xs w-full' />
                    <MdOutlineClass className='absolute top-3 left-3' />
                  </div>
                </div>
                <div>
                  <label className='pl-3 text-sm mb-1'>Đại Học</label>
                  <div className='relative'>
                    <input {...register('university')} type='text' placeholder='University' value={watch('university')} className='h-10 bg-[#F6F6F6] rounded-lg focus:outline-none focus:ring-2 border pl-9 pe-3 py-3 text-xs w-full' />
                    <LiaUniversitySolid className='absolute top-3 left-3' />
                  </div>
                </div> */}
                <button className='col-span-2 mt-3 font-medium flex justify-center text-sm focus:outline-none'>
                  {isPending ? (
                    <>
                      <p className=' flex gap-2 justify-center w-[50%] bg-blue-500 text-white py-2 px-3 rounded-full'>
                        <Spinner size={15} />
                        Loading...
                      </p>
                    </>
                  ) : (
                    <p className='w-[50%] bg-blue-500 text-white py-2 px-3 rounded-full'>Change and save</p>
                  )}

                </button>
              </form>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default Profile_Info;
