import {useEffect, useState} from 'react'
import { SlClose } from "react-icons/sl";

const Modal = ({children, showModal, setShowModal}) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = 'auto'   
        }
    }, [])

  return (
    showModal && 
    <>
        <div className='fixed inset-0 w-full h-dvh bg-black/50 z-10' onClick={()=>{setShowModal(false)}}></div>

        <div className='w-[20rem] lg:w-1/2 bg-white h-1/2 lg:h-2/3 rounded-lg flex flex-col z-50 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
                    <SlClose
                    className='z-20 cursor-pointer self-end text-primary mr-2 mt-2'
                    size={24}
                    onClick={()=>{setShowModal(false)}}
                />
                {children}
        </div>
    </>

  )
}

export default Modal
