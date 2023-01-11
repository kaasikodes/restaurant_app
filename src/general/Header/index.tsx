import HeaderActionContainer from 'general/HeaderActionContainer';
import NavBar from 'general/NavBar';
import { useEffect, useRef, useState } from 'react';
import { GiFoodTruck } from 'react-icons/gi';

import { LogoContainer } from './Header.style';

const Header = () => {
  let lastKnownScrollPosition = useRef(0);
  const [showNav, setShowNav] = useState(true);
  useEffect(() => {
    document.addEventListener('scroll', (event) => {
      lastKnownScrollPosition.current = window.scrollY;
      console.log(lastKnownScrollPosition.current, 'ccc');

      if (lastKnownScrollPosition.current > 10) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
    });

    return () => document.removeEventListener('scroll', () => setShowNav(true));
  }, []);
  return (
    <div className="relative">
      <div
        className={`${
          !showNav ? 'bg-slate-50 pb-4' : ''
        } flex flex-col gap-4 fixed z-50 w-full`}
      >
        <LogoContainer className="bg-slate-800 h-12 w-full mt-8 flex justify-center">
          <div className="logo-wrapper">
            <div className="bar">
              <div className="container">
                <div className="logo">
                  <a
                    href="/home"
                    className="flex flex-col items-center justify-start gap-4"
                  >
                    <div className="img-container flex justify-center">
                      {/* <img src="/assets/custom_logo.svg" alt=""/> */}
                      <GiFoodTruck color="#fff" className="text-4xl" />
                    </div>
                    <div className="heading text-center">
                      <h5 className="">Onom's Kitchen</h5>
                      <p className="text-white">Delicious Food</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </LogoContainer>
        {/* header action bars */}
        <HeaderActionContainer />
        {showNav && <NavBar />}
      </div>
    </div>
  );
};

export default Header;
