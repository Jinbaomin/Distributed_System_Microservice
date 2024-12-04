import { useState } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useBook } from '../../../features/book/useBook'
import FullPage from '../../../ui/FullPage'
import Spinner from '../../../ui/Spinner'
import { set, SubmitHandler, useForm } from 'react-hook-form'
import { useQueryClient } from '@tanstack/react-query'
import { FaRegEye } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { FaRegTrashCan } from "react-icons/fa6";
import { useDeleteBook } from '../../../features/book/useDeleteBook'

const books = [
  {
    id: 1,
    title: "Atomic Habits: An Easy & Proven Way To Build Good Habits & Break Bad Ones",
    author: "Jame Clear",
    published_year: 2012,
    imageUrl: "https://salt.tikicdn.com/cache/750x750/ts/product/5e/cd/08/7c2853c447bec11c57cb66dccb0cdd32.jpg.webp",
    description: "Xây dựng thói quen tích cực thông qua những thay đổi nhỏ. Dựa trên nghiên cứu tiên tiến về tâm lý học và thần kinh học. Cung cấp câu chuyện truyền cảm hứng từ những người thành công."
  },
  {
    id: 2,
    title: "Grit: The Power of Passion and Perseverance",
    author: "Angela Post",
    published_year: 2014,
    imageUrl: "https://salt.tikicdn.com/cache/750x750/ts/product/8e/b3/a9/ca510b3e215fc7d4f6da7d9bd156dec0.jpg.webp",
    description: "Xây dựng thói quen tích cực thông qua những thay đổi nhỏ. Dựa trên nghiên cứu tiên tiến về tâm lý học và thần kinh học. Cung cấp câu chuyện truyền cảm hứng từ những người thành công."
  },
  {
    id: 3,
    title: "Group Genius: The Creative Power Of Collaboration",
    author: "Angela Post",
    published_year: 2015,
    imageUrl: "https://salt.tikicdn.com/cache/750x750/ts/product/82/94/b6/461afce13612f8c20b17f0f4fd86cccd.jpg.webp",
    description: "Xây dựng thói quen tích cực thông qua những thay đổi nhỏ. Dựa trên nghiên cứu tiên tiến về tâm lý học và thần kinh học. Cung cấp câu chuyện truyền cảm hứng từ những người thành công."
  },
  {
    id: 3,
    title: "Sách tâm lý/kỹ năng sống tiếng Anh: The Daily Stoic : 366 Meditations on Wisdom, Perseverance, and the Art of Living: Featuring new translations of Seneca, Epictetus, and Marcus Aurelius",
    author: "Stephen Hanselman",
    published_year: 2015,
    imageUrl: "https://salt.tikicdn.com/cache/750x750/ts/product/f4/5e/d9/5eb77de56470bbfb751507927e484bf9.jpg.webp",
    description: "Xây dựng thói quen tích cực thông qua những thay đổi nhỏ. Dựa trên nghiên cứu tiên tiến về tâm lý học và thần kinh học. Cung cấp câu chuyện truyền cảm hứng từ những người thành công."
  },
]

interface ISearch {
  filter: string;
}

const Profile_Book: React.FC = () => {
  const navigate = useNavigate();
  const { data, isFetching, isLoading } = useBook();
  const [params, setParams] = useSearchParams();
  const { deleteBook, isPending } = useDeleteBook();

  const { register, handleSubmit } = useForm<ISearch>({
    defaultValues: {
      filter: ''
    }
  });

  const handleSubmitForm: SubmitHandler<ISearch> = ({ filter }) => {
    setParams({ filter, sortBy: 'created_at,asc' });
  }

  const handleChange = (e: any) => {
    setParams({ filter: "", sortBy: e.target.value });
  }

  const handleDeleteBook = (bookId: string) => {
    deleteBook({ bookId });
  }

  if (isLoading) {
    return (
      <FullPage>
        <Spinner size={50} />
      </FullPage>
    )
  }

  return (
    <div className=''>
      <h1 className='font-semibold text-2xl text-center'>Danh sách tài nguyên</h1>
      <div className='flex justify-between my-4'>
        <form onSubmit={handleSubmit(handleSubmitForm)} className='w-[50%]'>
          <label>Tên sách: &nbsp;</label>
          <input {...register('filter')} className='w-[50%] focus:outline-none px-2 py-1 border rounded-lg focus:ring-2 text-sm' type='text' placeholder='Tên sách cần tìm' />
          <button className='px-2 py-1 focus:outline-none bg-blue-500 hover:bg-blue-600 ms-2 rounded-lg text-white'>Tìm kiếm</button>
        </form>
        <div>
          <label className='mr-2'>Sắp xếp theo</label>
          <select onChange={(e) => handleChange(e)} className='focus:outline-none border px-2 py-1 rounded-lg'>
            <option value='created_at,asc'>All</option>
            <option value='rating,asc'>Đánh giá tăng dần</option>
            <option value='rating,desc'>Đánh giá giảm dần</option>
            <option value='published_year,asc'>Năm xuất bản tăng dần</option>
            <option value='published_year,desc'>Năm xuất bản giảm dần</option>
          </select>
        </div>
      </div>
      <div className='flex justify-end mb-3'>
        <button onClick={() => navigate('/main/book/new')} className='px-2 py-1 focus:outline-none bg-blue-500 hover:bg-blue-600 ms-2 rounded-lg text-white'>+ Tạo sách mới</button>
      </div>
      <div className='space-y-3'>
        {data?.data.map(book => (
          <div className='flex items-center justify-between px-2 py-3 border rounded-lg hover:shadow-lg bg-[#F9F9F9]'>
            <Link to={`/main/book/${book.id}`} className='flex gap-2 w-[80%]'>
              <img className='w-32 h-32 object-cover' src={book.imageUrl} />
              <div className='w-[100%]'>
                <p className="line-clamp-1 text-lg font-medium">{book.title}</p>
              </div>
            </Link>
            <div className='w-[20%] flex justify-end pe-3 gap-3'>
              {/* <Link to={`/main/book/${book.id}`} className='px-2 py-1 hover:cursor-pointer focus:outline-none bg-blue-500 hover:bg-blue-600 rounded-lg text-white'>
                <FaRegEye />
              </Link> */}
              <Link to={`/main/book/${book.id}/edit`} className='px-2 py-1 hover:cursor-pointer focus:outline-none bg-blue-500 hover:bg-blue-600 rounded-lg text-white'>
                <LuPencil />
              </Link>
              <button onClick={() => handleDeleteBook(String(book.id))} className='px-2 py-1 hover:cursor-pointer focus:outline-none bg-red-500 hover:bg-red-600 rounded-lg text-white'>
                <FaRegTrashCan />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Profile_Book
