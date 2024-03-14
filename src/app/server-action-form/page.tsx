import { Card, TextInput, NumberInput } from "@tremor/react";

import { z } from "zod";
import FormInput from "@/app/_components/FormInput";
import { RiCheckFill, RiErrorWarningFill } from "@remixicon/react";
import { useFormState, useFormStatus } from "react-dom";

export default function ServerActionform() {
  return (
    <div className="flex min-h-full flex-1 flex-col mt-20 px-4 py-10 lg:px-6">
      <Card className="sm:mx-auto sm:w-full sm:max-w-lg">
        <h3 className="text-center text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Server Action Form
        </h3>

        <Form />

        <p className="mt-4 text-tremor-label text-tremor-content dark:text-dark-tremor-content text-center">
          By signing in, you agree to our{" "}
          <a href="#" className="underline underline-offset-4">
            terms of service
          </a>{" "}
          and{" "}
          <a href="#" className="underline underline-offset-4">
            privacy policy
          </a>
          .
        </p>
      </Card>
    </div>
  );
}

type FormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const schema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, { message: "First name must be 2 or more letters" }),
  lastName: z
    .string()
    .trim()
    .min(2, { message: "Last name must be 2 or more letters" }),
  email: z.string().trim().email({ message: "Email is required" }).min(1),
  password: z
    .string()
    .trim()
    .min(4, { message: "Password must be 4 or more characters" }),
  confirmPassword: z.string().trim(),
});

function Form() {
  const initialFormState = {
    message: "",
    success: false,
  };

  //   const [state] = useFormState(signUpAction, initialFormState);

  const { pending } = useFormStatus();

  return (
    <form className="mt-6 grid grid-cols-2 gap-5">
      <div className="col-span-full sm:col-span-1">
        <TextInput id="firstName" type="text" placeholder="First name" />
      </div>

      <div className="col-span-full sm:col-span-1">
        <TextInput id="lastName" type="text" placeholder="First name" />
      </div>

      <div className="col-span-2">
        <TextInput id="email" type="email" placeholder="user@mail.com" />
      </div>

      <div>
        <TextInput id="password" type="password" placeholder="Password" />
      </div>

      <button
        className={`
          mt-4  col-span-2 w-full  whitespace-nowrap rounded-tremor-default text-tremor-brand-inverted   py-2 text-center text-tremor-default font-medium
          ${
            pending
              ? "bg-tremor-brand/65 cursor-not-allowed  border-red-600  "
              : " cursor-pointer bg-tremor-brand shadow-tremor-input hover:bg-tremor-brand-emphasis"
          }`}
        disabled={pending}
        type="submit"
      >
        {pending ? "Submitting" : "Sign up"}
      </button>
    </form>
  );
}

function Message({ message, success }: { message: string; success: boolean }) {
  return (
    <div className={`mt-4 p-4 ${success ? "bg-green-100" : "bg-red-100"}`}>
      <p className={`text-sm ${success ? "text-green-700" : "text-red-700"}`}>
        {message}
      </p>
    </div>
  );
}
