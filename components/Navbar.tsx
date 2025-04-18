"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export default function Navbar() {
  const pathName = usePathname();
  const [openSettings, setOpenSettings] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenSettings((prev) => {
      return(!prev)
    });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex justify-between gap-16 my-8 mx-8">
      <div className="w-[13%] ">
        <Link href="/">
          <img src="logo/wanderer_vision_logo.png" />
        </Link>
      </div>
      <div className="flex items-center gap-8">
        <div
          className={`${
            pathName == "/graduation" && "font-bold"
          } cursor-pointer flex`}
          onClick={handleClick}
        >
          <div>Photos</div>
          <div>
            {openSettings ? <ExpandLess/> : <ExpandMore/>}
          </div>
          <Menu
            anchorEl={anchorEl}
            open={openSettings}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            autoFocus={false}
            slotProps={{ paper: { sx: { width: "10rem" } } }}
          >
            <MenuItem
              onClick={() => {
                console.log({openSettings});
              }}
            >
              Events
            </MenuItem>
            <MenuItem
              onClick={() => {
                console.log("hey");
              }}
            >
              Interior & Exterior
            </MenuItem>
            <MenuItem
              onClick={() => {
                console.log("hey");
              }}
            >
              Potraits
            </MenuItem>
          </Menu>
        </div>
        <Link href="/contact"></Link>
        <div
          className={`${pathName == "/contact" && "font-bold"} cursor-pointer`}
        >
          Contact
        </div>
      </div>
    </div>
  );
}
