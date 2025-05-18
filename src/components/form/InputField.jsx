import React from "react";
import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { EyeOff } from "lucide-react";
import { Eye } from "lucide-react";

function InputField({
  label,
  id,
  icon,
  type,
  placeholder,
  value,
  onChange,
  required = false,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-4">
      <div className="mb-2 flex items-center justify-between">
        <Label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </Label>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 z-10 flex items-center pl-3 text-gray-500">
          {icon}
        </div>
        <Input
          id={id}
          type={type === "password" && showPassword ? "text" : type}
          className="pr-10 pl-10"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />
        {type === "password" && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={() => setShowPassword(!showPassword)}
              type="button"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default InputField;
