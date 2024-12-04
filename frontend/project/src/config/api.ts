import { useSearchParams } from "react-router-dom";
import { IAccount, IBackendResponse, IBook, IGetAccount, ISubject, IUser } from "../types/backend";
import { instance as axios } from "./axios-customize";

const portAuth = 8000;
const portReview = 8001;
const portBook = 8002;

// Module Auth
export const callRegister = async (name: string, email: string, phone: string, address: string, classroom: string, faculty: string, university: string, password: string) => {
  return await axios.post<IBackendResponse<IUser>>(`http://localhost:8002/auth/register`, { name, email, phone, address, classroom, faculty, university, password });
}

export const callLogin = async (email: string, password: string) => {
  return await axios.post<IBackendResponse<IAccount>>(`http://localhost:8002/auth/login`, { email, password });
}

export const callCurrentUser = async () => {
  return await axios.get<IBackendResponse<IAccount>>(`http://localhost:8002/auth/account`);
}

export const callVerifyEmail = async (email: string) => {
  return axios.post<IBackendResponse<{ email: string }>>('/auth/otp/generate', { email });
}

export const callVerifyOTP = async (email: string, otp: string) => {
  return axios.post<IBackendResponse<{ isValid: boolean }>>('/auth/otp/validate', { email, otp });
}

export const callResetPassword = async (email: string, newPassword: string) => {
  return axios.post<IBackendResponse<{ email: string }>>('/auth/password', { email, newPassword });
}

export const callLogout = async () => {
  return axios.post<IBackendResponse<any>>('http://localhost:8002/auth/logout');
}

// Module User
export const callChangePassword = async (oldPassword: string, newPassword: string) => {
  return axios.post('http://localhost:8002/auth/password', { oldPassword, newPassword });
}

export const callUpdateUser = async (id: string, name: string, email: string, phone: string, address: string, classroom: string, faculty: string, university: string) => {
  return axios.put<IBackendResponse<IAccount>>(`http://localhost:8002/user`, { name, email, phone, address, classroom, faculty, university });
}

// Module Course
export const callGetMyCourse = async () => {
  return axios.get<IBackendResponse<IGetAccount>>(`/user/courses`);
}

export const callMyCourseBySubject = async () => {
  const subjectId = window.location.pathname.split('/')[3];
  return axios.get<IBackendResponse<IGetAccount>>(`/subject/${subjectId}/courses`);
}

export const callEnrollCourse = async (courseId: string) => {
  return axios.post<IBackendResponse<any>>(`/user/course/${courseId}`);
}

export const callDisenrollCourse = async (courseId: string) => {
  return axios.delete<IBackendResponse<any>>(`/user/course/${courseId}`);
}

// Module Subject
export const callGetAllSubject = async () => {
  return axios.get<IBackendResponse<ISubject[]>>(`/subjects`);
}

// Module Book
export const callGetAllBook = async (query: string) => {
  return axios.get<IBackendResponse<IBook[]>>(`http://localhost:8000/api/books?${query}`);
}

export const callCreateBook = async (title: string, author: string, company: string, manufacturer: string, published_year: number, pages: number, rating: number, imageUrl: string, description: string) => {
  return axios.post<IBackendResponse<IBook>>(`http://localhost:8000/api/books`, { title, author, company, manufacturer, published_year, pages, rating, imageUrl, description });
}

export const callUpdateBook = async (id: string, title: string, author: string, company: string, manufacturer: string, published_year: number, pages: number, rating: number, imageUrl: string, description: string) => {
  return axios.put<IBackendResponse<IBook>>(`http://localhost:8000/api/book/${id}`, { title, author, company, manufacturer, published_year, pages, rating, imageUrl, description });
}

export const callGetBookByID = async (bookId: string) => {
  return axios.get<IBackendResponse<IBook>>(`http://localhost:8000/api/book/${bookId}`);
}

export const callDeleteBook = async (bookId: string) => {
  return axios.delete<IBackendResponse<any>>(`http://localhost:8000/api/book/${bookId}`);
}