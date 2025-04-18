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
    <div className="flex flex-col mt-4 mb-20 gap-4">
      <Link href={goBackLink}>
        <div className="flex w-auto hover:bg-gray-100 w-[5.5rem] border-2">
          <div className = "">
            <ChevronLeft sx={{ fontSize: "1.25rem" }} />
          </div>
          <div className = "text-sm pt-1">Go back</div>
        </div>
      </Link>
      <div className="text-3xl">{title}</div>
      <div className="text-m">{description}</div>
    </div>
  );
}
