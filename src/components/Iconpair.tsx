`use client`;

import { ReactNode } from "react";
import { useRouter } from "next/navigation";

interface Props {
  children: ReactNode;
  href?: string | null;
}

export default function Iconpair({ children, href }: Props) {
  const router = useRouter();

  const handleNavigation = () => {
    if (href) {
      router.push(href);
    }
  };

  return (
    <div
      onClick={handleNavigation}
      className="flex justify-center gap-10 py-5 hover:bg-red-300 hover:border-r-4 hover:border-r-videoRed transition-all cursor-pointer"
    >
      {children}
    </div>
  );
}
