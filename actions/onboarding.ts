"use server";
import { prismaClient } from "@/lib/db";

// Function to create a new user
export async function createDoctorProfile(formData: any) {
  const {
    dob,
    firstName,
    gender,
    lastName,
    middleName,
    page,
    trackingNumber,
    userId,
  } = formData;

  try {
    const newProfile = await prismaClient.doctorProfile.create({
      data: {
        dob,
        firstName,
        gender,
        lastName,
        middleName,
        page,
        trackingNumber,
        userId,
      },
    });

    console.log(newProfile);
    return {
      data: newProfile,
      error: null,
      status: 201,
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

export async function updateProfile(id: string | undefined, data: any) {
  if (!id) {
    console.error("ID is required for updating the profile");
    return {
      data: null,
      error: "ID is required for updating the profile",
      status: 400,
    };
  }

  console.log("ID received for update:", id);
  console.log("Data received for profile update:", data);

  try {
    // Attempt to update the profile
    const profileUpdate = await prismaClient.doctorProfile.update({
      where: { id },
      data,
    });

    console.log("Profile update successful:", profileUpdate);

    return {
      data: profileUpdate,
      error: null,
      status: 201,
    };
  } catch (error: any) {
    console.error("Prisma update error:", error);

    // Return specific Prisma error if available
    return {
      data: null,
      error: error.message || "Something went wrong during profile update",
      status: 500,
    };
  }
}
export async function updateAvailabilityById(
  id: string | undefined,
  data: any
) {
  if (!id) {
    console.error("ID is required for updating the profile");
    return {
      data: null,
      error: "ID is required for updating the profile",
      status: 400,
    };
  }

  console.log("ID received for update:", id);
  console.log("Data received for profile update:", data);

  try {
    // Attempt to update the profile
    const profileUpdate = await prismaClient.doctorProfile.update({
      where: { id },
      data,
    });

    console.log("Profile update successful:", profileUpdate);

    return {
      data: profileUpdate,
      error: null,
      status: 201,
    };
  } catch (error: any) {
    console.error("Prisma update error:", error);

    // Return specific Prisma error if available
    return {
      data: null,
      error: error.message || "Something went wrong during profile update",
      status: 500,
    };
  }
}

export async function getDoctorProfileById(userId: string | undefined) {
  try {
    // Attempt to update the profile
    const profile = await prismaClient.doctorProfile.findUnique({
      where: { userId },
      include: {
        availability: true,
      },
    });

    console.log(profile);

    return {
      data: profile,
      error: null,
      status: 200,
    };
  } catch (error: any) {
    console.error("Prisma update error:", error);

    // Return specific Prisma error if available
    return {
      data: null,
      error: error.message || "Something went wrong during fetching profile",
      status: 500,
    };
  }
}

export async function createAvailability(data: any) {
  try {
    const newAvail = await prismaClient.availability.create({
      data,
    });

    console.log(newAvail);
    return {
      data: newAvail,
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
