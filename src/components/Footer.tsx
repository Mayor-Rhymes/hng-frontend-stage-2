import { Twitter, Facebook, Instagram, Youtube } from "lucide-react";
export default function Footer() {
  return (
    <div className="flex flex-col gap-10 mt-20 mb-20">
      <div className="flex justify-center gap-10">
        <Facebook />
        <Instagram />
        <Twitter />

        <Youtube />
      </div>

      <div className="flex justify-center font-semibold gap-10 flex-col items-center lg:flex-row">
        <p>Condition of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>

      <p className="text-center text-slate-400 font-semibold">© 2023 MovieBox by Adriana Eka Prayudha And Brought To Life By Olakunle Raheem (Mayor)</p>
    </div>
  );
}
