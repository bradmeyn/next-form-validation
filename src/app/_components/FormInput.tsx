import { RiErrorWarningFill } from "@remixicon/react";
import { TextInput } from "@tremor/react";

interface PropTypes {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  register: any;
  error?: string | null;
}

export default function FormInput({
  label,
  id,
  type,
  placeholder,
  register,
  error,
}: PropTypes) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <TextInput
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
        className={`${error ? "border border-red-500" : ""}`}
      />
      {error ? (
        <small className="text-sm mt-1 text-red-700 flex items-center gap-1">
          <RiErrorWarningFill size={16} />
          <span>{error}</span>
        </small>
      ) : null}
    </>
  );
}
