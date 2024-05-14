"use client"
import React, {useEffect} from 'react';
import {gsap} from 'gsap'

const Cursor = () => {
    useEffect(() => {
        const cursor = document.getElementById('custom-cursor')
        const links = document.querySelectorAll('a')
        const cursorLabel:any = document.querySelector('.cursor-label')

        const onMouseMove = (event:MouseEvent)=>{
            const {clientX,clientY}= event
            gsap.to(cursor,{x:clientX,y:clientY})
        }
        const onMouseEnterLink = (event:any)=>{
            const link = event.target
            console.log(link)
            if (link?.classList.contains('view')){
                gsap.to(cursor,{scale:4})
                console.log(cursorLabel)
                cursorLabel.style.display = 'block'
            }else{
                gsap.to(cursor,{scale:4})
            }
        }
        const onMouseLeaveLink = () =>{
            gsap.to(cursor,{scale:1})
            cursorLabel.style.display = 'none'
        }
        document.addEventListener('mousemove',onMouseMove)
        links.forEach((link)=>{
            link.addEventListener('mouseenter',onMouseEnterLink)
            link.addEventListener('mouseleave',onMouseLeaveLink)
        })
    }, []);
    return (
        <div id="custom-cursor" className="custom-cursor">
            <div className="cursor-label  dark:text-black text-black">View</div>
        </div>
    );
};

export default Cursor;