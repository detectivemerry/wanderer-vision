import { ChevronLeft } from "@mui/icons-material";
import Link from "next/link";
import React from "react";

interface PageHeaderProps {
  title: string;
  description: string;
  goBackLink: string;
}

export default function PageHeader({
  title,
  description,
  goBackLink,
}: PageHeaderProps) {
  return (
    <div className="flex flex-col mt-4 lg:mb-20 mb-4 mb-8 gap-4">
      <Link href={goBackLink}>
        <div className="flex justify-between">
          <div className = "flex-0.2 hover:bg-gray-100 flex pr-2 pb-1">
          <div className="">
            <ChevronLeft sx={{ fontSize: "1.25rem" }} />
          </div>
          <div className="text-sm pt-1">Go back</div>
          </div>
          <div className = "flex-1.8"></div>
        </div>
      </Link>
      <div className="text-3xl">{title}</div>
      <div className="text-m">{description}</div>
    </div>
  );
}
