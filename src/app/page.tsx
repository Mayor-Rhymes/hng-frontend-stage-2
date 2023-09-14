"use client";
import DescriptionBox from "@/components/DescriptionBox";
import Card from "@/components/MovieCard";
import useSWR from "swr";
import axios from "axios";
import { ChevronRight, Search } from "lucide-react";
import SearchBox from "@/components/SearchBox";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export interface IMovie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  genre_ids?: number[];
  genres: Genre[];
}

interface Genre {
  id: number;
  name: string;
}

const URL = `${
  process.env.NEXT_PUBLIC_API_URL as string
}movie/top_rated?language=en-US&page=1&`;
const TOKEN = process.env.NEXT_PUBLIC_API_TOKEN as string;

const fetchHandler = async (url: string, token: string) => {
  const response = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.data;
  
  return data.results.slice(0, 10);
};

const fetchHandler2 = async (url: string, token: string) => {
  const response = await axios.get(url, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.data;
  return data;
};

export default function Home() {
  const router = useRouter();
  const searchUrl = process.env.NEXT_PUBLIC_API_URL as string;
  const [search, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const { data, error, isLoading } = useSWR([URL, TOKEN], ([URL, TOKEN]) =>
    fetchHandler(URL, TOKEN)
  );

  const handleSearch = async () => {
    if (search) {
      const results = await fetchHandler2(
        `${searchUrl}search/movie?query=${search}&include_adult=false`,
        TOKEN
      );

      if (results) {
        setSearchLoading(true);
        router.push(`/movies?search=${search}`);
      }
    }
  };

  

  if (searchLoading) {
    return (
      <div className="h-screen w-screen flex place-content-center place-items-center">
        <p className="animate-ping text-4xl text-blue-700 font-extrabold">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <main className="w-[100%] relative">
      <Navbar
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      <div className="w-full gap-3 flex justify-center items-center absolute top-20 px-4 md:hidden lg:hidden">
        <SearchBox
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSearch();
            }
          }}
          placeholder="What do you want to watch?"
          className="h-[36px] border rounded-md border-white px-[6px] py-[10px] outline-none bg-transparent text-white"
        />
        <Search className="text-white cursor-pointer" onClick={handleSearch} />
      </div>

      <div className="bg-poster-image bg-center h-[600px] w-full flex flex-col lg:flex-row md:pl-10 lg:pl-20 place-items-center place-content-center lg:justify-between lg:pr-10">
        <DescriptionBox />

        <div className="hidden lg:flex lg:flex-col text-slate-200 cursor-pointer">
          <p className="hover:text-xl transition-all">1</p>
          <p className="hover:text-xl transition-all">2</p>
          <p className="hover:text-xl transition-all">3</p>
          <p className="hover:text-xl transition-all">4</p>
          <p className="hover:text-xl transition-all">5</p>
        </div>
      </div>

      <div className="flex justify-between px-5 lg:px-10 mt-10 md:gap-0 lg:gap-0 items-center">
        <h4 className="text-2xl font-bold">Featured Movie</h4>

        <Link
          className="text-[#C41E3A] flex gap-3 cursor-pointer sm:animate-bounce"
          href="/movies"
        >
          {" "}
          See More <ChevronRight />
        </Link>
      </div>

      {error ? (
        <p className="text-center text-red-400 text-4xl">Error</p>
      ) : isLoading ? (
        <p className="text-center mt-20 text-red-400 text-4xl animate-bounce">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-20">
          {data.map((movie: IMovie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      )}

      <Footer />
    </main>
  );
}
