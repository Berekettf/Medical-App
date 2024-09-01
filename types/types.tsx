import { UserRole } from "@prisma/client";

export type RegisterInputProps = {
  fullName: string; // Changed from `String` to `string`
  email: string; // Changed from `String` to `string`
  password: string; // Changed from `String` to `string`
  phone: string;
  role: UserRole;
};

export type LoginInputProps = {
  email: string; // Changed from `String` to `string`
  password: string; // Changed from `String` to `string`
};

export type ServicesProps = {
  title: string;
  image: string;
  slug: string;
};
