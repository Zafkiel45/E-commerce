import { Model } from "./model"

export const MenCloths = () => {
    return (
        <div className="bg-black border-b border-gray-400 w-screen py-5 h-auto gap-5 flex flex-col">
            <div>
                <p className="tablet:text-xl tablet:left-12 text-white relative left-4 text-lg font-medium">
                   Roupas Masculinas
                </p>
            </div>
            <Model currentCategorie="men's clothing"/>
        </div>
    )
}