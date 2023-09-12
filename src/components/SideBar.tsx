import Image from "next/image";
import Iconpair from "./Iconpair";
import { Home, LogOut, MonitorPlay, Calendar, Video } from "lucide-react";
import PlayCard from './PlayCard';
import Link from "next/link";

export default function SideBar() {
  return (
    <div className="h-screen w-[40%] hidden py-4 gap-4 border lg:flex flex-col justify-evenly border-slate-300 rounded-tr-[40px] rounded-br-[40px]">
      <div className="flex items-center justify-center gap-3">
        <Image src="/images/tv.svg" alt="tv-image" width="50" height="50" />
        <p className="text-black text-lg">MovieBox</p>
      </div>

      <div className="flex flex-col gap-4">
        <Iconpair>
          <Home />
          <Link href="/">Home</Link>
        </Iconpair>
        <Iconpair>
          <Video />
          <p>Movies</p>
        </Iconpair>
        <Iconpair>
          <MonitorPlay />
          <p>TV Series</p>
        </Iconpair>
        <Iconpair>
          <Calendar />
          <p>Upcoming </p>
        </Iconpair>
      </div>

      <PlayCard />


      <Iconpair>
        <LogOut />
        <p>Logout</p>
      </Iconpair>
    </div>
  );
}
