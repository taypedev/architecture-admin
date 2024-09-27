import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FormLogin from "./_components/form-login";

export default function LoginForm() {
  return (
    <main className="flex justify-center items-center min-h-screen p-5 md:p-0">
      <Card className="w-full max-w-md mx-auto rounded-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>Ingrese sus credenciales</CardDescription>
        </CardHeader>
        <CardContent>
          <FormLogin />
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Aun no tienes una cuenta?{" "}
            <a href="#" className="text-primary hover:underline">
              registrarte
            </a>
          </p>
        </CardFooter>
      </Card>
    </main>
  );
}
