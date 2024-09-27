"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { isRedirectError } from "next/dist/client/components/redirect";

type TLoginActionProps = {
  email: string;
  password: string;
  callbackUrl: string;
};

export const loginAction = async ({
  email,
  password,
  callbackUrl,
}: TLoginActionProps) => {
  try {
    await signIn("credentials", {
      email,
      password,
      redirect: true,
      redirectTo: callbackUrl || "/dashboard",
    });

    return {
      success: "Iniciaste sesión correctamente.",
    };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    if (error instanceof Error) {
      const { type, cause } = error as AuthError;
      switch (type) {
        case "CredentialsSignin":
          return {
            error: "Credenciales inválidas.",
          };
        case "CallbackRouteError":
          return { error: cause?.err?.toString() };
        default:
          return {
            error: "Ocurrió un error al iniciar sesión.",
          };
      }
    }

    throw {
      error: "Ocurrió un error al iniciar sesión.",
    };
  }
};
