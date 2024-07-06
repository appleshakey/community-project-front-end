"use client";
import { useState } from "react"
import { useRouter } from "next/navigation";

export default function SignUpPage(){
    const router = useRouter();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [Age, setAge] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [pincode, setPincode] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmation, setConfirmation] = useState("");

    const handleSignUpForm = async (e) => {
        e.preventDefault();
        if(password !== confirmation){
            console.log("the passwords are not matching!...");
            return; 
        }
        const form = new FormData();
        form.append("email", email);
        form.append("password", password);
        form.append("name", `${firstName} ${lastName}`);
        form.append("age", Age);
        form.append("country", country);
        form.append("state", state);
        form.append("pincode", pincode);
        form.append("username", userName);
        
        const rResponse = await fetch("http://localhost:8000/users/create_user/",{
            method: "POST",
            body: form,
        })

        if(rResponse.status == 201){
            router.push("/login");
        }
        
    }
    

    
    return (
        <div className="mx-28 flex flex-col gap-24 mb-16">
            <div className="flex flex-col gap-10">
                <div className="w-full flex justify-center">
                    <img src="./logo.svg"/>
                </div>
                <div className="w-full flex justify-center font-staat font-medium text-7xl">
                    <h1>H O O D &nbsp; H I V E</h1>
                </div>
            </div>
            <form className="flex flex-col text-2xl font-inter gap-10" onSubmit={(e) => handleSignUpForm(e)}>
                <div className="grid grid-cols-3 gap-28">
                    <div className="flex flex-col-reverse gap-7 text-left">
                        <input required type="text" id="firstname" className="rounded-lg bg-gray-200 border outline-none p-2" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                        <label htmlFor="firstname">Firstname</label>
                    </div>
                    <div className="flex flex-col-reverse gap-7 text-left">
                        <input required type="text" id="lastname" className="rounded-lg bg-gray-200 border outline-none p-2" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        <label htmlFor="lastname">Lastname</label>
                    </div>
                    <div className="flex flex-col-reverse gap-7 text-left">
                        <input required type="number" id="age" className="rounded-lg bg-gray-200 border outline-none p-2" value={(Age)} onChange={(e) => setAge(e.target.value)}/>
                        <label htmlFor="age">Age</label>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-28">
                    <div className="flex flex-col-reverse gap-7 text-left">
                        <input required type="text" id="country" className="rounded-lg bg-gray-200 border outline-none p-2" value={country} onChange={(e)=> setCountry(e.target.value)}/>
                        <label htmlFor="country">Country</label>
                    </div>
                    <div className="flex flex-col-reverse gap-7 text-left">
                        <input required type="text" id="state" className="rounded-lg bg-gray-200 border outline-none p-2" value={state} onChange={(e) => setState(e.target.value)}/>
                        <label htmlFor="state">State</label>
                    </div>
                    <div className="flex flex-col-reverse gap-7 text-left">
                        <input required type="number" id="pincode" className="rounded-lg bg-gray-200 border outline-none p-2" value={pincode} onChange = {(e) => {setPincode(e.target.value)}} max="999999"/>
                        <label htmlFor="pincode">Pincode</label>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-28">
                    <div className="flex flex-col-reverse gap-7 text-left">
                        <input required type="email" id="email" className="rounded-lg bg-gray-200 border outline-none p-2" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="email">Email-Id</label>
                    </div>
                    <div className="flex flex-col-reverse gap-7 text-left">
                        <input required type="text" id="username" className="rounded-lg bg-gray-200 border outline-none p-2" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                        <label htmlFor="username">User-name</label>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-28">
                    <div className="flex flex-col-reverse gap-7 text-left">
                        <input required type="password" id="password" className="rounded-lg bg-gray-200 border outline-none p-2" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="flex flex-col-reverse gap-7 text-left">
                        <input required type="password" id="reenter" className="rounded-lg bg-gray-200 border outline-none p-2" value={confirmation} onChange={(e) => setConfirmation(e.target.value)}/>
                        <label htmlFor="reenter">Re-enter</label>
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <div className="px-5 py-2 rounded-3xl bg-gradient-to-r from-[#ff7b00] to-[#fad34f] font-inter text-white text-xl hover:scale-125 transition-all">
                        <button type="submit">submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}