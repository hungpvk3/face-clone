import React from 'react'
import PropTypes from 'prop-types'

import { X } from '../../../components/icons'

const MesModal = ({ isOpen, onCloseMesModal }) => {
  return (
    <div className={`fixed bottom-0 right-16 h-96 w-80 bg-white shadow-xl rounded-t-xl ${isOpen ? null : 'hidden'}`}>
        <div className="p-2 flex items-center justify-between border-b-2">
            <div className="flex items-center gap-3">
                <img src="https://dulichviet247.com/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg" alt="" 
                    className="w-10 h-10 rounded-full object-cover" 
                />
                <h2>Pham van hung</h2>
            </div>
            <div className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer" onClick={onCloseMesModal}>
                <X css="h-5 w-5" />
            </div>
        </div>

        <div className="p-2 overflow-scroll flex flex-col gap-3 h-72">
            <div className="w-max">
                <p className="py-1 px-3 rounded-full bg-blue-400 text-white">abcshhhhshudshdhhdd</p>
                <span className="text-xs text-center text-gray-400 float-right pt-1">18:00</span>
            </div>
            <div className="py-1 px-3 rounded-full bg-blue-400 text-white w-max">
                abc
            </div>
            <div className="py-1 px-3 rounded-full bg-blue-400 text-white w-max">
                abc
            </div>
            <div className="py-1 px-3 rounded-full bg-blue-400 text-white w-max">
                abc
            </div>
            <div className="py-1 px-3 rounded-full bg-blue-400 text-white w-max">
                abc
            </div>
            <div className="py-1 px-3 rounded-full bg-blue-400 text-white w-max">
                abc
            </div>
            <div className="py-1 px-3 rounded-full bg-blue-400 text-white w-max">
                abc
            </div>
            <div className="py-1 px-3 rounded-full bg-blue-400 text-white w-max">
                abc
            </div>
        </div>

        <div className="py-3 px-2 absolute bottom-0 border w-full bg-white flex items-center gap-3">
            <input type="text" 
                placeholder="Enter input message" 
                className="px-3 py-2 w-full rounded-full ring-purple-500 border outline-none"
            />

            <div className="h-10 w-12 flex items-center justify-center rounded-full cursor-pointer bg-blue-50 hover:bg-blue-100">
                <svg xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 text-blue-500" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={2}
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" 
                    />
                </svg>
            </div>
        </div>
    </div>
  )
}

MesModal.Protypes = {
    isOpen: PropTypes.bool,
    onCloseMesModal: PropTypes.func
}

export default MesModal