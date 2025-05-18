import React from "react";
import { CloudUploadIcon } from "lucide-react";
import { LockKeyholeIcon } from "lucide-react";
import { VerifiedIcon } from "lucide-react";

function WhyUs() {
  const features = [
    {
      name: "Cloud Sync",
      description:
        "Access your data anywhere with secure cloud synchronization.",
      icon: CloudUploadIcon,
    },
    {
      name: "Secure",
      description:
        "Top-notch security to keep your information safe and private.",
      icon: LockKeyholeIcon,
    },
    {
      name: "Reliable",
      description: "Robust platform with 99.9% uptime guarantee.",
      icon: VerifiedIcon,
    },
  ];
  return (
    <section className="bg-gray-50 px-8 py-16">
      <div className="mx-auto max-w-7xl">
        <h3 className="mb-12 text-center text-3xl font-bold text-gray-900">
          Why Choose Us?
        </h3>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="rounded-xl bg-white p-6 shadow transition-shadow duration-300 hover:shadow-lg"
            >
              <feature.icon className="mb-4 h-12 w-12 text-indigo-600" />
              <h4 className="mb-2 text-xl font-semibold">{feature.name}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
