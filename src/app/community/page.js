"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
export default function Community(){
    
    //constants
    const SERVER = "http://localhost:8000/";
    const TOKEN = useSelector(state => state["auth"]["Token"]) 
    || "35af2e3d3ac0e1c6eebc083017196381459554d6";

    //states
    const [isJoin, setIsJoin] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [code, setCode] = useState("");
    const [photo, setPhoto] = useState(undefined);
    const [preview, setPreview] = useState(undefined);
    const router = useRouter(); 

    //functions
    const handleFormChange = (e) => {
        setName("");
        setDescription("");
        setCode("");
        setIsJoin(!isJoin);
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (isJoin) {
            const formBody = new FormData();
            formBody.append("name", name);
            formBody.append("description", description);
            formBody.append("photo", photo);

            const rResponse = await fetch(`${SERVER}/community/create_community/`, {
                method: "POST",
                headers: {
                    "Authorization": `Token ${TOKEN}`
                },
                body: formBody,
            });

            if (rResponse.status == 201){
                router.push("/home");
            }
        }
        else{
            const formBody = new FormData();
            formBody.append("secret_key", code);
            const rResponse = await fetch(`${SERVER}/community/join_community/`, {
                method: "POST",
                headers: {
                    "Authorization": `Token ${TOKEN}`
                },
                body: formBody,
            });

            if(rResponse.status == 200){
                router.push("/home");
            }
        }
    }

    const handleChange = (e) => {
        setPhoto(e.target.files[0]);
        const file = new FileReader();
        file.onload = () => {
            setPreview(file.result);
        }
        file.readAsDataURL(e.target.files[0]);
    }

    return(
        <div className="pt-36">
            <Navbar />
            <div className="flex w-screen justify-center items-center">
                <div className="w-[80vw] h-[80vh] border-2 rounded-xl flex justify-between bg-gray-100">
                    { isJoin ? (
                        <form className=" w-[30vw] h-full flex flex-col gap-7 justify-center items-center" onSubmit={(e)=>handleFormSubmit(e)}>
                        <div className="text-primary text-5xl flex justify-center text-center font-bold font-staat">
                            Create your own Pack!!
                        </div>
                        <div className="flex flex-col-reverse gap-1 font-bold text-xl">
                            <input type="text" id="name" name="name" className="rounded-lg font-medium p-2" value={name} onChange={(e) => setName(e.target.value)} required/>
                            <label htmlFor="name">name</label>
                        </div>
                        <div className="flex flex-col-reverse gap-1 font-bold text-xl">
                            <textarea type="text" id="description" name="description" className="rounded-lg font-medium resize-none text-sm p-2" cols="30" rows="7" value={description} onChange={(e) => setDescription(e.target.value)} required/>
                            <label htmlFor="description">description</label>
                        </div>
                        { preview && (
                            <div className="rounded-full">
                                <img src={preview} className="h-24 w-24 rounded-full"/>
                            </div>
                        )}
                        <div className="flex flex-col-reverse gap-1 font-bold text-xl justify-center items-center">
                            <input type="file" accept="image/*" id="photo" name="photo" className="rounded-lg font-medium resize-none text-sm py-2" onChange={handleChange} placeholder="" required/>
                            <label htmlFor="photo">photo</label>
                        </div>
                        <div className="flex flex-col">
                            <button className="bg-primary px-3 py-1 rounded-lg text-white hover:scale-110 transition-all" type="submit">Create</button>
                        </div>
                        <div>
                            <button className="text-primary underline" onClick={() => handleFormChange()}>Want To Join a Group?</button>
                        </div>
                    </form>
                    ) : (
                        <form className=" w-[30vw] h-full flex flex-col gap-7 justify-center items-center" onSubmit={(e) => handleFormSubmit(e)}>
                        <div className="text-primary text-5xl flex justify-center text-center font-bold font-staat">
                            Join a Pack!!
                        </div>
                        <div className="flex flex-col-reverse gap-1 font-bold text-xl">
                            <input type="text" id="code" name="code" className="rounded-lg font-medium p-2" value={code} onChange={(e) => setCode(e.target.value)} required/>
                            <label htmlFor="name">Code</label>
                        </div>
                        <div className="flex flex-col">
                            <button className="bg-primary px-3 py-1 rounded-lg text-white hover:scale-110 transition-all">Join</button>
                        </div>
                        <div>
                            <button className="text-primary underline" type="submit" onClick={() => handleFormChange()}>Want To Create a Group?</button>
                        </div>
                    </form>
                    )}
                    <div className="flex justify-center items-center">
                        <img src="./community.png" className="w-[50vw] h-[80vh] rounded-lg"/>
                    </div>
                </div>
            </div>            
        </div>
    )
}