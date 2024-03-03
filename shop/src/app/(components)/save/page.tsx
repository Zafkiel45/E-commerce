'use client'
import { Header } from "../header"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function CardRoute() {
    
    const key = 'saveInCar'
    interface LocalStorageInterface {
        name: string;
        date: string;
        price: string;
        image: string;
        categorie: string;
    }
    const [local, setLocal] = useState<LocalStorageInterface[]>([]);
    useEffect(() => {
            const allElementsInCar = async () => {
                const ElementsInCar = await JSON.parse(localStorage.getItem(key) || '[]');
                try {
                    if(!ElementsInCar) {
                        throw new Error("LocalStorage Vazio");
                    }
                    setLocal(ElementsInCar);
                } catch (mensage) {
                    console.log(mensage);
                }
            }
            allElementsInCar();
    },[]);
    const removeItem = (index: number) => {
        const AllElementsAvaliable = local;
        const AllElementsFilted = AllElementsAvaliable.filter((_item, currentIdx) => {
            return currentIdx != index
        })
        setLocal(AllElementsFilted);
        localStorage.setItem(key, JSON.stringify(AllElementsFilted))
    }

    return (
        <>
            <Header/>
            <div className="w-full flex min-h-[70vh] h-auto flex-col items-center">
                {local.length === 0 ? (
                    <div className="flex items-center justify-center h-[81vh] w-screen">
                        <p className="mobile-big:text-lg tablet:text-xl tablet-big:text-2xl">
                            Sua lista de desejos esta vazia!
                        </p>
                    </div>
                ): local.map((item, idx) => {
                    return (
                            <div key={idx} className="flex gap-2 w-full mobile-big:p-5 p-3 border-b border-b-gray-300">
                                    <div className="flex justify-center mobile-big:w-20 w-16 items-center">
                                        <Image src={item.image} alt="" height={50} width={50}/>
                                    </div>
                                    <div className="flex gap-1 w-full flex-col">
                                        <div className="text-sm mobile-big:text-base tablet-big:text-lg">{item.name}</div>
                                        <div className="text-sm mobile-big:text-base tablet-big:text-lg font-medium">
                                            total: <span className="text-green-500 ">{item.price} R$</span>
                                        </div>
                                        <div className="text-xs mobile-big:text-sm tablet-big:text-base font-bold text-gray-400">
                                            {item.date}
                                        </div>
                                        <div>
                                            <button onClick={() => removeItem(idx)} className="bg-red-500 rounded-md shadow-sm text-white font-medium  px-2 tablet-big:text-base text-sm py-1">
                                                Remover
                                            </button>
                                        </div>
                                    </div>
                                </div>
                        )})}
            </div>
        </>
    )
}  