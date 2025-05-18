import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

function Headers() {
  return (
    <header className="flex items-center justify-between bg-white px-8 py-4 shadow-md">
      <h1 className="text-2xl font-bold text-gray-900">My Company</h1>
      <NavLink to={"/auth/login"}>
        <Button variant="default" className="flex items-center space-x-2">
          <span>Login as employee</span>
          <ArrowRightIcon className="h-5 w-5" />
        </Button>
      </NavLink>
    </header>
  );
}

export default Headers;
