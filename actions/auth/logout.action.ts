"use server";

import { signOut } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect";

export const logout = async () => {
  try {
    await signOut({
      redirect: true,
      redirectTo: "/",
    });

    return {
      success: "La sesión ha sido cerrada con éxito.",
    };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return {
      error: "Ha ocurrido un error al cerrar la sesión.",
    };
  }
};
