"use server";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

type FormState = {
  message: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export async function signUpAction(
  previousState: FormState,
  formData: FormData
) {
  console.log("signUp");
  console.log("formData", formData);

  const origin = headers().get("origin");
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  return {
    message: "Sign up successful",
    firstName,
    lastName,
    email,
    password,
  };
}
