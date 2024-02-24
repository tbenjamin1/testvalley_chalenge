import Image from "next/image";
import Navbar from "@/containers/Navbar";
import Banner from "@/containers/Banner";
import AllItems from "@/containers/AllItems";
import MainShortcut from "@/containers/MainShortCut";
import HotDeals from "@/containers/HotDeals";

export default function Home() {
  return (

    <main className="flex min-h-screen  flex-col items-center main-swipper-container">
      <Navbar />
       <Banner /> 
       
    <MainShortcut/>
   <HotDeals />
    <AllItems/> 
    </main>
  );
}
