import React, { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { inputState } from '../states/RecoilsStates';

const RandomImage = () => {
    const src = 'https://picsum.photos/200';
    const [image, setImage] = useState('');
    //const [allowImageUpdate, setAllowImageUpdate] = useState(true);
    const [currentInput, setCurrentInput] = useRecoilState(inputState);


    const fetchNewImage = async () => {
        const response = await fetch(src);
        const blob = await response.blob();
        const imgobj = URL.createObjectURL(blob);
        setImage(imgobj);
    }

    //Required to update image every 4 seconds
    /*useEffect(() => {
        const updateImage = setInterval(() => {
            if (allowImageUpdate) {
                fetchNewImage();
            }
        }, 4000);
        return () => {
            clearInterval(updateImage);
        }
    })*/

    //Required to update image on every change of the input in modal
    useEffect(() => {
        fetchNewImage();
    }, [currentInput])

    return (
        <img src={image} alt="Random Image" className='cursor-pointer mt-6' />
    )
}

export default RandomImage