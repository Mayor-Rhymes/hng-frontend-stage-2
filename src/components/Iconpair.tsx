import { ReactNode } from "react"



export default function Iconpair({children}: {children: ReactNode}) {

    return (
        <div className="flex justify-center gap-10 py-5 hover:bg-red-300 hover:border-r-4 hover:border-r-videoRed transition-all cursor-pointer">
             {children}
        </div>
    )
}