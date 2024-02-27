'use client'
import { getAllElementsOfCategorie } from "@/app/api/calls"
import { Header } from "../../header";
import { Items } from "../../items";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default async function Page({params}: {params: {slug: string[]} }) {

    const currentURL = usePathname();
    const URLArray = currentURL.split('/');
    const indexOfElement = parseInt(URLArray[3]);
    const currentItem = await getAllElementsOfCategorie(URLArray[2]);

    const key = 'productInCar'
    const currentDate = new Date();
    const date = currentDate.getDate();
    const month = currentDate.getMonth();
    const year  = currentDate.getFullYear();

    interface LocalStorageInterface {
        name: string;
        date: string;
        price: string;
        image: string;
    }

    const addProductToCar = async () => {
        const Storage: LocalStorageInterface[] = await JSON.parse(localStorage.getItem(key) || '[]');
        try {
            if(!Storage) {
                throw new Error("O LocalStorage está vazio");
            }
            Storage.push({
                name: currentItem[indexOfElement].title,
                date: `${date}/${month}/${year}`,
                price: currentItem[indexOfElement].price,
                image: currentItem[indexOfElement].image 
            })
            localStorage.setItem(key, JSON.stringify(Storage));  
        } catch (mensage) {
            console.log(mensage)
        }

    }

    return (
        <>
            <Header/>
            <Items/>
            <div className="px-4 pb-10 flex gap-3 flex-col items-center">
                <div className="mt-10">
                    <Image src={currentItem[indexOfElement].image} height={150} width={150} alt=""/>
                </div>
                <div className="font-medium">
                    Nome: {currentItem[indexOfElement].title}
                </div>
                <div className="flex gap-2 w-full justify-start items-center">
                    <span className="text-gray-400 text-sm">Frete: <del>27,90 R$</del> 00,00 R$</span>
                    <span className="text-green-600 text-sm">Preço: {currentItem[indexOfElement].price} R$</span>
                </div>
                <div className="w-full mt-4 flex gap-3 flex-col items-center">
                    <button className="bg-blue-500 w-full text-white font-medium p-4 rounded-lg shadow-md active:relative active:-bottom-1">
                        Comprar
                    </button>
                    <button onClick={addProductToCar} className="bg-orange-500 w-full text-white font-medium p-4 rounded-lg shadow-md active:relative active:-bottom-1">
                        Adicionar ao carrinho
                    </button>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="bg-red-500 flex flex-col gap-2 p-3 rounded-md">
                        <div className="flex gap-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 12.5L13 8.5H11L11 12.5H13Z" fill="whit"/>
                                <path d="M12 15.9997C12.6893 15.9997 13.2481 15.4409 13.2481 14.7516C13.2481 14.0623 12.6893 13.5036 12 13.5036C11.3107 13.5036 10.7519 14.0623 10.7519 14.7516C10.7519 15.4409 11.3107 15.9997 12 15.9997Z" fill="white"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" fill="white"/>
                            </svg>
                            <p className="text-white font-bold">
                                Nota
                            </p>
                        </div>
                        <div>
                            <p className="text-white">
                                Devido ao produtor ser de origem internacional, sua ficha téncnica pode estar em outro idioma. 
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#4451CA] py-2 rounded-md shadow-md text-white">
                        <ol className="flex flex-col justify-center gap-2">
                            <li className="p-3">Ficha técnica</li>
                            <li className="p-3 bg-[#8993F2]">Nome: {currentItem[indexOfElement].title}</li>
                            <li className="p-3">Preço: {currentItem[indexOfElement].price} R$</li>
                            <li className="p-3 bg-[#8993F2]">Descrição: {currentItem[indexOfElement].description}</li>
                            <li className="p-3">Categoria: {currentItem[indexOfElement].category}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export const generateMetaData = ({params}: {params: {slug: string} }) => {
    return({
        title: `${params.slug}`
    })
}



