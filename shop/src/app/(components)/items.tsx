import Link from "next/link"
export const Items = () => {
    return (
        <div className="bg-[#242424] p-2 text-white">
            <ol className="flex gap-2 justify-center items-center text-sm">
                <Link href={"#"} >
                    <li>R&#39;Masculina</li>    
                </Link>
                <Link href={"#"} >
                    <li>R&#39Feminina</li>
                </Link>
                <Link href={"#"}>
                    <li>Joias</li>
                </Link>
                <Link href={"#"} >
                    <li>Eletrônicos</li>
                </Link>
            </ol>
        </div>
    )
}