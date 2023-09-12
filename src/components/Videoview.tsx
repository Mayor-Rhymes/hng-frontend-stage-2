interface Props {
  image_path: string;
}

export default function Videoview({ image_path }: Props) {
  return (
    <div
      className="rounded-lg h-[400px] bg-black bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${image_path})`,
      }}
    ></div>
  );
}
