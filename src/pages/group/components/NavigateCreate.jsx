import React, { useState, useEffect, useRef } from "react";
import {Input} from 'antd'

import { Lock, Global, Arow } from "../../../components/icons";
import image from '../../../assets/img/stories1.jpg';

const NavigateCreate = () => {
    const ruleRef = useRef();
    const [rule, setRule] = useState(false);
    const [ruleValue, setRuleValue] = useState('');

    const handleChangeRule = () => {
        setRule(!rule)
    }

    const handleChangeRuleValue = (value) => {
        setRuleValue(value)
        setRule(false)
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                ruleRef.current &&
                !ruleRef.current.contains(event.target)
            ) {
                setRule(false);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ruleRef]);

    return (
        <div className="p-3">
            <div className="mt-4">
                <p>Nhóm  <span>{">"}</span> Tạo nhóm</p>
                <h2 className="text-2xl font-bold m-0">Tạo  nhóm</h2>
            </div>

            <div className="flex items-center gap-3 my-5">
                <div className="w-10 h-10 rounded-full border">
                    <img src={image} alt="" className="h-10 w-10 rounded-full" />
                </div>
                <div>
                    <h2 className="" style={{fontSize: '16px'}}>Pham Hung</h2>
                    <span className="font-light">Quan tri vien</span>
                </div>
            </div>
            
            <div className="">
                <Input placeholder="Ten nhom" style={{height: '50px', borderRadius: '6px'}} />

                <div className="relative border px-3 mt-4 justify-between hover:border-blue-400 cursor-pointer" style={{height: '50px', borderRadius: '6px'}} ref={ruleRef}>
                    
                    {ruleValue === '' ? (
                        <div className="flex items-center justify-between h-full flex-1" onClick={handleChangeRule}>
                            <p className="text-gray-400">Chon quyen rieng tu</p>
                            <Arow style={{width: '18px', height: '18px', color: 'gray'}} />
                        </div>
                    ) : (
                        ruleValue === 'private' ? (
                            <div className="h-full w-full flex items-center gap-2 p-2 rounded-md" onClick={handleChangeRule}>
                                <Global css="h-6 w-6 text-gray-500" />

                                <div>
                                    <h2>Cong Khai</h2>
                                </div>
                            </div>
                        ) : (
                            <div className="h-full w-full flex items-center gap-2 p-2 rounded-md" onClick={handleChangeRule}>
                                <Lock css="text-gray-500" />

                                <div>
                                    <h2>Rieng tu</h2>
                                </div>
                            </div>
                        )
                    )}

                    <div className={`top-14 left-0 right-0 p-2 bg-white shadow rounded-md ${rule ? 'absolute' : 'hidden'}`}>
                        <div className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100" onClick={() => handleChangeRuleValue('private')}>
                            <Global css="h-6 w-6 text-gray-500" />

                            <div>
                                <h2>Cong Khai</h2>
                                <span>Bat ky ai cung co the thay</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100" onClick={() => handleChangeRuleValue('public')}>
                            <Lock css="text-gray-500" />

                            <div>
                                <h2>Rieng tu</h2>
                                <span>Chi thanh vien moi nhin thay</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="absolute bottom-0 left-0 h-16 border-t" style={{width: '360px'}}>
                    <button className="absolute top-3 ml-5 w-80 h-2/3 bg-gray-100 text-gray-500 rounded-md">Tao</button>
                </div>
            </div>
        </div>
    );
};

export default NavigateCreate;
