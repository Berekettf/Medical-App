"use server";

import { prismaClient } from "@/lib/db";
import { RegisterInputProps } from "@/types/types";
import bcrypt from "bcrypt";
import { Resend } from "resend";
import EmailTemplate from "@/components/emails/EmailTemplate";

export async function createUser(formData: RegisterInputProps) {
  const { fullName, email, role, phone, password } = formData;
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    // Check if user already exists
    const existingUser = await prismaClient.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return {
        data: null,
        error: `User with this email (${email}) already exists in the Database`,
        status: 409,
      };
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate Token
    const generateToken = () => {
      const min = 100000; // Minimum 6-figure number
      const max = 999999; // Maximum 6-figure number
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const userToken = generateToken();

    // Create the new user in the database
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
      "Thank you for registering with Gecko. To complete your registration and verify your email address, please enter the following 6-digit verification code on our website :";
    const sendMail = await resend.emails.send({
      from: "Medical App <info@jazzafricaadventures.com>",
      to: email,
      subject: "Verify Your Email Address",
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
