import Videoview from "./Videoview";
import About from "./AboutMovie";
import Image from "next/image";
import { MovieExplain } from "@/app/movies/[id]/page";
import { ChevronDown, ChevronLeft } from "lucide-react";
import {useRouter} from "next/navigation";
interface Props {
  movie: MovieExplain;
  videoId: string;
}

export default function Mainscreen({ movie, videoId }: Props) {


  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div className="flex grow flex-col px-10 pt-5 gap-4 mb-10">
      <button
        type="button"
        className="bg-videoRed text-white hover:shadow-2xl hover:bg-red-900 transition-all px-3 py-2 rounded-md flex items-center gap-2 justify-center"
        onClick={handleBack}
      >
        <ChevronLeft />
        Go Back
      </button>

      <Videoview image_path={videoId} />

      <div className="flex flex-col lg:flex-row gap-10 ">
        <div className="flex flex-col gap-6 lg:w-[75%]">
          <About movie={movie} />
          <div className="flex flex-col gap-7">
            <p>
              Director:{" "}
              <span className="text-videoRed font-semibold">
                Joseph Kosinski
              </span>
            </p>
            <p>
              Writers :{" "}
              <span className="text-videoRed font-semibold">
                Jim Cash, Jack Epps Jr, Peter Craig
              </span>
            </p>
            <p>
              Stars :{" "}
              <span className="text-videoRed font-semibold">
                Tom Cruise, Jennifer Connelly, Miles Teller
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:flex-row lg:gap-0">
            <button
              type="button"
              className="bg-videoRed text-white px-3 py-2 rounded-md flex items-center gap-2 justify-center"
            >
              Top rated movie #65
            </button>
            <button
              type="button"
              className="px-3 py-2 rounded-md flex items-center border border-gray-300 gap-2 justify-center grow"
            >
              Awards 9 nominations
              <ChevronDown />
            </button>
          </div>
        </div>

        <div className="grow flex flex-col gap-4">
          <div className="flex justify-end items-center">
            <Image src="/images/Star.svg" alt="star" width={20} height={20} />

            <p>
              <span className="text-slate-400">{movie?.vote_average}</span> |
              350k
            </p>
          </div>

          <button
            type="button"
            className="bg-videoRed text-white px-3 py-2 rounded-md flex items-center gap-2 justify-center"
          >
            <Image
              src="/images/two-tickets.svg"
              alt="two tickets"
              width={20}
              height={20}
            />
            See Showtimes
          </button>
          <button
            type="button"
            className="bg-red-300 px-3 py-2 rounded-md border border-videoRed flex items-center gap-2 justify-center"
          >
            <Image src="/images/List.svg" alt="list" width={20} height={20} />
            More Watch Options
          </button>
        </div>
      </div>
    </div>
  );
}
