import { InputHTMLAttributes } from "react";


interface SearchBoxProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function SearchBox(props: SearchBoxProps) {
  return <input type="text" {...props} />;
}
