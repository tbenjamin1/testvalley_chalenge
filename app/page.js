import Image from "next/image";
import Navbar from "@/containers/Navbar";
import Banner from "@/containers/Banner";
import AllItems from "@/containers/AllItems";
import HotDeals from "@/containers/HotDeals";
import Shortcut from "@/containers/Shortcut";



export default function Home() {
  return (
// parent componet
    <main className="flex min-h-screen  flex-col items-center main-swipper-container">
      <Navbar />
      <Banner />
      <Shortcut/>
      <HotDeals />
      <AllItems />
    </main>
  );
}
