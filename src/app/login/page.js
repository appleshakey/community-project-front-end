'use client';
import { useDispatch } from "react-redux"
import { useRouter } from "next/navigation";
import { Login } from "@/state/auth/authSlice";

export default function LoginPage() {
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        let form = new FormData();
        let formElement = e.target.elements;
        for(let i = 0; i < e.target.elements["length"]-1; i++){
            form.append(formElement[i].id, formElement[i].value);
        }

        const rResponse = await fetch("http://localhost:8000/users/authenticate_user/", {
            method: "POST",
            body: form,
        })

        if (rResponse.status == 200){
            const response = await rResponse.json();
            const tokenMsg = JSON.parse(response);
            dispatch(Login(tokenMsg["token"]));
            router.push("/home"); 
        }
    }

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <form className="flex flex-col p-5 justify-between items-center gap-5 w-[40vw] bg-gray-300" onSubmit={(e) => handleLogin(e)}>
                <div className="flex flex-row-reverse justify-between w-full">
                    <input required type="email" id="email"/>
                    <label htmlFor="email">email</label>
                </div>
                <div className="flex flex-row-reverse justify-between w-full">
                    <input required type="password" id="password"/>
                    <label htmlFor="password">password</label>
                </div>
                <div>
                    <button type="submit">login</button>
                </div>
            </form>
        </div>
    )
}