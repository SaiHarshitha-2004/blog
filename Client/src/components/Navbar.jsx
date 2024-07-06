import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { InitialState } from "../context/context.jsx";
import Style from "./style.jsx";
import { TbMenuDeep } from "react-icons/tb";
import { CiPower } from "react-icons/ci";

const Navbar = () => {
  const { user, email , isLoggedIn ,  setIsLoggedIn } = InitialState();
  const btnStyle = `hover:bg-gradient-to-r hover:from-[#2600fc] cursor-pointer hover:to-[#ff00ea] rounded-md w-full p-4`;

  const handleLinkClick = () => {
    document.getElementById("my-drawer-4").checked = false;
  };

  return (
    <>
      <div className="relative h-[20px] mb-20">
        <div
          className={`fixed bg-[#553287] bg-opacity-95 w-full items-center justify-center top-0 ${Style.captionTitle} flex  p-2 z-30`}
        >
          {/* responsive for desktop , mobile */}
          <div className="flex flex-row justify-between md:pl-3 md:pr-3 sm:pl-3 sm:pr-3 w-full lg:w-1/2">
            <div className="">
              <Link to="/" className="text-3xl" children="Aura" id="title" />
            </div>
            <div className="drawer drawer-end">
              <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content text-right">
                {/* menu icon */}
                <label
                  htmlFor="my-drawer-4"
                  className="drawer-button btn bg-black border-0 text-white hover:text-black"
                >
                  <TbMenuDeep className="w-8 h-8 cursor-pointer" />
                </label>
              </div>

              <div className="drawer-side h-full">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu bg-[#25113f] lg:w-1/4 w-1/2 text-base-content min-h-full p-4">
                  <div className="flex space-x-4 items-center text-md text-white justify-end">
                    <div className="flex flex-col items-center">
                      {
                        isLoggedIn ? 
                        (
                          <div>
                          <div>{user}</div>
                          <div>{email}</div>
                        </div>
                        ) : 
                        (
                          ""
                        )
                      }
                    </div>
                    <CgProfile className="w-8 h-8" />
                  </div>

                  <div className="flex flex-col items-center space-y-8 text-xl text-white mt-16 h-screen">
                    <Link to="/articleslist" className={btnStyle} onClick={handleLinkClick}>
                      <div className="">Articles</div>
                    </Link>

                    <Link
                      className={`${btnStyle} ${
                        !isLoggedIn ? "cursor-not-allowed opacity-50" : ""
                      }`}
                      to={isLoggedIn? "/writeBlog" : "#"}
                      onClick={(e) => {
                        if (!isLoggedIn) e.preventDefault();
                        handleLinkClick();
                      }}
                    >
                      Compose
                    </Link>

                    <Link
                      className={`${btnStyle} ${
                        !isLoggedIn ? "cursor-not-allowed opacity-50" : ""
                      }`}
                      to={isLoggedIn ? "/showposts" : "#"}
                      onClick={(e) => {
                        if (!isLoggedIn) e.preventDefault();
                        handleLinkClick();
                      }}
                    >
                      Show Posts
                    </Link>

                    <div className={btnStyle}>
                      {!isLoggedIn ? (
                        <div className="flex flex-row items-center space-x-2 justify-center">
                          <CiPower />
                          <Link to="/signup" children="signup" onClick={handleLinkClick} />
                        </div>
                      ) : (
                        <div onClick={() => setIsLoggedIn(false)} className="flex flex-row items-center space-x-2 justify-center">
                          <CiPower />
                          <div>log out</div>
                        </div>
                      )}
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
