'use client';
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function CommunityPg(){
    //constants
    const pathName = usePathname();
    
    //states
    const [news, setNews] = useState([]);
    const [events, setEvents] = useState([]);
    const [userPosts, setUserPosts] = useState([]);

    const [category, setCategory] = useState("News")




    useEffect(() => {
        console.log(pathName.slice(11,));

    }, [])


    return (
        <div className="mt-36">
            <Navbar />
            <div className="flex justify-center">
                <div className="flex gap-9 text-3xl shadow-xl p-3 rounded-lg">
                    <button className={`bg-white text-primary rounded-lg p-3 transition-all ${category == "News" && "shadow-xl font-bold"}`} onClick={() => setCategory("News")}>
                        News
                    </button>
                    <button className={`bg-white text-primary rounded-lg p-3 transition-all ${category == "Events" && "shadow-xl font-bold"}`} onClick={() => setCategory("Events")}>
                        Events
                    </button>
                    <button className={`bg-white text-primary rounded-lg p-3 transition-all ${category == "Posts" && "shadow-xl font-bold"}`} onClick={() => setCategory("Posts")}>
                        Posts
                    </button>
                </div>
            </div>
            <div className="px-36 py-28">
                <div>
                    {
                        category == "News" && (
                            <div>
                                This is the news page
                            </div>
                        )
                    }
                </div>
                <div>
                    {
                        category == "Events" && (
                            <div>
                                This is the events page
                            </div>
                        )
                    }
                </div>
                <div>
                    {
                        category == "Posts" && (
                            <div>
                                this is posts page
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}