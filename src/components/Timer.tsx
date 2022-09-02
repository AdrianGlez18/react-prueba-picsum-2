import React from 'react'
import { getDate } from '../lib/getDate'
import TimerElement from './TimerElement';
import TimerRow from './TimerRow';

const Timer = () => {

    const { day, month, year, hour, minute, second } = getDate();

    return (
        <>
            <TimerRow>
                <TimerElement title='Day' content={day}/>
                <TimerElement title='Month' content={month}/>
                <TimerElement title='Year' content={year}/>
            </TimerRow>

            <TimerRow>
                <TimerElement title='Hours' content={hour}/>
                <TimerElement title='Minutes' content={minute}/>
                <TimerElement title='Seconds' content={second}/>
            </TimerRow>
        </>
    )
}

export default Timer