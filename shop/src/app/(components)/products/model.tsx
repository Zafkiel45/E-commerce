"use client";
import { getAllElementsOfCategorie, objectOfApi } from "@/app/api/calls";
import { Carrossel } from "../(carrossel)/slide";
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
      <div ref={ClientRef} className="overflow-hidden w-11/12">
          <Carrossel items={api} currentCategorie={currentCategorie}/>
      </div>
    </div>
  );
};
