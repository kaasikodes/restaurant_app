import { TNavRoute, generalRoutes } from 'data/routes';
import { riceShowaseItems } from 'data/showcase';
import { motion } from 'framer-motion';
import {
  Gi3DGlasses,
  GiProfit,
  GiProgression,
  GiKangaroo,
  GiPerson,
} from 'react-icons/gi';
import Button from './Button';
import NavItems from './NavItems';
import ShowCaseItems from './ShowCaseItems';

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
          <h5 className="w-48 font-bold text-sm mb-4">About our Rice Meals</h5>
          <p className="mb-2 font-medium">
            With a more “contemporary” style, our rice meals are where the
            creativity of our chefs shines.
          </p>
          <p className="mb-4 font-medium">
            Every meal on The Yellow Plate is made fresh with the best of
            ingredients.
          </p>
          <Button>Order Now</Button>
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
  },
];

const NavBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { ease: 'easeIn' } }}
      className="bg-green-500 hidden md:block mx-12 rounded-full px-6 py-4 mt-12"
      
    >
      <NavItems items={navRoutes} />
    </motion.div>
  );
};

export default NavBar;
