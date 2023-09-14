import { List } from "lucide-react";
export default function MovieSection() {
  return (
    <div className="bg-movie-card h-[300px] lg:h-0 bg-no-repeat bg-center rounded-md bg-cover grow flex flex-col justify-end">
      <div className="h-14 flex px-3 justify-evenly text-[12px] items-center text-white rounded-md backdrop-blur-sm">
        <List />
        <p>The Best Movies and Shows In September</p>
      </div>
    </div>
  );
}
