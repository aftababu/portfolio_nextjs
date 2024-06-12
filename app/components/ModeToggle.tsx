"use client";
import React, { FC } from "react";
import { useTheme } from "next-themes";
import Light from "./icons/toggle-off";
import Dark from "./icons/toggle-on";

const ModeToggleBtn:FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
      className="self-center"
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))} title="mode toggle"
      >
        {theme === "dark" ? <Dark /> : <Light />}
      </button>
    </>
  );
};

export default ModeToggleBtn;

