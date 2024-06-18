'use client'
import { FC, memo, useEffect, useState } from "react";


const Header:FC<{}> = ({}) => {
    const [isTransparent, setIsTransparent] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const headerHeight = document.getElementById('header')?.offsetHeight;
        console.log('headerHight', headerHeight, window.scrollY);
        if (headerHeight && window.scrollY > headerHeight) {
          setIsTransparent(true);
        } else {
          setIsTransparent(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  return (
    <header id="header" className={`h-24 flex justify-between items-center sticky top-0 z-50  ${isTransparent ?  'bg-transparent' : 'bg-gradient-1 shadow'}`}>
        
        <div></div>
        <div className={`text-4xl font-extrabold tracking-wide text-slate-900 ${isTransparent && 'bg-halo'}`}> Clara </div>

        <div></div>

    </header>
  )
}


export default memo(Header);