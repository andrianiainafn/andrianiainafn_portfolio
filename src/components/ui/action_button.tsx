import React, {ReactNode} from 'react';

interface Props{
    label:string
    icon: ReactNode
}

const ActionButton = (props:Props) => {
    return (
        <button  className="group cursor-pointer overflow-hidden border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-white dark:text-white px-4 py-3 h-[46px] rounded-full">
            <span className="items-center  space-x-2 flex transition duration-500 ease-out group-hover:-translate-y-[180%]">
                {props.icon}
                <span>{props.label}</span>
            </span>
            <span className="items-center space-x-2 flex translate-y-[180%] rotate-12 transition duration-500 ease-out group-hover:-translate-y-[100%] group-hover:rotate-0">
                {props.icon}
                <span>{props.label}</span>
            </span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button>
    );
};

export default ActionButton;