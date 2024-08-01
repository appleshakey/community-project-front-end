"use client";
export default function CommunityCard({item}){
    //constants
    const SERVER = "http://localhost:8000";

    return (
        <button className="w-[65vw] bg-gray-200 flex justify-between p-2 rounded-lg shadow-lg hover:scale-110 transition-all">
            <div className="flex gap-3">
                <div className="">
                    <img src={`${SERVER}${item.photo}`} className="h-24 w-24 rounded-full border-4 border-gray-300"/>
                </div>
                <div className="flex flex-col justify-between py-2">
                    <div className="text-primary font-bold text-2xl font-staat text-left">
                        <h1>{item.name}</h1>
                    </div>
                    <div className="font-light text-left">
                        <h3>{item.description}</h3>
                    </div>
                </div>
            </div>
        </button>
    )
}