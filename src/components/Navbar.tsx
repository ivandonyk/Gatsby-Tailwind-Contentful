import React from "react";
import logo from "../images/logo.svg"; // todo: fix this,it works but typescript doesn't like it

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav className="py-10 px-4 lg:px-8">
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="pr-3 items-center">
            <img src={logo} />
          </div>
        </div>

        <div className="flex space-x-8 lg:space-x-14 items-center">
          <NavItem text="Product" />
          <NavItem text="Cases" />
          <NavItem text="Costumers" />
          <NavItem text="Company" />
          <NavItem text="Tools" />
        </div>
        <div className="flex items-center">
          <div className="text-ar-orange justify-self-end">Sing in</div>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ text }) => {
  return <div className="text-white">{text}</div>;
};

export default Navbar;
