"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { useSelector } from "react-redux";
export default function CreatePublicPost(){
    //states
    const [File, setFile] = useState(undefined);
    const [preview, setPreview] = useState(undefined);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isposted, setIsPosted] = useState(false);
    const TOKEN = useSelector(state => state["auth"]["Token"]) 
    //|| "35af2e3d3ac0e1c6eebc083017196381459554d6"
    
    //constants
    const SERVER = "http://127.0.0.1:8000";

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append("title", title);
        form.append("description", description);
        form.append("no_of_media", "1");
        form.append("post 1", File);

        const rResponse = await fetch(`${SERVER}/public_posts/create_public_post/`, {
            method: "POST",
            headers: {
                "Authorization": `Token ${TOKEN}`
            },
            body: form,
        })

        if(rResponse.status == 201){
            setIsPosted(true);
        }
    }

    const handleChange = (e) => {   
        setFile(e.target.files[0]);
        const file = new FileReader();
        file.onload = () => {
            setPreview(file.result);
        }
        file.readAsDataURL(e.target.files[0])
    }


    return(
        <div className="mt-36 px-5 w-screen flex justify-center items-center">
            <Navbar />
            {!preview && !isposted && (
                <div className="w-screen h-96 flex justify-center items-center">
                    <input type="file" accept="image/*" onChange={(e) => handleChange(e)}/>
                </div>
                )}
            {
               preview && !isposted &&
            (
            <div className="w-screen h-96 flex justify-center items-center p-3">
                <div className="flex border-2 p-5 shadow-lg rounded-lg">
                    <div className="h-96 w-[25vw] flex justify-center items-center bg-black rounded-lg">
                        <img src={preview}/>
                    </div>
                    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-6 p-5 items-center justify-center">
                        <div className="text-3xl text-center text-primary font-bold">
                            Create <br/>Your Journey
                        </div>
                        <div className="flex flex-row-reverse justify-between gap-9 w-full">
                            <input type="text" name="title" id="title" className="" value={title} onChange={(e) => setTitle(e.target.value)}/>
                            <label htmlFor="title">title</label>
                        </div>
                        <div className="flex flex-row-reverse justify-between gap-9 w-full">
                            <textarea name="description" id="description" className="h-24 resize-none" value={description} cols="22" onChange={(e) => setDescription(e.target.value)}/>
                            <label htmlFor="description">description</label>
                        </div>
                        <div className="bg-primary px-3 py-2 rounded-lg text-white">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            )}
            {isposted && (
                <div className="w-screen text-primary text-4xl font-bold text-center h-96 flex flex-col gap-8 items-center justify-center">
                    <h1>Created post</h1>
                    <h3 className="text-xl">your post will now be visible in the public post section for everyone</h3>
                </div>
            )}
        </div>
    )
}