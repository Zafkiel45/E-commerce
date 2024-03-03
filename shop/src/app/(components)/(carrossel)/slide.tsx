import { useState, useRef, useEffect, use } from "react";
import Image from "next/image";
import Link from "next/link";

export const Carrossel = ({ items, currentCategorie }: {items: any[], currentCategorie: string}) => {
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isDown, setIsDown] = useState<boolean>(false)
    const carrosselRef = useRef<HTMLDivElement>(null);

    const HandleMouseDown = (e: React.MouseEvent) => {
      setIsDown(() => true);
      if(carrosselRef.current !== null && typeof carrosselRef.current !== "undefined" ) {
        setStartX(() => e.pageX - carrosselRef.current!.offsetLeft)
        setScrollLeft(() => carrosselRef.current!.scrollLeft)

      }
    }
    const HandleMouseLeave = () => {
      setIsDown(() => false);
    }
    const HandleMouseUp = () => {
      setIsDown(() => false);
    }
    const HandleMouseover = (e: React.MouseEvent) => {
      if(!isDown) return;
      e.preventDefault();
      if(carrosselRef.current !== null && typeof carrosselRef.current !== "undefined") {
        const x = e.pageX - carrosselRef.current.offsetLeft;
        const walk = (x - startX) * 3; // Velocidade de arrasto
        carrosselRef.current.scrollLeft = scrollLeft - walk;
      }
    }
    return (
       <div
         ref={carrosselRef}
         style={{
           display: 'flex',
           overflowX: 'scroll',
           scrollSnapType: 'x mandatory',
           scrollBehavior: 'smooth',
           gap: "1rem",
           padding: "1rem",
           boxSizing: "border-box",
         }}
         aria-label="Carrossel de produtos"
         onMouseLeave={HandleMouseLeave} 
         onMouseMove={(e) => HandleMouseover(e)}
         onMouseUp={HandleMouseUp} 
         onMouseDown={(e) => HandleMouseDown(e)}
       >
         {items.map((item, idx) => (
           <Link key={item.id} href={`/item/${currentCategorie}/${idx}`}>
             <div className="bg-white tablet-big:h-[450px] h-[400px] flex-shrink-0 flex flex-col gap-6 rounded-md tablet-big:w-56 w-52 border-gray-200 p-4">
               <div className="flex justify-center items-center">
                 <Image className="tablet-big:min-h-[170px] tablet-big:max-h-[200px] min-h-[130px] max-h-[170px] object-contain min-w-[130px]" src={item.image} alt={item.title} height={100} width={100} />
               </div>
               <div className="flex w-full h-full flex-col gap-1">
                 <div className="text-black font-medium text-sm tablet-big:text-base">{item.title}</div>
                 <div className="text-green-500 font-medium">{item.price} R$</div>
                 <div className="text-sm tablet- text-gray-400">Frete: <del>21,43 R$</del> 00,00 R$</div>
                 <div className="text-sm tablet- text-gray-400">Loja: Lorem Ipsum</div>
               </div>
             </div>
           </Link>
         ))}
       </div>
    );
};
