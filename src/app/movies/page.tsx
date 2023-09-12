"use client";

import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { IMovie } from "../page";
import Card from "@/components/MovieCard";
import Navbar from "@/components/Navbar";
import { ChevronLeft } from "lucide-react";
import Footer from "@/components/Footer";

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const search = searchParams.get("search");
  const searchUrl = `${process.env.NEXT_PUBLIC_API_URL}search/movie?query=${search}&include_adult=false`;

  const TOKEN = process.env.NEXT_PUBLIC_API_TOKEN as string;

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

  const handleBack = () => {
    router.back();
  };

  const { data, error, isLoading } = useSWR(
    [searchUrl, TOKEN],
    ([searchUrl, TOKEN]) => fetchHandler2(searchUrl, TOKEN)
  );

  console.log(data);

  if (error) {
    return <p className="text-center text-red-400 text-4xl">Error</p>;
  } else if (isLoading) {
    return <p className="text-center text-4xl">Loading...</p>;
  } else if (data) {
    return (
      <div>
        <div className="flex justify-center items-center">
          <button
            type="button"
            className="bg-videoRed text-white px-3 py-2 rounded-md flex items-center gap-2 justify-center"
            onClick={handleBack}
          >
            <ChevronLeft />
            Go Back
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-20">
          {data?.results.map((movie: IMovie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>

        <Footer />
      </div>
    );
  }
}
