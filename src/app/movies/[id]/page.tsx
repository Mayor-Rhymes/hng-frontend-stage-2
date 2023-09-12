"use client";

import { IMovie } from "@/app/page";
import Mainscreen from "@/components/Mainscreen";
import SideBar from "@/components/SideBar";
import axios from "axios";
import useSWR from "swr";


export interface MovieExplain extends IMovie {

   runtime: number,
   overview: string;
   vote_average: number;
   backdrop_path: string;
}






const URL = `${
    process.env.NEXT_PUBLIC_API_URL as string
  }movie/popular?language=en-US&page=1&`;
  
  
const TOKEN = process.env.NEXT_PUBLIC_API_TOKEN as string;

const fetchHandler = async (url: string, token: string) => {
  const response = await axios.get(url, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.data;
  return data;
};

export default function Page({ params }: { params: { id: number } }) {

    const URL = `${
        process.env.NEXT_PUBLIC_API_URL as string
      }movie/${params.id}`;
      
  const { data, error, isLoading } = useSWR([URL, TOKEN], ([URL, TOKEN]) =>
    fetchHandler(URL, TOKEN)
  );

  
  return (
    <div className="flex justify-between">
      <SideBar />
      <Mainscreen movie={data}/>
    </div>
  );
}
