'use client'
import { Header } from "../header"
import { Items } from "../items"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function CardRoute() {
    
    const key = 'productInCar'
    interface LocalStorageInterface {
        name: string;
        date: string;
        price: string;
        image: string;
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
            <Items/>
            <div className="w-full">
                {local.map((item, idx) => {
                    return (
                        <div className="flex gap-2 p-3 border-b border-b-gray-300">
                            <div className="flex justify-center w-16 items-center">
                                <Image src={item.image} alt="" height={50} width={50}/>
                            </div>
                            <div className="flex gap-1 w-full flex-col">
                                <div className="text-sm">{item.name}</div>
                                <div className="text-sm font-medium">
                                    total: <span className="text-green-500 ">{item.price} R$</span>
                                </div>
                                <div className="text-xs font-bold text-gray-400">
                                    {item.date}
                                </div>
                                <div>
                                    <button onClick={() => removeItem(idx)} className="bg-red-500 rounded-md shadow-sm text-white font-medium px-2 text-sm py-1">
                                        Remover
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}  