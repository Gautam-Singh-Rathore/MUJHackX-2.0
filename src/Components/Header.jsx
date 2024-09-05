import React , {useContext} from "react";
import header from "../../public/assets/header.png";
import muj from "../../public/assets/muj.png";
import { UserContext } from "../Context/UserProvider";
import footer from "../../public/assets/footer.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn, currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("docId");
    setIsLoggedIn(false);
    navigate("/");
    toast.success("User Logged Out");
  };

  return (
    <div className="h-24 w-full bg-transparent bg-neutral-950 shadow-lg z-30 flex justify-around py-3">
      {/* Div 1  */}
      <div className="flex gap-7 mx-7 ">
        {/* Logo */}
        <div className="h-5/6 bg-white my-auto rounded-full px-1 pr-3">
          <img
            src={header}
            alt=""
            className="h-full pl-3 cursor-pointer"
            onClick={() => navigate("./")}
          />
        </div>
        {/* Hackathon Logo  */}
        <a href="https://www.mujhackx.com/" className="h-5/6 my-auto">
          <img
            src={muj}
            alt=""
            className="h-full p-2 bg-white rounded-full cursor-pointer "
          />
        </a>
      </div>
      {/* Div 2  */}
      <div className="h-5/6 px-14 mx-7 bg-white my-auto rounded-full">
        <div className="h-full flex items-center text-xl gap-12 ">
          <p className="font-bold cursor-pointer" onClick={() => navigate("/")}>
            Home
          </p>
          <p className="font-bold cursor-pointer">
            <a href="/#features" className="font-bold cursor-pointer">
              Features
            </a>
          </p>
          <p
            className="font-bold cursor-pointer"
            onClick={() => navigate("/plans")}
          >
            Future Plans
          </p>
          <p
            className="font-bold cursor-pointer"
            onClick={() => navigate("/team")}
          >
            Our Team
          </p>
        </div>
      </div>
      {/* Div 3  */}
      <div className="h-full flex  mx-7">
        <div className="text-black flex gap-10 h-full ">
          {isLoggedIn ? (
            <p
              onClick={() => handleLogout()}
              className="cursor-pointer bg-[#5CC2BC] hover:bg-[#66d9d1] px-7 py-3 my-auto text-xl font-[700] rounded-full text-white "
            >
              Logout
            </p>
          ) : (
            <p
              onClick={() => navigate("/login")}
              className="cursor-pointer bg-[#5CC2BC] hover:bg-[#66d9d1] px-7 py-3 my-auto text-xl font-[700] rounded-full text-white "
            >
              Login
            </p>
          )}
          {!isLoggedIn && (
            <p
              onClick={() => navigate("/register")}
              className="cursor-pointer bg-[#5CC2BC] hover:bg-[#66d9d1] px-7 py-3 my-auto text-xl font-[700] rounded-full text-white "
            >
              SignUp
            </p>
          )}
        </div>
      </div>

      {/* Nav Links  */}
    </div>
  );
};

export default Header;
