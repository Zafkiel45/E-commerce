export const Header = () => {
    return (
        <header className="w-screen text-white  bg-black px-3 py-2 ">
            <nav>
                <ol className="flex items-center gap-2">
                    <li className="flex-grow">Logo</li>
                    <li className="relative -top-3 w-32">
                        <div className="flex ">
                            <input type="text" className="absolute w-full rounded-sm border border-gray-200  px-2"/>
                            <svg className="absolute  right-0" width="22" height="22" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.0865 11.4424C9.48409 11.7698 8.79371 11.9557 8.0599 11.9557C5.71269 11.9557 3.8099 10.053 3.8099 7.70575C3.8099 5.35854 5.71269 3.45575 8.0599 3.45575C10.4071 3.45575 12.3099 5.35854 12.3099 7.70575C12.3099 8.80471 11.8928 9.80625 11.2082 10.5607L13.1901 12.5426L12.1884 13.5443L10.0865 11.4424ZM10.8932 7.70575C10.8932 9.27056 9.6247 10.5391 8.0599 10.5391C6.49509 10.5391 5.22657 9.27056 5.22657 7.70575C5.22657 6.14094 6.49509 4.87242 8.0599 4.87242C9.6247 4.87242 10.8932 6.14094 10.8932 7.70575Z" fill="black"/>
                            </svg>
                        </div>
                    </li>
                    <li>
                        <button className="bg-[#4452CA] p-1 rounded-sm active:relative active:-bottom-1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 5.75L6 11.75V18.25H18V11.75L12 5.75ZM12 8.57843L16 12.5784V16.25H13.5V13.5H10.5V16.25H8V12.5784L12 8.57843Z" fill="white"/>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button className="bg-[#4452CA] p-1 rounded-sm active:relative active:-bottom-1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.59221 9.56594L5 7.07811L6.68454 6L7.98954 8.03905H18.4603L15.4603 14.0391H9.27608L6.59221 9.56594ZM9.20846 10.0391L10.4085 12.0391H14.2242L15.2242 10.0391H9.20846Z" fill="white"/>
                                <path d="M11.8423 16.5391C11.8423 17.3675 11.1707 18.0391 10.3423 18.0391C9.51384 18.0391 8.84227 17.3675 8.84227 16.5391C8.84227 15.7106 9.51384 15.0391 10.3423 15.0391C11.1707 15.0391 11.8423 15.7106 11.8423 16.5391Z" fill="white"/>
                                <path d="M14.3423 18.0391C15.1707 18.0391 15.8423 17.3675 15.8423 16.5391C15.8423 15.7106 15.1707 15.0391 14.3423 15.0391C13.5138 15.0391 12.8423 15.7106 12.8423 16.5391C12.8423 17.3675 13.5138 18.0391 14.3423 18.0391Z" fill="white"/>
                            </svg>
                        </button>
                    </li>
                </ol>
            </nav>
        </header>
    )
}