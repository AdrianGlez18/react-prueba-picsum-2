import Ract, { Fragment, useRef, useState } from 'react';
import RandomImage from './RandomImage';
import { useRecoilState } from 'recoil';
import { inputState } from '../states/RecoilsStates';

const ImageModal = () => {
    const [open, setOpen] = useState(false);
    const [currentInput, setCurrentInput] = useRecoilState(inputState);

    const handleInputChange = (e: any) => setCurrentInput(e.target.value);
    return (
        <>
            <div className="flex justify-center items-center h-40 lg:h-60">
                <button className='p-4 text-blue-200 bg-gray-500 rounded-lg' type='button' onClick={() => setOpen(true)} >
                    Open Modal!
                </button>
            </div>
            <div className="font-bold text-xl text-white">
                Input Value: {currentInput}
            </div>
            {
                open ? (
                    <>
                        <div className='fixed w-screen h-screen bg-black opacity-60' />
                        <div className='fixed z-50 overflow-auto'>
                            <div className="flex items-center min-h-screen">
                                <div className="w-full max-w-lg p-8 bg-white rounded-md">
                                    <div className="mt-2 text-center sm:ml-4 sm:text-left">
                                        <h4 className="text-center text-lg font-bold text-gray-800">
                                            Random Image
                                        </h4>
                                        <RandomImage />
                                        <input
                                            type="number"
                                            defaultValue={currentInput}
                                            className="form-control mt-4 block w-full px-3 py-2 text-gray-700 bg-gray-50 border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:border-blue-600 focus:outline-none"
                                            onChange={handleInputChange}
                                            placeholder="Number input"
                                        />
                                        <button
                                            className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                                            onClick={() =>
                                                setOpen(false)
                                            }
                                        >
                                            Close Modal
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : <div />
            }
        </>
    )
}

export default ImageModal