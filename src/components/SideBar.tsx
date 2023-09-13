import Image from "next/image";
import Iconpair from "./Iconpair";
import { Home, LogOut, MonitorPlay, Calendar, Video } from "lucide-react";
import PlayCard from "./PlayCard";
import { useRouter } from "next/navigation";

export default function SideBar() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };
  return (
    <div className="min-h-screen w-[40%] hidden py-4 gap-4 border lg:flex flex-col justify-evenly border-slate-300 rounded-tr-[40px] rounded-br-[40px]">
      <div onClick={handleBack} className="flex items-center cursor-pointer justify-center gap-3">
        <Image src="/images/tv.svg" alt="tv-image" width="50" height="50" />
        <p className="text-black text-lg">MovieBox</p>
      </div>

      <div className="flex flex-col gap-4">
        <Iconpair href="/">
          <Home />
          <p>Home</p>
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
