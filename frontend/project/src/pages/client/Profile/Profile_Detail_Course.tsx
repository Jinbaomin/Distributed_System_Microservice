import React from 'react'
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router';
import { useMyCourseBySubject } from '../../../features/course/useCourseBySubject';
import FullPage from '../../../ui/FullPage';
import Spinner from '../../../ui/Spinner';
import { useMyCourse } from '../../../features/course/useMyCourse';
import { useEnrollCourse } from '../../../features/course/useEnrollCourse';

const detail_courses = [
  {
    id: 16,
    instructor: 'Nguyen Van A',
    classroom: 'B3-201',
    schedule: 'Thứ 2, 14:00 - 16:00'
  },
  {
    id: 20,
    instructor: 'Nguyen Van B',
    classroom: 'B3-202',
    schedule: 'Thứ 3, 14:00 - 17:00'
  }
]

const Profile_Detail_Course = () => {
  const navigate = useNavigate();

  const { data, isFetching } = useMyCourseBySubject();
  const { enroll } = useEnrollCourse();

  let courses = data?.data || [];

  if (isFetching) return (
    <FullPage>
      <Spinner size={50} />
    </FullPage>
  )

  return (
    <div>
      <button onClick={() => navigate(-1)} className='p-1 border-2 rounded-lg hover:opacity-70'>
        <IoArrowBack className='w-7 h-7' />
      </button>
      <div className='flex flex-col gap-3 mt-3'>
        {courses.map((item) => (
          <div>
            <div key={item.id} className='flex justify-between items-center px-4 py-3 border rounded-xl'>
              <div>
                <p>Giảng viên: <span className='font-medium'>{item.instructor}</span></p>
                <p>Phòng học: <span className='font-medium'>{item.classroom}</span></p>
                <p>Lịch học: <span className='font-medium'>{item.schedule}</span></p>
              </div>
              <div>
                <button onClick={() => enroll({ courseId: item.id })} className='px-3 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white'>Đăng kí</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Profile_Detail_Course
