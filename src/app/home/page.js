'use client';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import PublicPostCard from "@/components/PublicPostCard";

export default function Home(){
    const TOKEN = useSelector(state => state["auth"]["Token"]) 
    //|| "35af2e3d3ac0e1c6eebc083017196381459554d6";
    const serverDomain = "http://localhost:8000/";
    const router = useRouter();
    const [isPublic, setIsPublic] = useState(true);
    const [publicPosts, setPublicPosts] = useState([])
    useEffect(() => {
        console.log(TOKEN);
        const getPublicPosts = async () => {
            const rResponse = await fetch("http://localhost:8000/public_posts/show_public_posts/", {
                method: "GET",
                headers: {
                    "Authorization": `Token ${TOKEN}`
                }
            })
            if(rResponse.status == 200){
                const response = await rResponse.json();
                const data = JSON.parse(response);
                setPublicPosts(data);
                console.log(data);
            }
        }

        return () => getPublicPosts();
    }, [])

    const handleCreation = () => {
        if(isPublic){
            router.push("/create-public-post");
        }
        else{
            router.push("/community");
        }
    }

    {/* {publicPosts.map(post => (
                    <div key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.description}</p>
                        <div className="flex gap-10">
                            {post.media.map(media => (
                                <div key={media.id}>
                                    <img src={serverDomain+media.media} className="w-10 h-10"/>
                                </div>
                      ))}
                            </div>
                        </div>
                    ))} */}

    return(
        <div>
            <button className="fixed bottom-5 right-5 z-20 rounded-full w-20 h-20 bg-white shadow-xl text-primary text-3xl flex justify-center items-center hover:bg-primary hover:text-white transition-all" onClick={() => handleCreation()}>
                +
            </button>
            <div className="shadow-lg py-5 fixed w-full">
                <div className="">
                    <div className="w-28 h-16 px-8">
                        <img src="./logo.svg"/>
                    </div>
                </div>
                <div className="flex justify-center gap-10">
                    <div>
                        {isPublic ? (<button className="bg-primary px-5 py-3 transition-all text-white scale-110 rounded-xl">Public</button>) : (<button className="bg-white px-5 py-3 transition-all" onClick={() => setIsPublic(!isPublic)}>Public</button>)}
                    </div>
                    <div>
                        {!isPublic ? (<button className="bg-primary px-5 py-3 transition-all text-white scale-110 rounded-xl">Community</button>) : (<button className="bg-white px-5 py-3 transition-all" onClick={() => setIsPublic(!isPublic)}>Community</button>)}
                    </div>
                </div>
            </div>
            <div className="pt-44 w-full flex justify-center">
                { isPublic ? (
                <div className="flex flex-col gap-28 overflow-y-scroll w-full items-center py-5">
                    {publicPosts && publicPosts.map(post => (
                        <PublicPostCard key={post.id} item={post} />
                ))}
                </div>) 
                : (
                    <div>
                        this is community page
                    </div>
                )}
            </div>
        </div>
    )   
}