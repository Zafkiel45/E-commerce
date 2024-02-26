'use client'
import { getAllElementsOfCategorie } from "@/app/api/calls"
import { Header } from "../../header";
import { Items } from "../../items";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default async function Page({params}: {params: {slug: string[]} }) {

    const currentURL = usePathname();
    const categorie = currentURL.split('/');
    const indexOfElement = parseInt(categorie[3])
    const currentItem = await getAllElementsOfCategorie(categorie[2])
    console.log(categorie);
    return (
        <>
            <Header/>
            <Items/>
            <div>
                <div>
                    <Image src={currentItem[indexOfElement].image} height={150} width={150} alt=""/>
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