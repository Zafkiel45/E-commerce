import { getAllElements } from "@/app/api/calls"
import { Header } from "../../header";
import { Items } from "../../items";
import Image from "next/image";


export default async function Page({params}: {params: {slug: string} }) {

    const currentItem = await getAllElements()

    return (
        <>
            <Header/>
            <Items/>
            <div>
                <div>
                    <Image src={params.slug} alt=""/>
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