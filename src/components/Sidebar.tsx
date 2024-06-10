import logo from "../assets/logo-big.png";
import InputSearch from "./InputSearch";
import { Button } from "./ui/button";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import explore from "../assets/explore.png";
import homedark from "../assets/home-dark.svg";
import { FC } from "react";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = (props) => {
  const { children } = props;
  return (
    <div className="w-full  flex flex-col relative overflow-hidden h-[100svh]">
      <div className="flex my-[1rem] justify-between items-center h-[2vw] w-full static p-2">
        <div className="">
          <img
            src={logo}
            alt=""
            className="w-[120px] object-cover -rotate-6 hover:duration-100 hover:ease-linear hover:rotate-0"
          />
        </div>
        <InputSearch />
        <div className="flex justify-between gap-2 max-md:hidden">
          <Button>Upload</Button>
          <Button>Login</Button>
          <Button variant={"ghost"}>
            <DotsVerticalIcon />
          </Button>
        </div>
      </div>
      <div className="flex h-full">
        <div className=" w-[300px] flex flex-col  p-[1rem] ">
          <div className="flex flex-col ">
            <div className=" hover:cursor-pointer flex items-center gap-3 hover:font-bold hover:rounded-md hover:bg-slate-50 hover:duration-150 hover:ease-in-out h-[50px] p-2">
              <img src={homedark} alt="" className="w-[30px] h-[30px]" />
              <div>Home</div>
            </div>
            <div className="flex items-center gap-3 hover:font-bold hover:rounded-md hover:bg-slate-50 hover:duration-150 hover:ease-in-out h-[50px] p-2">
              <img src={explore} alt="" className="w-[30px] h-[30px]" />
              <div>Explore</div>
            </div>
          </div>
        </div>
        <div className="w-[90vw] h-[100svh] overflow-x-auto p-[1rem]">
          {children}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
