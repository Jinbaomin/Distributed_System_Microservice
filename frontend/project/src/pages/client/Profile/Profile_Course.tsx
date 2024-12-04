import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useMyCourse } from '../../../features/course/useMyCourse';
import FullPage from '../../../ui/FullPage';
import Spinner from '../../../ui/Spinner';
import { useSubject } from '../../../features/subject/useSubject';
import { useDisenrollCourse } from '../../../features/course/useDisenrollCourse';

const course = [
  {
    id: 1,
    name: 'Javascript',
    credit: 3
  },
  {
    id: 2,
    name: 'React',
    credit: 3
  },
  {
    id: 3,
    name: 'Nodejs',
    credit: 3
  }
];

const registered_course = [
  {
    id: 4,
    name: 'Python',
    credit: 4
  },
  {
    id: 5,
    name: 'Java',
    credit: 2
  }
]

const Profile_Course: React.FC = () => {
  const navigate = useNavigate();
  const [semester, setSemester] = useState('1');
  const { disenroll } = useDisenrollCourse();
  const handleChangeSemester = (e: any) => {
    setSemester(e.target.value);
  }

  const { data: courses, isFetching: isFetchingCourse } = useMyCourse();
  const { data: dataSubject, isFetching: isFetchingSubject } = useSubject();
  let myCourse = courses?.data || [];
  const subjectId = myCourse?.map((item) => item.subject.id);

  let subjects = dataSubject?.data.filter((item) => !subjectId.includes(item.id) && item.semester === semester) || [];

  myCourse = myCourse.filter((item) => item.subject.semester === semester);

  if (isFetchingCourse || isFetchingSubject) return (
    <FullPage>
      <Spinner size={50} />
    </FullPage>
  )

  return (
    <div>
      <h1 className='font-semibold text-2xl text-center'>Danh sách các môn học chưa đăng kí</h1>
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
        {subjects.map((item) => (
          <div key={item.id} className='flex justify-between items-center px-4 py-3 border rounded-xl'>
            <div>
              <p>Môn học: <span className='font-semibold'>{item.name}</span></p>
              <p>Số tín chỉ: <span className='font-semibold'>{item.credit}</span></p>
              <p>Kì học: <span className='font-semibold'>{item.semester}</span></p>
            </div>
            <div>
              <button onClick={() => navigate(`${item.id}`)} className='px-3 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white'>Chi tiết môn học</button>
            </div>
          </div>
        ))}
      </div>
      <hr />
      <h1 className='font-semibold text-2xl mt-4 text-center'>Danh sách các môn học đã đăng kí</h1>
      <div className='flex flex-col gap-3 my-4'>
        {myCourse.map((item) => (
          <div key={item.id} className='flex justify-between items-center px-4 py-3 border rounded-xl'>
            <div>
              <p>Môn học: <span className='font-semibold'>{item.subject.name}</span></p>
              <p>Số tín chỉ: <span className='font-semibold'>{item.subject.credit}</span></p>
              <p>Học kì: <span className='font-semibold'>{item.subject.semester}</span></p>
            </div>
            <div>
              <button onClick={() => disenroll({ courseId: item.id })} className='px-3 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white'>Hủy Đăng Kí</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Profile_Course
