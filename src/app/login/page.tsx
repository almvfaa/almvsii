import { AuthForm } from "./auth-form";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <h1 className="mb-6 text-center text-3xl font-bold">
          Iniciar Sesión
        </h1>
        <AuthForm mode="login" />
      </div>
    </div>
  );
}
