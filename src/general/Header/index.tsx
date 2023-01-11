import { contact } from 'data/contact';
import { generalRoutes, TNavRoute } from 'data/routes';
import { riceShowaseItems } from 'data/showcase';
import ActionItem from 'general/ActionItem';
import HeaderActionBar from 'general/HeaderActionBar';
import NavBar from 'general/NavBar';
import NavItems from 'general/NavItems';
import ShowCaseItems from 'general/ShowCaseItems';
import {
  Gi3DGlasses,
  GiArchiveResearch,
  GiCartwheel,
  GiFairy,
  GiFoodTruck,
  GiKangaroo,
  GiPerson,
  GiPhone,
  GiProfit,
  GiProgression,
  GiRamProfile,
} from 'react-icons/gi';
import { LogoContainer } from './Header.style';

const navRoutes: TNavRoute[] = [
  {
    name: 'Rice',
    link: `${generalRoutes.productCategory}/rice`,
    highlight: 'popular',
    icon: Gi3DGlasses,
    DropdownComp: (
      <div className="flex gap-6">
        <ShowCaseItems items={riceShowaseItems} />
        <div className="text-xs font-normal mt-4">
          <h5 className="w-48 font-bold mb-4">About our Rice Meals</h5>
          <p className="mb-2">
            With a more “contemporary” style, our rice meals are where the
            creativity of our chefs shines.
          </p>
          <p>
            Every meal on The Yellow Plate is made fresh with the best of
            ingredients.
          </p>
        </div>
      </div>
    ),
  },
  {
    name: 'burgers',
    link: `${generalRoutes.productCategory}/burgers`,
    highlight: { value: '&sandwiches', color: 'bg-[#50d71e]' },
    icon: GiProfit,
  },
  {
    name: 'Platter Combos',
    link: `${generalRoutes.productCategory}/platter-combos`,
    highlight: 'save',
    icon: GiProgression,
  },
  {
    name: 'drinks',
    link: `${generalRoutes.productCategory}/drinks`,
    icon: GiKangaroo,
  },
  {
    name: 'BBQ & Grills',
    link: `${generalRoutes.productCategory}/bbq-n-grills`,
    icon: GiPerson,
  },
  {
    name: 'Fries & Sides',
    link: `${generalRoutes.productCategory}/fries-n-sides`,
    icon: GiPerson,
    DropdownComp: <div />,
  },
];

const Header = () => {
  return (
    <div className="relative">
      <div className="flex flex-col gap-4 fixed z-50 w-full">
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
        <div className="px-12  flex justify-between items-stretch">
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
        <NavBar>
          <NavItems items={navRoutes} />
        </NavBar>
      </div>
    </div>
  );
};

export default Header;
