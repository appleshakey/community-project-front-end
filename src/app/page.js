"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, animate, stagger } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const [showHome, setShowHome] = useState(false);
  const [hoverJoin, setHoverJoin] = useState(false);
  const [hoverCreate, setHoverCreate] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    const item = document.querySelector('.back');
    let opac = 0;
    let intervalId = setInterval(() => {
      if (opac <= 100){
        item.style.opacity = 0;
        opac += 2.5;
      }
      else{
        item.style.opacity = 100;
        console.log("ended");
        setShowHome(true);
        clearInterval(intervalId);
      }
    }, 10)

  }, [])

  return (
    <motion.div className="flex flex-col items-center gap-28 mb-10">
      <motion.div className="flex flex-col justify-center items-center">
        <motion.div className="bg-backgray h-[100vh] w-[75vw] bg-cover bg-no-repeat">
          <motion.div className="bg-backcolor h-[100vh] w-[75vw] bg-cover bg-no-repeat transition-all back flex justify-center items-center opacity-0">
          { showHome && 
            (<motion.div className="flex flex-col gap-8 text-center">
              <motion.h1 className="text-7xl font-bold text-primary font-inter" initial={{y: 200, opacity: 0}} animate={{y:0, opacity:100}}>HoodHive</motion.h1>
              <motion.h4 className="text-4xl font-bold text-white font-inter px-72 drop-shadow-2xl" initial={{y: 200, opacity: 0}} animate={{y:0, opacity:100}}>
                Welcome to HoodHive, this is a platform to explore communities and create your communities
              </motion.h4>
            </motion.div>
            )
          }
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="flex flex-col w-[75vw] gap-5">
        <div className="text-5xl font-inter text-left font-bold">
          <h1>About <span className="text-primary">Project</span></h1>
        </div>
        <div className="font-inter font-light text-3xl">
          <p>Lorem ipsum dolor sit amet consectetur. Ipsum ultrices rhoncus sit egestas nulla sit scelerisque pellentesque volutpat. Luctus imperdiet dolor neque amet ultrices bibendum fermentum cras sit. Bibendum auctor vitae elit nisl praesent nunc bibendum. Nullam at eget sagittis pharetra sed. Nisl duis commodo proin posuere gravida vitae. Sed amet pulvinar pulvinar odio ultrices interdum. Ultrices accumsan urna egestas urna quis consequat tortor neque feugiat.</p>
        </div>
      </div>
      <div className="flex flex-col w-[75vw] gap-5 text-right">
        <div className="text-5xl font-inter font-bold">
          <h1>About <span className="text-primary">Community</span></h1>
        </div>
        <div className="font-inter font-light text-3xl">
          <p>Lorem ipsum dolor sit amet consectetur. Ipsum ultrices rhoncus sit egestas nulla sit scelerisque pellentesque volutpat. Luctus imperdiet dolor neque amet ultrices bibendum fermentum cras sit. Bibendum auctor vitae elit nisl praesent nunc bibendum. Nullam at eget sagittis pharetra sed. Nisl duis commodo proin posuere gravida vitae. Sed amet pulvinar pulvinar odio ultrices interdum. Ultrices accumsan urna egestas urna quis consequat tortor neque feugiat.</p>
        </div>
      </div>
      <div className="text-left flex flex-col w-[75vw] gap-5">
        <div className="text-5xl font-inter font-bold">
          <h1>Community <span className="text-primary">Post</span></h1>
        </div>
        <div className="font-inter font-light text-3xl">
          <p>Lorem ipsum dolor sit amet consectetur. Ipsum ultrices rhoncus sit egestas nulla sit scelerisque pellentesque volutpat. Luctus imperdiet dolor neque amet ultrices bibendum fermentum cras sit. Bibendum auctor vitae elit nisl praesent nunc bibendum. Nullam at eget sagittis pharetra sed. Nisl duis commodo proin posuere gravida vitae. Sed amet pulvinar pulvinar odio ultrices interdum. Ultrices accumsan urna egestas urna quis consequat tortor neque feugiat.</p>
        </div>
      </div>
      <motion.div className="w-[75vw] flex flex-col items-center gap-16">
        <motion.div className="flex justify-center gap-8 font-inter font-bold ">
          <motion.button className="text-2xl hover:text-primary transition-all hover:scale-125" onHoverStart={() => setHoverJoin(true)} onHoverEnd={() => setHoverJoin(false)}>Join</motion.button>
          <motion.button className="text-primary text-5xl">Community</motion.button>
          <motion.button className="text-2xl hover:text-primary transition-all hover:scale-125" onHoverStart={() => setHoverCreate(true)} onHoverEnd={() => setHoverCreate(false)}>Create</motion.button>
        </motion.div>
        <motion.div className="grid grid-cols-2 gap-44">
          <motion.div className="flex items-center">
            <motion.div className="w-52 h-52">
              {hoverJoin ? (<motion.div><motion.img src="./joincolor.svg" className="scale-150 transition-all"/></motion.div>) : (<motion.div className="transition-all"><motion.img src="/joinblack.svg"/></motion.div>)}
            </motion.div>
          </motion.div>
          <motion.div className="flex items-center">
            <motion.div className="w-52 h-32">
            {hoverCreate ? (<motion.div><motion.img src="./createcolor.svg" className="scale-150 transition-all"/></motion.div>) : (<motion.div className="transition-all"><motion.img src="/createblack.svg"/></motion.div>)}
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="text-3xl font-inter font-light">
          <p>Lorem ipsum dolor sit amet consectetur. Ultricies tempus quisque sit enim amet euismod viverra. Aliquam lorem venenatis sit quis interdum feugiat a. Ac eget bibendum pellentesque gravida nam quam suspendisse vulputate. Ipsum velit sapien curabitur rhoncus. Enim ipsum pellentesque lacus amet nullam sagittis urna. </p>
        </div>
      </motion.div>
      <div className="w-[75vw] h-78 flex justify-center items-center">
          <div className="flex flex-col items-center gap-7">
            <div className=" text-3xl">Why wait.... Join Now</div>
            <div className="rounded-lg bg-gray-400 px-3 py-2 hover:bg-orange-400 hover:text-white hover:scale-110 transition-all">
              <button onClick={() => router.push("./signUp/")}>Sign up</button>
            </div>
          </div>
      </div>
    </motion.div>
  );
}
