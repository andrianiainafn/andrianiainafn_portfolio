import React from 'react';

interface Props{
    label:string
}

const SectionTitle = (props:Props) => {
    return (
        <div className="flex flex-col space-y-2">
            <h3  className=" text-[#304336d9] text-2xl">
                {props.label}
            </h3>
            <div className="flex items-center">
                <div className="bg-[#304336d9] rounded-full h-3 w-3"/>
                <div className="w-36 h-1 bg-[#304336d9]" />
            </div>
        </div>
    );
};

export default SectionTitle;