export interface IBackendResponse<T> {
  status: number;
  message: string;
  data: T;
}

export interface IAccount {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  classroom: string;
  faculty: string;
  university: string;
}

export interface ILoginResponse {
  token: string;
}

export interface IMyCourse {
  id: string;
  instructor: string;
  classroom: string;
  schedule: string;
  subject: {
    id: string;
    name: string;
    credit: string;
    semester: string;
  },
  grade: string;
  middterm: string;
  final: string;
}

export interface ISubject {
  id: string;
  name: string;
  credit: string;
  semester: string;
}

// export interface IUser extends Pick<IAccount, 'user'> { };

export interface IGetAccount extends Omit<IAccount, 'access_token'> { }

export interface IUser {
  userId: string;
  fullName: string;
  userName: string;
  email: string;
  phone: string;
  roles: ["ADMIN" | "USER"];
  createdDate: string;
  lastModifiedDate: string;
  modifiedBy: string;
}

export interface IReview {
  id: number;
  name: string;
  rating: number;
  comment: string;
}

export interface IBook {
  id: number;
  title: string;
  author: string;
  published_year: number;
  imageUrl: string;
  description: string;
  company: string;
  manufacturer: string;
  pages: number;
  rating: number;
  reviews: IReview[];
}