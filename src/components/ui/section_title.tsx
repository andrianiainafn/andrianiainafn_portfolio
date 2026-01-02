import React from 'react';

interface Props{
    label:string
}

const SectionTitle = (props:Props) => {
    return (
        <div className="flex flex-col space-y-3 mb-10 md:mb-12">
            <div className="flex items-center space-x-3">
                <div className="bg-blue-500 dark:bg-blue-500 rounded-full h-2 w-2 shadow-lg shadow-blue-500/50"/>
                <h3 className="text-blue-600 dark:text-blue-500 text-xs md:text-sm font-semibold tracking-widest uppercase">
                    {props.label}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 via-blue-500/30 to-transparent dark:from-blue-500/50 dark:via-blue-500/30 dark:to-transparent max-w-32" />
            </div>
        </div>
    );
};

export default SectionTitle;