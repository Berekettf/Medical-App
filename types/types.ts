import { UserRole } from "@prisma/client";

export type RegisterInputProps = {
  fullName: string; 
  email: string; 
  password: string; 
  phone: string;
  role: any;
};

export type LoginInputProps = {
  email: string; 
  password: string; 
};

export type ServicesProps = {
  title: string;
  image: string;
  slug: string;
};

export type BiodataFormProps = {
  firstName: string;
  lastName: string;
  middleName?: string;
  dob?: Date;
  gender: string;
  userId?: string;
  trackingNumber: string;
  page: string;
  
};
export type ProfileFormProps = {
  profilePicture?: string;
  bio: string;
  page: string;
  medicalLicense: string;
  medicalLicenseExpiry?: Date;
  userId?: string;
  yearsOfExperiance: number;
};

export type ContactFormProps = {
  email: string;
  phone: string;
  country: string;
  city:string;
  state: string;
  page: string;
  
};

export type EducationalFormProps = {
  medicalSchool: string;
  graduationYear: number;
  primerySpecialization: string;
  otherSpecialities: string[];
  page: string;
};
export type PracticeFormProps = {
  hospitalName: string;
  hospitalAddress: string;
  hospitalContactNumber: string;
  hospitalEmailAddress: string;
  hospitalWebsite?: string;
  hospitalHoursOfOpration: number;
  serviceOfferd: string[];
  insuranceAccepted: string;
  page: string;
};

export type AdditionalFormProps={
  educationHistory: string;
  research: string;
  accomplishment: string;
  additionalDocs: string[];
  page: string;

}