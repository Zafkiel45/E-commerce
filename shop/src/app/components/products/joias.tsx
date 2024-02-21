import { Model } from "./model"

export const Jewelery = () => {
    return (
        <div className="bg-red-600 w-screen py-5 h-auto gap-5 flex flex-col">
            <div>
                <p className="text-white relative left-4 text-lg font-medium">
                    Joias
                </p>
            </div>
            <Model currentCategorie="jewelery"/>
        </div>
    )
}