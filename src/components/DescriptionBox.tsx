import Image from "next/image";
import {useRouter} from "next/navigation";

export default function DescriptionBox() {

  const router = useRouter();

  return (
    <div className="flex flex-col gap-3 text-white w-[310px]">
      <h2 className="text-3xl font-semibold">
        John Wick 3 :<br /> Parabellum
      </h2>
      <div className="flex space-between items-center gap-4">
        <div className="flex gap-3 items-center">
          <Image src="/images/imdb.svg" alt="imdb" width={20} height={20} />
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
      <p className="text-[14px] text-justify">
        John Wick is on the run after killing a member of the international
        assassins guild, and with a $14 million price tag on his head, he is
        the target of hit men and women everywhere.
      </p>
      <button
        onClick={() => router.push("https://www.youtube.com/watch?v=M7XM597XO94&ab_channel=LionsgateMovies")}
        type="button"
        className="bg-[#BE123C] py-2 max-w-[50%] rounded-sm flex justify-center items-center gap-3 hover:bg-[#BE564F] transition-all"
      >
        <Image src="/images/Play.svg" alt="play" width={15} height={15} />
        Watch Trailer
      </button>
    </div>
  );
}
