export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  techs: string[];
}

export interface ResponseSignInUser {
  success: true;
  message: string;
  user?: User;
}
