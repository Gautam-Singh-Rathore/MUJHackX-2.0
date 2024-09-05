import { useNavigate } from 'react-router-dom';
import React from 'react';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="h-16 w-full bg-gray-900 text-white flex items-center justify-between p-4 drop-shadow-lg border-b-1 border-black z-100">
      {/* Logo */}
      <div>
        <h1 className="text-3xl font-bold " style={{fontFamily:"Playwrite PE"}}>InsightAI</h1>
      </div>
      {/* NavLinks */}
      <div className="flex space-x-7">
        <p className="cursor-pointer" onClick={()=> navigate('/login')}>Login</p>
        <p className="cursor-pointer" onClick={()=> navigate('/signup')}>SignUp</p>
      </div>
    </div>
  );
};

export default Header;

