interface Props {
  image_path: string;
}

export default function Videoview({ image_path }: Props) {
  return (
    <iframe
      title="youtubeview"
      className="rounded-lg h-[400px] bg-no-repeat bg-cover bg-center"
      src={`https://www.youtube.com/embed/${image_path}`}
    ></iframe>
  );
}
