"use client";

import React from "react";
import { Button } from "@nextui-org/button";
import { siteConfig } from "@/config/site";
import { MdEmail } from "react-icons/md";

const EmailButton = ({ children, ...props }) => {
  return (
    <Button
      radius="full"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold"
      onPress={() => window.open(`mailto:${siteConfig.email}?subject=Hello Jeremy!`)}
      endContent={<MdEmail size={18} />}
      {...props}
    >
      Email me
    </Button>
  );
}

export default EmailButton;
