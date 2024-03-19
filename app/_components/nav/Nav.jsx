"use client";

import { LayoutGrid, Search, ShoppingBasket } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Nav() {
  const [showCategory, setShowCategory] = useState(false);

  // this is used for when category dropdown is shown,
  // add a overlay bg and make the body fixed.
  useEffect(() => {
    if (showCategory) {
      document.body.classList.add("no-scroll");

      const newDiv = document.createElement("div");
      newDiv.classList.add("overlay");
      document.body.appendChild(newDiv);
      newDiv.addEventListener("click", () => {
        setShowCategory((prev) => !prev);
      });

      return () => {
        document.body.removeChild(newDiv);
      };
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showCategory]);

  return (
    <div className="shadow-sm px-5 py-5 flex items-center justify-between">
      <div className="flex gap-4 lg:gap-8 items-center ">
        <div className="w-[100px] md:w-[120px] lg:w-[150px]">
          <Image src="/logo.png" width={150} height={100} alt="logo" />
        </div>

        <div className="relative">
          <div
            className="hidden sm:flex gap-2 items-center bg-slate-200 px-10 py-2 rounded-full cursor-pointer "
            onClick={() => setShowCategory((prev) => !prev)}
          >
            <LayoutGrid size={19} />
            <span>Categories</span>
          </div>

          <div
            className={`bg-white border p-3 rounded-lg absolute top-[110%] left-0 w-full z-50 ${
              showCategory ? "" : "hidden"
            }`}
          >
            <h2 className="text-center font-bold text-sm">Browse Categories</h2>
            <ul>
              <li>Profile</li>
              <li>Account</li>
              <li>Logout</li>
              <li>Profile</li>
            </ul>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3 border p-2 px-3 rounded-full">
          <Search color="#444" size={19} />
          <input
            type="search"
            name="search"
            placeholder="Search..."
            className="outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-8">
        <div className="flex items-center relative cursor-pointer">
          <ShoppingBasket size={28} />
          <span className="bg-green-700 w-7 h-7 text-sm rounded-full text-center flex items-center justify-center text-white absolute -top-4 -right-3 ">
            0
          </span>
        </div>

        <button className="bg-green-700 px-2 lg:px-4 py-1 lg:py-2 text-white rounded-lg text-base">
          Login
        </button>
      </div>
    </div>
  );
}