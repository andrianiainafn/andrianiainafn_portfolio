import React, {ReactNode} from 'react';

interface Props{
    label:string
    icon: ReactNode
}

const ActionButton = (props:Props) => {
    return (
        <button  className="flex cursor-pointer items-center space-x-2  border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-white dark:text-white px-4 py-2 rounded-full">
            {props.icon}
            <span>{props.label}</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button>
    );
};

export default ActionButton;