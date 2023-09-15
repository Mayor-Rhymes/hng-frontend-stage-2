"use client";

import Image from "next/image";
import { IMovie } from "@/app/page";
import { genreMap } from "@/lib/genreMapper";

import Link from "next/link";

const URL = process.env.NEXT_PUBLIC_API_URL as string;

// `${process.env.NEXT_PUBLIC_API_URL as string}movie/${params.id}`

interface MovieCardProps {
  movie: IMovie;
  testId: string;
}

export default function Card({ movie, testId }: MovieCardProps) {
  // console.log(movie.genres);

  const GenreList = () =>
    movie.genre_ids?.map((genre_id: number) => (
      <p key={genre_id}>{genreMap[genre_id]}</p>
    ));

  return (
    <Link href={`movies/${movie.id}`}>
      <div
        className="flex flex-col px-3 py-3 gap-3 cursor-pointer hover:shadow-md transition-all"
        data-testid={testId}
      >
        <div
          className="bg-center bg-no-repeat w-full h-[370px] relative rounded-md"
          style={{
            backgroundImage: `${
              movie.poster_path
                ? `url(https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "url('/images/no-image.png')"
            }`,
          }}
          data-testid="movie-poster"
        >
          <Image
            src="/images/Favorite.svg"
            alt="favorite"
            height={20}
            width={20}
            className="absolute top-4 right-4"
          />
        </div>

        <p className="text-[12px]">
          <span>USA,</span>{" "}
          <span data-testid="movie-release-date">{movie.release_date}</span>
        </p>

        <p className="text-[18px] font-semibold" data-testid="movie-title">
          {movie.title}
        </p>

        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <Image src="/images/imdb.svg" alt="imdb" width={30} height={30} />
            <p className="text-[10px]">86.0 / 100</p>
          </div>
          <div className="flex gap-3 items-center">
            <Image
              src="/images/rotten-tomatoes.svg"
              alt="imdb"
              width={15}
              height={15}
            />
            <p className="text-[10px]">97%</p>
          </div>
        </div>
        <div className="text-slate-400 flex flex-wrap gap-4">
          <GenreList />
        </div>
      </div>
    </Link>
  );
}
