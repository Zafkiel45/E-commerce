import Link from "next/link"
export const Items = () => {
    return (
        <div className="bg-[#242424] p-2 text-white">
            <ol className="flex gap-2 justify-center items-center text-sm">
                <Link href={"#"} >
                    <li  className="border-r border-gray-600 pr-2">R&#39;Masculina</li>    
                </Link>
                <Link href={"#"} >
                    <li className="border-r border-gray-600 pr-2">R&#39;Feminina</li>
                </Link>
                <Link href={"#"}>
                    <li className="border-r border-gray-600 pr-2">Joias</li>
                </Link>
                <Link href={"#"} >
                    <li>Eletrônicos</li>
                </Link>
            </ol>
        </div>
    )
}