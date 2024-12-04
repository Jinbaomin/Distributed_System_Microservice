import React from 'react'
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router';
import Stars from '../../../ui/Stars';
import { useBookById } from '../../../features/book/useBookById';
import FullPage from '../../../ui/FullPage';
import Spinner from '../../../ui/Spinner';

// const book = {
//   id: 1,
//   title: "Atomic Habits: An Easy & Proven Way To Build Good Habits & Break Bad Ones",
//   author: "Jame Clear",
//   rating: 4,
//   company: "Penguin Random House LLC",
//   manufacturer: "William Collins",
//   published_year: 2012,
//   imageUrl: "https://salt.tikicdn.com/cache/750x750/ts/product/5e/cd/08/7c2853c447bec11c57cb66dccb0cdd32.jpg.webp",
//   description: "Xây dựng thói quen tích cực thông qua những thay đổi nhỏ. Dựa trên nghiên cứu tiên tiến về tâm lý học và thần kinh học. Cung cấp câu chuyện truyền cảm hứng từ những người thành công.",
//   pages: 110,
//   reviews: [
//     {
//       id: 1,
//       name: "Nguyễn Văn A",
//       rating: 4,
//       comment: "Sách rất hay"
//     },
//     {
//       id: 2,
//       name: "Nguyễn Văn B",
//       rating: 5,
//       comment: "Đọc rất cuốn"
//     }
//   ]
// };

const Profile_Detail_Book: React.FC = () => {
  const navigate = useNavigate();
  const { data, isFetching } = useBookById();

  if (isFetching) {
    return (
      <FullPage>
        <Spinner size={50} />
      </FullPage>
    )
  }

  const book = data?.data;

  return (
    <div className=''>
      <button onClick={() => navigate(-1)} className='p-1 border-2 rounded-lg hover:opacity-70 mb-2'>
        <IoArrowBack className='w-7 h-7' />
      </button>
      <div className='bg-[#F9F9F9] pb-4'>
        <div className='grid grid-cols-3 gap-4 py-6 px-3'>
          <div className='w-[100%]'>
            <img src={book?.imageUrl} className='w-64 h-64 object-cover' />
          </div>
          <div className='bg-white py-1 px-3 space-y-[5px] col-span-2'>
            <p className='font-medium text-lg'>{book?.title}</p>
            <div className='flex gap-2 items-center'><Stars rating={book?.rating} /> ({book?.rating})</div>
            <hr />
            <p className='font-light text-sm'>Tác giả: <span className='font-normal'>{book?.author}</span></p>
            <p className='font-light text-sm'>Công ty phát hành: <span className='font-normal'>{book?.company}</span></p>
            <p className='font-light text-sm'>Nhà xuất bản: <span className='font-normal'>{book?.manufacturer}</span></p>
            <p className='font-light text-sm'>Số trang: <span className='font-normal'>{book?.pages}</span></p>
            <p className='font-light text-sm'>
              Năm xuất bản: <span className='font-normal'>{book?.published_year}</span>
            </p>
            <p className='font-light text-sm'>
              Miêu tả cuốn sách:
              <br />
              <span className='font-normal'>
                - {book?.description}
              </span>
            </p>
          </div>
        </div>
        <div>
          <h1 className='font-semibold text-2xl text-center'>Đánh giá</h1>
          <div className=''>
            {book?.reviews.map(review => (
              <div className='flex justify-between items-center px-2 py-3 bg-[#F9F9F9] my-2 mx-4 border rounded-lg'>
                <div className='flex gap-2 w-[80%]'>
                  <div className='space-y-1'>
                    <p className='text-lg font-medium'>{review.name}</p>
                    <Stars rating={review.rating} />
                    <p className='text-sm'>{review.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile_Detail_Book
