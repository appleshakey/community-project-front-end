"use client";
export default function PublicPostCard({item}){
    //constants
    const SERVER = "http://localhost:8000/";

    return (
        <div className="text-black rounded-2xl border-2 px-5 py-2 flex h-[60vh] gap-3 shadow-xl ">
            <div className="bg-black rounded-lg">
                <img src={`${SERVER}${item.media[0].media}`} className="w-96 rounded-lg max-h-60"/>
            </div>
            <div className="flex flex-col p-5 w-[15vw] rounded-lg justify-between">
                <div className="flex flex-col">
                    <div className="text-2xl font-bold">
                        {item.user}
                    </div>
                    <div className="text-md font-semibold">
                        {item.title}
                    </div>
                </div>
                <div className="text-xs">
                    {item.description}
                </div>
            </div>
        </div>
    )
}