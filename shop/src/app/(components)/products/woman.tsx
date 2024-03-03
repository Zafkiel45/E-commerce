import { Model } from "./model"

export const WomanCloths = () => {
    return (
        <div className="bg-pink-600 w-screen py-5 h-auto gap-5 flex flex-col">
            <div>
                <p className="tablet:text-xl tablet:left-12 text-white relative left-4 text-lg font-medium">
                   Roupas Femininas;
                </p>
            </div>
            <Model currentCategorie="women's clothing"/>
        </div>
    )
}