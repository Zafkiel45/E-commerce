export const Promotion = () => {
    
    const Dates = new Date();
    const Year = Dates.getFullYear();
    const Month = Dates.getMonth() + 1;
    const day = Dates.getDate()
     
    return (
        <div className="mobile-big:py-3 mobile-big:text-lg bg-gradient-to-r from-cyan-600 to-blue-500 text-white font-medium p-3">
            As promoções acabam em: <span className="text-orange-300 font-bold">{day}/{Month}/{Year}</span>
        </div>
    )
}