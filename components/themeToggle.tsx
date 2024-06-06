"use client";

import { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true);
  const { setTheme, resolvedTheme, theme } = useTheme();

  // useEffect(() => {
  //     const theme = localStorage.getItem("theme")
  //     if (theme === "dark") setDarkMode(true)
  // }, [])
  //
  // useEffect(() => {
  //     if (darkMode) {
  //         document.documentElement.classList.add('dark')
  //         localStorage.setItem("theme", "dark")
  //     } else {
  //         document.documentElement.classList.remove('dark')
  //         localStorage.setItem("theme", "light")
  //     }
  // }, [darkMode]);

  return (
    <div
      className="fixed bottom-8 right-8 p-1 rounded-3xl border-2
                dark:hover:bg-gray-400 hover:cursor-pointer hover:bg-dark"
      onClick={() => {
        // setDarkMode(!darkMode)
        if (resolvedTheme === "dark") {
          setTheme("light");
        }

        if (resolvedTheme === "light") {
          setTheme("dark");
        }
      }}
    >
      <Image
        src={theme !== "light" ? "/icon/sun.svg" : "/icon/moon.svg"}
        alt="Theme Logo"
        width={24}
        height={24}
        priority
      />
    </div>
  );
}
