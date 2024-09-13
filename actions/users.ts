"use server";

import { prismaClient } from "@/lib/db";
import { RegisterInputProps } from "@/types/types";
import bcrypt from "bcrypt";
import { Resend } from "resend";
const cors = require('cors');
import EmailTemplate from "@/components/emails/EmailTemplate";

// Function to get a user by their ID
export async function getUserById(id: string) {
  if (id) {
    try {
      const user = await prismaClient.user.findUnique({
        where: {
          id,
        },
      });
      return user;
    } catch (error) {
      console.error(error);
      return null;
    }
  } else {
    return "User not found";
  }
}


// Function to create a new user
export async function createUser(formData: RegisterInputProps) {
  const { fullName, email, role, phone, password } = formData;
  const resend = new Resend("re_VYkNVb9Y_LK4ZWk9KcfZ9WAnbb19B7xqp");

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Generate Token
  const generateToken = () => {
    const min = 100000; // Minimum 6-digit number
    const max = 999999; // Maximum 6-digit number
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const userToken = generateToken();

  try {
    const newUser = await prismaClient.user.create({
      data: {
        name: fullName,
        email,
        phone,
        password: hashedPassword,
        role,
        token: userToken, // Ensure this matches the schema's type
        // 'id' field is not included as it's auto-generated
      },
    });

    const token = newUser.token;
    const userId = newUser.id;
    const firstName = newUser.name.split(" ")[0];
    const linkText = "Verify your Account ";
    const message =
      "Thank you for registering with Gecko. To complete your registration and verify your email address, please enter the following 6-digit verification code on our website:";

    const sendMail = await resend.emails.send({
      from: "beka app <onboarding@resend.dev>",
      to: email,
      subject: "Hello World",
      react: EmailTemplate({ firstName, token, linkText, message }),
    });

    console.log(token);
    console.log(sendMail);
    console.log(newUser);

    // Return the newly created user
    return {
      data: newUser,
      error: null,
      status: 200,
    };
  } catch (error) {
    console.error(error);
    return {
      data: null,
      error: "Something went wrong",
      status: 500,
    };
  }
}
