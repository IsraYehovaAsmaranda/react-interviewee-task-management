import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import { LogIn } from "lucide-react";
import { Mail } from "lucide-react";
import React from "react";

function LoginForm() {
  return (
    <div className="mt-6">
      <InputField
        label="Alamat Email"
        id="email"
        icon={<Mail className="h-5 w-5" />}
        type="email"
        placeholder="contoh@email.com"
        required={true}
      />

      <InputField
        label="Password"
        id="password"
        icon={<Lock className="h-5 w-5" />}
        type="password"
        placeholder="Masukkan password"
        required={true}
      />

      <div className="mb-6 flex items-center justify-end">
        <span className="cursor-pointer text-sm font-medium text-blue-600 hover:text-blue-800">
          Lupa password?
        </span>
      </div>

      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
        <LogIn className="mr-2 h-4 w-4" /> Masuk
      </Button>
    </div>
  );
}

export default LoginForm;
