"use server";

export type FormState = {
  success: boolean;
  message: string;
};

export async function signUpAction(formData: FormData) {
  "use server";

  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  //fake api call
  await new Promise((resolve) => setTimeout(resolve, 5000));

  if (email === "brad@mail.com") {
    console.log("Email already in use");
    return {
      message: "Email already in use",
      success: false,
    };
  }

  return {
    success: true,
    message: "User successfully created",
  };
}
