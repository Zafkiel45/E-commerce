import { Model } from "./model"

export const Eletronics = () => {
    return (
        <div className="bg-blue-600 w-screen h-72 flex flex-col">
            <div>
                <p>
                    Eletrônicos
                </p>
            </div>
            <Model currentCategorie="electronics"/>
        </div>
    )
}