import { Model } from "./model"

export const MenCloths = () => {
    return (
        <div className="bg-black w-screen py-5 h-auto gap-5 flex flex-col">
            <div>
                <p className="text-white relative left-4 text-lg font-medium">
                   Roupas Masculinas;
                </p>
            </div>
            <Model currentCategorie="men's clothing"/>
        </div>
    )
}