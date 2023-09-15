import { Dot } from "lucide-react";
import { MovieExplain } from "@/app/movies/[id]/page";
import Tab from "./Tab";

interface Props {
  movie: MovieExplain;
}

export default function About({ movie }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center flex-wrap text-[16px]">
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
        <p>
          <span data-testid="movie-runtime">{movie?.runtime}</span>m</p>
        
      </div>

      <div className="flex gap-2">
        {movie?.genres.map((genre) => (
          <Tab key={genre.id} text={genre.name} />
        ))}
      </div>

      <p data-testid="movie-overview" className="lg:text-[16px]">
        {movie?.overview}
      </p>
    </div>
  );
}
