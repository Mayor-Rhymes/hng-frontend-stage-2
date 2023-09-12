export default function PlayCard() {
  return (
    <div className="flex group flex-col gap-4 py-4 justify-center items-center rounded-3xl border mx-5 justify-self-center border-videoRed">
      <h5 className="text-md font-semibold">
        Play movie quizes <br /> and earn <br /> free tickets
      </h5>
      <p className="text-sm text-slate-400">
        50k people are playing <br /> now
      </p>
      <button
        type="button"
        className="text-videoRed bg-red-300 hover:bg-red-600 rounded-xl px-4 py-2 text-sm font-semibold hover:text-white transition-all"
      >
        Start Playing
      </button>
    </div>
  );
}
