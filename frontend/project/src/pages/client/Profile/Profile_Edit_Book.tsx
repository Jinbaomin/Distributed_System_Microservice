import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IBook } from '../../../types/backend';
import { useCreateBook } from '../../../features/book/useCreateBook';
import Spinner from '../../../ui/Spinner';
import { useBook } from '../../../features/book/useBook';
import { useBookById } from '../../../features/book/useBookById';
import { isExternal } from 'util/types';
import FullPage from '../../../ui/FullPage';
import { useUpdateBook } from '../../../features/book/useUpdateBook';
import { useNavigate } from 'react-router';
import { IoArrowBack } from 'react-icons/io5';



const Profile_Edit_Book: React.FC = () => {
  const { updateBook, isPending, isSuccess } = useUpdateBook();
  const { data, isFetching } = useBookById();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<IBook>({
    defaultValues: {
      title: data?.data.title,
      author: data?.data.author,
      company: data?.data.company,
      manufacturer: data?.data.manufacturer,
      published_year: data?.data.published_year,
      pages: data?.data.pages,
      rating: data?.data.rating,
      imageUrl: data?.data.imageUrl,
      description: data?.data.description
    }
  });

  const handleSubmitForm: SubmitHandler<IBook> = (data) => {
    updateBook(data);
  }

  if (isFetching) {
    return <FullPage>
      <Spinner size={50} />
    </FullPage>
  }


  return (
    <div>
      <button onClick={() => navigate(-1)} className='p-1 border-2 rounded-lg hover:opacity-70 mb-2'>
        <IoArrowBack className='w-7 h-7' />
      </button>
      <h1 className='text-center font-semibold text-3xl mb-3'>Thông tin sách</h1>
      <div>
        <form onSubmit={handleSubmit(handleSubmitForm)} className='grid grid-cols-2 gap-3'>
          <div>
            <label className='pl-3 text-sm mb-1'>Tiêu đề</label>
            <div className='relative'>
              <input {...register('title')} type='text' placeholder='Full Name' className='h-10 bg-[#F6F6F6] rounded-lg focus:outline-none focus:ring-2 border p-3 text-xs w-full' />
            </div>
          </div>
          <div>
            <label className='pl-3 text-sm mb-1'>Tác giả</label>
            <div className='relative'>
              <input {...register('author')} type='text' placeholder='Tác giả' className='h-10 bg-[#F6F6F6] rounded-lg focus:outline-none focus:ring-2 border p-3 text-xs w-full' />
            </div>
          </div>
          <div>
            <label className='pl-3 text-sm mb-1'>Công ty phát hành</label>
            <div className='relative'>
              <input {...register('company')} type='text' placeholder='Company' className='h-10 bg-[#F6F6F6] rounded-lg focus:outline-none focus:ring-2 border p-3 text-xs w-full' />
            </div>
          </div>
          <div>
            <label className='pl-3 text-sm mb-1'>Nhà xuất bản</label>
            <div className='relative'>
              <input {...register('manufacturer')} type='text' placeholder='Nhà xuất bản' className='h-10 bg-[#F6F6F6] rounded-lg focus:outline-none focus:ring-2 border p-3 text-xs w-full' />
            </div>
          </div>
          <div>
            <label className='pl-3 text-sm mb-1'>Năm xuất bản</label>
            <div className='relative'>
              <input {...register('published_year')} type='number' placeholder='Năm xuất bản' className='h-10 bg-[#F6F6F6] rounded-lg focus:outline-none focus:ring-2 border p-3 text-xs w-full' />
            </div>
          </div>
          <div>
            <label className='pl-3 text-sm mb-1'>Số trang</label>
            <div className='relative'>
              <input {...register('pages')} type='number' placeholder='Số trang' className='h-10 bg-[#F6F6F6] rounded-lg focus:outline-none focus:ring-2 border p-3 text-xs w-full' />
            </div>
          </div>
          <div>
            <label className='pl-3 text-sm mb-1'>Đánh giá (sao)</label>
            <div className='relative'>
              <input {...register('rating')} type='number' placeholder='Đánh giá' className='h-10 bg-[#F6F6F6] rounded-lg focus:outline-none focus:ring-2 border p-3 text-xs w-full' />
            </div>
          </div>
          <div>
            <label className='pl-3 text-sm mb-1'>Image URL</label>
            <div className='relative'>
              <input {...register('imageUrl')} type='text' placeholder='ImageURL' className='h-10 bg-[#F6F6F6] rounded-lg focus:outline-none focus:ring-2 border p-3 text-xs w-full' />
            </div>
          </div>
          <div className='flex flex-col col-span-2'>
            <label className='pl-3 text-sm mb-1'>Mô tả</label>
            <textarea placeholder='Mô Tả' {...register('description')} className='focus:outline-none focus:ring-2 p-2 text-xs rounded-lg bg-[#F6F6F6] border h-[100px]'>
              {/* <input  type='text' placeholder='Full Name' className='h-10 bg-[#F6F6F6] rounded-lg focus:outline-none focus:ring-2 border p-3 text-xs w-full' /> */}
            </textarea>
          </div>
          <div className='col-span-2 flex justify-end'>
            <button className='px-2 py-1 focus:outline-none bg-blue-500 hover:bg-blue-600 ms-2 rounded-lg text-white flex gap-2'>
              {isPending ? <><Spinner size={15} /> Loading...</> : 'Cập Nhập'}
              {/* Cập Nhập */}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Profile_Edit_Book;
