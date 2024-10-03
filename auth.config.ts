import { AuthError, User, type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginDemo } from "./common/data/auth/login-demo.data";

export default {
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
        isAdmin: { type: "boolean" },
      },
      authorize: async (credentials) => {
        // let user = null;
        let user: User | null = null;

        if (credentials.isAdmin === "true") {
          credentials.isAdmin = true;
        } else {
          credentials.isAdmin = false;
        }

        const validateCredentials = new Promise((resolve) => {
          setTimeout(() => {
            if (
              credentials.email === LoginDemo.email &&
              credentials.password === LoginDemo.password
            ) {
              resolve({
                email: credentials.email,
                password: credentials.password,
                role: Boolean(credentials.isAdmin) ? "admin" : "user",
              });
            } else {
              resolve(null);
            }
          }, 3000);
        });

        const result = await validateCredentials;
        user = result as User;

        if (!user) {
          new AuthError("Credenciales inválidas");
          throw new Error("Credenciales inválidas");
        }

        return user;
      },
    }),
  ],
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async signIn({ user }) {
      // usa user en caso de validar un usuario logueado como 2FA
      return true;
    },
    jwt({ token, user }) {
      // usa user para obtener la información del usuario enviado de authorization y asignar al token
      if (user) {
        token.role = user.role;
      }

      return token;
    },
    session({ session, token }) {
      // usa token para obtener la información del token enviado de jwt y asignar al session

      if (token) {
        session.user.role = token.role;
        session.role = token.role;
      }
      return session;
    },
  },
} satisfies NextAuthConfig;
