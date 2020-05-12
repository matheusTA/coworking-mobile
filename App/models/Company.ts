export interface Company {
  _id: string;
  email: string;
  name: string;
  linkedin: string;
  logo: string;
  street: string;
  number: string;
  complement: string;
  phone: string;
  location: Location;
  techs: string[];
  spots: Spot[];
}

export interface Spot {
  _id: string;
  image: string;
  price: string;
  name: string;
}

export interface Location {
  _id: string;
  coordinates: number[];
  type: string;
}

export interface ResponseCompaniesByLocation {
  success: boolean;
  companies: Company[];
}

export interface ResponseCompanyById {
  success: boolean;
  company: Company;
}
