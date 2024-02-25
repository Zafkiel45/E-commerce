import { Model } from "./model"

export const Eletronics = () => {
    return (
        <div className="bg-blue-600 w-screen py-5 h-auto gap-5 flex flex-col">
            <div>
                <p className="text-white relative left-4 text-lg font-medium">
                    Eletrônicos
                </p>
            </div>
            <Model currentCategorie="electronics"/>
        </div>
    )
}