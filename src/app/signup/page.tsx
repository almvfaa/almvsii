import { AuthForm } from "../login/auth-form";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
       <div className="w-full max-w-sm">
        <h1 className="mb-6 text-center text-3xl font-bold">
          Crear una Cuenta
        </h1>
        <AuthForm mode="signup" />
      </div>
    </div>
  );
}
