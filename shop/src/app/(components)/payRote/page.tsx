'use client'
import { Header } from "../header";
import { Items } from "../items";
import { useEffect, useState } from "react";
import { objectOfApi } from "@/app/api/calls";

export default function Page() {

    const [localStorager, setLocalStorager] = useState<objectOfApi[]>([]);
    const [total, setTotal] = useState(0);
    const [visible, setVisible] = useState<string>("hidden")
    useEffect(() => {
        const CallOfLocalStorage = async () => {
            const currentItemsInLocalStorage = await JSON.parse(localStorage.getItem('productInCar') || '[]')
            try {
                if(currentItemsInLocalStorage) {
                    setLocalStorager(currentItemsInLocalStorage);
                } else {
                    throw new Error("localStorage is empty");
                }
            } catch (error) {
                console.log(error)
            }
        } 
        CallOfLocalStorage();


    }, [])

    useEffect(() => {
        const totale = localStorager.reduce((accumulator, item) => {
            return accumulator + parseFloat(item.price);
        }, 0);
        setTotal(totale);
    }, [localStorager]);

    return(
        <>
            <Header/>
            <Items/>
            <div className="p-5 flex flex-col gap-5">
                <div className="bg-[#4451CA] rounded-md flex flex-col gap-3 shadow-md text-white px-4 py-3">
                    <h1 className="text-center font-bold ">Finalizar pagamento</h1>  
                    <div className="flex flex-col gap-1">
                        <p className="text-[#C0BCBC]">Preço dos Items: {total} R$</p>
                        <p className="text-[#C0BCBC]">Frete e Manuseio: 00,00 R$</p>
                        <p className="text-[#C0BCBC]">Método de pagamento: Pix</p>
                        <p className="text-[#C0BCBC]">Data de entrega: 29/2/2077</p>
                        <p className="text-lg font-medium">Total: {total} R$</p>
                    </div>  
                    <hr />
                    <div className="w-full">
                        <button className="bg-[#CA8C44] w-full p-2 rounded-md text-white font-medium active:relative active:-bottom-1">
                            Finalizar Compra
                        </button>
                    </div>
                </div>
                <div className="bg-[#82C24F] w-full py-3 px-4 rounded-md text-white flex flex-col">
                    <div className="flex gap-1 items-center">
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.75908 12.6041L10.1733 11.1898L11.1374 12.154L13.8098 9.4816L15.224 10.8958L11.1374 14.9824L8.75908 12.6041Z" fill="white"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 18.5C15.5898 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5898 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5ZM12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z" fill="white"/>
                        </svg>
                        <span className="font-bold">
                            Sucesso
                        </span>
                    </div>
                    <div className="font-medium">
                        Sua compra foi efetuada com sucesso! Obrigado por comprar conosco.
                        Esperamos que aproveite bem seu novo produto. 
                    </div>
                </div>
            </div>
        </>
    )
}