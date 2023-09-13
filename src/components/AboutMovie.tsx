import { Dot } from "lucide-react";
import { MovieExplain } from "@/app/movies/[id]/page";
import Tab from "./Tab";

interface Props {
  movie: MovieExplain;
}

export default function About({ movie }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-evenly items-center flex-wrap">
        <p data-testid="movie-title" className="text-lg">
          {movie?.title}
        </p>
        <Dot />
        <p data-testid="movie-release-date">
          {new Date(movie?.release_date).toUTCString()}
        </p>
        <Dot />
        <p>PG-13</p>
        <Dot />
        <p data-testid="movie-runtime">{movie?.runtime}m</p>
      </div>

      <div className="flex justify-evenly ">
        {movie?.genres.map((genre) => (
          <Tab key={genre.id} text={genre.name}/>
        ))}
      </div>

      <p data-testid="movie-overview" className="lg:text-[20px]">{movie?.overview}</p>
    </div>
  );
}
