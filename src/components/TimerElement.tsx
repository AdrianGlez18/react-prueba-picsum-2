import React from 'react'

const TimerElement = ({ title, content }: { title: string, content: string | number }) => {
    return (
        <div className='flex flex-col items-center px-6 py-2 lg:py-4 bg-blue-300 rounded-xl'>
            <p>{title}</p>
            <p className='text-xl md:text-2xl lg:text-4xl xl:text-6xl font-bold'>{content}</p>
        </div>
    )
}

export default TimerElement