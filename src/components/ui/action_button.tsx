import React, {ReactNode} from 'react';

interface Props{
    label:string
    icon: ReactNode
}

const ActionButton = (props:Props) => {
    return (
        <button className="group cursor-pointer overflow-hidden border text-sm font-medium relative border-gray-300 dark:border-white/20 hover:border-blue-500/60 text-gray-900 dark:text-white px-5 py-3 h-[46px] big:h-[60px] rounded-full bg-gray-100/80 dark:bg-white/5 hover:bg-gray-200/80 dark:hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
            <span className="items-center big:text-xl space-x-2 flex transition duration-500 ease-out group-hover:-translate-y-[180%]">
                {props.icon}
                <span>{props.label}</span>
            </span>
            <span className="items-center big:text-xl space-x-2 flex translate-y-[180%] rotate-12 transition duration-500 ease-out group-hover:-translate-y-[100%] group-hover:rotate-0">
                {props.icon}
                <span>{props.label}</span>
            </span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
    );
};

export default ActionButton;