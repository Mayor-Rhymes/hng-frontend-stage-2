export default function Tab({ text }: { text: string }) {
  return (
    <p className="border font-semibold cursor-pointer text-[12px] text-videoRed border-videoRed rounded-xl px-3">
      {text}
    </p>
  );
}
