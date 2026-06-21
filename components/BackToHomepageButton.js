"use client";

import Link from "next/link";
import { Button } from "@nextui-org/button";
import { TbArrowLeft } from "react-icons/tb";

const BackToHomepageButton = () => {
  return (
    <div className="flex justify-center">
      <Button
        as={Link}
        href="/"
        radius="full"
        className="bg-blue-500 px-6 font-semibold text-white transition hover:bg-blue-600"
        startContent={<TbArrowLeft size={20} />}
      >
        Back to Home
      </Button>
    </div>
  );
};

export default BackToHomepageButton;
