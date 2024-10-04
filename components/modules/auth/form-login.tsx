"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { loginAction } from "@/actions/auth/login.action";
import { LoginDemo } from "@/common/data/auth/login-demo.data";
import FormInputPrimary from "@/components/layout/form/input/form-input-primary";
import FormError from "@/components/layout/form/message/form-error";
import FormSuccess from "@/components/layout/form/message/form-success";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useSearchParams } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";

export const loginSchemaForm = z.object({
  email: z
    .string()
    .email({ message: "Ingrese un correo válido" })
    .default(LoginDemo.email),
  password: z
    .string()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" })
    .default(LoginDemo.password),
  isAdmin: z.boolean().default(false),
});

type IFormLoginProps = object;

const FormLogin: React.FC<IFormLoginProps> = () => {
  const [isDisabled, startLoginTransaction] = useTransition();

  const [errorLogin, setErrorLogin] = useState<null | string>(null);
  const [successLogin, setSuccessLogin] = useState<null | string>(null);

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const form = useForm<z.infer<typeof loginSchemaForm>>({
    resolver: zodResolver(loginSchemaForm),
    defaultValues: {
      email: LoginDemo.email,
      password: LoginDemo.password,
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchemaForm>) => {
    setErrorLogin(null);
    setSuccessLogin(null);

    startLoginTransaction(async () => {
      const res = await loginAction({
        email: values.email,
        password: values.password,
        isAdmin: values.isAdmin,
        callbackUrl: callbackUrl ?? "",
      });

      if (res.error) {
        setErrorLogin(res.error);
      }

      if (res.success) {
        setSuccessLogin(res.success);
      }
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 font-lato"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <FormInputPrimary
                  icon="dashboard"
                  field={{
                    ...field,
                    placeholder: "Ingrese su correo",
                    disabled: isDisabled,
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <FormInputPrimary
                  icon="dashboard"
                  field={{
                    ...field,
                    placeholder: "Ingrese su correo",
                    type: "password",
                    disabled: isDisabled,
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="isAdmin"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Seleccione en caso sea el admin</FormLabel>
              </div>
            </FormItem>
          )}
        />

        <FormError message={errorLogin} />
        <FormSuccess message={successLogin} />

        <Button
          type="submit"
          className="w-full rounded-xl font-grotesk text-base font-medium"
          disabled={form.formState.isSubmitting || isDisabled}
        >
          {form.formState.isSubmitting ? "Iniciando sesión" : "Iniciar sesión"}
        </Button>
      </form>
    </Form>
  );
};

export default FormLogin;
