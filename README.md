This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Primeros pasos

Primero instale las dependencias:

```bash
npm run install
```

Segundo inicie el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Configurar fuentes de Google o Local

Para agregar fuentes personalizados a la aplicación, puedes seguir los siguientes pasos:

- Agregar los archivos de fuentes a la carpeta app/fonts
```
└── 📁app
    └── 📁fonts
        └── 📁Lato
        └── 📁Roboto
        └── fonts.ts
        └── GeistMonoVF.woff
        └── GeistVF.woff
```
- Crea la configuración de fuentes, en el archivo app/fonts/fonts.ts

``` ts
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";

// fuente local

export const roboto = localFont({
  variable: "--font-roboto",
  src: [
    {
      path: "./Roboto/Roboto-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./Roboto/Roboto-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    }
    ...
  ],
});

// fuente google

export const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
```

- Agrega la configuración de fuentes a la aplicación a la app

```
└── 📁app
      └──layout.tsx
```
```html
<body className={`${roboto.variable} ${lato.variable} ${grotesk.variable}`}
>
//contenido
</body>
```

- Agrega las variables de fuentes a la configuración de tailwind 

```ts
// tailwind.config.ts

theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        lato: ["var(--font-lato)"],
        grotesk: ["var(--font-grotesk)"],
      },
    }
}
```

- Use las fuentes en tus componentes

``` html
<div className="font-roboto">
  // Fuente Roboto
</div>

```


## Configurar colores de componentes

Para comenzar a configurar los colores de tus componentes, puedes seguir los siguientes pasos:

- Primero ubícate en el archivo app/globals.css

```
└── 📁app
    └── globals.css
```
```css
@layer base {
  :root[class~="light"] {
    --background: 150 50% 98%;
    --foreground: 150 50% 10%;
    // demás colores
  }
  :root[class~="dark"] {
    --background: 150 50% 5%;
    --foreground: 150 50% 98%;
    // demás colores
  }
}
```

- Empieza a modificar los colores en el archivo app/globals.css:

  - El valor del color debe ser un porcentaje de color o hsl, por ejemplo:

  para más información sobre que hace una variable visita la siguiente documentación:
  [URL](https://ui.shadcn.com/docs/theming#list-of-variables)

```
--background: 150 50% 98%;
```

- Puede agregar colores personalizados a las variables globales

  - siga la siguiente documentación para agregar colores personalizadas:
  [URL](https://ui.shadcn.com/docs/theming#adding-new-colors)


# Autenticación

## archivo de configuración de autenticación

Para configurar la autenticación en tu aplicación, puedes seguir los siguientes pasos:

- primero ubícate en el archivo de configuración de autenticación

```
└── auth.config.ts
```

- configura la autenticación en el archivo auth.config.ts

```ts

// valores que vas a recibir desde el formulario (todos se reciben como string)  
  credentials: {
        email: {},
        password: {},
        isAdmin: { type: "boolean" },
      }

// función que valida las credenciales
  authorize: async (credentials) => {
        let user: User | null = null;
  
  const { email, password, isAdmin } = credentials;

  const validateCredentials = new Promise((resolve) => {
    setTimeout(() => {
      if (credentials) {
        resolve({
          email,
          password,
          role: Boolean(credentials.isAdmin) ? "admin" : "user",
        });
      } else {
        resolve(null);
      }
    }, 3000);
  });

  const result = await validateCredentials;
  user = result as User;

  // si el usuario no existe, devuelve null
  if (!user) {
    new AuthError("Credenciales inválidas");
    throw new Error("Credenciales inválidas");
  }

  return user;
  }
```

## Personalizar valor retorno de USER

Para personalizar los valores de USER, puedes seguir los siguientes pasos:

- primero ubícate en el archivo de configuración de tipado o en el archivo de tipos de next js:

```
// archivo de tipado

└── 📁common
    └── 📁types
        └── 📁auth
            └── auth.types.ts
```

```
// archivo de tipado next js

└── types.d.ts
```

- configura la autenticación en el archivo tipos auth.types.ts

```ts
//  agregue sus propiedades
export interface INextAuthUser {
  role: string;
}
```

- o configure la autenticación en el archivo tipos auth.types.ts

```ts
interface User extends INextAuthUser {
    // new properties
}
```

- Adapte su código tipado en los callbacks de auth.config.ts

```ts
// auth.config.ts

callbacks: {
  async signIn({ user }) {
    return true;
  },
  jwt({ token, user }) {
    if (user) {
      token.role = user.role;
    }

    return token;
  },
  session({ session, token }) {
    if (token) {
      session.user.role = token.role;
      session.role = token.role;
    }
    return session;
  },
},
```

## recuperar información del usuario

Para recuperar la información del usuario, puedes seguir los siguientes pasos:

- Utilice las funciones de action de session para recuperar la información (SOLO EN COMPONENTES DE SERVIDOR):

```
  └── 📁actions
      └── 📁session
          └── session.action.ts
```

- para los componentes de cliente, puedes utilizar la función de auth de next auth:

  - Revise la documentación: [URL](https://authjs.dev/getting-started/session-management/get-session)

## Rutas protegidas - publicas

para manejar las rutas protegidas, puedes seguir los siguientes pasos:

- primero ubícate en el archivo de configuración de rutas

```
// rutas

└── routes.ts
```

- a continuación, agregue las rutas a la aplicación

```ts

// Defina las rutas públicas
export const publicRoutes = ["/", "/test"];

// Defina las rutas de autenticación
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

// Defina la ruta de la API de autenticación
export const apiAuthPrefix = "/api/auth";

// Defina la ruta de redirección de inicio de sesión por defecto
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
```

# Layout

## Header - Aside

para manejar visibilidad y personalización del navbar de la aplicación, puedes seguir los siguientes pasos:

- primero ubícate en el archivo configuración de header o aside

```
// header

└── 📁components
    └── 📁layout
        └── 📁header
            └── 📁mobile
                └── dashboard-nav.tsx
            └── header.tsx
```

```
// aside

└── 📁components
    └── 📁layout
        └── 📁aside
            └── menu-item-aside.tsx
```

- agregue la configuración de la aplicación en el archivo header.tsx

  - El objeto user viene de la autenticación, en caso desee manejar por roles

```tsx
const adminRoutes = [
  {
    path: "dashboard",
    element: <DashboardHeader />,
  }
];

const clientRoutes = [
  {
    path: "dashboard",
    element: <DashboardHeader />,
  },
  {
    path: "/*",
    element: null,
  },
];

export default function Header({ user }: { user: User | null }) {
  let headerRoutes = [] // demás código

  if (user?.role === TAuthRoles.admin) {
    headerRoutes = adminRoutes;
  }
  if (user?.role === TAuthRoles.user) {
    headerRoutes = clientRoutes;
  }

  // demás código

  return PAGE?.element ?? null;
}

```
