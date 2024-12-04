import React, { useEffect, useState } from 'react'
import Modal from '../../../ui/Modal';
import { useMyCourse } from '../../../features/course/useMyCourse';
import FullPage from '../../../ui/FullPage';
import Spinner from '../../../ui/Spinner';
import { useQueryClient } from '@tanstack/react-query';

const my_course = [
  {
    id: 14,
    instructor: "Nguyen Van A",
    classroom: "B3-201",
    schedule: "Thứ 2, 14:00 - 16:00",
    semester: "7",
    subject: {
      id: 1,
      name: "Javascript",
      credit: "4"
    },
    grade: "9.00",
    middle: null
  }
]

const Profile_My_Course: React.FC = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const handleShowModal = () => setIsShowModal(!isShowModal);
  const [semester, setSemester] = useState('1');

  const { data, isFetching } = useMyCourse();

  let courses = data?.data || [];

  const handleChangeSemester = (e: any) => {
    setSemester(e.target.value);
  }

  courses = courses.filter((item) => item.subject.semester === semester);


  if (isFetching) return (
    <FullPage>
      <Spinner size={50} />
    </FullPage>
  )

  if(!courses.length) return (
    <p className='text-center'>Không có môn học nào</p>
  )

  return (
    <div>
      <h1 className='font-semibold text-2xl text-center'>Môn học của tôi</h1>
      <div className='flex justify-end items-center'>
        <label className='font-semibold'>Học kỳ:&nbsp;</label>
        <select onChange={(e) => handleChangeSemester(e)} value={semester} className='border px-2 py-1 rounded-lg'>
          <option value={'1'}>1</option>
          <option value={'2'}>2</option>
          <option value={'3'}>3</option>
          <option value={'4'}>4</option>
          <option value={'5'}>5</option>
          <option value={'6'}>6</option>
          <option value={'7'}>7</option>
          <option value={'8'}>8</option>
        </select>
      </div>
      <div className='flex flex-col gap-3 my-4'>
        {courses.map((item) => (
          <div>
            <div key={item.id} className='flex justify-between items-center px-4 py-3 border rounded-xl'>
              <div>
                <p>Môn Học: <span className='font-medium'>{item.subject.name}</span></p>
                <p>Tín chỉ: <span className='font-medium'>{item.subject.credit}</span></p>
                <p>Kì học: <span className='font-medium'>{item.subject.semester}</span></p>
                <p>Giảng viên: <span className='font-medium'>{item.instructor}</span></p>
                <p>Phòng học: <span className='font-medium'>{item.classroom}</span></p>
                <p>Lịch học: <span className='font-medium'>{item.schedule}</span></p>
              </div>
              <div>
                <button onClick={() => handleShowModal()} className='px-3 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white'>Điểm chi tiết</button>
              </div>
              {isShowModal && (
                <Modal onClose={handleShowModal}>
                  <div className='py-4 px-2'>
                    <div className='text-center'>
                      <p className='font-semibold text-2xl mb-4'>Điểm chi tiết</p>
                    </div>
                    <div className='grid grid-cols-4 px-2 py-3 border rounded-xl divide-x divide-gray-700'>
                      <p className='text-center'>Chuyên cần: <span>{item.grade}</span></p>
                      <p className='text-center'>Giữa kỳ: <span>{item.middterm}</span></p>
                      <p className='text-center'>Cuối kỳ: <span>{item.final}</span></p>
                      <p className='text-center font-bold'>Tổng kết: <span>{ }</span></p>
                    </div>
                  </div>
                </Modal>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Profile_My_Course
