interface Events {
    currentEvent: () => void;
}
export const RightButton = ({currentEvent}: Events) => {
    return (
        <div className="w-fit">
            <button onClick={currentEvent} className="bg-white w-fit py-2 border rounded-sm border-gray-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.75736 17.6568L9.17158 19.0711L16.2426 12L9.17158 4.92892L7.75736 6.34314L13.4142 12L7.75736 17.6568Z" fill="black"/>
                </svg>
            </button>
        </div>
    )
}

export const LeftButton = ({currentEvent}: Events) => {
    return (
        <div className="w-fit">
            <button onClick={currentEvent} className="bg-white w-fit py-2 border rounded-sm border-gray-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.2426 17.6568L14.8284 19.0711L7.75735 12L14.8284 4.92892L16.2426 6.34314L10.5858 12L16.2426 17.6568Z" fill="black"/>
                </svg>
            </button>
        </div>
    )
}