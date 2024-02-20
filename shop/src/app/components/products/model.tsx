'use client'
import { getAllElementsOfCategorie, objectOfApi } from "@/app/api/calls";
import { useState, useRef, useEffect} from 'react';
import { LeftButton, RightButton } from "./buttons";
import Image from "next/image";

interface ModelProps {
    currentCategorie: string;
}

export const Model = ({currentCategorie}: ModelProps) => {

    const [api, setApi] = useState<objectOfApi[]>([]);
    const ClientRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState<number>(0);
    const [idx, setIdx] = useState<number>(0);
    useEffect(() => {
        const call = async () => {
            const data = await getAllElementsOfCategorie(currentCategorie)
            setApi(data);
        }
        
        call()
    }, [currentCategorie]);

    const RightEventButton = () => {
        if(ClientRef.current !== null && ClientRef.current !== undefined) {
            const calc = (idx + 1) % api.length;
            setIdx(calc); 
            const totalValue = ClientRef.current.clientWidth + 12;
            setPosition(-calc * totalValue);
        } else {
            throw new Error("Ocorreu um erro ao utilzar o carrossel")
        }
    };
    const leftEventButton = () => {
        if(ClientRef.current !== null && ClientRef.current !== undefined) {
            const calc = (idx - 1 + api.length) % api.length;
            setIdx(calc); 
            const totalValue = ClientRef.current.clientWidth + 12;
            setPosition(-calc * totalValue)
            throw new Error("Ocorreu um erro ao utilzar o carrossel")
        }
    };

    return (
        <div className="flex w-full gap-4 justify-center items-center">
            <LeftButton currentEvent={leftEventButton}/>
                <div ref={ClientRef} className="overflow-hidden w-52">
                    <div style={{transform: `translateX(${position}px)`}} className="w-full flex gap-3 h-[250px]">
                        {api.map((item) => {
                            return (
                                <div className="bg-white flex-shrink-0 rounded-md w-52 border-gray-200 p-4">
                                    <div className="flex justify-center items-center">
                                        <Image 
                                            src={item.image} 
                                            alt="" 
                                            height={100} 
                                            width={100}
                                        />
                                    </div>
                                    <div>
                                        <div className="text-black">
                                            {item.title}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            <RightButton currentEvent={RightEventButton}/>
        </div>
    )
}