import { AuthError, type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginDemo } from "./common/data/auth/login-demo.data";

export default {
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        const validateCredentials = new Promise((resolve) => {
          setTimeout(() => {
            if (
              credentials.email === LoginDemo.email &&
              credentials.password === LoginDemo.password
            ) {
              resolve({
                email: credentials.email,
                password: credentials.password,
              });
            } else {
              resolve(null);
            }
          }, 3000);
        });

        const result = await validateCredentials;
        user = result;

        if (!user) {
          new AuthError("Credenciales inválidas");
          throw new Error("Credenciales inválidas");
        }

        return user;
      },
    }),
  ],
} satisfies NextAuthConfig;
