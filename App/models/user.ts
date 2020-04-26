export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  techs: string[];
}

export interface ResponseSignInUser {
  success: boolean;
  message: string;
  user?: User;
}

export interface CurrentRegion {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}
