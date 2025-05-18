import React from "react";
import Title from "./components/Title";
import LoginForm from "./components/LoginForm";

function LoginPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <div className="text-center">
          <Title />
          <h2 className="mb-2 text-3xl font-extrabold text-gray-900">
            Selamat Datang
          </h2>
          <p className="text-gray-600">
            Masukkan email dan password Anda untuk login
          </p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
