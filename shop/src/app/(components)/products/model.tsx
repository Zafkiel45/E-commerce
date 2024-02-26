"use client";
import { getAllElementsOfCategorie, objectOfApi } from "@/app/api/calls";
import { useState, useRef, useEffect } from "react";
import { LeftButton, RightButton } from "./buttons";
import Image from "next/image";
import Link from "next/link";

interface ModelProps {
  currentCategorie: string;
}

export const Model = ({ currentCategorie }: ModelProps) => {
  const [api, setApi] = useState<objectOfApi[]>([]);
  const ClientRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<number>(0);
  const [idx, setIdx] = useState<number>(0);
  useEffect(() => {
    const call = async () => {
      const data = await getAllElementsOfCategorie(currentCategorie);
      setApi(data);
    };

    call();
  }, [currentCategorie]);

  const RightEventButton = () => {
    if (ClientRef.current !== null && ClientRef.current !== undefined) {
      const calc = (idx + 1) % api.length;
      setIdx(calc);
      const totalValue = ClientRef.current.clientWidth + 12;
      setPosition(-calc * totalValue);
    } else {
      throw new Error("Ocorreu um erro ao utilzar o carrossel");
    }
  };
  const leftEventButton = () => {
    if (ClientRef.current !== null && ClientRef.current !== undefined) {
      const calc = (idx - 1 + api.length) % api.length;
      setIdx(calc);
      const totalValue = ClientRef.current.clientWidth + 12;
      setPosition(-calc * totalValue);
    } else {
        throw new Error("Ocorreu um erro ao utilzar o carrossel");
    }
  };

  return (
    <div className="flex w-full gap-4 justify-center items-center">
      <LeftButton currentEvent={leftEventButton} />
      <div ref={ClientRef} className="overflow-hidden w-52">
        <div
          style={{ transform: `translateX(${position}px)` }}
          className="w-full flex gap-3 h-fit"
        >
          {api.map((item, idx) => {
            return (
              <Link href={`/item/${currentCategorie}/${idx}`}>
                <div className="bg-white flex-shrink-0 flex flex-col gap-4 rounded-md w-52 border-gray-200 p-4">
                  <div className="flex justify-center items-center">
                      <Image className="min-h-[130px] object-contain min-w-[130px]" src={item.image} alt="" height={100} width={100} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-black font-medium text-sm">{item.title}</div>
                    <div className="text-green-500 font-medium">{item.price} R$</div>
                    <div className="text-sm text-gray-400">Frete: <del>21,43 R$</del> 00,00 R$</div>
                    <div className="text-sm text-gray-400">Loja: Lorem Ipsum</div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <RightButton currentEvent={RightEventButton} />
    </div>
  );
};
