import React from 'react';

interface Props{
    label:string
}

const SectionTitle = (props:Props) => {
    return (
        <h3  className=" text-[#304336d9] text-2xl">
            {props.label}
        </h3>
    );
};

export default SectionTitle;