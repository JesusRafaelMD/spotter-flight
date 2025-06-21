import { Navbar } from "@/components/navbar/Navbar";
import Search from "@/components/mainSearch/index";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <div className="mt-16"></div>
      <Search />
    </div>
  );
}
