import { CircleCheckBig } from "lucide-react";
import React from "react";

const FormSuccess = ({ message }: { message: string | null }) => {
  if (message === null) {
    return null;
  }

  return (
    <section
      className="bg-green-300 border border-green-400 text-green-800 font-bold text-sm px-3 py-2 rounded relative flex items-center gap-2"
      role="alert"
    >
      <CircleCheckBig />
      {message}
    </section>
  );
};

export default FormSuccess;
