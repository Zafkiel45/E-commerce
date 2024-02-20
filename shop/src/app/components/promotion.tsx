export const Promotion = () => {
    
    const Dates = new Date();
    const Year = Dates.getFullYear();
    const Month = Dates.getMonth();
    const day = Dates.getDate()
     
    return (
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium p-3">
            As promoções acabam em: <span className="text-orange-300 font-bold">{day}/{Month}/{Year}</span>
        </div>
    )
}