"use client";
import Navbar from "@/components/Navbar"
import { useState } from "react"
export default function Community(){
    
    //states
    const [isJoin, setIsJoin] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [code, setCode] = useState("");

    //functions
    const handleFormChange = (e) => {
        setIsJoin(!isJoin);
    }


    return(
        <div className="pt-36">
            <Navbar />
            <div className="flex w-screen justify-center items-center">
                <div className="w-[80vw] h-[70vh] border-2 rounded-xl flex justify-between bg-gray-100">
                    { isJoin ? (
                        <form className=" w-[30vw] h-full flex flex-col gap-7 justify-center items-center">
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
                        <div className="flex flex-col">
                            <button className="bg-primary px-3 py-1 rounded-lg text-white hover:scale-110 transition-all">Create</button>
                        </div>
                        <div>
                            <button className="text-primary underline" onClick={() => handleFormChange()}>Want To Join a Group?</button>
                        </div>
                    </form>
                    ) : (
                        <form className=" w-[30vw] h-full flex flex-col gap-7 justify-center items-center">
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
                            <button className="text-primary underline" onClick={() => handleFormChange()}>Want To Create a Group?</button>
                        </div>
                    </form>
                    )}
                    <div className="flex justify-center items-center">
                        <img src="./community.png" className="w-[50vw] h-[70vh] rounded-lg"/>
                    </div>
                </div>
            </div>            
        </div>
    )
}