'use client';

import Image from "next/image";
import SearchBox from "./SearchBox";
import { Search } from "lucide-react";
import { Dispatch, SetStateAction } from "react";



interface Props {
   search: string;
   setSearch: Dispatch<SetStateAction<string>>;
   handleSearch: () => void;
}
export default function Navbar({search, setSearch, handleSearch}: Props) {
  return (
    <div className="absolute top-0 left-0 w-full flex h-[80px] items-center bg-transparent justify-evenly">
      <div className="flex items-center justify-center gap-3 grow">
        <Image src="./images/tv.svg" alt="tv-image" width="50" height="50"/>
        <p className="text-white text-lg">MovieBox</p>
      </div>
      
      <div className="hidden relative gap-3 items-center md:flex lg:flex md:grow lg:grow px-10">
      <SearchBox
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="What do you want to watch?"
        className="h-[36px] w-full border rounded-md border-white px-[6px] py-[10px] outline-none bg-transparent text-white"
      />
      <Search className="text-white cursor-pointer" xlinkTitle="Search" onClick={handleSearch}/>
      </div>

      <div className="flex items-center justify-center gap-3 grow">
        <p className="text-white text-md">Sign-in</p>
        <Image src="./images/Menu.svg" alt="tv-image" width="50" height="50" />
      </div>
    </div>
  );
}
