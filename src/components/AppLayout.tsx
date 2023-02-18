import React from 'react';
import { ApartmentOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      {/* image n animation */}
      <div className="bg-white hidden lg:flex shadow-lg">
        <div
          className={`fixed lg:w-2/4 top-0  bg-cover bg-no-repeat bg-gradient-to-tl from-sky-700 to-blue-800 left-0 z-20 h-screen bg-[url(https://images.pexels.com/photos/7929411/pexels-photo-7929411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]  shadow-lg flex flex-col gap-4 items-center justify-end pt-12 pb-6`}
        >
          <p className="text-white text-center font-light italic w-4/5 ">
            A specailly curated test to find out your personality. Are you an
            extrovert or an introvert and to what degree are you an extrovert or
            an introvert.
          </p>
          <div className=" text-white mt-4 flex flex-col items-center">
            <p className="font-bold text-lg text-center mb-0">
              Dr. Emeka Ventura
            </p>

            <span className="font-light text-xs text-center text-sky-300 italic">
              Team way Assessment
            </span>
          </div>
        </div>
      </div>
      {/* register school form */}
      <div className="flex flex-col gap-4 items-center pt-8">
        {/* heading */}
        <div className="flex flex-col items-center">
          <ApartmentOutlined size={400} className="text-2xl" />
          <h4 className="text-2xl"> Are you an introvert or an extrovert?</h4>
          <p></p>
        </div>
        {/* form */}
        <div className="w-4/5">
          <Outlet />
        </div>

        <div className="h-72" />
        <div className="h-72" />
        <div className="h-72" />
        <div className="h-72" />
      </div>
    </div>
  );
};

export default AppLayout;
