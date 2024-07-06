import MenImage from "../../images/image-hero-desktop.png";
import MenImageMobile from "../../images/image-hero-mobile.png";

///<reference types="vite-plugin-svgr/client"/>
import Databiz from "../../images/client-databiz.svg?react";
import Audiophile from "../../images/client-audiophile.svg?react";
import Meet from "../../images/client-meet.svg?react";
import Maker from "../../images/client-maker.svg?react";
import { Button } from "../button";
export const MainSection = () =>{
    return(
        <>
        <section className="w-full flex flex-col xl:flex-row mt-6 justify-between">
            <div className="relative text-center xl:text-left order-2 xl:order-1 mt-32 xl:mt-60 ">  
                {/* whitespace-pre-line  -  для распознания разметки */}
                <h1 className="text-7xl xl:text-8xl font-black whitespace-pre-line">{`Make\nremote work`}</h1>
                <p className="text-medium-gray text-xl my-12 whitespace-pre-line">{`Lorem, ipsum dolor sit amet consectetur adipisicing elit.\n Facilis, corrupti facere voluptates quod magnam blanditiis\n quibusdam eligendi iure ipsa. Eum dolore est dicta quam\n itaque eaque ipsa assumenda voluptatum dolores.`}</p>
                <Button isFilled={true}>Learn more</Button>
                <div className="flex flex-col items-center space-y-10 xl:flex-row justify-around mt-16 xl:mt-60 w-full ">
                    <Databiz/>
                    <Audiophile/>
                    <Meet/>
                    <Maker/>
                </div>
            </div>
            <div className="flex xl:hidden order-1 w-full justify-center mt-20">
                <img src={MenImageMobile} alt="" />
            </div>
            <div className="hidden xl:flex w-2/4 order-2 mt-20">
                <img src={MenImage} alt="" />
            </div>
        </section>
        </>
    )
}

