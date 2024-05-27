"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import Bg_gradient_card from "./Bg_gradient_card";

function Lamp_animation() {
    return (
        <>
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            <div className=" flex flex-wrap gap-10 mt-[100px]">

                <div className="h-[auto] w-[200px] rounded-3xl bg-transparent border-b-[0.5px] border-cyan-400 p-2">
                <p className=" text-[20px] "> SASS </p>
                <p className="text-sm mt-2">this is an sass application hjgfvciusfgvhk jkdshfjkvrghv hgcdsvg dsjgvuk rwv iuewhfiuv we4iu hiufegfiuegwiuf hiueashfiuewi hiufehufewkghv</p>
                <p className="text-sm">read more..</p>
                </div>

                <div className="h-[200px] w-[200px] rounded-3xl bg-transparent border-b-[1px] border-cyan-400 p-5">
                     <h1 className="text-sm">Social media</h1>
                </div>

                <div className="h-[200px] w-[200px] rounded-3xl bg-transparent border-b-[1px] border-cyan-400 p-5">
                     <h1 className="text-sm">E-commerece</h1>
                </div>

                <div className="h-[200px] w-[200px] rounded-3xl bg-transparent border-b-[1px] border-cyan-400 p-5">
                     <h1 className="text-sm">whatsapp clone</h1>
                </div>

                <div className="h-[200px] w-[200px] rounded-3xl bg-transparent border-b-[0.5px] border-cyan-400 p-5">
                     <h1 className="text-sm">project-5</h1>
                </div>
                
                


            </div>
          </motion.h1>
        </LampContainer>
       
            
        
        </>
      );
}

export default Lamp_animation
