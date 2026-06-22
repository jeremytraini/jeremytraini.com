"use client";

import React from "react";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { MdEmail } from "react-icons/md";

const EmailButton = ({ analyticsSource = "unknown", children, ...props }) => {
  return (
    <Button
      href={`mailto:${siteConfig.email}?subject=Hello Jeremy!`}
      as={Link}
      radius="full"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold"
      endContent={<MdEmail size={18} />}
      data-analytics-click="email_click"
      data-analytics-props={JSON.stringify({
        source: analyticsSource,
        context: "general_contact",
        intent: "contact_directly",
        destination_type: "mailto",
        destination_label: "email",
        destination_url: `mailto:${siteConfig.email}`,
      })}
      {...props}
    >
      Email me
    </Button>
  );
}

export default EmailButton;
