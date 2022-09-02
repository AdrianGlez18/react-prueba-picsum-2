import React from 'react'

const TimerRow = ({ children }: any) => {
    return (
        <div className="flex space-x-6 p-1 m-1 lg:p-2 m-4">
            {children}
        </div>
    )
}

export default TimerRow