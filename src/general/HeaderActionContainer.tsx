import { contact } from 'data/contact';
import React from 'react';
import {
  GiPhone,
  GiRamProfile,
  GiCartwheel,
  GiArchiveResearch,
  GiFairy,
  GiHamburgerMenu,
} from 'react-icons/gi';
import ActionItem from './ActionItem';
import HeaderActionBar from './HeaderActionBar';

const HeaderActionContainer = () => {
  return (
    <>
      {/* desk */}
      <div className="px-12 hidden md:flex justify-between items-stretch">
        <HeaderActionBar>
          <a
            className="flex gap-2 items-center text-xl font-semibold hover:text-green-600 "
            href={`tel:${contact.phone}`}
          >
            <GiPhone />
            <span>{contact.phone}</span>{' '}
          </a>
        </HeaderActionBar>
        <HeaderActionBar>
          <div className="flex gap-2 items-center text-xl font-semibold">
            <ActionItem>
              <GiRamProfile />
            </ActionItem>
            <ActionItem>
              <GiCartwheel />
            </ActionItem>
            <ActionItem>
              <GiArchiveResearch />
            </ActionItem>
            <ActionItem>
              <GiFairy />
            </ActionItem>
          </div>
        </HeaderActionBar>
      </div>
      {/* mobile */}
      <div className="px-6 flex md:hidden justify-between items-stretch">
        <HeaderActionBar>
          <a
            className="flex gap-2 items-center text-xl font-semibold hover:text-green-600 "
            href={`tel:${contact.phone}`}
          >
            <GiPhone className="text-3xl" />
          </a>
        </HeaderActionBar>
        <HeaderActionBar>
          <ActionItem>
            <GiHamburgerMenu />
          </ActionItem>
        </HeaderActionBar>
      </div>
    </>
  );
};

export default HeaderActionContainer;
