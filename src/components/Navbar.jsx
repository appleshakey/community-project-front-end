"use client";
import { useRouter } from "next/navigation";
export default function Navbar(){
    const router = useRouter();
    return (
        <div className="flex justify-between absolute top-0 left-0 w-full px-5 py-3 border-b-2 shadow-lg">
            <button onClick={() => router.push("/home")}>
                <img src="/logo.svg" className="w-28 h-16 px-8"/>
            </button>
        </div>
    )
}