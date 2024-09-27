import { CircleX } from "lucide-react";
import React from "react";

const FormError = ({ message }: { message: string | null }) => {
  if (message === null) {
    return null;
  }

  return (
    <section
      className="bg-rose-300 border border-rose-400 text-rose-800 font-bold px-3 py-2 rounded relative w-full flex items-center gap-2 font-roboto text-sm"
      role="alert"
    >
      <CircleX />
      {message}
    </section>
  );
};

export default FormError;
